import { getObstacleEvents } from './computer-vision';

interface Events {
  [event:string]:boolean;
}

interface AutonomousCar {
  isRunning?:boolean,
  respond:(events:Events)=>void
};
interface Control {
  execute:(command:string)=>void;
};
interface Steering extends Control{
  turn: (direction:string)=>void;
};
interface AutonomousCarProps {
  isRunning: boolean,
  steeringControl:Steering,
};



class Car implements AutonomousCar {
  isRunning;steeringControl;
  constructor(props:AutonomousCarProps){
    this.isRunning  = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
  respond(events:Events):void{
    if(!this.isRunning){
      console.log("The car is off");
    }
    Object.keys(events).forEach(eventKey=>{
      if(!eventKey){
        return eventKey;
      };
      if(eventKey==="ObstacleLeft"){
        this.steeringControl.turn("right");
      };
      if(eventKey==="ObstacleRight"){
        this.steeringControl.turn("left");
      }
    });
  }
}



class SteeringControl implements Steering {
  execute(command:string):void{
    console.log(`Executing ${command}.`);
  }
  turn(direction:string):void{
    this.execute(`Turn ${direction}`);
  }
};
let steering = new SteeringControl();
console.log(steering.turn("right"));


let autonomousCar = new Car({
  isRunning:true,
  steeringControl:steering,
});
console.log(autonomousCar.isRunning);
autonomousCar.respond(getObstacleEvents());
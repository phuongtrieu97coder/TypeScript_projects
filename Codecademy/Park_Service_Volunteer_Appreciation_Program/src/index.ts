import {
    RaccoonMeadowsVolunteers,
    RaccoonMeadowsActivity,
    raccoonMeadowsVolunteers,
  } from './raccoon-meadows-log';
  
  import {
    WolfPointVolunteers,
    WolfPointActivity,
    wolfPointVolunteers,
  } from './wolf-point-log';
  
  type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;
  
  type Volunteers = {
    id: number;
    name: string;
    activities: CombinedActivity[];
  };
  
  function combineVolunteers(
    volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
  ) {
    return volunteers.map(volunteer=>{
      let id=0;
      if(typeof volunteer.id==="number"){
        id=volunteer.id;
      };
      if(typeof volunteer.id==="string"){
          id = parseInt(volunteer.id,10);
      };
      return {
        id:id,
        name:volunteer.name,
        activities:volunteer.activities
      }
    });
  }
  console.log(combineVolunteers(raccoonMeadowsVolunteers));
  
  function isVerified(verified: string | boolean){
    if(typeof verified==="string"){
      if(verified==='Yes'){
        return true;
      }
      return false;
    }
    return verified;
  };
  
  function getHours(activity: CombinedActivity){
    if('hours' in activity){
      return activity.hours;
    }else{
      return activity.time;
    }
  }
  
  function calculateHours(volunteers: Volunteers[]) {
    return volunteers.map((volunteer) => {
      let hours = 0;
  
      volunteer.activities.forEach((activity) => {
        if(isVerified(activity.verified)){
         // hours+=activity.hours;
          hours+=getHours(activity);
        }
      });
  
      return {
        id: volunteer.id,
        name: volunteer.name,
        hours: hours,
      };
    });
  };
  
  function byHours(a,b){
    return b.hours - a.hours;
  }
  
  const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
  );
  
  let result = calculateHours(combinedVolunteers);
  console.log(result);
  console.log("\n");
  console.log(result.sort(byHours));
  
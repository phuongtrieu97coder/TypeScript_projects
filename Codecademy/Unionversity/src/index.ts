import courses from "./courses";
import studyGroups from "./studyGroups";


type Course= {
  id: number,
  studyGroupId: number,
  title: string,
  keywords: string[],
  eventType:string
};

type StudyGroup = {
  id: number,
  courseId: number,
  title: string,
  keywords: string[],
  eventType:string
};

type SearchEventOptions = {
  query: number | string,
  eventType: 'courses' | 'groups'
};

function searchEvents(options:SearchEventOptions) {
  let events: any;
  if(options.eventType == 'courses'){
    events = courses;
  }else{
    events = studyGroups;
  }
  return events.filter(event=>{
    if(typeof options.query === 'number'){
      return event.id === options.query;
    }
    if(typeof options.query === 'string'){
      return event.keywords.includes(options.query);
    }
  });
};

let searchResults: (Course | StudyGroup)[] = searchEvents({
  query:'art',
  eventType:'courses'
}); 
console.log(searchResults);



let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup){
  enrolledEvents.push(event);
}

enroll(searchResults[0]);
console.log(enrolledEvents);
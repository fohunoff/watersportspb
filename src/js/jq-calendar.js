/**
* 
* https://fullcalendar.io
*
*/


$(document).ready(function() {

  // Календарь на отдельной странице
  $('#calendar').fullCalendar({
    locale: 'ru', 
    navLinks: true, // can click day/week names to navigate views
    eventLimit: true, // allow "more" link when too many events
    
    loading: function( isLoading, view ) {
      if(isLoading) {// isLoading gives boolean value
        //show your loader here 
      } else {
        //hide your loader here
      }
    },
    
    header: {
      left: 'prev, next, today',
      center: 'title',
      right: 'month, basicWeek, basicDay'
    },
    
    eventSources: [
      // your event source
      {
        url: './api/calendar.php',
        type: 'GET',
        error: function() {
          console.log('there was an error while fetching events!');
        },
        color: '#0284f6',   // a non-ajax option
        textColor: 'white'  // a non-ajax option
      }
    ]
  });

  // Календарь на главной странице
  $('#calendar__main-page').fullCalendar({
    locale: 'ru', 
    navLinks: true, // can click day/week names to navigate views
    eventLimit: true, // allow "more" link when too many events

    header: {
      left: '',
      center: 'title, prev, next',
      right: ''
    },

    contentHeight: 450,
    
    eventSources: [
      // your event source
      {
        url: './api/calendar.php',
        type: 'GET',
        error: function() {
          console.log('there was an error while fetching events!');
        },
        color: '#0284f6',   // a non-ajax option
        textColor: 'white'  // a non-ajax option
      }
    ]
  });
  
});
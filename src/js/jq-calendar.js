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
    showNonCurrentDates: false,
    columnHeader: true,
    aspectRatio: 5,
    
    // navLinks: true, // can click day/week names to navigate views
    eventLimit: true, // allow "more" link when too many events

    header: {
      left: '',
      center: 'title, prev, next',
      right: ''
    },

    contentHeight: 200,
    
    // eventSources: [
    //   // your event source
    //   {
    //     url: './api/calendar.php',
    //     type: 'GET',
    //     success: function() {
    //       var myClass = document.querySelectorAll('.set-round-date');
    //       console.log(myClass);
    //     },
    //     error: function() {
    //       console.log('there was an error while fetching events!');
    //     },
    //     color: '#0284f6',   // a non-ajax option
    //     textColor: 'white',  // a non-ajax option
    //     className: 'set-round-date',
    //   }
    // ]

    events: function(start, end, timezone, callback) {
      $.ajax({
        url: './api/calendar.php',
        dataType: 'json',

        success: function(response) {
          var events = [];
          console.log(response);

          $(response).each(function() {
            events.push({
              title: $(this).attr('title'),
              start: $(this).attr('start'), // will be parsed
            });
            setRound($(this).attr('start'));
          });
          callback(events);

        }
      });
    }
  });
  
});


// Кастомный коллбэк
var setRound = function (dataDate) {
  try {
    var dayLink = $('[data-date=' + dataDate + ']')[1].children[0];
    // console.log('[data-date=' + dataDate + ']');
    dayLink.classList.add('day__mark-up');
  } catch (error) {
    console.log(error.message);
    console.log('На эту дату нет событий');
  }
  
}

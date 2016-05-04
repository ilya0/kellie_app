

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
    dayClick: function() {
        var text = prompt("Add your event", " ");
        console.log(text);
        // $.ajax({
        //     type: 'POST',
        //     url: '/calendar',
        //     data: {title: text},
        //     success: function(message) {
        //         console.log(message);
        //     }
        // });
        $.ajax({
           type: "POST",
           url: "/calendar",
           data: {title: text},
           success: function(events)
             {
                     $('#calendar').fullCalendar('removeEvents');
                     $('#calendar').fullCalendar('addEventSource', events);
                     $('#calendar').fullCalendar('rerenderEvents' );
              }
            });
    }
  });



// $('#buttonHi').on('click', function() {
//     console.log('You did it!')
//     $('#calendar').fullCalendar({
//     events: {
//             type: 'GET',
//             url: '/calendar',
//             error: function() {
//                 alert('error!');
//             },
//             success: function(reply) {
//                 console.log(reply.first);
//                 callback(reply.first)
//             },
//             color: 'yellow',
//             textColor: 'black'
//         },
//     eventClick: function(event) {
//         if (event.url) {
//             window.open(event.url);
//             return false;
//         }
//     }
// })
// });

$('#calendar').fullCalendar( 'addEventSource', source );

});

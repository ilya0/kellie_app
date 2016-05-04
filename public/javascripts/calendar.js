

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
    dayClick: function() {
        var text = prompt("Add your event", " ");
        console.log(text)
        $.ajax({
            type: 'POST',
            url: '/calendar',
            data: {title: text},
            success: function(message) {
                console.log(message);
            }
        });
    }
  });

$('#calendar').fullCalendar({
    events: [
        {
            title: 'My Event',
            start: '2010-01-01',
            url: 'http://google.com/'
        }
        // other events here
    ],
    eventClick: function(event) {
        if (event.url) {
            window.open(event.url);
            return false;
        }
    }
});

$('#calendar').fullCalendar( 'addEventSource', source );

});


$(document).ready(function() {

    $('#calendar').fullCalendar({

      events: {
        url: "/calendar/feed.json",
        type: "GET",
        color: "blue"
      },

      dayClick: function() {
        var text = prompt("Add your event", " ");
        var data = $(this).data();
        $.ajax({
          type: "POST",
          url: "/calendar",
          data: {title: text, date: data.date}
        }).done(function(response){
          console.log(response);
        });
      }
    });

});

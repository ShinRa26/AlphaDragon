

/* SAVE BAND TO LIKES - AJAX */
      $(document).ready(function(){
			$('.likethis').click(function(){
                var eventid =this.value;
                  $.get('/app/interested_band/', {event_id: eventid}, function(data){
                    var myInnerHtml = document.getElementById("savemessage").innerHTML;
                    var concat = data + " has been added to your favourites!!!";
				            document.getElementById("savemessage").innerHTML = concat;
                  });
    	});

/* BUY TICKETS - AJAX */
			$(document).ready(function(){
              $('.buyticket').click(function(){
                var eventid =this.value;
                var page = $(this).attr('data-url');
                $('.buyit').load(page);
				          return false
                });
              });
			});
$(document).ready(function(){
 $("form").submit(function() {


   var form = $(this);
        // form.find('button').addClass('loading');
        var msg = form.serialize();

        var formData = new FormData($(this)[0]);
        var emailaprove = 0;
        function emailtest() {
          var ouremail = form.find('input.email-mask');
          if (ouremail.length) {
            if(ouremail.val() != '') {
              var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
              if(pattern.test(ouremail.val())){
                emailaprove = 1;
              } else {
                ouremail.closest('.s-webinar-item').addClass('error');
                emailaprove = 0;
              }
            } else {
              ouremail.closest('.s-webinar-item').addClass('error');
              emailaprove = 0;
            }
          }else{
            emailaprove = 1;
          }; 
        };
        emailtest();
        if($('input[type="checkbox"]').is(':checked')){
         emailaprove1 = 1;
         $('.s-webinar-item .b-checkbox').removeClass('error');
       }
       else{
         emailaprove1 = 0;
         $('.s-webinar-item .b-checkbox').addClass('error');
       } 
        if($('input[type="radio"]').is(':checked')){
         emailaprove2 = 1;
         $('.s-webinar-time .b-checkbox1').removeClass('error');
       }
       else{
         emailaprove2 = 0;
         $('.s-webinar-time .b-checkbox1').addClass('error');
       }
       var faults = form.find('input').filter(function() {
        return $(this).data('required') && $(this).val() === "";
        }).closest('.s-webinar-item').addClass('error'); // выделяем это поле красным

       if((faults.length) || (emailaprove<1) || (emailaprove1<1) || (emailaprove2<1) ) {
            // form.find('button').removeClass('loading');
            return false;
          }
          else
          {
            $.ajax({
              type: "POST",
              url: "mail.php",
              data: formData,
              async: false,
              cache: false,
              contentType: false,
              processData: false,
              success: function(data) {
                // form.find('button').removeClass('loading');
                form[0].reset();
                window.location.replace("thanks.html");
                // yaCounterXXXXXXXX.reachGoal('order');
                // ga('send', 'event', 'form', 'order');
              },
              error:  function(xhr, str){
                alert("Возникла ошибка!");
              }
            });
          }
          return false;
        });
});

$('input, textarea').click(function(){

 $('.s-webinar-item').removeClass('error');
 $('.b-checkbox').removeClass('error');
 $('.b-checkbox1').removeClass('error');

});


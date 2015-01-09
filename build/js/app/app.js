$('#icIcon').click(
  function (){
  $('.icinfo').slideToggle(300,
    function (){
      if ($(this).is(':visible')) {
        $('#icText').text('關閉');
        $('#icText2').hide();                
      } else {
        $('#icText').text('免責說明');
        $('#icText2').show(10, function(){
          $('#icText2').text('（重要資訊請詳細閱讀）');
        });                
      }      
    });
   // $("body").animate({
   //    scrollBottom: 100
   //  }, 500);
});

var menuBarFlag = true;
$('#menu').click(
  function (){
    if(menuBarFlag == true){
      $(this).fadeOut('fast',function (){
        $('.menubar').animate({right:"0px"}, function () {
           $('#menu').fadeIn('fast');
        });
        $('#menu').css('background','url(images/cross.png)');
        $('#menu').css('background-size','cover'); 
        $('#menuTitle').text('關閉');
        $('#menuTitle').css('color','#000');
        $(this).stop(true); 
      });
      menuBarFlag= false;
      }else{
      $(this).fadeOut('fast',function (){
        $('.menubar').animate({right:"-310px"}, function () {
           $('#menu').fadeIn('fast'); 
        });
      $('#menu').css('background','url(images/menu_icon.png)');
      $('#menu').css('background-size','cover');
      $('#menuTitle').text('選單');
      $('#menuTitle').css('color','#fff');
      $(this).stop(true); 
      });
      menuBarFlag = true;
    }
});
// $(window).resize(function() {
//   var x = $(window).width();
//   // console.log(x);
//   $('#menuTitle').hide('fast');
//   if ( x > 1024) {
//     $('#menuTitle').show('fast');
//   }else{
//     $('#menuTitle').hide('fast');
//   }

// });
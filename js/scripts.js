$(window).on('resize', function(){
      var item = $(this);
      if (item.width() > 992) { 

      $('#menu').addClass('computer only').removeClass('mobile only, tablet only');

      }
    else if (item.width() < 768)
    {
        $('#menu').addClass('mobile only').removeClass('computer only, tablet only');
    }
      else 
    {
        $('#menu').addClass('tablet only').removeClass('computer only, mobile only');
    }
});


// Sushi Menu item #3
$('.third').hover(
    function(){
      $(this).attr('src','img/sushiPlateRed.jpg')
    },
    function(){
      $(this).attr('src','img/Kanki By The Sea.jpg')
    }
); 

// Sushi Menu item #4
$('.fourth').hover(
    function(){
      $(this).attr('src','img/sushiPlateGreen.jpg')
    },
    function(){
      $(this).attr('src','img/Banzai Roll.jpg')
    }
); 

// Sushi Menu item #5
$('.fifth').hover(
    function(){
      $(this).attr('src','img/sushiPlateYellow.jpg')
    },
    function(){
      $(this).attr('src','img/Scallop Banzai Roll.png')
    }
); 

// Sushi Menu item #6
$('.sixth').hover(
    function(){
      $(this).attr('src','img/sushiPlateBlue.jpg')
    },
    function(){
      $(this).attr('src','img/Tuna Rio.png')
    }
); 

// Sushi Menu item #7
$('.seventh').hover(
    function(){
      $(this).attr('src','img/sushiPlateRed.jpg')
    },
    function(){
      $(this).attr('src','img/Sheila Maki.png')
    }
); 

// Sushi Menu item #8
$('.eighth').hover(
    function(){
      $(this).attr('src','img/sushiPlateGreen.jpg')
    },
    function(){
      $(this).attr('src','img/Volcano Roll.png')
    }
); 
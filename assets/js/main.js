
  $(document).ready(function() {
    $('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




  $('.responsive2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});  


  
$.fn.ulSelect = function(){
  var ul = $(this);

  if (!ul.hasClass('zg-ul-select')) {
    ul.addClass('zg-ul-select');
  }
  // SVG arrow
  var arrow = '<svg id="ul-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32"><line stroke-width="1" x1="" y1="" x2="" y2="" stroke="#449FDB" opacity=""/><path d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" fill="#111"/></svg>';
  $('li:first-of-type', this).addClass('active').append(arrow);
  $(this).on('click', 'li', function(event){
    
    // Remove div#selected if it exists
    if ($('#selected--zg-ul-select').length) {
      $('#selected--zg-ul-select').remove();
    }
    ul.before('<div id="selected--zg-ul-select">');
    var selected = $('#selected--zg-ul-select');
    $('li #ul-arrow', ul).remove();
    ul.toggleClass('active');
    // Remove active class from any <li> that has it...
    ul.children().removeClass('active');
    // And add the class to the <li> that gets clicked
    $(this).toggleClass('active');

    var selectedText = $(this).text();
    if (ul.hasClass('active')) {
      selected.text(selectedText).addClass('active').append(arrow);
    }
    else {
      selected.text('').removeClass('active'); 
      $('li.active', ul).append(arrow);
    }
    });
    
    // Close the faux select menu when clicking outside it 
    $(document).on('click', function(event){
  if($('ul.zg-ul-select').length) {
     if(!$('ul.zg-ul-select').has(event.target).length == 0) {
      return;
    }
    else {
      $('ul.zg-ul-select').removeClass('active');
      $('#selected--zg-ul-select').removeClass('active').text('');
      $('#ul-arrow').remove();
      $('ul.zg-ul-select li.active').append(arrow);
    } 
    }
    });
  }

// Run ===============
if(parseInt($(window).width()) <= 640){
  $('#be-select').ulSelect();
}   
  
  });
  
$(window).resize(function(){
  if(parseInt($(window).width()) <= 640){
    $('#be-select').ulSelect();
  }

}); 



jQuery(document).ready(function($) {
  equalheight = function(a) {
    var e, b = 0,
        c = 0,
        d = new Array;
    $(a).each(function() {
        if (e = $(this), $(e).height("auto"), topPostion = e.position().top, c != topPostion) {
            for (currentDiv = 0; currentDiv < d.length; currentDiv++) d[currentDiv].height(b);
            d.length = 0, c = topPostion, b = e.height(), d.push(e)
        } else d.push(e), b = b < e.height() ? e.height() : b;
        for (currentDiv = 0; currentDiv < d.length; currentDiv++) d[currentDiv].height(b)
    })
}, $(window).on("load resize ready", function() {
    equalheight(".book-card")
}); 


  $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }

});


$(document).ready(function () { 
    
    $('#nav').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();
        
    $('#nav').on('click', 'li > a', function() {
        
      if (!$(this).hasClass('active')) {

        $('#nav .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();
          
        $('#nav').find('.active').removeClass('active');
        $(this).addClass('active');
       } 
       else {
        $('#nav .is-open').removeClass('is-open').hide();
        $(this).removeClass('active');
      }
   });
});
  

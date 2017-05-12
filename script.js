$(document).ready(function(){
//   $(".twitch").hide()
//   $(".skillz").hide()
//   $("#projects").hide()
  $('.jobes').hide()
  $(".about").click(function(){
    $("#projects").hide()
    $(".skillz").hide()
    $("#about-show").show(1000)
  })
  $(".skills").click(function(){
    $("#about-show").hide()
    $("#projects").hide()
    $(".skillz").show(1000)
  })
  $(".projects").click(function(){
    $(".skillz").hide()
    $("#about-show").hide()
    $("#projects").show(1000)
  })
  $(".findjobs").click(function(){
    $("#about-show").hide()
    $("#projects").hide()
    $(".skillz").hide()
    $(".jobes").show(1000)
  })
  $("#face h1, h3").click(function(){
    $('html, body').animate({
          scrollTop: $("#content").offset().top
        }, 1000);
  })
  $(window).scroll(function(){
    $('#face').css('letter-spacing', $(this).scrollTop()/30+'px')
    $('#myFace').css('transform','perspective(600px) rotateY('+($(this).scrollTop()+830)+'deg)')
    $('.contact img').css('transform','rotate('+(-$(this).scrollTop())+'deg)')
    $('#face').css('background-position-y', $(this).scrollTop()/-4+'px')
    if (Math.floor($('#content').position().top) <= $(window).scrollTop()) {
      $('#myFace').css({
        transform :'perspective(600px) rotateY(0deg)'
      })
    }
    // console.log('window: '+$(this).scrollTop());
    // console.log('content: '+$('#content').position().top);
  })
  $('#face').mousemove(function(evt){
    $('.navg8 div').css({
    "margin-left": evt.clientX/30+"px",
    "margin-right": evt.clientX/30+"px",
    "margin-top": evt.clientY/-30+"px",
    "margin-bottom": evt.clientY/30+"px"
    })
    $('#face').css({'background-position-x': evt.clientX/-50+"px"})
  })

  $('.skillz img').hover(function(){
    $(this).animate({height: '2.5em'}, 'slow')
  }, function(){
    $(this).animate({height: '2em'},'slow')
  })
})

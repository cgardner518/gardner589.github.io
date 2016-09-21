$(document).ready(function(){

  $("#projects").slick({
      dots: true,
      speed: 500,
      infinite: true
    })
  $(window).scroll(function(){
    $('#face').css('letter-spacing', $(this).scrollTop()/30+'px')
    $('#myFace').css('transform','rotate('+$(this).scrollTop()+'deg)')
    $('.contact img').css('transform','rotate('+(-$(this).scrollTop())+'deg)')
  })
  $('#face').mousemove(function(evt){
    $('.navg8 div').css({
    "margin-left": evt.clientX/30+"px",
    "margin-right": evt.clientX/30+"px",
    "margin-top": evt.clientY/-30+"px",
    "margin-bottom": evt.clientY/30+"px"
    })
  })
  var skillsBlob = ['Javascript','jQuery','Ruby on Rails','AngularJS','React.js','Node.js','Express.js','PostgresSQL','AJAX','JSON','Git','Github','HTML5','CSS3','MongoDB','Bootstrap','Activerecord','mongoose ODM', 'Jasmine', 'Rspec', 'Selenium']
    x=0;
    addr = setInterval(function(){
        $('#skills p').append(' * '+skillsBlob[x])
        x++
        if(x == skillsBlob.length){
          clearInterval(addr)
        }
    },150)
})

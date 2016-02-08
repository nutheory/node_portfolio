$(() => {
  $('header').parallax({
    imageSrc: '../images/resume_bg.jpg',
    positionY: '-80px'
  })

  $('#contact').parallax({
    imageSrc: '../images/resume_bg.jpg',
    positionY: '-700px'
  })

  var tools_pos = $('#tools').position()

  // $(document).scroll((e) => {
  //   console.log("hgj", e);
  //   if(!$("#tools").is(":hidden")){
  //     if($(this).scrollTop() > (tools_pos.top - 40)){
  //       console.log("uygjg");
  //       $('#tools').animate({height: "20px"}, 500)
  //     }
  //   }
    // a = $(e.target).offset() + $(e.target).height();
    // b = $('#tools').scrollTop() + $('header').height();
    // if (a < b) $().fadeTo(500,1);
  // })
})

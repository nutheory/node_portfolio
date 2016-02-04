$(() => {
    $('header').parallax({
      imageSrc: '../images/resume_bg.jpg',
      positionY: '-80px'
    })

    $('#contact').parallax({
      imageSrc: '../images/resume_bg.jpg',
      positionY: '-700px'
    })

    $(document).scroll((e) => {
      // if( $(this).scrollTop() > 300 ) {
      //     mn.addClass(mns);
      //   } else {
      //     mn.removeClass(mns);
      //   }
    })
})

//나영이 코드
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 15000) {
        $('.s_h_m1').css('opacity', '1');
    } else {
        $('.s_h_m1').css('opacity', '0');
    }

    if (scroll > 15570) {
        opacity = (scroll - 15570) / 200;
        opacity = Math.min(opacity, 1);
        $('.s_h_main ul li:nth-of-type(2) img').css('opacity', opacity);
    } else {
        $('.s_h_main ul li:nth-of-type(2) img').css('opacity', '0');
    }

    if (scroll > 15717) {
        opacity = (scroll - 15717) / 200;
        opacity = Math.min(opacity, 1);
        $('.s_h_main ul li:nth-of-type(1) img').css('opacity', opacity);
    } else {
        $('.s_h_main ul li:nth-of-type(1) img').css('opacity', '0');
    }

    if (scroll > 15717) {
        opacity = (scroll - 15717) / 200;
        opacity = Math.min(opacity, 1);
        $('.s_h_main ul li:nth-of-type(3) img').css('opacity', opacity);
    } else {
        $('.s_h_main ul li:nth-of-type(3) img').css('opacity', '0');
    }
});


$(document).ready(function() {
    var images = $(".image");
    var currentIndex = 0;
  
    function toggleImages() {
      images.eq(currentIndex).removeClass("active");
      currentIndex = (currentIndex + 1) % images.length;
      images.eq(currentIndex).addClass("active");
    }
  
    setInterval(toggleImages, 4000); // 4초마다 이미지를 토글
  });
//나영이 코드 끝
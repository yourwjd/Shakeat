

// 섹션 s_home 스크롤에따라 텍스트나 이미지 보이게
// JavaScript
window.addEventListener('scroll', checkVisibility);

function checkVisibility() {
  const elements = ['#s_home .s_h_text h1', '#s_home .s_h_text h2', '#s_home .s_h_text p', '.s_h_main2 .shm1', '.s_h_main2 #dotimg'];

  elements.forEach(selector => {
    const element = document.querySelector(selector);
    const elementRect = element.getBoundingClientRect();

    if(elementRect.top <= window.innerHeight && elementRect.bottom >= 0) {
      element.classList.add('slide-in');
    } else {
      element.classList.remove('slide-in');
    }
  });

  let imgElements = Array.from(document.querySelectorAll('.s_h_main ul li img'));
  
  imgElements = ['.s_h_main ul li:nth-of-type(2) img', '.s_h_main ul li:nth-of-type(1) img', '.s_h_main ul li:nth-of-type(3) img'];

  imgElements.forEach((selector, index) => {
    const imgElement = document.querySelector(selector);
    const imgRect = imgElement.getBoundingClientRect();

    if(imgRect.top <= window.innerHeight && imgRect.bottom >= 0) {
      setTimeout(() => {
        imgElement.classList.add('slide-in');
      }, index * 550); // 각 이미지가 0.5초 간격으로 보이게 함
    } else {
      imgElement.classList.remove('slide-in');
    }
  });

  const additionalElements = [
    { base: '.s_h_main_l', elements: ['.shm2', '#dotimg2'] },
    { base: '.s_h_main_l3', elements: ['.shm3', '#dotimg3'] },
    { base: '.s_h_main_l4', elements: ['.shm4', '#dotimg4'] },
  ];

  additionalElements.forEach(({ base, elements }) => {
    const baseElement = document.querySelector(base);
    const baseElementRect = baseElement.getBoundingClientRect();

    if(baseElementRect.top <= window.innerHeight && baseElementRect.bottom >= 0) {
      elements.forEach(selector => {
        const element = document.querySelector(selector);
        element.classList.add('slide-in');
      });
    } else {
      elements.forEach(selector => {
        const element = document.querySelector(selector);
        element.classList.remove('slide-in');
      });
    }
  });
}







// 섹션 s_profile 폰 이미지 4초마다 바뀌도록

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







// 섹션 color article div에 도달하면 div들 차례대로 나오도록

const divs = document.querySelectorAll('#color article div');

window.addEventListener('scroll', () => {
  divs.forEach((div) => {
    const rect = div.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      div.style.animationPlayState = 'running';
    } else {
      div.style.animationPlayState = 'paused';
      div.style.animation = 'none'; // 애니메이션을 초기 상태로 돌립니다.
      setTimeout(() => div.style.animation = '', 0); // 다음 렌더링 때 애니메이션을 다시 설정합니다.
    }
  });
});











// 섹션 s_propmise 스크롤에 따라 이미지와 텍스트 변경

// $(document).ready(function () {
//   var section = $('#s_promise');
//   var images = [
    
//     './img/pro_1.png',
//     './img/pro_2.png',
//     './img/pro_3.png',
//     './img/pro_4.png',
//     './img/pro_5.png',
//     './img/pro_6.png'
//   ];
//   var textData = [
//     {
//       h1: '상세한 <br> 만남 유형 설정',
//       p: '만나는 상황의 다양성을 주어 AI가 분석할 때 <br> 더욱 알맞은 음식을 추천해줘요.'
//     },
//     {
//       h1: '시간과 날짜에 맞는 <br> 최적의 음식 추천',
//       p: '식당의 오픈/클로즈 시간이나, 그 날에 맞는 <br> 음식을 AI가 추천해줘요.'
//     }
//   ];
//   var index = 0;
//   var isScrollStopped = true;

  // 페이지 스크롤 이벤트를 감지
  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop();
    var sectionPos = section.offset().top;
    var sectionBottomPos = sectionPos + section.height();

    // 섹션에 도달하면 스크롤 멈춤
    if (scrollPos >= sectionPos && scrollPos < sectionBottomPos && isScrollStopped) {
      $('html, body').scrollTop(sectionPos + 150);
    } else if (scrollPos < sectionPos || scrollPos >= sectionBottomPos) {
      // 섹션을 벗어나면 스크롤이 다시 움직일 수 있도록 설정
      isScrollStopped = true;
      index = 0;
      updateContent(index);
    }
  });

  // 마우스 휠 이벤트를 감지
  $(window).on('wheel', function (e) {
    if (isScrollStopped) {
      if (e.originalEvent.deltaY > 0 && index < images.length - 1) { // 휠을 아래로 돌린 경우
        index++;
        updateContent(index);
      } else if (e.originalEvent.deltaY < 0 && index > 0) { // 휠을 위로 돌린 경우
        index--;
        updateContent(index);
      } else if (e.originalEvent.deltaY > 0 && index >= images.length - 1) {
        isScrollStopped = false; // 마지막 이미지가 보여진 후에는 스크롤이 다시 움직일 수 있도록 설정
      } else if (e.originalEvent.deltaY < 0) {
        isScrollStopped = false; // 휠을 위로 돌릴 때는 스크롤이 멈추지 않도록 설정
      }
    }
  });

  function updateContent(index) {
    var currentImg = $('.s_pro_left img');
    var newImg = $('<img>').attr('src', images[index]).hide();

    currentImg.animate({ opacity: 0, marginTop: '-80px' }, 500, function () {
      currentImg.remove();
      $('.s_pro_left').append(newImg);
      newImg.css({ opacity: 0, marginTop: '80px' }).show().animate({ opacity: 1, marginTop: '0' }, 500);
    });

    if (index === 2) {  // 세 번째 이미지로 바뀔 때만 텍스트에 모션을 추가
      var currentH1 = $('.s_pro_right h1');
      var currentP = $('.s_pro_right p');
      var newH1 = $('<h1>').html(textData[index - 1].h1).hide();
      var newP = $('<p>').html(textData[index - 1].p).hide();

      currentH1.animate({ opacity: 0 }, 500, function () {
        currentH1.remove();
        $('.s_pro_right').append(newH1);
        newH1.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500);
      });

      currentP.animate({ opacity: 0 }, 500, function () {
        currentP.remove();
        $('.s_pro_right').append(newP);
        newP.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500);
      });
    };
  };














// 마우스 커스텀 

var cursor = document.querySelector("#myMouse");
var cursor2 = document.querySelector("#myMouse2");

function updateCursor(e) {
//   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px";
}

document.addEventListener("mousemove", updateCursor);

setInterval(function () {
//   updateCursor({ clientX: event.clientX, clientY: event.clientY });
}, 6);
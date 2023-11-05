

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







// 섹션 s_profile 폰 이미지 3초마다 바뀌도록

$(document).ready(function() {
    var images = $(".image");
    var currentIndex = 0;
  
    function toggleImages() {
      images.eq(currentIndex).removeClass("active");
      currentIndex = (currentIndex + 1) % images.length;
      images.eq(currentIndex).addClass("active");
    }
  
    setInterval(toggleImages, 3000); // 3초마다 이미지를 토글
  });



// 섹션 .s_h_main_l2 img 부분 이미지 왼쪽으로 슬라이드 효과

window.addEventListener('scroll', function() {
  var images = document.querySelectorAll('.s_h_main_l2 img');
  var windowHeight = window.innerHeight;

  images.forEach(function(image, index) {
      var imageDistance = image.getBoundingClientRect().top;
      var imageHeight = image.clientHeight;

      // 이미지의 중간 부분이 화면 중간에 도달했을 때 모션 시작
      if (imageDistance - windowHeight < 0 && imageDistance + imageHeight > windowHeight / 2) {
          image.classList.remove('hidden');
          setTimeout(function() {
              image.style.transform = 'translateX(0)';
              image.style.opacity = 1;
          }, index * 200); // 이미지가 나타날 때 각각 0.2초 간격으로 나타나도록 설정
      }
  });
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
      div.style.animation = 'none'; 
      setTimeout(() => div.style.animation = '', 0); 
    }
  });
});



// 섹션 .s_fr ul li 부분 텍스트효과

window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.s_fr ul li');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.style.animationPlayState = 'running';
    }
  });
});


// 섹션 .s_cal ul li 부분 텍스트효과

window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.s_cal ul li');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.style.animationPlayState = 'running';
    }
  });
});


// 섹션 .s_h_m2 부분

window.addEventListener('scroll', function() {
  var image = document.querySelector('.s_h_m2');
  var ulImages = document.querySelectorAll('.s_h_main ul li img');
  var windowHeight = window.innerHeight;

  // ulImages 중 가장 마지막 이미지를 대상으로 활용
  var lastImage = ulImages[ulImages.length - 1];
  var lastImageDistance = lastImage.getBoundingClientRect().top;

  if (lastImageDistance - windowHeight < 0) {
    // 이미지가 화면 안으로 들어오면 2초 뒤에 나타나도록 설정
    setTimeout(function() {
      image.style.transform = 'translateY(0)';
      image.style.opacity = 1;
    }, 900); //0.9초 후에 모션 시작
  }
});


// 섹션 .s_middle_t p에 나타나는 텍스트 효과

window.addEventListener('scroll', function() {
  var paragraph = document.querySelector('.s_middle_t .scroll-animation');
  var windowHeight = window.innerHeight;
  var paragraphDistance = paragraph.getBoundingClientRect().top;

  if (paragraphDistance - windowHeight < 0) {
    setTimeout(function() {
      paragraph.style.opacity = 1;
    }, 1500); // 1.5초 후에 모션 시작
  }
});
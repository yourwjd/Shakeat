//내비게이션 바 이동
const headerMenu = document.querySelectorAll("#header a");

var logo = document.querySelector("#main");
const video = document.querySelector("#video");
const planning = document.querySelector("#bg");
const service = document.querySelector("#s4tt");
const design = document.querySelector("#logo");

headerMenu[0].onclick = function(event) {
    event.preventDefault();
    logo.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[1].onclick = function(event) {
    event.preventDefault();
    video.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[2].onclick = function(event) {
    event.preventDefault();
    planning.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[3].onclick = function(event) {
    event.preventDefault();
    service.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[4].onclick = function(event) {
    event.preventDefault();
    design.scrollIntoView({ behavior: 'smooth' });
};



//헤더 없애기
var myHeader = document.getElementById("header"); /*header 변수 할당*/
var isHeaderVisible = true; /* 헤더가 보이는지 여부를 나타내는 변수 추가 */
var previousScrollPosition = 0; /* 이전 스크롤 위치를 저장하는 변수 추가 */

window.addEventListener("scroll", function(){ /*스크롤 시*/
    var currentScrollPosition = window.scrollY; /* 현재 스크롤 위치를 저장 */

    if(currentScrollPosition > previousScrollPosition && currentScrollPosition > 1100 && isHeaderVisible){ /*스크롤 y값이 1100이 넘으면*/
        myHeader.style.top = -150 + "px"; /*헤더 css의 top위치를 -100px 한다*/
        isHeaderVisible = false;
    }
    else if ((currentScrollPosition < previousScrollPosition || currentScrollPosition <= 200) && !isHeaderVisible){ /*200을 넘지 않을 시*/
        myHeader.style.top = 0; /*헤더 css의 top위치를 0px 한다*/
        isHeaderVisible = true;
    }
    // else if (window.pageYOffset < 100 && isHeaderVisible){ /*200을 넘지 않을 시*/
    //     myHeader.style.top = -150 + "px"; /*헤더 css의 top위치를 -100px 한다*/
    //     isHeaderVisible = false;
    // }

    previousScrollPosition = currentScrollPosition; /* 이전 스크롤 위치 업데이트 */
}); 

//스크롤탑 버튼
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener('scroll', function () {
    var button = document.getElementById('scroll-to-top-button');
    if (window.pageYOffset > 300) {
        button.style.display = 'block';
    }
    else {
        button.style.display = 'none';
    }
});
var button = document.querySelector("#scroll-to-top-button");
button.addEventListener("click", scrollToTop);





//user survey 가로 스크롤
var servey = document.getElementById('servey');
var serveygraph = document.getElementById('serveygraph');

servey.addEventListener('wheel', function(e) {
    var speed = 650;  // 이동 속도
    var currentLeft = parseInt(window.getComputedStyle(serveygraph).left, 10);

    // serveygraph 이동 가능 범위 내에서만 serveygraph를 이동시키고 기본 스크롤 동작 방지
    if (e.deltaY > 0 && currentLeft > -1000) {
        serveygraph.style.left = Math.max(-1000, currentLeft - speed) + 'px';
        e.preventDefault();
    } else if (e.deltaY < 0 && currentLeft < 200) {
        serveygraph.style.left = Math.min(200, currentLeft + speed) + 'px';
        e.preventDefault();
    }
    // serveygraph 이동 가능 범위를 벗어나면 기본 스크롤 동작을 수행합니다.
}, false);





//페르소나 hover시 opacity 조정

var liItems1 = document.querySelectorAll('#persona-banner li:nth-child(1)');
var liItems2 = document.querySelectorAll('#persona-banner li:nth-child(2)');
var liItems3 = document.querySelectorAll('#persona-banner li:nth-child(3)');
var ymj = document.querySelector('#ymj');
var ksj = document.querySelector('#ksj');
var kar = document.querySelector('#kar');

liItems1.forEach(function(liItem) {
    liItem.addEventListener('mouseover', function() {
        ymj.style.transition = "opacity 1s ease-in-out";
        ymj.style.opacity = 1;
    });
    liItem.addEventListener('mouseout', function() {
        ymj.style.transition = "none";
        ymj.style.opacity = 0;
    });
  });
  
  liItems2.forEach(function(liItem) {
    liItem.addEventListener('mouseover', function() {
        ksj.style.transition = "opacity 1s ease-in-out";
        ksj.style.opacity = 1;
    });
    liItem.addEventListener('mouseout', function() {
        ksj.style.transition = "none";
        ksj.style.opacity = 0;
    });
  });
  
  liItems3.forEach(function(liItem) {
    liItem.addEventListener('mouseover', function() {
        kar.style.transition = "opacity 1s ease-in-out";
        kar.style.opacity = 1;
    });
    liItem.addEventListener('mouseout', function() {
        kar.style.transition = "none";
        kar.style.opacity = 0;
    });
  });



//testresult img 위치 값 계산

var proBoxes = document.querySelectorAll('.proBox');
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;
var radius = window.innerWidth * 1500 / 1920; 
var angleStep = 360 / proBoxes.length;

proBoxes.forEach(function(proBox, i) {
  var angle = angleStep * i;
  var x = centerX + radius * Math.cos(angle * Math.PI / 180) - proBox.getBoundingClientRect().width / 2;
  var y = centerY + radius * Math.sin(angle * Math.PI / 180) - proBox.getBoundingClientRect().height / 2;
  proBox.style.transform = 'translate(' + (x - centerX) + 'px, ' + (y - centerY) + 'px)';
});

//testresult img 돌아가게
var testresult = document.getElementById('testresult');

var counter =0;
var proCount =0;

testresult.addEventListener('wheel',function(event){
    var testResult = document.querySelector('#testresult article');
    var proBox = document.querySelectorAll('.proBox');

        if (event.deltaY < 0) {
            counter += 22.5;
            proCount += 1;
            testResult.style.transform = "rotate("+counter+"deg)";
            proBox.forEach(function(box) {
            });
            if(proCount > 15){proCount = 0}

            // event.preventDefault();

        }else if (event.deltaY > 0) {	
            counter -= 22.5;
            proCount -= 1;
            testResult.style.transform = "rotate("+counter+"deg)";
            proBox.forEach(function(box) {
            });
            if(proCount < -15 ){proCount = 0}

            // event.preventDefault();
        }
}, false);
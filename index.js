//마우스 커서
let mouse = document.getElementById("out");
let mouseW = mouse.offsetWidth / 2;
let mouseH = mouse.offsetHeight / 2;
let targetX;
let targetY;

function mouseMoveout() {
    mouse.style.left = ((targetX - mouseW - mouse.offsetLeft) * 0.1 + mouse.offsetLeft) + "px";
    mouse.style.top = ((targetY - mouseH - mouse.offsetTop) * 0.1 + mouse.offsetTop) + "px";

    requestAnimationFrame(mouseMoveout);
};


let dot = document.getElementById("in");
let dotW = dot.offsetWidth / 2;
let dotH = dot.offsetHeight / 2;
let dotX;
let dotY;

function mouseMovein() {
    dot.style.left = ((dotX - dotW - dot.offsetLeft) * 1 + dot.offsetLeft) + "px";
    dot.style.top = ((dotY - dotH - dot.offsetTop) * 1 + dot.offsetTop) + "px";

    requestAnimationFrame(mouseMovein);
};

document.onmousemove = function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    dotX = e.clientX;
    dotY = e.clientY;
}
mouseMoveout();
mouseMovein();


//내비게이션 바 이동
const headerMenu = document.querySelectorAll("#header a");

var logo = document.querySelector("#main");
const video = document.querySelector("#video");
const planning = document.querySelector("#bg");
const service = document.querySelector("#s4tt");
const design = document.querySelector("#logo");

headerMenu[0].onclick = function (event) {
    event.preventDefault();
    logo.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[1].onclick = function (event) {
    event.preventDefault();
    video.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[2].onclick = function (event) {
    event.preventDefault();
    planning.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[3].onclick = function (event) {
    event.preventDefault();
    service.scrollIntoView({ behavior: 'smooth' });
};

headerMenu[4].onclick = function (event) {
    event.preventDefault();
    design.scrollIntoView({ behavior: 'smooth' });
};



//헤더 없애기
var myHeader = document.getElementById("header"); /*header 변수 할당*/
var isHeaderVisible = true; /* 헤더가 보이는지 여부를 나타내는 변수 추가 */
var previousScrollPosition = 0; /* 이전 스크롤 위치를 저장하는 변수 추가 */

window.addEventListener("scroll", function () { /*스크롤 시*/
    var currentScrollPosition = window.scrollY; /* 현재 스크롤 위치를 저장 */

    if (currentScrollPosition > previousScrollPosition && currentScrollPosition > 1100 && isHeaderVisible) { /*스크롤 y값이 1100이 넘으면*/
        myHeader.style.top = -150 + "px"; /*헤더 css의 top위치를 -100px 한다*/
        isHeaderVisible = false;
    }
    else if ((currentScrollPosition < previousScrollPosition || currentScrollPosition <= 200) && !isHeaderVisible) { /*200을 넘지 않을 시*/
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



//비디오 버튼
//소리, 멈춤, 재생 버튼 제어
const videoS = document.getElementById('myVideo');
const muteButton = document.getElementById('muteimg');
const pauseButton = document.getElementById('pauseimg');
const fullButton = document.getElementById('fullimg');

let isFullscreen = false;

muteButton.addEventListener('click', () => {
    if (videoS.muted) {
        videoS.muted = false;
        muteButton.src = './img/sound.png';
    } else {
        videoS.muted = true;
        muteButton.src = './img/mute.png';
    }
});

let isPlaying = false;

pauseButton.addEventListener('click', function () {
    if (isPlaying) {
        videoS.pause();
        isPlaying = false;
        pauseButton.src = './img/pause.png'
    } else {
        videoS.play();
        isPlaying = true;
        pauseButton.src = './img/play.png'
    }
});

fullButton.addEventListener('click', function() {
    if (!isFullscreen) { // 전체화면이 아니면 전체화면으로
        if (videoS.requestFullscreen) {
            videoS.requestFullscreen(); // 표준 메소드
        } else if (videoS.mozRequestFullScreen) { // Firefox
            videoS.mozRequestFullScreen();
        } else if (videoS.webkitRequestFullscreen) { // Chrome, Safari and Opera
            videoS.webkitRequestFullscreen();
        } else if (videoS.msRequestFullscreen) { // IE/Edge
            videoS.msRequestFullscreen();
        }
        isFullscreen = true;
    } else { // 전체화면이면 전체화면 종료
        if (document.exitFullscreen) {
            document.exitFullscreen(); // 표준 메소드
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        isFullscreen = false;
    }
});


//background  타이핑 효과
let bgtexts = document.querySelectorAll("#bg h2");
let texts = Array.from(bgtexts).map(bgtext => bgtext.innerHTML);
bgtexts.forEach(bgtext => bgtext.innerHTML = '');

let index = 0;
let line = 0;

function writeText() {
    if (line < texts.length) {
        if (index < texts[line].length) {
            if (texts[line][index] === ' ') {
                bgtexts[line].innerHTML += '&nbsp;';
            } else {
                bgtexts[line].innerHTML += texts[line][index];
            }
            index++;
        } else {
            line++;
            index = 0;
        }
    } else {
        // When we reach the end, reset line and index
        line = 0;
        index = 0;
        // Clear the text after a delay of 1 second
        clearInterval(intervalId);
        setTimeout(() => {
            bgtexts.forEach(bgtext => bgtext.innerHTML = '');
            intervalId = setInterval(writeText, 80);
        }, 1500); // 1000ms = 1s
    }
}

let intervalId = setInterval(writeText, 80);



//bg2 순차적 등장
const p_set = document.querySelector('.p-circle');

const circle1 = document.querySelector('#p1');
const circle2 = document.querySelector('#p2');
const circle3 = document.querySelector('#p3');

circle1.style.transition = 'all 0.5s ease 0s';
circle2.style.transition = 'all 0.5s ease 0.2s';
circle3.style.transition = 'all 0.5s ease 0.4s';

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const p_setPosition = p_set.getBoundingClientRect().top - scrollPosition;

    if (p_setPosition <= window.innerHeight * 1.5 && p_setPosition >= -window.innerHeight * 1.5) {
        circle1.style.transform = 'translateY(150%)';
        circle2.style.transform = 'translateY(150%)';
        circle3.style.transform = 'translateY(150%)';
    } else {
        circle1.style.transform = 'translateY(0px)';
        circle2.style.transform = 'translateY(0px)';
        circle3.style.transform = 'translateY(0px)';
    }
});



//user survey 가로 스크롤
var servey = document.getElementById('servey');
var serveygraph = document.getElementById('serveygraph');

serveygraph.addEventListener('wheel', function (e) {
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
    // serveygraph 이동 가능 범위를 벗어나면 기본 스크롤 동작
}, false);





//페르소나 hover시 opacity 조정

var liItems1 = document.querySelectorAll('#persona-banner li:nth-child(1)');
var liItems2 = document.querySelectorAll('#persona-banner li:nth-child(2)');
var liItems3 = document.querySelectorAll('#persona-banner li:nth-child(3)');
var ymj = document.querySelector('#ymj');
var ksj = document.querySelector('#ksj');
var kar = document.querySelector('#kar');

liItems1.forEach(function (liItem) {
    liItem.addEventListener('mouseover', function () {
        ymj.style.transition = "opacity 1s ease-in-out";
        ymj.style.opacity = 1;
    });
    liItem.addEventListener('mouseout', function () {
        ymj.style.transition = "none";
        ymj.style.opacity = 0;
    });
});

liItems2.forEach(function (liItem) {
    liItem.addEventListener('mouseover', function () {
        ksj.style.transition = "opacity 1s ease-in-out";
        ksj.style.opacity = 1;
    });
    liItem.addEventListener('mouseout', function () {
        ksj.style.transition = "none";
        ksj.style.opacity = 0;
    });
});

liItems3.forEach(function (liItem) {
    liItem.addEventListener('mouseover', function () {
        kar.style.transition = "opacity 1s ease-in-out";
        kar.style.opacity = 1;
    });
    liItem.addEventListener('mouseout', function () {
        kar.style.transition = "none";
        kar.style.opacity = 0;
    });
});



//Service Value 순차적 등장
const valuebox = document.querySelectorAll('.valuebox');

valuebox.forEach((el, index) => {
    el.style.transitionDelay = '1s'; // 딜레이 추가  
    el.style.transition = `all 0.5s ease ${index * 0.2}s`;
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.opacity = '0';
        }

        //   if (entry.isIntersecting) {
        //       entry.target.style.transform = 'translateY(0)';
        //   } else {
        //       entry.target.style.transform = 'translateY(100%)';
        //   }
    });
}, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

valuebox.forEach(el => {
    observer.observe(el);
});



//testresult img 위치 값 계산

var proBoxes = document.querySelectorAll('.proBox');
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;
var radius = window.innerWidth * 1500 / 1920;
var angleStep = 360 / proBoxes.length;

proBoxes.forEach(function (proBox, i) {
    var angle = angleStep * i;
    var x = centerX + radius * Math.cos(angle * Math.PI / 180) - proBox.getBoundingClientRect().width / 2;
    var y = centerY + radius * Math.sin(angle * Math.PI / 180) - proBox.getBoundingClientRect().height / 2;
    proBox.style.transform = 'translate(' + (x - centerX) + 'px, ' + (y - centerY) + 'px)';
});

//testresult img 돌아가게
var testresult = document.querySelector('#testresult article');

var counter = 0;
var proCount = 0;

testresult.addEventListener('wheel', function (event) {
    var testResult = document.querySelector('#testresult article');
    var proBox = document.querySelectorAll('.proBox');

    if (event.deltaY < 0) {
        counter += 22.5;
        proCount += 1;
        testResult.style.transform = "rotate(" + counter + "deg)";
        proBox.forEach(function (box) {
        });
        if (proCount > 15) { proCount = 0 }

        event.preventDefault();

    } else if (event.deltaY > 0) {
        counter -= 22.5;
        proCount -= 1;
        testResult.style.transform = "rotate(" + counter + "deg)";
        proBox.forEach(function (box) {
        });
        if (proCount < -15) { proCount = 0 }

        event.preventDefault();
    }
}, false);


//meeting 스크롤 시 이미지 변환
$(window).scroll(function () {
    var windowHeight = $(window).height();  // 브라우저 창 높이
    var windowScrollTop = $(window).scrollTop();  // 현재 스크롤 위치

    // 각 텍스트 요소의 중앙 위치 계산
    var step1Middle = $('#step1').offset().top + $('#step1').height() / 2;
    var step2Middle = $('#step2').offset().top + $('#step2').height() / 2;
    var step3Middle = $('#step3').offset().top + $('#step3').height() / 2;
    var step4Middle = $('#step4').offset().top + $('#step4').height() / 2;

    // 각 텍스트 요소의 중앙이 화면 중앙에 위치하는지 확인
    if (windowScrollTop <= step1Middle - windowHeight / 2) {
        $('#img1').css('opacity', '1');
        $('#img2').css('opacity', '0');
        $('#img3').css('opacity', '0');
        $('#img4').css('opacity', '0');
    } else if (windowScrollTop <= step2Middle - windowHeight / 2) {
        $('#img1').css('opacity', '0');
        $('#img2').css('opacity', '1');
        $('#img3').css('opacity', '0');
        $('#img4').css('opacity', '0');
    } else if (windowScrollTop <= step3Middle - windowHeight / 2) {
        $('#img1').css('opacity', '0');
        $('#img2').css('opacity', '0');
        $('#img3').css('opacity', '1');
        $('#img4').css('opacity', '0');
    } else if (windowScrollTop <= step4Middle - windowHeight / 2) {
        $('#img1').css('opacity', '0');
        $('#img2').css('opacity', '0');
        $('#img3').css('opacity', '0');
        $('#img4').css('opacity', '1');
    }
});


//character 순차적 등장
const character = document.querySelectorAll('#characterimg img');

character.forEach((el, index) => {
    el.style.transition = 'all 1s ease';
    el.style.opacity = '1';
});

const characterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 이미지가 화면에 보일 때 위치 변경
            if (entry.target === character[0]) {
                setTimeout(() => {
                    entry.target.style.top = '39.5%';
                });
            } else if (entry.target === character[1]) {
                setTimeout(() => {
                    entry.target.style.left = '38.5%';
                }, 100);
            } else if (entry.target === character[2]) {
                setTimeout(() => {
                    entry.target.style.bottom = '12%';
                }, 100);
            } else if (entry.target === character[3]) {
                setTimeout(() => {
                    entry.target.style.right = '38.5%';
                }, 400);
            }
        } else {
            // 이미지가 화면에서 벗어났을 때 위치 초기화
            if (entry.target === character[0]) {
                entry.target.style.top = '';
            } else if (entry.target === character[1]) {
                entry.target.style.left = '';
            } else if (entry.target === character[2]) {
                entry.target.style.bottom = '';
            } else if (entry.target === character[3]) {
                entry.target.style.right = '';
            }
        }
    });
}, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

character.forEach(el => {
    characterObserver.observe(el);
});
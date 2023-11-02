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




$(function() {
  let n = 0;
  let slideCount = $('.banner_box').length;

  // 초기 슬라이드 설정
  $('.banner_box').eq(n).show();

  // 좌측 화살표 클릭 이벤트
  $('.bi-chevron-left').on('click', function() {
    clearInterval(Timer); // 슬라이드 자동 재생 타이머 초기화
    $('.banner_box').eq(n).fadeOut(); // 현재 슬라이드 사라짐
    n = (n - 1 + slideCount) % slideCount; // 이전 슬라이드 인덱스 계산
    $('.banner_box').eq(n).fadeIn(); // 이전 슬라이드 나타남
    Timer = setInterval(fadeInOut, 7000); // 슬라이드 자동 재생 타이머 재시작
  });

  // 우측 화살표 클릭 이벤트
  $('.bi-chevron-right').on('click', function() {
    clearInterval(Timer); // 슬라이드 자동 재생 타이머 초기화
    $('.banner_box').eq(n).fadeOut(); // 현재 슬라이드 사라짐
    n = (n + 1) % slideCount; // 다음 슬라이드 인덱스 계산
    $('.banner_box').eq(n).fadeIn(); // 다음 슬라이드 나타남
    Timer = setInterval(fadeInOut, 7000); // 슬라이드 자동 재생 타이머 재시작
  });

  // 넘버박스 클릭 이벤트
  $('.n_box li').on('click', function() {
    clearInterval(Timer); // 슬라이드 자동 재생 타이머 초기화
    let target = $(this).index(); // 클릭한 넘버박스의 인덱스
    if (target !== n) { // 현재 슬라이드와 클릭한 슬라이드가 다를 경우에만 실행
      $('.banner_box').eq(n).fadeOut(); // 현재 슬라이드 사라짐
      n = target; // 클릭한 슬라이드 인덱스로 변경
      $('.banner_box').eq(n).fadeIn(); // 클릭한 슬라이드 나타남
      Timer = setInterval(fadeInOut, 7000); // 슬라이드 자동 재생 타이머 재시작

      $('.banner_box').eq(n).fadeOut();
      n = (n + 1) % slideCount;
      $('.banner_box').eq(n).fadeIn();
      $('.n_box li').eq(n).addClass('active').siblings().removeClass('active');

      
    }
  });

  // 자동 재생 기능
  function fadeInOut() {
    $('.banner_box').eq(n).fadeOut();
    n = (n + 1) % slideCount;
    $('.banner_box').eq(n).fadeIn();
    $('.n_box li').eq(n).addClass('active').siblings().removeClass('active');
  }

  let Timer = setInterval(fadeInOut, 7000);

  //.on 클래스 추가

  $('.n_box li').on('click', function() {
    clearInterval(Timer);
    var target = $(this).index();
    if (target !== n) {
      $('.banner_box').eq(n).fadeOut();
      n = target;
      $('.banner_box').eq(n).fadeIn();
      $('.n_box li').eq(n).addClass('active').siblings().removeClass('active');
      $(this).addClass('on').siblings().removeClass('on');
      $('.n_box li.on').css('font-size', '40px');
      $('.n_box li:not(.on)').css('font-size', ''); // on 클래스가 아닌 li 요소들의 font-size 초기화
      Timer = setInterval(fadeInOut, 7000);
    }
  });


});
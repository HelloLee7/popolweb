(function($){
    
    "use strict";
    
    //===== 페이지 로딩 시 Preloader 제거
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500); // 500ms 지연 후 500ms 동안 페이드아웃 애니메이션 실행
    });
    
    
    //===== 모바일 메뉴 토글 버튼 클릭 시 active 클래스 추가/제거
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active'); // 클릭할 때마다 active 클래스를 추가 또는 제거
    });
    
    //===== 모바일 메뉴 항목 클릭 시 토글 버튼 active 클래스 제거
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active'); // 메뉴 클릭 시 active 클래스 제거
    });
    
    //===== 모바일 메뉴 항목 클릭 시 네비게이션 메뉴 닫기
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show"); // 메뉴 항목 클릭하면 네비게이션 바 닫힘
    });
    
    
    //===== 스크롤 시 네비게이션 바를 Sticky(고정) 상태로 만들기
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop(); // 현재 스크롤 위치 가져오기
        if (scroll < 10) {
            $(".navigation").removeClass("sticky"); // 스크롤이 10px 이하이면 sticky 클래스 제거
        } else{
            $(".navigation").addClass("sticky"); // 10px 이상이면 sticky 클래스 추가
        }
    });
    
    
    //===== 현재 위치한 섹션에 따라 메뉴 항목 활성화
    var scrollLink = $('.page-scroll'); // 메뉴 항목들 가져오기

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop(); // 현재 스크롤 위치 저장

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 73; // 각 섹션의 위치 계산 (헤더 높이 고려)
            
            if (sectionOffset <= scrollbarLocation) { // 스크롤 위치가 해당 섹션에 도달하면
                $(this).parent().addClass('active'); // 활성화 클래스 추가
                $(this).parent().siblings().removeClass('active'); // 다른 항목에서 active 클래스 제거
            }
        });
    });
    
    
    //===== Parallax 효과 적용
    function parallaxMouse() {
        if ($('#parallax').length) { // parallax 요소가 존재할 경우
            var scene = document.getElementById('parallax'); // 요소 가져오기
            var parallax = new Parallax(scene); // Parallax 효과 적용
        };
    };
    parallaxMouse();
    
    
    //===== 스크롤 시 진행 상태 바 애니메이션 적용
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width'); // 요소의 data-width 값 가져오기
            $(el).css('width', percent + '%'); // 해당 값만큼 너비 증가
        }, {accY: 0});
    }
    
    
    //===== 카운터 애니메이션 (숫자가 점점 증가)
    $('.counter').counterUp({
        delay: 10,  // 숫자 변경 간격 (10ms)
        time: 1600, // 애니메이션 지속 시간 (1.6초)
    });
    
    
    //===== 이미지 팝업 (Lightbox 효과)
    $('.image-popup').magnificPopup({
        type: 'image', // 이미지 팝업 설정
        gallery:{
            enabled:true // 여러 이미지가 있을 경우 갤러리로 사용 가능하게 설정
        }
    });
    
    
    //===== 페이지 상단으로 이동 버튼 (Back to Top)
    
    // 사용자가 일정 스크롤을 내리면 버튼이 나타남
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){ // 600px 이상 스크롤하면 버튼 표시
            $('.back-to-top').fadeIn(200); // 200ms 동안 페이드인 효과
        } else{
            $('.back-to-top').fadeOut(200); // 200ms 동안 페이드아웃 효과
        }
    });
    
    // 버튼 클릭 시 페이지 최상단으로 부드럽게 이동
    $('.back-to-top').on('click', function(event) {
        event.preventDefault(); // 기본 동작 방지
        
        $('html, body').animate({
            scrollTop: 0, // 최상단(0px)으로 이동
        }, 1500); // 1.5초 동안 부드럽게 스크롤 이동
    });
    
}(jQuery));

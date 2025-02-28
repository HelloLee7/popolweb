//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() { // DOMContentLoaded 이벤트 핸들러.  페이지의 DOM이 완전히 로드된 후에 함수 안의 코드가 실행됨.

    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
        // 1. 선택자 설명:
        //    - 'a.page-scroll':  "page-scroll" 클래스를 가진 모든 <a> 태그를 선택.
        //    - '[href*="#"]': href 속성 값에 "#"이 포함된 모든 요소를 선택 (즉, 앵커 링크를 선택).
        //    - ':not([href="#"])': href 속성 값이 정확히 "#"인 요소는 제외 (즉, href="#" 인 링크는 제외).  이렇게 하면 특정 섹션으로 이동하지 않는 일반적인 해시 링크는 무시.
        // 2. .on('click', function() { ... }); : 선택된 <a> 태그들에 클릭 이벤트 핸들러를 등록.  클릭되면 함수 안의 코드가 실행됨.

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // 3. 조건문 설명: 현재 페이지와 클릭한 링크의 경로 및 호스트 이름이 같은지 확인.
            //    - location.pathname: 현재 페이지의 경로 이름 (예: /about).
            //    - this.pathname: 클릭된 링크의 경로 이름.
            //    - .replace(/^\//, ''):  경로 이름의 시작 부분에 있는 슬래시(/)를 제거.  일관된 비교를 위해 수행.
            //    - location.hostname: 현재 페이지의 호스트 이름 (예: www.example.com).
            //    - this.hostname: 클릭된 링크의 호스트 이름.
            //    - 이 조건은 같은 페이지 내에서의 앵커 링크 이동인지 확인하는 역할.  다른 페이지나 다른 도메인으로의 이동을 막음.

            var target = $(this.hash); // 4. 이동할 대상(target) 요소를 찾음.
            //    - this.hash: 클릭된 링크의 href 속성 값 (예: #section1).
            //    - $(this.hash):  jQuery 객체로 변환. 즉, id가 this.hash 값과 같은 요소를 찾음.

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // 5. 대상 요소가 없으면 name 속성을 사용하여 다시 시도:
            //    - target.length:  target 요소가 발견되었는지 확인 (jQuery 객체는 항상 존재하지만, 실제 DOM 요소가 없을 수도 있음).
            //    - ?:  삼항 연산자. target.length가 true (요소가 발견됨)이면 target을 그대로 사용.
            //    - $('[name=' + this.hash.slice(1) + ']'):  target이 없으면, name 속성 값이 this.hash에서 "#"을 제외한 값과 같은 요소를 찾음.
            //      (예: <a name="section1"></a> 과 같은 요소를 찾기 위함.  id 대신 name 속성을 사용하는 경우를 대비).
            //    - this.hash.slice(1):  this.hash에서 첫 번째 문자("#")를 제거.

            if (target.length) { // 6. 최종적으로 target 요소가 존재하는 경우에만 스크롤 애니메이션 실행.
                $('html, body').animate({ // 7. animate() 함수를 사용하여 부드러운 스크롤 애니메이션 적용.
                    scrollTop: (target.offset().top - 70) // 8. 스크롤할 위치 계산:
                    //    - target.offset().top:  target 요소의 뷰포트 상단으로부터의 거리(픽셀).
                    //    -  -70:  상단에서 70픽셀만큼 간격을 둠 (예: 고정 헤더가 있는 경우 가려지지 않도록).
                }, 1200, "easeInOutExpo"); // 9. 애니메이션 지속 시간 및 가속/감속(easing) 설정:
                //    - 1200: 애니메이션 지속 시간 (밀리초, 1.2초).
                //    - "easeInOutExpo":  jQuery Easing 플러그인에서 제공하는 easing 함수.  "easeInOutExpo"는 시작과 끝 부분에서 부드럽게 가속/감속되는 효과.
                return false; // 10. 기본 링크 동작(페이지 새로고침)을 막음.  <a> 태그의 기본 동작은 페이지를 이동시키는 것이므로, 이를 방지하여 부드러운 스크롤만 일어나도록 함.
            }
        }
    });

});
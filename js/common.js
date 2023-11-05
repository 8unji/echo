$(document).ready(function () { //문서준비이벤트 
    AOS.init();
    document.cookie = "safeCookie1=foo; SameSite=Lax"; 
    document.cookie = "safeCookie2=foo";  
    document.cookie = "crossCookie=bar; SameSite=None; Secure";

//gotop
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.gotop').fadeIn(200);
    } else {
        $('.gotop').fadeOut(200);
    }
});


$('.gotop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
});


    //language 
    $('.language > ul').hide();
    $('.language').click(function () {
        $('.language > ul').slideToggle();
    });

    $('.mlanguage > ul').hide();
    $('.mlanguage').click(function () {
        $('.mlanguage > ul').slideToggle();
    });


    //검색
    $('.search').hide();
    $('.ic_search').click(function () {
        $('.search').show();
    });
    $('.search_close').click(function () {
        $('.search').hide();

    });


    //nav
    $('.depth2, .gnb_bg').hide();

    $('.gnb').hover(function () {
        $('.depth2').stop().slideToggle();
        $('.gnb_bg').stop().slideToggle();

    });
    $('.gnb > li > a').mouseover(function () {
        $(this).css({
            'background': '#3D91CF',
            'color': '#fff',
        });


    });
    $('.gnb > li > a').mouseleave(function () {
        $(this).css({
            'background': '#fff',
            'color': '#000',
        });


    });

    //hamburger 
    $('.util .ham').click(function () {
        $('.mgnb_wrap').show();
    });
    $('.btn_mclose').click(function () {
        $('.mgnb_wrap').hide();
    });

    const mv = new Swiper('.mv', {
        // 옵션
        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },


        // 페이저 버튼 지정
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },
    });
   

    // green 슬라이드
    const gr_slide = new Swiper('.gr_slide', {
        // 옵션
        autoplay: {
            delay:0,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        // 페이저 버튼 지정
        pagination: {
            
            clickable: true,  // 버튼 클릭 여부
        },
        speed: 1000, // 슬라이드 전환시간
        loop: true, // 슬라이드 반복여부
        // 방향 버튼 지정
    
        slidesPerView: 4,
        loop: true, //슬라이드 반복
    });


        var gibu_slide = new Swiper(".gibu_slide", {
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false, //스크롤이 보이게
            },

            navigation: {
                nextEl: '.next',  // 다음 버튼
                prevEl: '.prev',  // 이전 버튼
                
            },
            slidesPerView: 3,
            loop: true
    
          });


    var campain_slide = new Swiper('.campain_slide', {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
        
        slidesPerView: 3,
     
        loop: true,
        navigation: {
            nextEl: '.next',  // 다음 버튼
            prevEl: '.prev',  // 이전 버튼
        },
      });





});
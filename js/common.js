$(function(){
    //동복 하복 tab
    $(".tab").hide();
    $(".tab").eq(0).show();

    $(".menu a").click(function () {
      var idx = $(this).index();

      $(".tab").hide();
      $(".tab").eq(idx).show();
      $(".menu a").removeClass("active");
      $(this).addClass("active");
      
      $(".tab .item_wrap ul li,.tab .tab_btn li" ).removeClass("on");
      $(".tab .item_wrap ul li:first-child,.tab .tab_btn li:first-child" ).addClass("on");
    });
    //품번 tab 
    $('.tab .tab_btn li').click(function(){
        var onTab = $(this).attr('data-tab');

        $('.tab_btn li, .item_wrap ul li').removeClass('on');

        $(this).addClass('on');
        $('#' + onTab).addClass('on');
    })

    //item_thumbnail 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail", {
        slidesPerView: 5,
        freeMode: true,                                   
    })  
    //item-main-Swiper 실행 
    var mainSwiper = new Swiper('.item-main-swiper', {
        effect: 'fade',
        loop:true,                  
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
    })

    //item_thumbnail-2 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-2", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-2 실행 
    var mainSwiper = new Swiper('.item-main-swiper-2', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
    })

    //item_thumbnail-3 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-3", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-3 실행 
    var mainSwiper = new Swiper('.item-main-swiper-3', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
    })
    
    //item_thumbnail-4 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-4", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-4 실행 
    var mainSwiper = new Swiper('.item-main-swiper-4', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
    })
    //item_thumbnail-5 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-5", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-5 실행 
    var mainSwiper = new Swiper('.item-main-swiper-5', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
    })
    //item_thumbnail-6 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-6", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-6 실행 
    var mainSwiper = new Swiper('.item-main-swiper-6', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
            },
    })

    //item_thumbnail-7 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-7", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-7 실행 
    var mainSwiper = new Swiper('.item-main-swiper-7', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
          },
    })
    //item_thumbnail-8 썸네일용 슬라이더 생성 
    var item_thumbnail = new Swiper(".item_thumbnail-8", {
        slidesPerView: 5,
        freeMode: true,                                      
    })  
    //item-main-Swiper-8 실행 
    var mainSwiper = new Swiper('.item-main-swiper-8', {
        effect: 'fade',     
        loop:true,  
        initialSlide: 0,     
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        thumbs: {
            swiper: item_thumbnail //메인 슬라이더와 썸네일 연동
        },
    })
    
})
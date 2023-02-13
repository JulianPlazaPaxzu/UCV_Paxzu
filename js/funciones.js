function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 160,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
            $("header").addClass('smaller');

        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
                $("header").removeClass('smaller');
            }
        }
        
    });

}
window.onload = init();

$(document).ready(function() {
    /* DESPLEGAR respuestas ayuda*/
    $(".sub_menu2").slideUp("fast");
    $(".sub_menu").slideUp("fast");
    $(".sub_menu_nv2").slideUp("fast");
    $(".accordion-body").slideUp("fast");



    $(".accordion-header").click(function(){
            
        if($(this).hasClass('active')){
          $(".accordion-header").removeClass('active');
            $(this).removeClass('active');
            $(this).next(".accordion-body").slideUp("fast");
        }else{
          $(".accordion-header").removeClass('active');
            $(this).removeClass('active');
            $(this).addClass('active');
            $(".accordion-body").slideUp("fast");
            $(this).next(".accordion-body").slideDown("fast");
        }
        
    });




    $(".btn_menu_movil").click(function(){
            
      if($(this).hasClass('active')){
          $(this).removeClass('active');
          $(".nav2").removeClass('active');
          $(".palabra_menu").removeClass('active');
          $(".palabra_menu").text("Menu");
          $(".btn_menu_flotante").removeClass('active');
          $(".btn_wp_flotante").removeClass('active');
          $(".btn_menu_movilNav1").removeClass('active');
         
      }else{
          $(this).removeClass('active');
          $(this).addClass('active');
          $(".nav2").addClass('active');
          $(".palabra_menu").text("Cerrar");
          $(".palabra_menu").addClass('active');
          $(".btn_menu_flotante").addClass('active');
          $(".btn_wp_flotante").addClass('active');
          $(".btn_menu_movilNav1").addClass('active');
      }
      
      btn_wp_flotante
      
  });

    $(".titulo_nav2 span").click(function(event){
      event.preventDefault();
      if($(".titulo_nav2").hasClass('active')){
          $(this).removeClass('active');
          $(".titulo_nav2").removeClass('active');
          $(".sub_menu2").slideUp("fast");
      }else{
          $(".titulo_nav2").removeClass('active');
          $(this).addClass('active');
          $(".sub_menu2").slideUp("fast");
          $(this).parent().next(".sub_menu2").slideDown("fast");
          console.log($(this).text)
      }
      
  });

  
  $(".titulo_nav span").click(function(event){
    event.preventDefault();
    if($(".titulo_nav").hasClass('active')){
        $(this).removeClass('active');
        $(".titulo_nav").removeClass('active');
        $(".sub_menu").slideUp("fast");
    }else{
        $(".titulo_nav").removeClass('active');
        $(this).addClass('active');
        $(".sub_menu").slideUp("fast");
        $(this).next(".sub_menu").slideDown("fast");
        console.log($(this).text)
    }
    
});

$(".paginas_menu1").slideUp("fast");
$(".pagina_submenu_1").slideUp("fast");

$(".btn1_paginas span").click(function(event){
  event.preventDefault();
  if($(".btn1_paginas").hasClass('active')){
      $(this).removeClass('active');
      $(".btn1_paginas").removeClass('active');
      $(".paginas_menu1").slideUp("fast");
  }else{
      $(".btn1_paginas").removeClass('active');
      $(".btn1_paginas span").removeClass('active');
      $(this).addClass('active');
      $(".paginas_menu1").slideUp("fast");
      $(this).parent().next(".paginas_menu1").slideDown("fast");
  }
  
});

$(".btn_menu1 span").click(function(event){
  event.preventDefault();
  if($(".btn_menu1").hasClass('active')){
      $(this).removeClass('active');
      $(".btn_menu1").removeClass('active');
      $(".pagina_submenu_1").slideUp("fast");
  }else{
      $(".btn_menu1").removeClass('active');
      $(".btn_menu1 span").removeClass('active');
      $(this).addClass('active');
      $(".pagina_submenu_1").slideUp("fast");
      $(this).parent().next(".pagina_submenu_1").slideDown("fast");
  }
  
});

});

  /*Swiper_Tipo1*/ 

  var swiper = new Swiper(".Swiper_Tipo1", {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".tipo1_swiper.swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
        nextEl: ".tipo1_swiper.swiper-button-next",
        prevEl: ".tipo1_swiper.swiper-button-prev",
      },
      scrollbar: {
        el: ".tipo1_swiper.swiper-scrollbar",
        hide: false,
      },
      breakpoints: {

        600: {
          slidesPerView: 1,
          spaceBetween: 13,
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        2560: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
        
      }
      
  });
  

  var swiper = new Swiper(".Swiper_Tipo2", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: ".tipo2.swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
        nextEl: ".tipo2.swiper-button-next",
        prevEl: ".tipo2.swiper-button-prev",
      },
      scrollbar: {
        el: ".tipo2.swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
  });


  var swiper = new Swiper(".Swiper_Tipo3", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    pagination:false,
    navigation: false,
    pagination: {
      el: ".tipo3.swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
        nextEl: ".tipo3.swiper-button-next",
        prevEl: ".tipo3.swiper-button-prev",
      },
      scrollbar: {
        el: ".tipo3.swiper-scrollbar",
        hide: false,
      },
  });

  var swiper = new Swiper(".Swiper_Tipo4", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".tipo4.swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
        nextEl: ".tipo4.swiper-button-next",
        prevEl: ".tipo4.swiper-button-prev",
      },
      scrollbar: {
        el: ".tipo4.swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        // when window width is >= 320px
  
        600: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
  });

  var swiper = new Swiper(".Swiper_Tipo5", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".tipo5.swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
        nextEl: ".tipo5.swiper-button-next",
        prevEl: ".tipo5.swiper-button-prev",
      },
      scrollbar: {
        el: ".tipo5.swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
      
      
  });


  var swiper = new Swiper(".Swiper_Tipo6", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: false,
 
      scrollbar: {
        el: ".tipo6.swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1050: {
          slidesPerView: "auto",
          spaceBetween: 20
        }
      }
      
      
  });
var _originNum;
var _introTitleView;
var _weareTitleView;
var widthSum0 = 0;
var widthSum1 = 0;
var widthSum2 = 0;
var this_scroll = 0;
var teaserOuterSwipe;
var teaser2swiper;
var isScroll = false;
var isIntroScroll = false;
var beforeWidth = 0;

var TeaserScript = (function () {
  return {
    commonMotion: function () {
      var agent = navigator.userAgent.toLowerCase();

      if (
        (navigator.appName == "Netscape" &&
          navigator.userAgent.search("Trident") != -1) ||
        agent.indexOf("msie") != -1
      ) {
        $(".teaser2").addClass("now-ie");
      }

      $(".btn-scroll-down").hover(
        function () {
          $(".btn-scroll-down").addClass("on");
        },
        function () {
          $(".btn-scroll-down").removeClass("on");
        }
      );

      $(".teaser2").removeClass("ready");

      $(".logo").on("click", function () {
        teaserOuterSwipe.slideTo($(".teaser-intro").index(), 700);
      });

      /*$(".swiper-slide-active .line").each(function(r){
        $(".swiper-slide-active .line").eq(r).find("span").each(function(q){
          if(r==0){
            widthSum0 = widthSum0 + $(".swiper-slide-active .line").eq(0).find("span").eq(q).outerWidth();
            //gsap.to($(".teaser3 .flow-txt-area .line-wrap .line").eq(0), 100, {left:-widthSum0, ease:Power3.easeOut});
          }else if(r==1) {
            widthSum1 = widthSum1 + $(".swiper-slide-active .line").eq(1).find("span").eq(q).outerWidth();
          }else{
            widthSum2 = widthSum2 + $(".swiper-slide-active .line").eq(2).find("span").eq(q).outerWidth();
          }
        });
      });*/

      /*$(".swiper-slide-duplicate-active .line p .span-tag").each(function(q){        
        widthSum = widthSum + $(".line span").eq(q).outerWidth();
      });*/

      $(".sticky-area .navigation .button-open").on("click", function () {
        if (!$(this).parents(".navigation").hasClass("clicked")) {
          $(this).parents(".navigation").addClass("clicked");
          $(".dimd").stop().fadeIn(300);
        }
      });

      $(".sticky-area .navigation .button-close").on("click", function () {
        $(".sticky-area .navigation").removeClass("clicked");
        $(".dimd").stop().fadeOut(300);
      });

      $(".btn-scroll-down").on("click", function () {
        gsap.to("html, body", 1, {
          scrollTop: $(window).height(),
          ease: Power3.easeOut,
        });
      });
    },
    initMotionTeaser1: function () {
      _introTitleView = gsap.to(".teaser1 .intro-bg .intro-title-img", 6, {
        opacity: 1,
        ease: Power3.easeOut,
      });
    },
    mouseMotion: function () {
      $(document).mousemove(function (e) {
        if (
          $(".teaser-intro").hasClass("swiper-slide-active") &&
          $(window).scrollTop() >= $(window).height()
        ) {
          gsap.to(".teaser1 .mouse-effect", 1, {
            top: e.pageY,
            left: e.pageX,
            delay: 0.07,
            ease: Power3.easeOut,
          });
        }
      });
    },
    initMotionTeaser3: function () {
      //gsap.to((".teaser3 .intro-bg .big-title"), 1.6, {opacity:1, top:0, ease:Power3.easeOut});
      //_weareTitleView = gsap.to((".teaser3 .intro-bg .big-title"), 1.6, {opacity:1, top:0, ease:Power3.easeOut});
    },
    scrollToTopMotion: function () {
      // 상단으로 이동
      $(".btn-top").on("click", function () {
        gsap.to("html, body", 1, { scrollTop: 0, ease: Power3.easeOut });
        gsap.to(".logo", 0.5, { top: 60, ease: Power3.easeOut }); // logo

        if ($("#wrap").hasClass("pc")) {
          if ($(".teaser2").hasClass("now-ie")) {
            gsap.to(".logo", 0.5, { top: 60, ease: Power3.easeOut }); // logo

            TweenMax.to($(".teaser2 .t2_con1"), 0, { top: 0 });

            gsap.to("html, body", 0, {
              scrollTop: 0,
              ease: Power3.easeOut,
              onComplete: function () {
                $(".swiper-cover").css("display", "none");
                TweenMax.to($(".teaser2 .swiper-container"), 2.5, {
                  top: "100vh",
                  delay: 0.7,
                  ease: Power4.easeOut,
                  onComplete: function () {
                    teaser2swiper[0].slideTo(0, 0);
                    teaser2swiper[1].slideTo(0, 0);
                  },
                });

                TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {
                  opacity: 0,
                  transform: "translate(0, 100px)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {
                  opacity: 0,
                  transform: "translate(0, 100px)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {
                  opacity: 1,
                  transform: "translate(0, 0)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {
                  opacity: 1,
                  transform: "translate(0, 0)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 2.5, {
                  scale: 1,
                  delay: 1.5,
                  ease: Power4.easeOut,
                });
                TweenMax.to(
                  $(".teaser2 .t2_con1 a").not(".btn-scroll-down"),
                  1,
                  { opacity: 1, delay: 0.7, ease: Power4.easeOut }
                );

                TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {
                  opacity: 1,
                  delay: 0.7,
                  ease: Power4.easeOut,
                });
                //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut});
              },
            });
          } else {
            gsap.to(".logo", 0.5, { top: 60, ease: Power3.easeOut }); // logo

            TweenMax.to($(".teaser2 .t2_con1"), 0, { top: 0 });

            gsap.to("html, body", 0.5, {
              scrollTop: 0,
              ease: Power3.easeOut,
              onComplete: function () {
                $(".swiper-cover").css("display", "none");
                TweenMax.to($(".teaser2 .swiper-container"), 1.5, {
                  top: "100vh",
                  delay: 0.2,
                  ease: Power4.easeOut,
                });

                teaser2swiper[0].slideTo(0, 1000);
                teaser2swiper[1].slideTo(0, 1000);

                TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {
                  opacity: 0,
                  transform: "translate(0, 100px)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {
                  opacity: 0,
                  transform: "translate(0, 100px)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {
                  opacity: 1,
                  transform: "translate(0, 0)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {
                  opacity: 1,
                  transform: "translate(0, 0)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {
                  scale: 1,
                  delay: 0.7,
                  ease: Power4.easeOut,
                });
                TweenMax.to(
                  $(".teaser2 .t2_con1 a").not(".btn-scroll-down"),
                  1,
                  { opacity: 1, delay: 0.7, ease: Power4.easeOut }
                );

                TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {
                  opacity: 1,
                  delay: 0.7,
                  ease: Power4.easeOut,
                });
                //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut});
              },
            });
          }
        }
      });
    },
    teaserSwiperFn: function () {
      // teaser2 Swiper
      // teaser2swiper = new Swiper('.teaser2 .swiper-container', {
      //   direction: 'vertical',
      //   speed : 1000,
      //   slidesPerView: 1,
      //   effect: 'fade',
      //   spaceBetween: 0,
      //   mousewheel: true,
      //   observer : true,
      //   observeParents : true,
      //   pagination: {
      //     el: '.teaser2 .swiper-pagination',
      //     type: 'fraction',
      //   },

      //   on : {
      //       init : function(){
      //         $(".btn-top").on('click', function(){
      //           gsap.to((".logo"), 0.5, {top:60, ease:Power3.easeOut}); // logo
      //           gsap.to(("html, body"), 1, {scrollTop:0, ease:Power3.easeOut, onComplete:function(){
      //             teaser2swiper.slideTo(0, 1000);
      //             TweenMax.to($(".teaser2 .t2_con1 .txt"), 0, {opacity:0, ease:Power4.easeOut});
      //             //TweenMax.to($(".teaser2 .t2_con1 .img"), 0, {scale:0.5, ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .swiper-container"), 0, {top:0, delay:0.7, ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .t2_con1 a"), 1.5, {opacity:1, delay:0.7, ease:Power4.easeOut});

      //             TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {opacity:1, delay:0.7, ease:Power4.easeOut});
      //             //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut});
      //             TweenMax.to($(".teaser2 .swiper-container"), 1.5, {top:'100vh', ease:Power4.easeOut, onComplete:function(){
      //                 TweenMax.to($(".teaser2 .swiper-container .number p").eq(0), 2, {opacity:0, ease:Power4.easeOut});
      //             }});
      //           }});
      //         })
      //       },
      //       slideChangeTransitionStart: function(){
      //         isScroll = false;
      //           if(this.activeIndex == 0){
      //             if(window.innerWidth <= 1023){ // mobile
      //               $(".swiper-slide-active .teaser2 .swiper-cover").css("display","block");
      //               //$("body").css("overflow","");
      //               $(".swiper-slide-active .teaser2 .t2_con1").show();
      //               $("body").css({"width": "", "position":"", "overflow":""});
      //             }
      //           }

      //           //TweenMax.to($(".teaser2 .swiper-slide").eq(this.activeIndex).find(".txt1"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
      //           //TweenMax.to($(".teaser2 .swiper-slide").eq(this.activeIndex).find(".txt2"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
      //           //TweenMax.to($(".teaser2 .swiper-slide").eq(this.activeIndex).find(".txt1"), 2, {opacity:1, transform:'translate(0, 0)', delay:0.8, ease:Power4.easeOut});
      //           //TweenMax.to($(".teaser2 .swiper-slide").eq(this.activeIndex).find(".txt2"), 2, {opacity:1, transform:'translate(0, 0)', delay:1, ease:Power4.easeOut});
      //           //TweenMax.to($(".teaser2 .swiper-container .number p"), 2, {opacity:0, ease:Power4.easeOut});
      //           //TweenMax.to($(".teaser2 .swiper-container .number p").eq(this.activeIndex), 2, {opacity:1, ease:Power4.easeOut});
      //           if(this.activeIndex == 2){
      //               TweenMax.to($(".teaser2 .t2_con1 .img"), 0, {scale:1, ease:Power3.easeOut});
      //           }
      //       },
      //       slideChangeTransitionEnd : function(){
      //           if(this.activeIndex == 4){
      //               if(window.innerWidth > 1023){ // pc
      //                 //$(".teaser2 .swiper-container .next").hide();
      //                 gsap.to($(".teaser2 .swiper-container .next"), 0.3, {opacity:0, ease:Power3.easeOut});
      //                 $("footer").css("display","flex");
      //               }else{ // mobile
      //                 //$("body").css("overflow","");
      //                 $("body").css({"width": "", "position":"", "overflow":""});
      //                 $(".swiper-slide-active .teaser2 .swiper-container").removeClass("fixed");
      //                 $("footer").css("display","block");
      //               }

      //               $(".swiper-cover").css("display","block");
      //           }else{
      //             if(window.innerWidth > 1023){ // pc
      //               //$(".teaser2 .swiper-container .next").show();
      //               gsap.to($(".teaser2 .swiper-container .next"), 0.3, {opacity:1, ease:Power3.easeOut});
      //             }
      //           }

      //           if(this.activeIndex == 0){
      //             isScroll = true;
      //           }
      //       },
      //   }
      // });

      // outer swiper
      teaserOuterSwipe = new Swiper(".swiper-container.teaser-outer-swiper", {
        pagination: {
          el: ".outer-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".teaser-outer-swiper .swiper-button-next",
          prevEl: ".teaser-outer-swiper .swiper-button-prev",
        },
        speed: 700,
        autoHeight: true,
        observer: true,
        observeParents: true,
        allowTouchMove: false,
        loop: true,
        breakpoints: {
          1023: {
            allowTouchMove: true,
          },
        },
        on: {
          init: function () {},
          slideChangeTransitionStart: function () {
            gsap.to($(".teaser2 .t2_con1"), 0, {
              top: 0,
              ease: Power3.easeOut,
            });
            $(".swiper-cover").css("display", "none");
            gsap.to($(".teaser2 .swiper-container"), 0, {
              top: "100vh",
              ease: Power3.easeOut,
            });

            /*$("#intro-video").get(0).pause();
            $("#intro-video").get(0).currentTime = 0;
            $("#intro-video").get(0).play();

            $("#what-wedo-video").get(0).pause();
            $("#what-wedo-video").get(0).currentTime = 0;
            $("#what-wedo-video").get(0).play();*/

            gsap.to("html, body", 0, { scrollTop: 0, ease: Power3.easeOut });

            if (window.innerWidth > 1023) {
              gsap.to(".logo", 0.5, { top: 60, ease: Power3.easeOut }); // logo

              //teaser2swiper.slideTo(0, 0);

              TweenMax.to($(".teaser2 .t2_con1 .txt"), 0, {
                opacity: 0,
                ease: Power4.easeOut,
              });
              TweenMax.to($(".teaser2 .t2_con1 .img"), 0, {
                scale: 0.5,
                ease: Power4.easeOut,
              });
              TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {
                opacity: 1,
                delay: 0.7,
                ease: Power4.easeOut,
              });
              TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {
                scale: 1,
                delay: 0.7,
                ease: Power4.easeOut,
              });
              //TweenMax.to($(".swiper-slide-active .teaser2 .swiper-container"), 0, {top:'100vh', ease:Power4.easeOut});
            }

            $(".teaser2 .t2_con1 #what-wedo-video").removeAttr("style");
            gsap.to($(".teaser2 .t2_con1 #what-wedo-video"), 0, {
              scale: 1,
              x: "-50%",
              y: "-50%",
            });

            $(".sticky-area").css("position", "fixed");

            if (!$(".teaser-outer-swiper").hasClass("moving")) {
              $(".teaser-outer-swiper").addClass("moving");
            }

            if ($(".teaser-outer-swiper").hasClass("not-first")) {
              //$(".crop-img").stop().fadeOut(250);
              gsap.to($(".crop-img"), 0.3, {
                opacity: 0,
                ease: Power3.easeOut,
              });
            }

            //_introTitleView.stop();
            _introTitleView.kill();
            _introTitleView.restart();

            gsap.to(
              $(".swiper-slide-active .teaser3 .intro-bg .big-title"),
              0,
              { opacity: 0, top: 150, ease: Power3.easeOut }
            );
            gsap.to($(".swiper-slide-active .teaser2 .t2_con1 .txt .txt1"), 0, {
              opacity: 0,
              top: 150,
              ease: Power4.easeOut,
            });
            gsap.to($(".swiper-slide-active .teaser2 .t2_con1 .txt .txt2"), 0, {
              opacity: 0,
              top: 150,
              ease: Power4.easeOut,
            });

            gsap.to(
              $(".swiper-slide-active .teaser3 .intro-bg .big-title"),
              1.5,
              { opacity: 1, top: 0, delay: 0.5, ease: Power3.easeOut }
            );
            gsap.to($(".swiper-slide-active .teaser2 .t2_con1 .txt .txt1"), 2, {
              opacity: 1,
              top: 0,
              delay: 0.7,
              ease: Power4.easeOut,
            });
            gsap.to($(".swiper-slide-active .teaser2 .t2_con1 .txt .txt2"), 2, {
              opacity: 1,
              top: 0,
              delay: 0.7,
              ease: Power4.easeOut,
            });

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              if (window.innerWidth > 1023) {
                // pc
                $("body").css("overflow-y", "scroll");
                $("footer").css("display", "none");
              } else {
                //$(".teaser-outer-swiper .swiper-wrapper").css("height","auto");
                $(".teaser-outer-swiper .swiper-wrapper").addClass(
                  "auto-height"
                );
              }

              //TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              //TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              //TweenMax.to($(".teaser2 .t2_con1 .txt"), 0, {opacity:0});

              //TweenMax.to($(".teaser2 .t2_con1 .txt"), 0, {opacity:1, delay:0.6, ease:Power4.easeOut});
            } else {
              TweenMax.to($(".teaser2 .t2_con1 .img"), 0, {
                scale: 1,
                delay: 0.7,
                ease: Power4.easeOut,
              });

              $(".outer-pagination").removeClass("non-visible");

              gsap.to("html, body", 1, {
                scrollTop: 0,
                ease: Power3.easeOut,
                onComplete: function () {
                  //teaser2swiper[0].slideTo(0, 1000);
                  //teaser2swiper[1].slideTo(0, 1000);
                  // TweenMax.to($(".teaser2 .swiper-container"), 0, {top:'100vh', ease:Power4.easeOut, onComplete:function(){
                  //     TweenMax.to($(".teaser2 .swiper-container .number p").eq(0), 2, {opacity:0, ease:Power4.easeOut});
                  // }});
                },
              });

              if (window.innerWidth > 1023) {
                // pc
                if (
                  $(".outer-slide.swiper-slide-active").attr(
                    "data-swiper-slide-index"
                  ) != 0
                ) {
                  //$("footer").css("display","flex");
                }
              } else {
                $("body").css("overflow", "");
                $(
                  ".swiper-slide-active .teaser2 .swiper-container"
                ).removeClass("fixed");
                $("footer").css("display", "block");

                //$(".teaser-outer-swiper .swiper-wrapper").css("height","");
                $(".teaser-outer-swiper .swiper-wrapper").removeClass(
                  "auto-height"
                );
              }
            }

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              // what-we-do
              $(".teaser-outer-swiper .swiper-button-prev span").html(
                "WHO WE ARE"
              );
              $(".teaser-outer-swiper .swiper-button-next span").html("INTRO");
            } else if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 1
            ) {
              // intro
              $(".teaser-outer-swiper .swiper-button-prev span").html(
                "WHAT WE DO"
              );
              $(".teaser-outer-swiper .swiper-button-next span").html(
                "WHO WE ARE"
              );
            } else {
              // who we are
              $(".teaser-outer-swiper .swiper-button-prev span").html("INTRO");
              $(".teaser-outer-swiper .swiper-button-next span").html(
                "WHAT WE DO"
              );
            }

            $(".page_tit").hide();
          },
          slideChangeTransitionEnd: function () {
            //gsap.to($(".teaser2 .t2_con1 a"), 0, {opacity:0.5});

            if (
              $(".outer-slide.swiper-slide-duplicate.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              if (teaser2swiper == undefined || teaser2swiper == null) {
                teaser2InSwiper();
                teaser2swiper[0].slideTo(0, 0);
                teaser2swiper[1].slideTo(0, 0);
              } else {
                teaser2swiper[0].slideTo(0, 0);
                teaser2swiper[1].slideTo(0, 0);
              }
            }

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              if (teaser2swiper == undefined || teaser2swiper == null) {
                teaser2InSwiper();
                teaser2swiper[0].slideTo(0, 0);
                teaser2swiper[1].slideTo(0, 0);
              } else {
                teaser2swiper[0].slideTo(0, 0);
                teaser2swiper[1].slideTo(0, 0);
              }
            }

            if (
              $(".outer-slide.swiper-slide-duplicate.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0 ||
              $(".outer-slide.swiper-slide-duplicate.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 1
            ) {
              gsap.to(".teaser3 .intro-bg .big-title", 0, {
                opacity: 0,
                top: 150,
                ease: Power3.easeOut,
              });
            }

            if ($(".teaser-outer-swiper").hasClass("moving")) {
              $(".teaser-outer-swiper").removeClass("moving");
            }

            if ($(".outer-arrow").hasClass("hover")) {
              if ($(".outer-arrow.swiper-button-next").hasClass("hover")) {
                gsap.to($(".crop-img.right"), 0.3, {
                  opacity: 1,
                  ease: Power3.easeOut,
                });
              } else if (
                $(".outer-arrow.swiper-button-prev").hasClass("hover")
              ) {
                gsap.to($(".crop-img.left"), 0.3, {
                  opacity: 1,
                  ease: Power3.easeOut,
                });
              }

              if (!$(".outer-arrow").hasClass("hover")) {
                gsap.to($(".crop-img"), 0, {
                  opacity: 1,
                  ease: Power3.easeOut,
                });
              }
            }

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              $(".page_tit").eq(0).fadeIn(300);
            } else if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 1
            ) {
              $(".page_tit").eq(1).fadeIn(300);
            } else {
              $(".page_tit").eq(2).fadeIn(300);
            }
          },
        },
      });

      teaserOuterSwipe.slideTo($(".teaser-intro").index(), 0);
      //teaserOuterSwipe.slideTo($(".teaser-who").index(), 0);

      // next
      $(
        ".teaser-outer-swiper .outer-arrow.swiper-button-next, .crop-img-wrap .crop-img.right"
      ).hover(
        function () {
          $(this).addClass("hover");
          //gsap.to($(".crop-img"), 0.3, {opacity:0, ease:Power3.easeOut});
          if (!$(".teaser-outer-swiper").hasClass("moving")) {
            gsap.to(".crop-img.right", 0.5, {
              right: 0,
              opacity: 1,
              ease: Power3.easeOut,
            });
          }
        },
        function () {
          $(this).removeClass("hover");
          if (!$(".teaser-outer-swiper").hasClass("moving")) {
            gsap.to(".crop-img.right", 0.5, {
              right: -60,
              ease: Power3.easeOut,
            });
          }
        }
      );

      // prev
      $(
        ".teaser-outer-swiper .outer-arrow.swiper-button-prev, .crop-img-wrap .crop-img.left"
      ).hover(
        function () {
          //gsap.to($(".crop-img"), 0.3, {opacity:0, ease:Power3.easeOut});
          $(this).addClass("hover");
          if (!$(".teaser-outer-swiper").hasClass("moving")) {
            gsap.to(".crop-img.left", 0.5, {
              left: 0,
              opacity: 1,
              ease: Power3.easeOut,
            });
          }
        },
        function () {
          $(this).removeClass("hover");
          if (!$(".teaser-outer-swiper").hasClass("moving")) {
            gsap.to(".crop-img.left", 0.5, { left: -60, ease: Power3.easeOut });
          }
        }
      );

      // click
      $(
        ".teaser-outer-swiper .swiper-button-next, .teaser-outer-swiper .swiper-button-prev"
      ).on("click", function () {
        if (
          $(".outer-slide.swiper-slide-active").attr(
            "data-swiper-slide-index"
          ) != 0
        ) {
          $("footer").css("display", "flex");
        }

        $(".teaser-outer-swiper").addClass("moving not-first");
        setTimeout(function () {
          $(".crop-img-wrap")
            .removeClass("crop-teaser0 crop-teaser1 crop-teaser2")
            .addClass(
              "crop-teaser" +
                $(".outer-slide.swiper-slide-active").attr(
                  "data-swiper-slide-index"
                )
            );
        }, 300);
        //$(".crop-img").stop().fadeOut(250);
        gsap.to($(".crop-img"), 0.25, { opacity: 0, ease: Power3.easeOut });
      });
    },
    triggerMotion: function () {
      $(".default-motion").each(function (q) {
        gsap.to($(this), {
          scrollTrigger: {
            trigger: $(this),
            start: "top 60%",
            end: "bottom",
            //end:"+=100%",
            //scrub: 2,
            //pin: false,
            delay: 0.4,
            //markers: true,
            toggleClass: { targets: $(this), className: "active" },
          },
        });
      });

      $(".default-motion2").each(function (q) {
        gsap.to($(this), {
          scrollTrigger: {
            trigger: $(this),
            start: "top 75%",
            end: "bottom",
            //end:"+=100%",
            //scrub: 2,
            //pin: false,
            delay: 0.4,
            //markers: true,
            toggleClass: { targets: $(this), className: "active" },
          },
        });
      });

      // teaser2 mobile 용 모션
      $(".mb-motion").each(function (q) {
        gsap.to($(this), {
          scrollTrigger: {
            trigger: $(this),
            start: "top 85%",
            end: "bottom",
            //end:"+=100%",
            //scrub: 2,
            //pin: false,
            delay: 0.4,
            //markers: true,
            toggleClass: { targets: $(this), className: "active" },
          },
        });
      });

      // teaser2 mobile 용 모션
      $(".pagination-motion").each(function (q) {
        gsap.to($(this), {
          scrollTrigger: {
            trigger: $(this),
            start: "top 30%",
            end: "bottom",
            //end:"+=100%",
            //scrub: 2,
            //pin: false,
            delay: 0.4,
            //markers: true,
            toggleClass: { targets: $(this), className: "active" },
          },
        });
      });

      /*gsap.to((".teaser3 .flow-txt-area .line:nth-child(odd)"), {
        scrollTrigger: {
          trigger: ".teaser3 .flow-txt-area",
          start: "top bottom",
          end: "bottom",
          scrub: 2,
          pin: false,
          delay:0.4,
          //markers: true,
        },
        left:-500,
      });

      gsap.to((".teaser3 .flow-txt-area .line:nth-child(even)"), {
        scrollTrigger: {
          trigger: ".teaser3 .flow-txt-area",
          start: "top bottom",
          end: "bottom",
          scrub: 2,
          pin: false,
          delay:0.4,
         // markers: true,
        },
        left:0,
      });*/
    },
    mouseWheelMotion: function () {
      var teaser2Wheel = false;

      $(".teaser2 .t2_con1").on("mousewheel DOMMouseScroll", function (e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
        } else {
          delta = E.wheelDelta;
          deltaY = E.deltaY;
          if (delta > 0) {
            // up
            if (window.innerWidth > 1023) {
              // pc
              if (
                $(".teaser2 .swiper-slide-active").index() == 4 &&
                $(window).scrollTop() == 0
              ) {
                if (window.innerWidth > 1023) {
                  // pc
                  $(".swiper-cover").css("display", "none");
                  $("footer").css("display", "none");
                }
              }

              if (
                $(
                  ".swiper-slide-duplicate .teaser2 .swiper-slide-active"
                ).index() == 4 &&
                $(window).scrollTop() == 0
              ) {
                if (window.innerWidth > 1023) {
                  // pc
                  $(".swiper-cover").css("display", "none");
                  $("footer").css("display", "none");
                }
              }

              //gsap.to((".logo"), 0.5, {top:50, ease:Power3.easeOut}); // logo

              /*if($(".teaser-intro").hasClass("swiper-slide-active")){
                if($(window).scrollTop() < $(window).height() + 50){
                  if(isIntroScroll == false){
                    isIntroScroll = true;
                    gsap.to(("html, body"), 1.3, {scrollTop: 0, ease:Power4.easeOut, onComplete: function(){
                      isIntroScroll = false;
                    }});
                  }
                }
              }*/

              //TweenMax.to($(".teaser2 .t2_con1 .txt"), 0, {opacity:0, ease:Power4.easeOut});
              //TweenMax.to($(".teaser2 .t2_con1 .img"), 0, {scale:0.5, ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 0, {scale:0.5, ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .swiper-container"), 0, {top:0, delay:0.7, ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});

              // if(isScroll){
              //   if($(".swiper-slide-active .teaser2 .swiper-slide-active").index()==0 && teaser2Wheel == false){
              //     //isScroll = false;
              //     teaser2Wheel = true;
              //     console.log(teaser2Wheel);
              //     TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {opacity:1, delay:0.7, ease:Power4.easeOut});
              //     TweenMax.to($(".teaser2 .t2_con1 a"), 1.5, {opacity:1, delay:0.7, ease:Power4.easeOut});
              //     //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut});
              //     TweenMax.to($(".teaser2 .swiper-container"), 1.5, {top:'100vh', ease:Power4.easeOut});
              //     TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut, onComplete:function(){
              //       //isScroll = true;
              //       teaser2Wheel = false;
              //       console.log(teaser2Wheel);
              //     }});

              //   }
              // }
              //curT2conNum = 0;
            }
          } else {
            // down

            if (window.innerWidth > 1023) {
              // pc
              //gsap.to((".logo"), 0.5, {top:-50, ease:Power3.easeOut}); // logo

              if (
                $(".outer-slide.swiper-slide-active").attr(
                  "data-swiper-slide-index"
                ) == 0 &&
                teaser2Wheel == false
              ) {
                teaser2Wheel = true;
                //console.log(teaser2Wheel);
                TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {
                  opacity: 0,
                  ease: Power4.easeOut,
                });
                TweenMax.to(
                  $(".teaser2 .t2_con1 a").not(".btn-scroll-down"),
                  0.5,
                  { opacity: 0, ease: Power4.easeOut }
                );
                //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:0.5, ease:Power4.easeOut});
                TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {
                  scale: 0.5,
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con1"), 0, {
                  top: 10000,
                  delay: 1,
                  ease: Power4.easeOut,
                  onComplete: function () {
                    isScroll = true;
                    teaser2Wheel = false;
                    //console.log(teaser2Wheel);
                  },
                });
                TweenMax.to($(".teaser2 .swiper-container"), 1.5, {
                  top: 0,
                  delay: 0.7,
                  ease: Power4.easeOut,
                });

                if ($(".teaser2").hasClass("now-ie")) {
                  teaser2swiper[0].mousewheel.disable();
                  teaser2swiper[1].mousewheel.disable();
                }

                TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {
                  opacity: 0,
                  transform: "translate(0, 100px)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {
                  opacity: 0,
                  transform: "translate(0, 100px)",
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {
                  opacity: 1,
                  transform: "translate(0, 0)",
                  delay: 1.4,
                  ease: Power4.easeOut,
                });
                TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {
                  opacity: 1,
                  transform: "translate(0, 0)",
                  delay: 1.6,
                  ease: Power4.easeOut,
                  onComplete: function () {
                    //isScroll = true;
                  },
                });
                TweenMax.to(
                  $(".teaser2 .swiper-container .number p").eq(0),
                  2,
                  { opacity: 1, ease: Power4.easeOut }
                );
              }

              $(".outer-pagination").addClass("non-visible");

              /*if($(".teaser-intro").hasClass("swiper-slide-active")){
                if(isIntroScroll == false){
                  isIntroScroll = true;
                  if($(window).scrollTop() == 0){
                    gsap.to(("html, body"), 1.3, {scrollTop: $(window).height(), ease:Power4.easeOut, onComplete: function(){
                      isIntroScroll = false;
                    }});
                  }
                }
              }*/
            }
          }
        }
      });

      $(".teaser2 .t2_con2").on("mousewheel DOMMouseScroll", function (e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
        } else {
          delta = E.wheelDelta;
          deltaY = E.deltaY;
          if (delta > 0) {
            // up
            if (window.innerWidth > 1023) {
              // pc

              if (
                $(".teaser2 .swiper-slide-active").index() == 4 &&
                $(window).scrollTop() == 0
              ) {
                $(".swiper-cover").css("display", "none");
                $("footer").css("display", "none");
              }

              if (
                $(
                  ".swiper-slide-duplicate .teaser2 .swiper-slide-active"
                ).index() == 4 &&
                $(window).scrollTop() == 0
              ) {
                $(".swiper-cover").css("display", "none");
                $("footer").css("display", "none");
              }

              TweenMax.to($(".teaser2 .t2_con1 .txt"), 0, {
                opacity: 0,
                ease: Power4.easeOut,
              });
              //TweenMax.to($(".teaser2 .t2_con1 .img"), 0, {scale:0.5, ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 0, {scale:0.5, ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .swiper-container"), 0, {top:0, delay:0.7, ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});
              // TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});

              if (isScroll) {
                if (
                  $(
                    ".swiper-slide-active .teaser2 .swiper-slide-active"
                  ).index() == 0 &&
                  teaser2Wheel == false
                ) {
                  //isScroll = false;
                  teaser2Wheel = true;

                  TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {
                    opacity: 1,
                    delay: 0.7,
                    ease: Power4.easeOut,
                  });
                  TweenMax.to(
                    $(".teaser2 .t2_con1 a").not(".btn-scroll-down"),
                    1,
                    { opacity: 0.5, delay: 0.7, ease: Power4.easeOut }
                  );
                  //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:1, delay:0.7, ease:Power4.easeOut});
                  TweenMax.to($(".teaser2 .t2_con1"), 0, {
                    top: 0,
                    ease: Power4.easeOut,
                  });
                  TweenMax.to($(".teaser2 .swiper-container"), 1.5, {
                    top: "100vh",
                    ease: Power4.easeOut,
                  });
                  TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {
                    scale: 1,
                    delay: 0.7,
                    ease: Power4.easeOut,
                    onComplete: function () {
                      //isScroll = true;
                      teaser2Wheel = false;
                    },
                  });
                }
              }
              //curT2conNum = 0;
            }
          } else {
            // down
            if (window.innerWidth > 1023) {
              // pc
              if ($(".teaser2").hasClass("now-ie")) {
                teaser2swiper[0].mousewheel.enable();
                teaser2swiper[1].mousewheel.enable();
              }
              //gsap.to((".logo"), 0.5, {top:-50, ease:Power3.easeOut}); // logo

              // if($(".outer-slide.swiper-slide-active").attr("data-swiper-slide-index")==0 && teaser2Wheel == false){
              //   teaser2Wheel = true;
              //   console.log(teaser2Wheel);
              //   TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {opacity:0, ease:Power4.easeOut});
              //   TweenMax.to($(".teaser2 .t2_con1 a"), 1.5, {opacity:0, ease:Power4.easeOut});
              //   //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:0.5, ease:Power4.easeOut});
              //   TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {scale:0.5, ease:Power4.easeOut});
              //   TweenMax.to($(".teaser2 .t2_con1"), 0, {top:10000, delay:1, ease:Power4.easeOut, onComplete:function(){
              //     isScroll = true;
              //     teaser2Wheel = false;
              //     console.log(teaser2Wheel);
              //   }});
              //   TweenMax.to($(".teaser2 .swiper-container"), 1.5, {top:0, delay:0.7, ease:Power4.easeOut});

              //   TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              //   TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {opacity:0, transform:'translate(0, 100px)', ease:Power4.easeOut});
              //   TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {opacity:1, transform:'translate(0, 0)', delay:1.4, ease:Power4.easeOut});
              //   TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {opacity:1, transform:'translate(0, 0)', delay:1.6, ease:Power4.easeOut, onComplete:function(){
              //     //isScroll = true;
              //   }});
              //   TweenMax.to($(".teaser2 .swiper-container .number p").eq(0), 2, {opacity:1, ease:Power4.easeOut});
              // }

              $(".outer-pagination").addClass("non-visible");

              /*if($(".teaser-intro").hasClass("swiper-slide-active")){
                if(isIntroScroll == false){
                  isIntroScroll = true;
                  if($(window).scrollTop() == 0){
                    gsap.to(("html, body"), 1.3, {scrollTop: $(window).height(), ease:Power4.easeOut, onComplete: function(){
                      isIntroScroll = false;
                    }});
                  }
                }
              }*/
            }
          }
        }
      });

      $(".teaser2 .t2_con6").on("mousewheel DOMMouseScroll", function (e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
        } else {
          delta = E.wheelDelta;
          deltaY = E.deltaY;
          if (delta > 0) {
          } else {
            //$("footer").css("display","flex");
          }
        }
      });

      $(".swiper-cover").on("mousewheel DOMMouseScroll", function (e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
        } else {
          delta = E.wheelDelta;
          deltaY = E.deltaY;
          if (delta > 0) {
            teaser2swiper[0].slideTo(3, 1000);
            teaser2swiper[1].slideTo(3, 1000);
            $("footer").css("display", "none");
            $(".swiper-cover").css("display", "none");
          } else {
            $("footer").css("display", "flex");
          }
        }
      });

      $("#wrap").on("mousewheel DOMMouseScroll", function (e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
        } else {
          delta = E.wheelDelta;
          deltaY = E.deltaY;
          if (delta > 0) {
            // up
            /*if(window.innerWidth > 1023){ // pc
              if($(".teaser2 .swiper-slide-active").index()==4 && $(window).scrollTop()==0){
                if(window.innerWidth > 1023){ // pc
                  $(".swiper-cover").css("display","none");
                  $("footer").css("display","none");
                }
              }
              
              if($(".swiper-slide-duplicate .teaser2 .swiper-slide-active").index()==4 && $(window).scrollTop()==0){
                if(window.innerWidth > 1023){ // pc
                  $(".swiper-cover").css("display","none");
                  $("footer").css("display","none");
                }
              }
            }*/
            //gsap.to((".logo"), 0.5, {top:50, ease:Power3.easeOut}); // logo
            if (window.innerWidth > 1023) {
              // pc
              gsap.to(".logo", 0.5, { top: 50, ease: Power3.easeOut }); // logo
            } else {
              gsap.to(".logo", 0.5, { top: 30, ease: Power3.easeOut });
            }
          } else {
            // down
            if (window.innerWidth > 1023) {
              // pc
              gsap.to(".logo", 0.5, { top: -50, ease: Power3.easeOut }); // logo
              $(".outer-pagination").addClass("non-visible");
            } else {
              gsap.to(".logo", 0.5, { top: -30, ease: Power3.easeOut });
            }
          }
        }
      });
    },
    mouseScrollFn: function () {
      $(window).on("scroll", function () {
        // sticky 버튼
        if (
          $(window).scrollTop() + $(window).height() >=
          $("footer").offset().top
        ) {
          $(".sticky-area").css("position", "relative");
        } else {
          $(".sticky-area").css("position", "fixed");
        }

        // PC - taeser2 섹션에서 footer 안보이게
        if (
          $(window).scrollTop() == 0 &&
          $(".teaser-what-we-do").hasClass("swiper-slide-active")
        ) {
          if (window.innerWidth > 1023) {
            // pc
            $("footer").css("display", "none");
            //$(".swiper-cover").css("display","none");
          }
        }

        // var isTeaser2Scroll = false;
        // if($(".outer-slide.swiper-slide-active").attr("data-swiper-slide-index") == 0){
        //   if(isTeaser2Scroll == false){
        //     isTeaser2Scroll = true
        //     gsap.to((".teaser2 .t2_con1"), 0, {'top':$(window).scrollTop(), ease:Power3.easeOut});
        //     gsap.to((".teaser2 .t2_con1"), 2, {scale:0.5, ease:Power3.easeOut, onComplete:function(){
        //       gsap.to((".teaser2"), 0, {'padding-top':'100vh', ease:Power3.easeOut});
        //       gsap.to((".teaser2"), 2, {'padding-top':0, ease:Power3.easeOut});
        //     }});
        //   }
        // }

        // MOBILE - scroll up&down 체크
        if ($(window).scrollTop() > this_scroll) {
          // down
          $(".test-txt").html("down 스크롤중");
          $(".test-txt2").html($(window).scrollTop());
          if (window.innerWidth <= 1023) {
            // mobile
            if ($(window).scrollTop() > 0) {
              gsap.to(".logo", 1.5, { top: -50, ease: Power3.easeOut }); // logo
            }
          }
        } else {
          // up
          $(".test-txt").html("up 스크롤중");
          if (window.innerWidth <= 1023) {
            // mobile
            gsap.to(".logo", 1.5, { top: 30, ease: Power3.easeOut }); // logo
          }
        }

        this_scroll = $(window).scrollTop();
      });
    },
    windowResizeFn: function () {
      $(window)
        .resize(function () {
          if (window.innerWidth <= 1023) {
            // mobile
            teaser2mobileMotion();
            $("#wrap").removeClass().addClass("mobile");

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              //$(".teaser-outer-swiper .swiper-wrapper").css("height","auto");
              $(".teaser-outer-swiper .swiper-wrapper").addClass("auto-height");

              if ($("#wrap").hasClass("pc")) {
                gsap.to("html, body", 0, {
                  scrollTop: 0,
                  ease: Power3.easeOut,
                });
                gsap.to(
                  $(".swiper-slide-active .teaser2 .t2_con1 #what-wedo-video"),
                  0,
                  { scale: 1 }
                );
                gsap.to($(".swiper-slide-active .teaser2 .t2_con1"), 0, {
                  top: 0,
                  ease: Power3.easeOut,
                });
              }
              $(".mobile-teaser2 .img-wrap .list .txt-area .tit").removeClass(
                "active"
              );
              $(".mobile-teaser2 .img-wrap .list .txt-area .txt").removeClass(
                "active"
              );
            } else {
              //$(".teaser-outer-swiper .swiper-wrapper").css("height","");
              $(".teaser-outer-swiper .swiper-wrapper").removeClass(
                "auto-height"
              );
            }

            $(".teaser-outer-swiper .outer-pagination").css(
              "top",
              $(window).height() - 48
            );
            $(".page_tit_div").addClass("visible");
            $(".page_tit_div").css("top", $(window).height() - 78);
            //TweenMax.to($(".teaser2 .swiper-container"), 0, {top:0, ease:Power4.easeOut});
            //TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {scale:0.5, ease:Power4.easeOut});
            TweenMax.to(
              $(".swiper-slide-active .teaser2 .t2_con1 #what-wedo-video"),
              0,
              { scale: 1 }
            );
            gsap.to($(".swiper-slide-active .teaser2 .t2_con1 .txt .txt1"), 0, {
              opacity: 1,
              top: 0,
              ease: Power3.easeOut,
            });
            gsap.to($(".swiper-slide-active .teaser2 .t2_con1 .txt .txt2"), 0, {
              opacity: 1,
              top: 0,
              ease: Power3.easeOut,
            });

            $("footer").css("display", "block");
            $(".swiper-slide-active .teaser2 .t2_con1 .txt").css("opacity", 1);

            $(".outer-pagination").removeClass("non-visible");

            teaserOuterSwipe.update();

            //teaser2swiper.destroy();
          } else {
            //pc
            $("#wrap").removeClass().addClass("pc");

            $(".page_tit_div").removeClass("visible");

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) != 0
            ) {
              $("footer").css("display", "flex");
              $(".swiper-cover").css("display", "none");
            }

            if (
              $(".outer-slide.swiper-slide-active").attr(
                "data-swiper-slide-index"
              ) == 0
            ) {
              $("footer").css("display", "none");
              teaser2InSwiper();

              //teaser2swiper.slideTo(0,0);
              gsap.to($(".swiper-slide-active .teaser2 .swiper-container"), 0, {
                top: $(window).height(),
                ease: Power3.easeOut,
              });
              if ($("#wrap").hasClass("mobile")) {
                gsap.to("html, body", 0, {
                  scrollTop: 0,
                  ease: Power3.easeOut,
                });
              }
            }

            if (window.innerWidth > 1023) {
              setTimeout(function () {
                if (!$(".sticky-area .navigation").hasClass("on")) {
                  $(".sticky-area .navigation").addClass("on");
                }
              }, 1500);
            }
          }
        })
        .resize();
    },
    onLoadEvt: function () {
      /*TweenMax.to($(".teaser2 .t2_con1 .txt .txt1"), 2, {opacity:1, transform:'translate(0, 0)', ease:Power4.easeOut});
      TweenMax.to($(".teaser2 .t2_con1 .txt .txt2"), 2, {opacity:1, transform:'translate(0, 0)', delay:0.2, ease:Power4.easeOut});*/

      setInterval(function () {
        repeatTxt();
      }, 2500);
    },
    fullpageEvt: function () {
      $(".teaser2 .t2_con1 a").on("click", function () {
        TweenMax.to($(".teaser2 .t2_con1 .txt"), 1.5, {
          opacity: 0,
          ease: Power4.easeOut,
        });
        //TweenMax.to($(".teaser2 .t2_con1 .img"), 1.5, {scale:0.5, ease:Power4.easeOut});
        TweenMax.to($(".teaser2 .t2_con1 #what-wedo-video"), 1.5, {
          scale: 0.5,
          ease: Power4.easeOut,
        });
        TweenMax.to($(".teaser2 .swiper-container"), 1.5, {
          top: 0,
          delay: 0.7,
          ease: Power4.easeOut,
        });

        TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 0, {
          opacity: 0,
          transform: "translate(0, 100px)",
          ease: Power4.easeOut,
        });
        TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 0, {
          opacity: 0,
          transform: "translate(0, 100px)",
          ease: Power4.easeOut,
        });
        TweenMax.to($(".teaser2 .t2_con2 .txt .txt1"), 2, {
          opacity: 1,
          transform: "translate(0, 0)",
          delay: 1.4,
          ease: Power4.easeOut,
        });
        TweenMax.to($(".teaser2 .t2_con2 .txt .txt2"), 2, {
          opacity: 1,
          transform: "translate(0, 0)",
          delay: 1.6,
          ease: Power4.easeOut,
        });
        TweenMax.to($(".teaser2 .swiper-container .number p").eq(0), 2, {
          opacity: 1,
          ease: Power4.easeOut,
        });
      });
    },
  };
})();

$(function () {
  $(".loading-cover .txt").each(function (q) {
    gsap.to($(".loading-cover .txt").eq(q), 1, {
      opacity: 1,
      delay: 1.4 * q,
      onComplete: function () {
        gsap.to($(".loading-cover .txt").eq(q), 1, { opacity: 0 });
      },
    });
  });

  var timerId = setInterval(function () {
    $(".loading-cover .txt").each(function (q) {
      gsap.to($(".loading-cover .txt").eq(q), 1, {
        opacity: 1,
        delay: 1.4 * q,
        onComplete: function () {
          gsap.to($(".loading-cover .txt").eq(q), 1, { opacity: 0 });
        },
      });
    });
  }, 7000);
});

$(window).load(function () {
  TeaserScript.initMotionTeaser1();
  TeaserScript.teaserSwiperFn();
  TeaserScript.commonMotion();
  TeaserScript.initMotionTeaser3();
  TeaserScript.mouseMotion();
  TeaserScript.triggerMotion();
  TeaserScript.mouseWheelMotion();
  TeaserScript.mouseScrollFn();
  TeaserScript.onLoadEvt();
  TeaserScript.windowResizeFn();
  TeaserScript.scrollToTopMotion();
  TeaserScript.fullpageEvt();
  $(".loading-cover").fadeOut(500);
});

function repeatTxt() {
  TweenMax.to($(".teaser2 .swiper-container .next .txt img"), 2, {
    top: 102,
    ease: Linear.easeNone,
    onComplete: function () {
      TweenMax.to($(".teaser2 .swiper-container .next .txt img"), 0, {
        top: -102,
      });
    },
  });
}

function scrollDisable() {
  $("body").on("scroll", function (e) {
    e.preventDefault();
  });
}

function teaser2InSwiper() {
  teaser2swiper = new Swiper(".teaser2 .swiper-container", {
    //touchReleaseOnEdges: true,
    //releaseOnEdges: true,
    direction: "vertical",
    speed: 1000,
    slidesPerView: 1,
    effect: "fade",
    spaceBetween: 0,
    mousewheel: true,
    observer: true,
    observeParents: true,
    /*noSwiping : true,
    noSwipingClass: 'teaser2-noSwiping',*/
    pagination: {
      el: ".teaser2 .swiper-pagination",
      type: "fraction",
    },
    on: {
      slideChangeTransitionStart: function () {
        isScroll = false;
        TweenMax.to(
          $(".swiper-slide-active .teaser2 .swiper-slide")
            .eq(this.activeIndex)
            .find(".txt1"),
          0,
          { opacity: 0, transform: "translate(0, 100px)", ease: Power4.easeOut }
        );
        TweenMax.to(
          $(".swiper-slide-active .teaser2 .swiper-slide")
            .eq(this.activeIndex)
            .find(".txt2"),
          0,
          { opacity: 0, transform: "translate(0, 100px)", ease: Power4.easeOut }
        );
        TweenMax.to(
          $(".swiper-slide-active .teaser2 .swiper-slide")
            .eq(this.activeIndex)
            .find(".txt1"),
          2,
          {
            opacity: 1,
            transform: "translate(0, 0)",
            delay: 0.8,
            ease: Power4.easeOut,
          }
        );
        TweenMax.to(
          $(".swiper-slide-active .teaser2 .swiper-slide")
            .eq(this.activeIndex)
            .find(".txt2"),
          2,
          {
            opacity: 1,
            transform: "translate(0, 0)",
            delay: 1,
            ease: Power4.easeOut,
          }
        );
        TweenMax.to(
          $(".swiper-slide-active .teaser2 .swiper-container .number p"),
          2,
          { opacity: 0, ease: Power4.easeOut }
        );
        TweenMax.to(
          $(".swiper-slide-active .teaser2 .swiper-container .number p").eq(
            this.activeIndex
          ),
          2,
          { opacity: 1, ease: Power4.easeOut }
        );

        if (this.activeIndex == 2) {
          TweenMax.to($(".swiper-slide-active .teaser2 .t2_con1 .img"), 0, {
            scale: 1,
            ease: Power3.easeOut,
          });
        }
      },
      slideChangeTransitionEnd: function () {
        if (this.activeIndex == 4) {
          if (window.innerWidth > 1023) {
            // pc
            //$(".teaser2 .swiper-container .next").hide();
            gsap.to($(".teaser2 .swiper-container .next"), 0.3, {
              opacity: 0,
              ease: Power3.easeOut,
            });
            //$("footer").css("display","flex");
          } else {
            // mobile
            $("body").css("overflow", "");
            $(".swiper-slide-active .teaser2 .swiper-container").removeClass(
              "fixed"
            );
            $("footer").css("display", "block");
          }

          $(".swiper-cover").css("display", "block");
        } else {
          if (window.innerWidth > 1023) {
            // pc
            //$(".teaser2 .swiper-container .next").show();
            gsap.to($(".teaser2 .swiper-container .next"), 0.3, {
              opacity: 1,
              ease: Power3.easeOut,
            });
          }
        }

        if (this.activeIndex == 0) {
          if ($(".teaser2").hasClass("now-ie")) {
            teaser2swiper[0].mousewheel.disable();
            teaser2swiper[1].mousewheel.disable();
          }

          isScroll = true;
        }
      },
    },
  });
}

function teaser2mobileMotion() {
  $(".mb-motion").each(function (q) {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 85%",
        end: "bottom",
        //end:"+=100%",
        //scrub: 2,
        //pin: false,
        delay: 0.4,
        //markers: true,
        toggleClass: { targets: $(this), className: "active" },
      },
    });
  });
}

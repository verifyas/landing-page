/*
* PHLY - Versatile Coming Soon Template
* Build Date: October 2015
* Last Update: September 2016
* Author: Madeon08
* Copyright (C) 2016 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Action Buttons
    3. Scroll plugins
    4. Newsletter
    5. PhotoSwipe Gallery Init
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){
        $('.global-overlay').velocity({

            translateX : "100%",
            opacity : "1",

        },

        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })

        $(".map-container").addClass("fadeInRight").removeClass('opacity-0');

    },1000);

    setTimeout(function(){
        $('#left-side').velocity({

            opacity : "1",

            complete: function(){

            setTimeout(function() {
                $('.text-intro').each(function(i) {
                    (function(self) {
                        setTimeout(function() {
                            $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                        },(i*150)+150);
                        })(this);
                    });
                }, 0);
            }

        },

        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })

    },1600);

})

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 2. Action Buttons ................... */
    /* ------------------------------------- */

    $('a#open-more-info').on( "click", function() {
        $(".overlay").toggleClass("skew-part");
        $("#right-side").toggleClass("hide-right");
        $("#close-more-info").toggleClass("hide-close");
        $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
        }, 350);
    });

    $('button#close-more-info').on( "click", function() {
        $(".overlay").addClass("skew-part");
        $("#right-side").addClass("hide-right");
        $("#close-more-info").addClass("hide-close");
        $('.mCSB_scrollTools').removeClass('mCSB_scrollTools-left');
        setTimeout(function() {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side",{
                scrollInertia:500,
                callbacks:false
            });
        }, 350);
    });

    // Youtube Variant

    $('.expand-player').on( "click", function() {

        $('#left-side').velocity({

            opacity: "0",

            complete: function(){
                $('.global-overlay').velocity({

                    translateX : "-100%",
                    opacity : "0",

                },

                {
                    duration: 1000,
                    easing: [0.7,0,0.3,1],
                    delay: 500,
                })
            }
        })
    });

    $('.compress-player').on( "click", function() {

        $('.global-overlay').velocity({

            translateX : "100%",
            opacity : "1",

        },

        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
            delay: 0,

            complete: function(){

                $('#left-side').velocity({

                    opacity: "1",

                })

            }
        })
    });



    // Tooltips used on YouTube buttons
    if (window.matchMedia("(min-width: 1025px)").matches) {

        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }



});

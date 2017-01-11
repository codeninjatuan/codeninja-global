/*------------------------------------------------------------------

Theme:                   Bowline HTML5 Template
Version:                 1.1
Author:                  SinkLab
Support:                 http://themeforest.net/user/SinkLab

File Description:        JavaScript Main File

------------------------------------------------------------------*/

"use strict";

var BOWLINE = BOWLINE || {};

var revapi;
var header = document.querySelector("header");

var scrollFlag = false;
if ((jQuery("#logo").attr('data-scroll')) || (jQuery("#logo").attr('data-mobile'))) {
    var firstLogo = jQuery("#logo > img").attr('src');
};

var mobileFlag = false;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

jQuery(window).on("resize", function() {

    BOWLINE.resized = {

        init: function(){
            BOWLINE.resized.logo();
            BOWLINE.resized.menu();
            BOWLINE.resized.framecarousel();
            BOWLINE.resized.gallery();
        },



        logo: function(){
            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if((w <= 991) && (jQuery('#logo').attr('data-mobile')) && (mobileFlag === false)){
                var mobileLogo = jQuery('#logo').attr('data-mobile');
                jQuery('#logo > img').attr('src', mobileLogo);
                mobileFlag = true;
            }else if((w > 991) && (jQuery('#logo').attr('data-mobile')) && (mobileFlag === true)){
                jQuery('#logo > img').attr('src', firstLogo);
                mobileFlag = false;
            };
        },


        menu: function(){
            var containerWidth = jQuery('.container').width();
            containerWidth = containerWidth;
            jQuery('.main-menu .sub-menu.mega').width(containerWidth);
        },


        framecarousel: function(){
            jQuery('.framecarousel').each(function (index, value){

                var spacegradeReader = jQuery(this).data("frame-space");
                var leftspaceReader = jQuery(this).data("frame-left");
                var responsiveVP = jQuery(this).data("responsive-query");
                var spacegrade;
                var leftspace;

                if(jQuery.isArray(leftspaceReader)){
                    
                    jQuery.each(leftspaceReader, function( index, value ) {
                        if(window.innerWidth > responsiveVP[index]){
                            leftspace = value;
                            spacegrade = spacegradeReader[index];
                            return false;
                        };

                    });

                }else{
                    var leftspace = leftspaceReader;
                    var spacegrade = spacegradeReader;
                };
                var vpSize = jQuery(this).data("full-viewport");

                var holderID = jQuery(this).find(".frame-holder").attr("id");
                var carouselID = jQuery(this).find(".owl-carousel").attr("id");
                var navID = jQuery(this).find(".carousel-nav").attr("id");
                var navPrevID = jQuery(this).find(".carousel-nav-prev").attr("id");
                var navNextID = jQuery(this).find(".carousel-nav-next").attr("id");


                var img = new Image();
                img.src = jQuery("#" + holderID).attr("src");
                var holderNaturalW = img.width;
                var holderNaturalH = img.height;

                var img = new Image();
                img.src = jQuery("#" + carouselID + " .item img").attr("src");
                var frameNaturalW = img.width;
                var frameNaturalH = img.height;

                var holderW = jQuery("#" + holderID).width();
                var holderH = jQuery("#" + holderID).height();

                var frameW = (holderW * frameNaturalW) / holderNaturalW;
                var frameH = (holderH * frameNaturalH) / holderNaturalH;

                if(vpSize == false){

                    jQuery("#" + carouselID).width(frameW);
                    jQuery("#" + carouselID).height(frameH);
                    jQuery("#" + carouselID + " .owl-item").width(frameW);
                    jQuery("#" + carouselID + " .owl-item").height(frameH);
                    var p = 0;
                    jQuery("#" + carouselID).css("margin-left", leftspace + "%");

                }else{

                    jQuery("#" + carouselID + " .owl-item").width(frameW);
                    jQuery("#" + carouselID + " .owl-item").height(frameH);

                    var carouselW = jQuery("#" + carouselID).width();
                    var p = Math.round((carouselW * spacegrade) / 100);

                };

                jQuery("#" + carouselID).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                jQuery("#" + carouselID).find('.owl-stage-outer').children().unwrap();
                jQuery("#" + carouselID).removeData();

                jQuery("#" + carouselID).addClass("owl-carousel");

                if (jQuery("#" + carouselID).length) {
                    jQuery("#" + carouselID).owlCarousel({
                        items: 1,
                        autoplay: false,
                        autoplayTimeout: 3000,
                        mouseDrag : false,
                        touchDrag: false,
                        nav: false,
                        dots: false,
                        loop: true,
                        margin: 0,
                        stagePadding: p,
                        smartSpeed: 1000,
                        responsive: false
                    });
                };

                if(vpSize == false){}else{
                    var outerW = jQuery("#" + carouselID + " .owl-stage-outer").width();
                    var m = ((outerW * leftspace) / 100) - p;
                    jQuery("#" + carouselID + " .owl-stage").css({"margin-left" : m, "margin-right" : m});
                };

                jQuery("#" + carouselID).owlCarousel();

                jQuery("#" + carouselID).on('resized.owl.carousel', function(event) {
                    jQuery("#" + carouselID + " .owl-stage").css({"padding-left" : p, "padding-right" : p});
                });

                var bodyW = jQuery("body").width();
                var navM = (bodyW - holderW) / 2;
                jQuery("#" + navID).css({"left" : navM, "right" : navM});

            });
        },


        gallery: function(){
            jQuery('.mas-container').each(function (index, value){
                var myID = jQuery(this).attr("id");
                jQuery("#" + myID).masonry("destroy");
                BOWLINE.loaded.masonry();
            });
        }
    };

    BOWLINE.resized.init();

});//End document on resize handler



jQuery(function() {

    BOWLINE.initialize = {

        init: function(){

            BOWLINE.initialize.preloader();
            BOWLINE.initialize.logo();
            BOWLINE.initialize.menu();
            BOWLINE.initialize.sliders();
            BOWLINE.initialize.gototop();
            BOWLINE.initialize.respnav();
            BOWLINE.initialize.widgets();
            BOWLINE.initialize.animations();
            BOWLINE.initialize.popup();
            BOWLINE.initialize.popover();
            BOWLINE.initialize.tooltip();
            BOWLINE.initialize.panels();
            BOWLINE.initialize.searchbar();
            BOWLINE.initialize.creativeBlog();
            BOWLINE.initialize.countdown();
            BOWLINE.initialize.video();
            BOWLINE.initialize.notifications();
            BOWLINE.initialize.twplugin();
            BOWLINE.initialize.ionrsplugin();
            BOWLINE.initialize.textrotator();
            BOWLINE.initialize.piechart();
            BOWLINE.initialize.isotope();
            BOWLINE.initialize.counter();
            BOWLINE.initialize.hamburgerMenu();
            BOWLINE.initialize.revealMenu();
            BOWLINE.initialize.progressbars();
            BOWLINE.initialize.framecarousel();

        },



        preloader: function(){
            if(!jQuery('body').hasClass('no-transition') ){
                if((jQuery('body').data('bowline-loader')) && (jQuery('body').data('bowline-loader').length)){
                    var loader = jQuery('body').data('bowline-loader');
                    switch(loader){

                        //loader 1 and loader 2
                        case 'loader-1':
                        case 'loader-2':
                        case 'loader-4':
                        case 'loader-5':
                        case 'loader-6':
                            jQuery('body').prepend("<div class=\"loader-wrapper\" id=\"loader-wrapper\"> <div class=\"" + loader + "\"></div> </div>");
                            jQuery('body').css('visibility', 'visible');
                        break;

                        //loader 3
                        case 'loader-3':
                            jQuery('body').prepend("<div class=\"loader-wrapper\" id=\"loader-wrapper\"> <div class=\"loader-3\"><div><div><div></div></div></div></div> </div>");
                            jQuery('body').css('visibility', 'visible');
                        break;

                        default:
                            jQuery('body').prepend("<div class=\"loader-wrapper\" id=\"loader-wrapper\"> <div class=\"loader-1\"></div> </div>");
                            jQuery('body').css('visibility', 'visible');
                        break;
                    };
                }else{
                    jQuery('body').prepend("<div class=\"loader-wrapper\" id=\"loader-wrapper\"> <div class=\"loader-1\"></div> </div>");
                    jQuery('body').css('visibility', 'visible');
                };
            };
            
        },


        logo: function(){
            if((w <= 991) && (jQuery('#logo').attr('data-mobile')) && (mobileFlag === false)){
                var mobileLogo = jQuery('#logo').attr('data-mobile');
                jQuery('#logo > img').attr('src', mobileLogo);
                mobileFlag = true;
            };
            
        },


        menu: function(){
            if (jQuery(".main-menu").length) {
                jQuery('.main-menu > ul').superfish();
                var containerWidth = jQuery('.container').width();
                containerWidth = containerWidth;
                jQuery('.main-menu .sub-menu.mega').width(containerWidth);
            };
            
        },


        sliders: function(){
            jQuery('body').imagesLoaded( function() {
                if (jQuery("#main-slider").length) {
                    jQuery("#main-slider").revolution({
                        sliderType:"hero",
                        jsFileLocation:"revolution/js/",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:9000,
                        viewPort: {
                            enable:true,
                            outof:"pause",
                            visible_area:"80%"
                        },
                        responsiveLevels:[2048,1185,977,753,465],
                        gridwidth:[1170,970,750,850,465],
                        gridheight:[585,585,475,750,450],
                        lazyType:"none",
                        shadow:0,
                        fullScreenOffsetContainer: ".headerOffset",
                        spinner:"off",
                        autoHeight:"on",
                        forceFullWidth:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });

                }; //end if slider exists
            });

            jQuery('body').imagesLoaded( function() {
                if (jQuery("#menu1-slider").length) {
                    jQuery("#menu1-slider").revolution({
                        sliderType:"hero",
                        jsFileLocation:"revolution/js/",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:9000,
                        viewPort: {
                            enable:true,
                            outof:"pause",
                            visible_area:"80%"
                        },
                        responsiveLevels:[2048,1185,977, 753, 465],
                        gridwidth:[1170,970,750,750,465],
                        gridheight:[585,485,375,750,450],
                        lazyType:"none",
                        shadow:0,
                        fullScreenOffsetContainer: "header",
                        spinner:"off",
                        autoHeight:"on",
                        forceFullWidth:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });

                }; //end if slider exists
            });

            jQuery('body').imagesLoaded( function() {
                if (jQuery(".tp-banner-aboutus").length) {
                    revapi = jQuery('.tp-banner-aboutus').revolution({
                        sliderType:"hero",
                        jsFileLocation:"revolution/js/",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:9000,
                        viewPort: {
                            enable:true,
                            outof:"pause",
                            visible_area:"80%"
                        },
                        responsiveLevels:[2048,1185,977, 753, 465],
                        gridwidth:[1170,970,750,470,465],
                        gridheight:[650,550,480,500,450],
                        lazyType:"none",
                        shadow:0,
                        fullScreenOffsetContainer: ".headerOffset",
                        spinner:"off",
                        autoHeight:"off",
                        forceFullWidth:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });
                };
            });

            jQuery('body').imagesLoaded( function() {
                if (jQuery(".tp-banner-faq").length) {
                    revapi = jQuery('.tp-banner-faq').revolution({
                        sliderType:"hero",
                        jsFileLocation:"revolution/js/",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:9000,
                        viewPort: {
                            enable:true,
                            outof:"pause",
                            visible_area:"80%"
                        },
                        responsiveLevels:[4000,1185,977,753,465],
                        gridwidth:[1170,970,750,600,300],
                        gridheight:[650,550,480,450,350],
                        lazyType:"none",
                        shadow:0,
                        fullScreenOffsetContainer: ".headerOffset",
                        spinner:"off",
                        autoHeight:"off",
                        forceFullWidth:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });
                };
            });

            jQuery('body').imagesLoaded( function() {
                if (jQuery(".tp-banner-smaller").length) {
                    revapi = jQuery('.tp-banner-smaller').revolution({
                        sliderType:"hero",
                        jsFileLocation:"revolution/js/",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:9000,
                        viewPort: {
                            enable:true,
                            outof:"pause",
                            visible_area:"80%"
                        },
                        responsiveLevels:[2048,1185,977, 753, 465],
                        gridwidth:[1170,970,750,750,465],
                        gridheight:[550,500,480,500,450],
                        lazyType:"none",
                        shadow:0,
                        fullScreenOffsetContainer: ".headerOffset",
                        spinner:"off",
                        autoHeight:"off",
                        forceFullWidth:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });
                };
            });
            
        },


        gototop: function(){
            jQuery('#goToTop').on( "click", function goTop() {
                "use strict";
                jQuery('html,body').animate({ scrollTop: 0 }, 400);
                return false; 
            });

            
        },


        respnav: function(){
            jQuery('#respNavTrigger').on( "click", function() {
                if(jQuery('.main-menu').is(':visible')){ 
                    jQuery('.main-menu').removeClass('visible');
                }else{
                    jQuery('.main-menu').addClass('visible');
                };
            });
            
        },


        widgets: function(){
            jQuery("[data-bowline-widget]").each(function (index, value){
            var widget = jQuery(this).data("bowline-widget");
            switch(widget){

                //dribbble
                case "dribbble":
                    var user = jQuery(this).data("user");
                    var count = jQuery(this).data("count");
                    var id = jQuery(this).attr('id');
                    if(id){
                    }else{
                        var id = "widget-dribbble-" + user + '-' + count;
                        jQuery(this).attr('id', id);
                    };

                    if((user==undefined) || (user=='') || (count==undefined) || (count=='')){
                        jQuery(this).html('<div class="message light error"><p>An error has occurred while loading widget</p></div>');
                     }else{

                        // NOTE: Don't use this token, replace it with your own client access token.
                        $.jribbble.setToken('f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4');

                        $.jribbble.users(user).shots({per_page: count}).then(function(shots) {
                            var html = [];

                            shots.forEach(function(shot) {
                                html.push('<li class="col-md-3 col-sm-3 col-xs-3">');
                                html.push('<a href="' + shot.html_url + '" target="_blank">');
                                html.push('<img src="' + shot.images.normal + '" alt="Dribbble Shot" title="Dribbble Shot">');
                                html.push('</a></li>');
                            });
                              
                            $('#' + id).html(html.join(''));
                            
                        });

                    };
                break;

                //instagram
                case "instagram":
                    var user = jQuery(this).data("user");
                    var count = jQuery(this).data("count");
                    var id = jQuery(this).attr('id');
                    if(id){
                    }else{
                        var id = "widget-instagram-" + user + '-' + count;
                        jQuery(this).attr('id', id);
                    };

                    if((user==undefined) || (user=='') || (count==undefined) || (count=='')){
                        jQuery(this).html('<div class="message light error"><p>An error has occurred while loading widget</p></div>');
                    }else{
                        jQuery.fn.spectragram.accessData = {
                            // NOTE: Don't use this token, replace it with your own client access token.
                            accessToken: '1447648355.1677ed0.813135fd9e2b479fa003e4677866f4e6',
                            clientID: 'd97979d5070a4235869705fe9b7ec16c'
                        };
                        jQuery('.instagram-gallery').spectragram('getUserFeed',{
                            query: user,
                            max: count,
                            wrapEachWith: '<li class="col-md-3 col-sm-3 col-xs-3"></li>'
                        });
                    };
                break;

                //flickr
                case "flickr":
                    var user = jQuery(this).data("user");
                    var count = jQuery(this).data("count");
                    var id = jQuery(this).attr('id');
                    if(id){
                    }else{
                        var id = "widget-flickr-" + user + '-' + count;
                        jQuery(this).attr('id', id);
                    };

                    if((user==undefined) || (user=='') || (count==undefined) || (count=='')){
                        jQuery(this).html('<div class="message light error"><p>An error has occurred while loading widget</p></div>');
                    }else{
                        $('.flickr-gallery').jflickrfeed({
                            limit: count,
                            qstrings: {
                                id: user
                            },
                            itemTemplate: '<li class="col-md-3 col-sm-3 col-xs-3"><img src="{{image_s}}" alt="{{title}}" title="{{title}}"/></li>'
                        });
                    };
                break;

                //facebook
                case "facebook":
                    (function(d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) return;
                      js = d.createElement(s); js.id = id;
                      js.src = "//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.5";
                      fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                break;

                //twitter
                case "twitter":
                    var user = jQuery(this).data("user");
                    var count = jQuery(this).data("count");
                    var id = jQuery(this).attr('id');
                    if(id){
                    }else{
                        var id = "widget-flickr-" + user + '-' + count;
                        jQuery(this).attr('id', id);
                    };

                    if((user==undefined) || (user=='') || (count==undefined) || (count=='')){
                        jQuery(this).html('<div class="message light error"><p>An error has occurred while loading widget</p></div>');
                    }else{
                        jQuery('.twitter-feed').twittie({
                            username: user,
                            template: '<div class="row d-table no-gutter top-10"><div class="col-md-2">{{avatar}}</div><div class="col-md-10 p-left-20"><p>{{tweet}}</p><p class="tweet-date">Posted on: {{date}}</p></div></div>',
                            count: count,
                            dateFormat: '%d %b %Y',
                            hideReplies: true,
                            apiPath: '../js/widgets/tweetie-api/tweet.php'
                        });
                    };
                break;
                }
            });
            
        },


        animations: function(){
            if (typeof ScrollMagic !== 'undefined') {

                var controller;
                controller = new ScrollMagic.Controller();
                var eachcounter = 1;

                jQuery("[data-bowline-animation]").each(function (index, value){

                    var animation = jQuery(this).data("bowline-animation");
                    switch(animation){
                        case "tada":
                        case "shake":
                            break; 
                        default: 
                            jQuery(this).addClass("animated-o");
                    }

                    var id = jQuery(this).attr('id');

                    if(id){

                        window["scene" + eachcounter] = new ScrollMagic.Scene({
                        triggerElement: "#" + id,
                        offset: 0,
                        reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            $('#' + id).addClass('animated ' + animation);
                        })

                    }else{

                        var newid = "scene" + eachcounter;
                        jQuery(this).attr('id', newid);

                        window["scene" + eachcounter] = new ScrollMagic.Scene({
                        triggerElement: "#" + newid,
                        offset: 0,
                        reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            $('#' + newid).addClass('animated ' + animation);
                        })

                    }; // end if(id)

                    eachcounter++;

                }); // end each [data-bowline-animation]
                
            };
            
        },


        popup: function(){
            var mfpcounter = 1;
            jQuery("[data-mfp]").each(function (index, value){
                var mfptype = jQuery(this).data("mfp");
                if(mfptype!="gallery"){
                    //image or iframe
                    var id = jQuery(this).attr('id');

                    if(id){
                        jQuery('#' + id).magnificPopup({
                          type: mfptype
                        });
                    }else{
                        var newid = "mfp-" + mfpcounter;
                        jQuery(this).attr('id', newid);

                        jQuery('#' + newid).magnificPopup({
                          type: mfptype
                        });
                    };
                }else{
                    //gallery
                    var mfpclass = jQuery(this).data("mfp-gallery");
                    jQuery(this).addClass(mfpclass);

                    jQuery('.' + mfpclass).magnificPopup({
                        type: 'image',
                        gallery:{
                            enabled:true
                        }
                          
                    });
                };

                mfpcounter++;
            });

            if($("#open-popup").length) {
                $('#open-popup').magnificPopup({
                    type:'inline',
                    midClick: true,
                    modal:true
                });

                $('.mfp-modal-close').on( "click", function() {
                    $.magnificPopup.close();
                });
            };
            
        },


        popover: function(){
            if(jQuery('[data-toggle="popover"]').length){
                jQuery(function () {
                  jQuery('[data-toggle="popover"]').popover()
                });
            };
            
        },


        tooltip: function(){
            if(jQuery('[data-toggle="tooltip"]').length){
                jQuery(function () {
                  jQuery('[data-toggle="tooltip"]').tooltip()
                });
            };
            
        },


        panels: function(){
            jQuery(".showFullPanel").on( "click", function() {
                jQuery("#fullscreenPanel").css({"opacity":"0", "display":"block"}).animate({opacity:1}, 150);
            });
            jQuery("#hideFullPanel").on( "click", function(){
                jQuery("#fullscreenPanel").animate({opacity:0}, 200, function() {
                    jQuery(this).css("display", "none")
                });
            });
            jQuery(".showAsidePanel").on( "click", function() {
                jQuery("#asidePanel").addClass("active");
                
                if(jQuery("#asidePanel").hasClass("small")){
                    jQuery("header").addClass("aside-push-left small");
                    jQuery(".main-section").addClass("aside-push-left small");
                    jQuery("footer").addClass("aside-push-left small");
                }else{
                    jQuery("header").addClass("aside-push-left");
                    jQuery(".main-section").addClass("aside-push-left");
                    jQuery("footer").addClass("aside-push-left");
                };

                jQuery(".aside-panel-overlay").css({"opacity":"0", "display":"block"}).animate({opacity:1}, 300)
            });
            jQuery("#hideAsidePanel").on( "click", function(){
                jQuery("#asidePanel").removeClass("active");

                if(jQuery("#asidePanel").hasClass("small")){
                    jQuery("header").removeClass("aside-push-left small");
                    jQuery(".main-section").removeClass("aside-push-left small");
                    jQuery("footer").removeClass("aside-push-left small");
                }else{
                    jQuery("header").removeClass("aside-push-left");
                    jQuery(".main-section").removeClass("aside-push-left");
                    jQuery("footer").removeClass("aside-push-left");
                };

                jQuery(".aside-panel-overlay").animate({opacity:0}, 300, function() {
                    jQuery(this).css("display", "none")
                });
            });
            
        },


        searchbar: function(){
            jQuery(".showSearchBar").on( "click", function() {
                jQuery(".searchbar").fadeTo("slow", 200);
                jQuery(".searchbar").find("input:text").animateCss("flipInX");
            });
            jQuery("#hideSearchBar").on( "click", function(){
                jQuery(".searchbar").fadeOut(200, function() {
                    jQuery(".searchbar").css("display", "none");
                });
            });
            
        },


        creativeBlog: function(){
            jQuery("#showArticles").on( "click", function() {
                jQuery(".article-creative").toggleClass("push-right");
                jQuery("body").toggleClass("overflw");
            });
            jQuery("#hideArticles").on( "click", function(){
                jQuery(".article-creative").removeClass("push-right");
                jQuery("body").removeClass("overflw");
            });
            
        },


        countdown: function(){
            if(jQuery(".countdown-container").length){
                if(jQuery(".cd-piechart").length){
                    jQuery('.cd-piechart').easyPieChart({
                        barColor: '#999',
                        trackColor: '#FAFAFA',
                        scaleColor: !1,
                        scaleLength: 0,
                        lineCap: "round",
                        lineWidth: 5,
                        size: 160,
                        animate: 1000,
                    });
                } /* end piechart loading */

                jQuery('.countdown-container').countdown('2018/06/22', function(event) {   /* YYYY / MM / DD */
                    jQuery('.cd-days').html(event.strftime('%D'));
                    jQuery('.cd-hrs').html(event.strftime('%H'));
                    jQuery('.cd-mnts').html(event.strftime('%M'));
                    jQuery('.cd-scs').html(event.strftime('%S'));

                    if(jQuery(".cd-piechart").length){
                        var daysPercentage = (event.strftime('%D') * 100) / 365;
                        jQuery('#cd-days-chart').data('easyPieChart').update(daysPercentage);
                        var hrsPercentage = (event.strftime('%H') * 100) / 24;
                        jQuery('#cd-hrs-chart').data('easyPieChart').update(hrsPercentage);
                        var mntsPercentage = (event.strftime('%M') * 100) / 60;
                        jQuery('#cd-mnts-chart').data('easyPieChart').update(mntsPercentage);
                        var scsPercentage = (event.strftime('%S') * 100) / 60;
                        jQuery('#cd-scs-chart').data('easyPieChart').update(scsPercentage);
                    }
                });
            };
            
        },


        video: function(){
            if (jQuery(".video-embed").length) {
                jQuery(".video-embed").fitVids();
            };
            
        },


        notifications: function(){

            var notificationcounter = 1;

            jQuery(".notification-btn[data-target]").each(function (index, value){

                var target = jQuery(this).data("target");
                var id = jQuery(this).attr('id');

                if(id){
                    
                    jQuery('#' + id).on('click', function(e){

                        jQuery('#' + target).css('display', 'block');
                        jQuery('#' + target).css({'opacity':0}).animate({'opacity':1}, 300);
                        setTimeout(function(){
                            jQuery('#' + target).css({'opacity': 1}).animate({'opacity': 0}, 300);
                            setTimeout(function(){ jQuery('#notification-fs').css('display', 'none'); }, 300);
                        }, 2000);

                        var hash = window.location.hash;
                        var link = jQuery('#' + id);
                        e.preventDefault();
                        hash = "#" + link.attr("href");

                    });

                }else{
                    var newid = "notification-btn-" + notificationcounter;
                    jQuery(this).attr('id', newid);

                    jQuery('#' + newid).on('click', function(e){

                        jQuery('#' + target).css('display', 'block');
                        jQuery('#' + target).css({'opacity':0}).animate({'opacity':1}, 300);
                        setTimeout(function(){
                            jQuery('#' + target).css({'opacity': 1}).animate({'opacity': 0}, 300);
                            setTimeout(function(){ jQuery('#notification-fs').css('display', 'none'); }, 300);
                        }, 2000);

                        var hash = window.location.hash;
                        var link = jQuery('#' + newid);
                        e.preventDefault();
                        hash = "#" + link.attr("href");

                    });
                };

                notificationcounter++;

            });
            
        },


        twplugin: function(){
            if(jQuery(".twentytwenty-container").length){
                jQuery(".twentytwenty-container").twentytwenty({
                    default_offset_pct: 0.5,
                    orientation: 'horizontal'
                });
            };
            
        },

        
        ionrsplugin: function(){
            var rscounter = 1;
            jQuery("[data-rs]").each(function (index, value){

                var id = jQuery(this).attr('id');
                var rstype = jQuery(this).data("rs");

                if(id){
                    jQuery('#' + id).ionRangeSlider({
                        type: rstype
                    });
                }else{
                    var newid = "rangeslider-" + rscounter;
                    jQuery(this).attr('id', newid);

                    jQuery('#' + newid).ionRangeSlider({
                        type: rstype
                    });
                };
                
                rscounter++;
            });
            
        },


        textrotator: function(){
            var trcounter = 1;
            jQuery("[data-textrotator]").each(function (index, value){

                var animation = jQuery(this).data("textrotator");
                var speed = jQuery(this).data("textrotator-speed");
                var id = jQuery(this).attr('id');

                if(id){
                    jQuery('#' + id).Morphext({
                        animation: animation,
                        separator: ",",
                        speed: speed
                    });
                }else{
                    var newid = "textrotator" + trcounter;
                    jQuery(this).attr('id', newid);

                    jQuery('#' + newid).Morphext({
                        animation: animation,
                        separator: ",",
                        speed: speed
                    });
                };

                trcounter++;
            });
        },


        piechart: function(){
            var pccounter = 1;
            jQuery("[data-piechart]").each(function (index, value){
                var id = jQuery(this).attr('id');
                var color = jQuery(this).data("piechart");
                var barwidth = jQuery(this).data("piechart-percent");
                var linewidth = jQuery(this).data("piechart-width");
                if(!linewidth){ var linewidth = 5; };

                if(id){

                    jQuery('#' + id).easyPieChart({
                        barColor: color,
                        trackColor: '#FAFAFA',
                        scaleColor: !1,
                        scaleLength: 0,
                        lineCap: "round",
                        lineWidth: linewidth,
                        size: 180,
                        animate: 1000
                    });

                    if (typeof ScrollMagic !== 'undefined') {
                        var controller;
                        controller = new ScrollMagic.Controller();

                        window["piechart-scene" + pccounter] = new ScrollMagic.Scene({
                            triggerElement: "#" + id,
                            offset: 0,
                            reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            jQuery('#' + id).data('easyPieChart').update(barwidth);
                        })
                    };
                }else{
                    var newid = "piechart" + pccounter;
                    jQuery(this).attr('id', newid);

                    jQuery('#' + newid).easyPieChart({
                        barColor: color,
                        trackColor: '#FAFAFA',
                        scaleColor: !1,
                        scaleLength: 0,
                        lineCap: "round",
                        lineWidth: linewidth,
                        size: 180,
                        animate: 1000
                    });

                    if (typeof ScrollMagic !== 'undefined') {

                        var controller;
                        controller = new ScrollMagic.Controller();

                        window["piechart-scene" + pccounter] = new ScrollMagic.Scene({
                            triggerElement: "#" + newid,
                            offset: 0,
                            reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            jQuery('#' + newid).data('easyPieChart').update(barwidth);
                        })
                    };
                };
                pccounter++;
            });
        },


        isotope: function(){
            if(jQuery('.isotope-grid').length){

                var item = jQuery('.isotope-grid').data("isotope-items");
                var nav = jQuery('.isotope-grid').data("isotope-nav");
                
                jQuery('.isotope-grid').isotope({
                  itemSelector : '.' + item
                });

                jQuery('.' + nav + ' > a').on('click', function() {
                    jQuery('.' + nav + ' > a.active').removeClass("active");
                    jQuery(this).addClass("active");
                    var filterValue = jQuery(this).attr('data-filter');
                    jQuery('.isotope-grid').isotope({ filter: filterValue });
                });

                var hash = window.location.hash;
                var link = jQuery('.' + nav + ' > a');
                jQuery('.' + nav + ' > a').on("click", function(e){
                    e.preventDefault();
                    hash = "#" + link.attr("href");
                });

            };
        },


        counter: function(){

            var eachcounter = 1;

            jQuery("[data-bowline-counter]").each(function (index, value){
                
                if (typeof ScrollMagic !== 'undefined') {

                    var controller;
                    controller = new ScrollMagic.Controller();

                    if( jQuery(this).data('bowline-counter') == true){
                        var id = jQuery(this).attr('id');

                        if(!id){
                            var id = "counter-" + eachcounter;
                            jQuery(this).attr('id', id);
                        }

                        var trigger = id;
                    }else{
                        var id = jQuery(this).attr('id');
                        var trigger = jQuery(this).data('bowline-counter');
                    };

                    if(id){

                        window["counter-scene" + eachcounter] = new ScrollMagic.Scene({
                            triggerElement: "#" + trigger,
                            offset: 0,
                            reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            $('#' + id).countTo();
                        })

                    }else{

                        var newid = "counter-" + eachcounter;
                        jQuery(this).attr('id', newid);

                        window["counter-scene" + eachcounter] = new ScrollMagic.Scene({
                            triggerElement: "#" + trigger,
                            offset: 0,
                            reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            $('#' + newid).countTo();
                        })

                    }; // end if(id)

                    eachcounter++;

                };

            });
        },


        hamburgerMenu: function(){

            var eachHamburger = 1;

            jQuery("a.hamburger").each(function (index, value){
                var id = jQuery(this).attr('id');

                if(!id){
                    var id = "hamburger-" + eachHamburger;
                    jQuery(this).attr('id', id);
                };

                var hash = window.location.hash;
                var link = jQuery('#' + id);
                jQuery("#" + id).on("click", function(e){
                    jQuery("#" + id).toggleClass("is-active");
                    e.preventDefault();
                    hash = "#" + link.attr("href");

                });
                
                eachHamburger++;
            });
        },


        revealMenu: function(){
            jQuery(".main-menu.reveal").each(function (index, value){
                var btnID = jQuery(".main-menu.reveal .reveal-btn-container > a").attr('id');
                if(!btnID){
                    btnID = "reveal-btn";
                    jQuery(".main-menu.reveal .reveal-btn-container > a").attr('id', btnID);
                };

                jQuery('#' + btnID).on("click", function(){
                    jQuery('.main-menu.reveal').toggleClass("active");
                });

            });
        },


        progressbars: function(){

            var progresscounter = 1;

            jQuery('.progressbar[data-to]').each(function (index, value){

                var id = jQuery(this).attr('id');

                if (typeof ScrollMagic !== 'undefined') {

                    var controller;
                    controller = new ScrollMagic.Controller();

                    var from = jQuery(this).data("from");
                    var to = jQuery(this).data("to");

                    if(!from){ var from = 0; }

                    if(id){

                        jQuery("#" + id + " .progress-level").css("width", from + '%');
                        jQuery("#" + id + " .progress-level > span").css("opacity", 0);

                        window["progress-scene" + progresscounter] = new ScrollMagic.Scene({
                            triggerElement: "#" + id,
                            offset: 0,
                            reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            jQuery("#" + id + " .progress-level").animate({
                                width: to + '%'
                            });
                            jQuery("#" + id + " .progress-level > span").animate({
                                opacity: 1
                            });
                        })

                    }else{

                        var newid = "progressbar-" + progresscounter;
                        jQuery(this).attr('id', newid);

                        jQuery("#" + newid + " .progress-level").css("width", from + '%');
                        jQuery("#" + newid + " .progress-level > span").css("opacity", 0);

                        window["progress-scene" + progresscounter] = new ScrollMagic.Scene({
                            triggerElement: "#" + newid,
                            offset: 0,
                            reverse: false
                        })
                        .addTo(controller)
                        .on("enter", function (e) {
                            "use strict";
                            jQuery("#" + newid + " .progress-level").animate({
                                width: to + '%'
                            });
                            jQuery("#" + newid + " .progress-level > span").animate({
                                opacity: 1
                            });
                        })

                    }; // end if(id)

                    progresscounter++;

                };
            });
        },


        framecarousel: function(){
            
            var framecarouselcounter = 1;

            jQuery('.framecarousel').imagesLoaded( function() {
                jQuery('.framecarousel').each(function (index, value){

                    var spacegradeReader = jQuery(this).data("frame-space");
                    var leftspaceReader = jQuery(this).data("frame-left");
                    var responsiveVP = jQuery(this).data("responsive-query");
                    var spacegrade;
                    var leftspace;

                    if(jQuery.isArray(leftspaceReader)){
                        
                        jQuery.each(leftspaceReader, function( index, value ) {

                            if(window.innerWidth > responsiveVP[index]){
                                leftspace = value;
                                spacegrade = spacegradeReader[index];
                                return false;
                            };

                        });

                    }else{
                        var leftspace = leftspaceReader;
                        var spacegrade = spacegradeReader;
                    };

                    var vpSize = jQuery(this).data("full-viewport");
                    var customNav = jQuery(this).data("nav");


                    var holderID = jQuery(this).find(".frame-holder").attr("id");
                    var carouselID = jQuery(this).find(".owl-carousel").attr("id");
                    if(!customNav){
                        var navID = jQuery(this).find(".carousel-nav").attr("id");
                        var navPrevID = jQuery(this).find(".carousel-nav-prev").attr("id");
                        var navNextID = jQuery(this).find(".carousel-nav-next").attr("id");
                    };


                    if(!holderID){
                        holderID = "frame-holder-" + framecarouselcounter;
                        jQuery(this).find(".frame-holder").attr("id", holderID);
                    };
                    if(!carouselID){
                        carouselID = "owl-carousel-" + framecarouselcounter;
                        jQuery(this).find(".owl-carousel").attr("id", carouselID);
                    };
                    if(!customNav){
                        if(!navID){
                            navID = "carousel-nav-" + framecarouselcounter;
                            jQuery(this).find(".carousel-nav").attr("id", navID);
                        };
                        if(!navPrevID){
                            navPrevID = "carousel-nav-prev-" + framecarouselcounter;
                            jQuery(this).find(".carousel-nav-prev").attr("id", navPrevID);
                        };
                        if(!navNextID){
                            navNextID = "carousel-nav-next-" + framecarouselcounter;
                            jQuery(this).find(".carousel-nav-next").attr("id", navNextID);
                        };
                    };

                    var img = new Image();
                    img.src = jQuery("#" + holderID).attr("src");
                    var holderNaturalW = img.width;
                    var holderNaturalH = img.height;

                    var img = new Image();
                    img.src = jQuery("#" + carouselID + " .item img").attr("src");
                    var frameNaturalW = img.width;
                    var frameNaturalH = img.height;

                    //load animation for nav arrows
                    if(!customNav){
                        var navPrevIconID = "carousel-nav-prev-icon-" + framecarouselcounter;
                        var navNextIconID = "carousel-nav-next-icon-" + framecarouselcounter;
                        jQuery("#" + navPrevID + " > span").attr("id", navPrevIconID);
                        jQuery("#" + navNextID + " > span").attr("id", navNextIconID);
                        var navPrevSRC;
                        var navNextSRC;

                        jQuery.ajax({
                            url:'et-icons/linea_svg/arrows/arrows_left.svg',
                            type:'HEAD',
                            error:
                                function(){
                                    navPrevSRC = '../et-icons/linea_svg/arrows/arrows_left.svg';
                                    navNextSRC = '../et-icons/linea_svg/arrows/arrows_right.svg';
                                },
                            success:
                                function(){
                                    navPrevSRC = 'et-icons/linea_svg/arrows/arrows_left.svg';
                                    navNextSRC = 'et-icons/linea_svg/arrows/arrows_right.svg';
                                }
                        });

                        if (typeof ScrollMagic !== 'undefined') {
                            var controller;
                            controller = new ScrollMagic.Controller();

                            window["scene-nav-prev" + framecarouselcounter] = new ScrollMagic.Scene({
                                triggerElement: "#" + navID,
                                offset: 0,
                                reverse: false
                            })
                            .addTo(controller)
                            .on("enter", function (e) {
                                "use strict";
                                new Vivus(navPrevIconID, {type: 'delayed', duration: 100, file: navPrevSRC});
                            })

                            window["scene-nav-next" + framecarouselcounter] = new ScrollMagic.Scene({
                                triggerElement: "#" + navID,
                                offset: 0,
                                reverse: false
                            })
                            .addTo(controller)
                            .on("enter", function (e) {
                                "use strict";
                                new Vivus(navNextIconID, {type: 'delayed', duration: 100, file: navNextSRC});
                            })
                        };
                    };


                    var holderW = jQuery("#" + holderID).width();
                    var holderH = jQuery("#" + holderID).height();

                    var frameW = (holderW * frameNaturalW) / holderNaturalW;
                    var frameH = (holderH * frameNaturalH) / holderNaturalH;

                    if(vpSize == false){

                        jQuery("#" + carouselID).width(frameW);
                        jQuery("#" + carouselID).height(frameH);
                        jQuery("#" + carouselID + " .owl-item").width(frameW);
                        jQuery("#" + carouselID + " .owl-item").height(frameH);
                        var p = 0;
                        jQuery("#" + carouselID).css("margin-left", leftspace + "%");

                    }else{

                        jQuery("#" + carouselID + " .owl-item").width(frameW);
                        jQuery("#" + carouselID + " .owl-item").height(frameH);

                        var carouselW = jQuery("#" + carouselID).width();
                        var p = Math.round((carouselW * spacegrade) / 100);

                    };


                    if (jQuery("#" + carouselID).length) {
                        jQuery("#" + carouselID).owlCarousel({
                            items: 1,
                            autoplay: false,
                            autoplayTimeout: 3000,
                            mouseDrag : false,
                            touchDrag: false,
                            nav: false,
                            dots: false,
                            loop: true,
                            margin: 0,
                            stagePadding: p,
                            smartSpeed: 1000,
                            responsive: false
                        });
                    };

                    if(vpSize == false){}else{
                        var outerW = jQuery("#" + carouselID + " .owl-stage-outer").width();
                        var m = ((outerW * leftspace) / 100) - p;
                        jQuery("#" + carouselID + " .owl-stage").css({"margin-left" : m, "margin-right" : m});
                    };

                    if(!customNav){
                        var bodyW = jQuery("body").width();
                        var navM = (bodyW - holderW) / 2;
                        jQuery("#" + navID).css({"left" : navM, "right" : navM});
                        var navH = jQuery("#" + navID).height();
                        var navTopSpace = navH / 2;
                        jQuery("#" + navID).css("margin-top", "-" + navTopSpace + "px");
                    };

                    if(!customNav){
                        jQuery("#" + navNextID).on("click", function(e){
                            jQuery("#" + carouselID).trigger('next.owl.carousel');
                            e.preventDefault();
                        });

                        jQuery("#" + navPrevID).on("click", function(e){
                            jQuery("#" + carouselID).trigger('prev.owl.carousel');
                            e.preventDefault();
                        });
                    }else{
                        var customPrev = jQuery("#" + customNav).find(".carousel-nav-prev").attr("id");
                        if(!customPrev){
                            customPrev = "carousel-nav-prev-" + framecarouselcounter;
                            jQuery("#" + customNav).find(".carousel-nav-prev").attr("id", customPrev);
                        };
                        var customNext = jQuery("#" + customNav).find(".carousel-nav-next").attr("id");
                        if(!customNext){
                            customNext = "carousel-nav-next-" + framecarouselcounter;
                            jQuery("#" + customNav).find(".carousel-nav-next").attr("id", customNext);
                        };

                        jQuery("#" + customPrev).on("click", function(e){
                            jQuery("#" + carouselID).trigger('prev.owl.carousel');
                            e.preventDefault();
                        });

                        jQuery("#" + customNext).on("click", function(e){
                            jQuery("#" + carouselID).trigger('next.owl.carousel');
                            e.preventDefault();
                        });
                    };

                    framecarouselcounter++;
                });
            });
        }
    };

    /* END BOWLINE.initialize */


    BOWLINE.onscroll = {

        init: function(){

            BOWLINE.onscroll.initialize();

        },



        initialize: function(){
            jQuery(window).on("scroll", function(e) {
                "use strict";

                    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
                    

                    if(jQuery('.menu-topbar-1').length){ 
                        var shrinkOn = 50;
                    } else {
                        if(jQuery('.menu-topbar-2').length){
                            var shrinkOn = 100;
                        } else {
                            var shrinkOn = 1;
                        };
                    };
                
                if (distanceY > shrinkOn) {

                    if(jQuery("header").hasClass("static-sticky")){
                        jQuery("header").addClass("sticky");
                    }else{
                        jQuery("header").addClass("smaller");
                    };


                    if ((scrollFlag === false) && (w > 991)){
                        if (jQuery("#logo").attr('data-scroll')) {
                            var newLogo = jQuery("#logo").attr('data-scroll');
                            jQuery("#logo > img").attr("src", newLogo);
                        };

                        scrollFlag = true;
                    };

                } else {

                    if(jQuery("header").hasClass("smaller")){
                        // jQuery("header").removeClass("smaller");        
                    };
                    if(jQuery("header").hasClass("sticky")){
                        jQuery("header").removeClass("sticky")         
                    };

                    if ((scrollFlag === true) && (w > 991)){
                        if (jQuery("#logo").attr('data-scroll')) {
                            jQuery("#logo > img").attr("src", firstLogo);
                        };

                        scrollFlag = false;
                    };
                };


                //goToTop Function
                var position = jQuery(document).scrollTop();
                if(position > 500){
                    jQuery('#goToTop').css('display', 'block');
                }else{
                    jQuery('#goToTop').css('display', 'none');
                }



                jQuery("[data-bowline-fixed]").each(function (index, value){
                    var offset = jQuery(this).data("bowline-fixed");
                    if(position > offset){
                        jQuery(this).find("div.fixed-container").addClass("fixed");
                    }else{
                        jQuery(this).find("div.fixed-container").removeClass("fixed");
                    }
                });


            });
            
        }
    };/* END BOWLINE.onscroll */


    BOWLINE.carousels = {

        init: function(){

            BOWLINE.carousels.initialize();

        },



        initialize: function(){
                
            //Clients carousel
            if (jQuery("#owl-clients").length) {
                jQuery("#owl-clients").owlCarousel({
                    items: 5,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    mouseDrag : true,
                    touchDrag: true,
                    nav: false,
                    dots: false,
                    loop: true,
                    responsive:{
                        0:{
                            items:2
                        },
                        767:{
                            items:3
                        },
                        991:{
                            items:5
                        }
                    }   
                });
            };

            //Clients carousel
            if ($("#owl-applanding").length) {
                $("#owl-applanding").owlCarousel({
                    items: 5,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    mouseDrag : true,
                    touchDrag: true,
                    nav: false,
                    dots: false,
                    loop: true,
                    stagePadding: 100,
                    margin: 0,
                    responsive:{
                        0:{
                            items:1,
                            stagePadding: 80
                        },
                        479:{
                            items:2,
                            stagePadding: 80
                        },
                        767:{
                            items:3
                        },
                        991:{
                            items:5
                        }
                    },
                    onInitialized: initialized,
                    onTranslated: translated
                });
            };

            function initialized(event) {
                jQuery('#owl-applanding .owl-item.active').eq(2).addClass("focused");
            };
            function translated(event) {
                jQuery('#owl-applanding .owl-item.active').removeClass("focused");
                jQuery('#owl-applanding .owl-item.active').eq(2).addClass("focused");
            };

            //Services carousel
            if ($("#owl-services").length) {
                $("#owl-services").owlCarousel({
                    items: 1,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    mouseDrag : true,
                    touchDrag: true,
                    nav: false,
                    dots: true,
                    loop: false,
                    stagePadding: 150,
                    margin: 0,
                    responsive:{
                        0:{
                            items:1,
                            stagePadding: 30
                        },
                        450:{
                            items:1,
                            stagePadding:50
                        },
                        600:{
                            items:1,
                            stagePadding: 70
                        },
                        991:{
                            items:1,
                            stagePadding: 130
                        },
                        1300:{
                            items:1,
                            stagePadding: 150
                        },
                        1400:{
                            items:1,
                            stagePadding: 180
                        },
                        1600:{
                            items:1,
                            stagePadding: 250
                        },
                        1750:{
                            items:1,
                            stagePadding: 300
                        },
                        1900:{
                            items:1,
                            stagePadding: 320
                        },
                        2200:{
                            items:1,
                            stagePadding: 450
                        },
                        2500:{
                            items:1,
                            stagePadding: 550
                        }
                    }
                });
            };

            //Clients carousel
            if ($("#owl-clients-page").length) {
                $("#owl-clients-page").owlCarousel({
                    items : 1,
                    itemsDesktop : [1000,1],
                    itemsDesktopSmall : [900,1],
                    itemsTablet: [690,1],
                    itemsMobile : [480,1],
                    autoplay: true,
                    autoplayTimeout: 2000,
                    mouseDrag : true,
                    touchDrag: true,
                    nav: false,
                    dots: false,
                    loop: true
                });
            };

            //Travel carousel
            if ($("#owl-travel-1").length) {
                $("#owl-travel-1").owlCarousel({
                    items: 3,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    mouseDrag : true,
                    touchDrag: true,
                    nav: false,
                    dots: false,
                    loop: true,
                    margin: 0,
                    responsive:{
                        0:{
                            items:1,
                            stagePadding:10
                        },
                        479:{
                            items:1,
                            stagePadding:100
                        },
                        767:{
                            items:2,
                            stagePadding:100
                        },
                        991:{
                            items:3,
                            stagePadding:100
                        }
                    }
                });
            };

            // Carousel Page
            if(jQuery('#owl-carouselpage-1').length){
                jQuery("#owl-carouselpage-1").owlCarousel({
                    items : 5,
                    responsive:{
                        0:{
                            items:2
                        },
                        479:{
                            items:3
                        },
                        767:{
                            items:5
                        }
                    },
                    mouseDrag : true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    loop: true
                });
            };

            // Carousel Page
            if(jQuery('#owl-carouselpage-2').length){
                jQuery("#owl-carouselpage-2").owlCarousel({
                    items : 5,
                    responsive:{
                        0:{
                            items:2
                        },
                        479:{
                            items:3
                        },
                        767:{
                            items:5
                        }
                    },
                    margin: 20,
                    mouseDrag : true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    loop: true
                });
            };

            // Carousel Page
            if(jQuery('#owl-carouselpage-3').length){
                jQuery("#owl-carouselpage-3").owlCarousel({
                    items : 3,
                    responsive:{
                        0:{
                            items:1
                        },
                        479:{
                            items:2
                        },
                        767:{
                            items:3
                        }
                    },
                    margin: 20,
                    mouseDrag : true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    loop: true
                });
            };

            // Restaurant Demo
            if(jQuery('#owl-restaurant').length){
                jQuery("#owl-restaurant").owlCarousel({
                    responsive:{
                        0:{
                            items: 1,
                            margin: 15,
                            stagePadding: 15,
                        },
                        768:{
                            items: 1,
                            margin: 130,  //150
                            stagePadding: 240 //250
                        },
                        992:{
                            items: 1,
                            margin: 160,
                            stagePadding: 360  //350
                        },
                        1199:{
                            items:1,
                            margin: 200,
                            stagePadding: 460
                        }
                    },
                    margin: 200,
                    mouseDrag : true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    loop: true,
                    stagePadding: 600
                });
            };

            // Medical Demo
            if(jQuery('#owl-medical-blog').length){
                jQuery("#owl-medical-blog").owlCarousel({
                    items : 3,
                    responsive:{
                        0:{
                            items:1
                        },
                        479:{
                            items:2
                        },
                        767:{
                            items:3
                        }
                    },
                    margin: 50,
                    mouseDrag : true,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    loop: true
                });
            };
            
        }
    };/* END BOWLINE.carousels */


    BOWLINE.initialize.init();
    BOWLINE.onscroll.init();
    BOWLINE.carousels.init();


});//End document ready handler




jQuery(window).on("load", function(){

    BOWLINE.loaded = {

        init: function(){

            BOWLINE.loaded.removeLoader();
            BOWLINE.loaded.masonry();

        },

        removeLoader: function(){
            if (jQuery("#loader-wrapper").length) {
                jQuery("#loader-wrapper").delay(800).fadeOut("slow");
            };
            
        },

        masonry: function(){

            jQuery('.mas-container').each(function(i, obj) {

                var myClass = $(this).attr("class");
                var myID = $(this).attr("id");

                if (jQuery(this).attr('data-bigimg')) {
                    var bigImg = jQuery(this).attr("data-bigimg") - 1;
                    if(jQuery(this).children('.mas-item').hasClass('mas-5x')){
                        if(jQuery(".mas-5x").parents(".container").length){
                            var containerWidth = jQuery(".mas-5x").parents(".container").width();
                        }else{
                            var containerWidth = jQuery(".mas-5x").parents(".fluid-container").width();
                        };
                        var bigWidth = (containerWidth * 40)/100;
                        var defaultWidth = bigWidth / 2;
                    }
                    if(jQuery(this).children('.mas-item').hasClass('mas-4x')){
                        if(jQuery(".mas-4x").parents(".container").length){
                            var containerWidth = jQuery(".mas-4x").parents(".container").width();
                        }else{
                            var containerWidth = jQuery(".mas-4x").parents(".fluid-container").width();
                        };
                        var bigWidth = (containerWidth * 50)/100;
                        var defaultWidth = bigWidth / 2;
                    }
                    if(jQuery(this).children('.mas-item').hasClass('mas-3x')){
                        if(jQuery(".mas-3x").parents(".container").length){
                            var containerWidth = jQuery(".mas-3x").parents(".container").width();
                        }else{
                            var containerWidth = jQuery(".mas-3x").parents(".fluid-container").width();
                        };
                        var bigWidth = (containerWidth * 66.666666666)/100;
                        var defaultWidth = bigWidth / 2;
                    }
                    if(!jQuery(this).hasClass('elastic-gallery')){
                        jQuery(this).children('.mas-item').css('width', defaultWidth);
                    }
                    jQuery(this).children('.mas-item:eq(' + bigImg + ')').css('width', bigWidth);
                }

                var container = document.getElementById(myID);

                var masonryOptions = {
                    itemSelector: ' .mas-item',
                    columnWidth: defaultWidth,
                    percentPosition: true
                }
                // init Masonry
                jQuery(container).masonry( masonryOptions );

            });
            
        }
    };/* END BOWLINE.loaded */


    BOWLINE.loaded.init();

});//End document load handler



jQuery.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//scroll to div
$(".main-menu li").click(function() {
    var id = $(this).find('a').attr('href');
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 992) {
            $('html, body').animate({
                scrollTop: $(""+id+"").offset().top -115}, 500);
        }else{
            $('html, body').animate({
                scrollTop: $(""+id+"").offset().top + 2}, 500);
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    
});



// typed 
$(function(){
    $(".typed-title").typed({
        strings: ["CODENINJA", "SINGAPORE", "VIETNAM", "CHINA"],
        backDelay: 3000,
        typeSpeed: 0,
        loop: true,
        showCursor: true,
        cursorChar: "|"

    });
});

$(document).ready(function(){
    $("#sendmail").validationEngine({
        scrollOffset : 200,
        promptPosition : "topLeft"
    });
    $('#send').click(function(){
        var v = grecaptcha.getResponse();
        if(v.length == '')
        {
            alert("You can't leave Captcha Code empty");
        }
        else
        {
            var valid = $("#sendmail").validationEngine('validate');
            if (valid == true) {
                $('#sendmail').submit();
            } else {
                $("#sendmail").validationEngine();
            }
            
        }
    })
});
               
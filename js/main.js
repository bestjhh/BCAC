/**
 * Created by lovelyang on 2018/3/7.
 */
(function($){

    "use strict";

    var cfg = {
            defAnimation   : "fadeInUp",    // default css animation
            scrollDuration : 800,           // smoothscroll duration
            statsDuration  : 4000           // stats animation duration
        },
        $WIN = $(window);

    var verCenter = function () {
        var height=document.body.scrollHeight;
        var divHeight = $("")
    }



    /* Animations
     * ------------------------------------------------------- */
    var ssAnimations = function() {

        if (!$("html").hasClass('no-cssanimations')) {
            $('.animate-this').waypoint({
                handler: function(direction) {

                    var defAnimationEfx = cfg.defAnimation;

                    if ( direction === 'down' && !$(this.element).hasClass('animated')) {
                        $(this.element).addClass('item-animate');

                        setTimeout(function() {
                            $('body .animate-this.item-animate').each(function(ctr) {
                                var el       = $(this),
                                    animationEfx = el.data('animate') || null;

                                if (!animationEfx) {
                                    animationEfx = defAnimationEfx;
                                }

                                setTimeout( function () {
                                    el.addClass(animationEfx + ' animated');
                                    el.removeClass('item-animate');
                                }, ctr * 50);

                            });
                        }, 100);
                    }

                    // trigger once only
                    this.destroy();
                },
                offset: '90%'
            });
        }

    };

    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var ssOffCanvas = function() {

        var menuTrigger = $('#header-menu-trigger'),
            nav             = $('#menu-nav-wrap'),
            closeButton     = nav.find('.close-button'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span') ) {
                menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };



    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {
        ssOffCanvas();
        //ssAnimations();
        verCenter();
    })();
})(jQuery);

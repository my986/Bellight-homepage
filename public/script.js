// Header Sticky
function stickyFunction() {
    var header = document.getElementById("site-header");
    var sticky = header.offsetHeight;
    if (window.pageYOffset > 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
}

// LeftNav Sticky
window.onscroll = function() {
    var scrollPosition = $(window).scrollTop();
    var headerHeight = $('.header').outerHeight();
    var footerOffsetTop = $('.site-footer').offset().top;
    var leftNavHeight = $('.leftnav-listing').outerHeight();

    // LeftNav 固定処理
    if (scrollPosition > 0 && scrollPosition < footerOffsetTop - leftNavHeight - headerHeight) {
      $('.leftnav-listing').addClass('leftnav-fixed');
    } else {
      $('.leftnav-listing').removeClass('leftnav-fixed');
    }

    stickyFunction();
    onScrollHighlighted();
};

// LeftNav onscroll Highlight
function onScrollHighlighted() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var contentNavArray = [];

    var headerHeight = $('.header').outerHeight();

    $('.leftnav-listing li a').each(function () {
        var currLink = $(this);
        var refElement = currLink.attr('href').replace('#', '');
        contentNavArray.push(refElement);
    });

    $.each(contentNavArray, function (i, val) {
        var refElement = $('section#' + val);
        var currLink = $('*[href=\'#' + val + '\']');
        var nextRefElement = contentNavArray.length > i + 1 ? $('section#' + contentNavArray[i + 1]) : $('footer');

        if (refElement.length) {
            if (refElement.offset().top - headerHeight <= scrollPosition && nextRefElement.offset().top > scrollPosition) {
                $('.leftnav-listing li').removeClass('is_visiable_section');
                currLink.parents('.leftnav-listing li').addClass('is_visiable_section');
            } else if ((scrollHeight - windowHeight - scrollPosition) / scrollHeight === 0) {
                currLink.parents('.leftnav-listing li').removeClass('is_visiable_section');
                currLink.parents('.leftnav-listing li').addClass('is_visiable_section');
            } else {
                currLink.parents('.leftnav-listing li').removeClass('is_visiable_section');
            }
        }
    });
}

// LeftNav onClick Scroll
$(document).on('click', '.leftnav-listing li > a', function(e){
    var targetId = $(this).attr('href').trim().substr(1);
    var targetElement = $('[id="' + targetId + '"]');
    var headerMargin = parseInt(targetElement.css('margin-top'), 10);

    $('html, body').animate({
        scrollTop: targetElement.offset().top - headerMargin - $('.header').outerHeight()
    }, 1000);
});

$(document).ready(function() {
    var w_width = $(window).width();

    // Menu toggle Button
    $('.nav-button').click(function() {
        $('body').toggleClass('show_menu');
        $('.nav-wrap ul.top_nav').slideToggle();
    });

    // Append down-arrow Span
    $('ul.top_nav > li:has(ul)').addClass('has-submenu').append('<span class="down-arrow"></span>');
    $('li.has-submenu ul > li:has(ul)').addClass('has-submenu').append('<span class="down-arrow"></span>');

    // Navigation Menu - Multi level
    $("ul.top_nav li span.down-arrow").on("click", function(e) {
        var parent = $(this).parent();
        if (parent.hasClass("submenu-active")) {
            parent.removeClass("submenu-active");
            parent.children(".sub-nav").slideUp(400);
        } else {
            parent.siblings().removeClass("submenu-active");
            parent.addClass("submenu-active");
            parent.siblings(".has-submenu").children(".sub-nav").slideUp(400);
            parent.children(".sub-nav").slideDown(400);
        }
    });

    onScrollHighlighted();
});

// Resize event handler
$(window).resize(function() {
    var w_width = $(window).width();
    if (w_width > 919) {
        $('.nav-wrap ul.top_nav').show();
        $('.nav-wrap ul.top_nav ul').removeAttr("style");
    }

    onScrollHighlighted();
});

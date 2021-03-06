(function () {
  $(function () {
    function e(e, o) {
      var a = 'translateY(' + o + 'px';
      e.style['-webkit-transform'] = a,
      e.style['-moz-transform'] = a,
      e.style['-ms-transform'] = a,
      e.style['-o-transform'] = a,
      e.style.transform = a
    }
    if ($('#trigger-nav, .closed, .siteoverlay') .click(function (e) {
      $('body, main, header, nav, #trigger-nav, footer, .siteoverlay') .toggleClass('js-nav-open'),
      e.preventDefault()
    }), $(window) .width() > 767 && ($('#welcome') .vide({
      mp4: '/videos/video-home.mp4',
      ogv: '/videos/video-home.ogv',
      webm: '/videos/video-home.webm',
      poster: './img/sprengel_outside_mobile.jpg'
    }), $('#bgvid-404') .vide({
      mp4: '/videos/video-404.mp4',
      ogv: '/videos/video-404.ogv',
      webm: '/videos/video-404.webm',
      poster: '/images/videos/video-404-placeholder.min.jpg'
    }), $('#bgvid-culture') .vide({
      mp4: '/videos/video-culture.mp4',
      ogv: '/videos/video-culture.ogv',
      webm: '/videos/video-culture.webm',
      poster: '/images/videos/video-culture-placeholder.min.jpg'
    }), $('.bg-vid') .fadeIn(3000), $('#sect-video .overlay') .stop() .animate({
      opacity: 0.6
    })), $('.wpcf7-list-item-label') .click(function (e) {
      $(this) .toggleClass('checked'),
      e.preventDefault()
    }), $('.wpcf7-list-item-label, label') .bind('click', function () {
      var e = $(this) .find(':checkbox'),
      o = $(this) .find(':radio');
      e.attr('checked', !e.attr('checked')),
      o.attr('checked', !o.attr('checked'))
    }), $('.js-parallax') .each(function () {
      $(this) .parallax('50%', 0.5, !0)
    }), $('#sect-video') .length > 0) {
      var o = function () {
        var o = document.getElementById('sect-video'),
        a = window.scrollY / 2;
        e(o, a)
      };
      $(document) .ready(function () {
        $(window) .on('scroll', o)
      })
    }
    var a = $('header.header-main'),
    t = $('.dl-trigger');
    if ($(window) .scroll(function () {
      var e = $(window) .scrollTop();
      e >= 10 ? (a.addClass('sticky') .addClass('fade-down'), t.addClass('sticky'))  : (a.removeClass('sticky') .removeClass('fade-down'), t.removeClass('sticky'))
    }), $('.spin') .length > 0) {
      var i = $('.spin'),
      s = 100;
      $(window) .scroll(function () {
        var e = $(this) .scrollTop();
        s = e / 4;
        var o = 'rotate(' + s + 'deg)';
        i.css({
          '-ms-transform': o,
          '-moz-transform': o,
          '-webkit-transform': o,
          transform: o
        })
      })
    }
    $('a[href^="#"]') .on('click', function (e) {
      e.preventDefault();
      var o = '#js-scrolly',
      a = $(o);
      $('html, body') .stop() .animate({
        scrollTop: a.offset() .top - 70
      }, 600, 'swing')
    });
    var l = document.body,
    r;
    window.addEventListener('scroll', function () {
      clearTimeout(r),
      l.classList.contains('disable-hover') || l.classList.add('disable-hover'),
      r = setTimeout(function () {
        l.classList.remove('disable-hover')
      }, 100)
    }, !1);
    var n = 0;
    $('.sect-work article') .hide() .each(function () {
      $(this) .delay(n) .fadeIn(1000),
      n += 150
    }),
    $('.culture') .length > 0 && $('.icon-play') .hover(function () {
      $('.bg-vid') .stop() .animate({
        opacity: 1
      }),
      $('h2.message') .stop() .animate({
        opacity: 0
      }),
      $('h2.watch') .stop() .animate({
        opacity: 1
      }),
      $('.bg-static') .stop() .animate({
        opacity: 0.2
      }),
      $('.overlay') .stop() .css({
        'background-color': 'rgba(0,0,0,0.25)'
      })
    }, function () {
      $('.bg-vid') .stop() .animate({
        opacity: 0.4
      }),
      $('.bg-static') .stop() .animate({
        opacity: 0
      }),
      $('h2.message') .stop() .animate({
        opacity: 1
      }),
      $('h2.watch') .stop() .animate({
        opacity: 0
      }),
      $('.overlay') .stop() .css({
        'background-color': 'rgba(0,0,0,0.6)'
      })
    }),
    $('#bgvid-culture video') .css('display', 'none'),
    setTimeout(function () {
      $('#bgvid-culture video') .css('display', 'block'),
      $('#bgvid-culture video') .stop() .animate({
        opacity: '1'
      })
    }, 2000),
    /*$('a.btn_access') .hover(function () {
      $('.overlay') .toggleClass('overlay-alpha')
    }),*/
    $('.home .btn_access') .hover(function () {
      $('hr.sep') .toggleClass('sep-wide')
    }),
    $('.js-scrolldown') .hover(function () {
      $('.overlay') .toggleClass('overlay-dark')
    }),
    $('#js-grid') .mixitup({
      effects: [
        'fade',
        '',
        'blur'
      ]
    })
  })
}) .call(this);
var appendthis = '<div class=\'js-overlay\'></div>';
$('.js-modal') .click(function (e) {
  $('body') .addClass('fixed') .append(appendthis),
  $('.js-overlay') .fadeTo(500, 0.97),
  $('.js-modalbox') .fadeIn(500) .addClass('display-table'),
  $('#video') .show() .html('<iframe src="http://player.vimeo.com/video/64269239?title=0&amp;byline=0&amp;portrait=0&amp;color=d01e2f&amp;autoplay=1?api=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),
  e.preventDefault()
}),
$('.js-close-modal') .click(function () {
  $('article[class^=\'js-modal\'], .js-overlay') .fadeOut(500, function () {
    $('.js-overlay, #video') .empty(),
    $('.js-modalbox') .removeClass('display-table')
  })
});

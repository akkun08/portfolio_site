// ハンバーガーメニュー
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".nav-links").addClass("active");
    } else {
      $(".nav-links").removeClass("active");
    }
  });

  $(".nav-links a").click(function () {
    $(".nav-links").toggleClass("active");
    $(".hamburger").toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".nav-links").addClass("active");
    } else {
      $(".nav-links").removeClass("active");
    }
  });
});

// モーダルウインドウ
$(function () {
  var winScrollTop;
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      winScrollTop = $(window).scrollTop();
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
    $(".js-modal-close").on("click", function () {
      $(".js-modal").fadeOut();
      $("body,html").stop().animate({ scrollTop: winScrollTop }, 100);
      return false;
    });
  });
});

// スムーススクロール
$(function () {
  $("a[href^='#']:not([herf='#'])").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 83;
    $("html, body").animate({ scrollTop: target }, 500);
    return false;
  });
});
// 要素をふわっと出す
$(function () {
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
});

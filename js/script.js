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
  let winScrollTop;
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      winScrollTop = $(window).scrollTop();
      let target = $(this).data("target");
      let modal = document.getElementById(target);
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
  $("a[href^='#']:not([href='#'])").click(function () {
    let target = $($(this).attr("href")).offset().top;
    target -= 73;
    $("html, body").animate({ scrollTop: target }, 500);
    return false;
  });
});

// 要素をふわっと出す
$(function () {
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
});
// スクロールでPageTopボタン表示関数
const pageTopVisi = () => {
  const pageTopBtn = document.getElementById("page_top");
  window.addEventListener("scroll", () => {
    const y = window.pageYOffset;
    if (y > 100) {
      setTimeout(function () {
        pageTopBtn.style.opacity = 1;
      }, 100);
    } else {
      setTimeout(function () {
        pageTopBtn.style.opacity = 0;
      }, 100);
    }
  });
}; // ここまでスクロールでPageTopボタン表示関数

$(function () {
  //htmlロード時の処理
  // #page-topをクリックした際の設定
  $("#page_top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });
});

/////////////////////////////////
// 画像、動画などの関連データの全ての読み込みが完了したら実行
/////////////////////////////////

$(window).on("load", function () {
  $(".loading").delay(5200).fadeOut("slow"); //ロゴを5.2秒でフェードアウトする記述
  // smoothScroll();
  pageTopVisi();
}); // ここまで

import { useEffect } from 'react';
import $ from 'jquery';

const useCarousels = (settings) => {
  useEffect(() => {
    $('.carousel').each(function () {
      const $t = $(this);
      const $forward = $('<span class="forward"></span>');
      const $backward = $('<span class="backward"></span>');
      const $reel = $t.children('.reel');
      const $items = $reel.children('article');

      let pos = 0;
      let leftLimit;
      let rightLimit;
      let itemWidth;
      let reelWidth;
      let timerId;

      if ($items.length > 1) {
        $t._update = function () {
          pos = 0;
          rightLimit = -(reelWidth - $(this).width());
          leftLimit = 0;
          $t._updatePos();
        };

        $t._updatePos = function () {
          $reel.css('transform', 'translate(' + pos + 'px, 0)');
        };

        $forward
          .appendTo($t)
          .hide()
          .mouseenter(function () {
            timerId = window.setInterval(function () {
              pos -= settings.carousels.speed;
              if (pos <= rightLimit) {
                window.clearInterval(timerId);
                pos = rightLimit;
              }
              $t._updatePos();
            }, 10);
          })
          .mouseleave(function () {
            window.clearInterval(timerId);
          });

        $backward
          .appendTo($t)
          .hide()
          .mouseenter(function () {
            timerId = window.setInterval(function () {
              pos += settings.carousels.speed;
              if (pos >= leftLimit) {
                window.clearInterval(timerId);
                pos = leftLimit;
              }
              $t._updatePos();
            }, 10);
          })
          .mouseleave(function () {
            window.clearInterval(timerId);
          });

        $(window).on('load', function () {
          reelWidth = $reel[0].scrollWidth;
          if (window.mobile) {
            $reel.css('overflow-y', 'hidden').css('overflow-x', 'scroll').scrollLeft(0);
            $forward.hide();
            $backward.hide();
          } else {
            $reel.css('overflow', 'visible').scrollLeft(0);
            $forward.show();
            $backward.show();
          }
          $t._update();
          $(window).on('resize', function () {
            reelWidth = $reel[0].scrollWidth;
            $t._update();
          }).trigger('resize');
        });
      }
    });
  }, [settings]);
};

export default useCarousels;

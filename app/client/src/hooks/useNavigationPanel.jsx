import { useEffect } from 'react';
import $ from 'jquery';

const useNavigationPanel = () => {
  useEffect(() => {
    $('<div id="navButton"><a href="#navPanel" class="toggle"></a></div>').appendTo('body');
    $('<div id="navPanel"><nav>' + $('#nav').navList() + '</nav></div>')
      .appendTo('body')
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        target: $('body'),
        visibleClass: 'navPanel-visible',
      });
  }, []);
};

export default useNavigationPanel;

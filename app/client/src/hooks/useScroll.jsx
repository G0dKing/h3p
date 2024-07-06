import { useEffect } from 'react';
import $ from 'jquery';

const useScroll = () => {
  useEffect(() => {
    $('.scrolly').scrolly();
  }, []);
};

export default useScroll;

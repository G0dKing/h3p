import { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-dropotron';

const useDropdowns = () => {
  useEffect(() => {
    $('#nav > ul').dropotron({
      mode: 'fade',
      speed: 350,
      noOpenerFade: true,
      alignment: 'center',
    });
  }, []);
};

export default useDropdowns;

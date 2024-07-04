import { } from "react";
import useBreakpoints from '@h/useBreakpoints';
import useInitialAnimations from '@h/useInitialAnimations';
import useDropdowns from '@h/useDropdowns';
import useScroll from '@h/useScroll';
import useNavigationPanel from '@h/useNavigationPanel';
import useCarousels from '@h/useCarousels';
import Home from "@p/Home";

const settings = {
  carousels: {
    speed: 4,
    fadeIn: true,
    fadeDelay: 250,
  },
};

function App() {



  return (
    <>
      <Home />
      )
    </>
  );
}

export default App;

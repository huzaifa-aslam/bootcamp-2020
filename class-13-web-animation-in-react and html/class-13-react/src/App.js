import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import useWebAnimations,{rubberBand} from "@wellyshen/use-web-animations";
import "./App.css";

function App() {
  // const { ref, playState,getAnimation } = useWebAnimations({
  //   keyframes: [

  //       { transform: 'translate(0,0)' },
  //       { transform: 'translate(440px,0)' }
  //     // Move by 500px
  //   ],
  //   timing: {
  //     // delay: 500, // Start with a 500ms delay
  //     duration: 5000, // Run for 1000ms
  //     iterations: 2, // Repeat once
  //     direction: "alternate", // Run the animation forwards and then backwards
  //     easing: "ease-in-out", // Use a fancy timing function
  //   },
  //   // onReady: ({ playState, animate, animation }) => {
  //   //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  //   // },
  //   // onUpdate: ({ playState, animate, animation }) => {
  //   //   // Triggered when the animation enters the running state or changes state
  //   // },
  //   // onFinish: ({ playState, animate, animation }) => {
  //   //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  //   // },
  //   // More useful options...
  // });


  const { ref, playState,getAnimation } = useWebAnimations({...rubberBand
  });


  const element = useRef(null);
  useEffect(() => {
    element.current.focus();
  }, []);
  return (
    <div>
      <input ref={element} type="text" />
      <div ref={ref} className="target">
        hello world
      </div>
      <button onClick={()=>{getAnimation().pause()}}>pouse</button>
      <button  onClick={()=>{getAnimation().play()}}>play</button>
    </div>
  );
}

export default App;

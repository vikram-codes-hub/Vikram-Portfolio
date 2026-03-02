import React, { useState, useEffect, useRef } from "react";

function Demo() {
  const cursorDotOutline = useRef();
  const cursorDot = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  let cursorVisible = useState(false);
  let { _x, _y } = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    let endX = window.innerWidth / 2;
    let endY = window.innerHeight / 2;

    document.addEventListener("mousemove", e => {
      toggleCursorVisibility(cursorDot.current, cursorDotOutline.current);

      endX = e.pageX;
      endY = e.pageY;
      cursorDot.current.style.top = endY + "px";
      cursorDot.current.style.left = endX + "px";
    });

    requestRef.current = requestAnimationFrame(
      animateDotOutline(endX, endY, cursorDotOutline.current)
    );
    return () => cancelAnimationFrame(requestRef.current);
  });

  function animateDotOutline(endX, endY, cDotOutline) {
    _x += (endX - _x) / delay;
    _y += (endY - _y) / delay;
    cDotOutline.style.top = _y + "px";
    cDotOutline.style.left = _x + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  }

  function toggleCursorVisibility(cDot, cDotOutline) {
    if (cursorVisible) {
      cDot.style.opacity = 1;
      cDotOutline.style.opacity = 1;
    } else {
      cDot.style.opacity = 0;
      cDotOutline.style.opacity = 0;
    }
  }

  return (
    <>
      <div ref={cursorDotOutline} />
      <div ref={cursorDot} />
    </>
  );
}

export default Demo;

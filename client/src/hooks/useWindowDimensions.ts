import { useState, useEffect } from "react";
import { windowObject } from "../types/types";

function getWindowDimensions(): windowObject {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

const useWindowDimensions = (): windowObject => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;

import { useEffect, useState } from "react";

const usePageOffsetY = () : number => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  return offset;

}

export default usePageOffsetY;
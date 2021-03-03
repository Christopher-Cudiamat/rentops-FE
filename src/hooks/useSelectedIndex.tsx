import { useState } from "react";


const useSelectedIndex = (initialValue: number = 0) : [number,  React.Dispatch<React.SetStateAction<number>>] => {

  const [value, setValue] = useState(initialValue)
  return [value, setValue]
  
};

export default useSelectedIndex;
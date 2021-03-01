import { useState } from "react";


const useToggle = (initialValue: boolean = false) : [boolean, () => void] => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = () => setValue(!value)
  return [value, toggleValue]
};

export default useToggle;
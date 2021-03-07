// import React, { useState } from 'react';

// const JestTest = () => {

//   const [buttonColor,setButtonColor] = useState("red");
//   const newButtonColor = buttonColor === "red" ? "blue" : "red";
//   const newButtonText = buttonColor === "red" ? "Change color to blue" : "Change color to red";

//   return (
//     <div>
//       <button
//         disabled={false}
//         onClick={() => setButtonColor(newButtonColor)}
//         style={{background: buttonColor}}>
//         {newButtonText}
//       </button>
//       <input type="checkbox"/>
//     </div>
//   );
// }

// export default JestTest;

///QUIZ 1
import React, { useState } from "react";

const JestTest = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ background: isDisabled ? "gray" : "blue" }}
        disabled={isDisabled}
      >
        Button
      </button>
      <input
        onClick={() => setIsDisabled(!isDisabled)}
        id="target-checkbox"
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
        type="checkbox"
      />
      <label htmlFor="target-checkbox">Disable button</label>
    </div>
  );
};

export default JestTest;

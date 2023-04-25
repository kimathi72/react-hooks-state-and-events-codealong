import React , {useState} from "react";


// function Toggle() {
//   const [isOn , setState] = useState("OFF")
//   function toggler (){
//     isOn === "OFF" ? setState("ON") : setState("OFF")
//   }
//   return <button onClick={toggler}>{isOn}</button>;
// }

// function Toggle() {
//   const [isOn , setState] = useState("OFF")
//   function toggler (){
//     isOn === "OFF" ? setState("ON") : setState("OFF")
//   }
//   return <button onClick={toggler}>{isOn}</button>;
// }
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;

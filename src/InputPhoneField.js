import { useState, useEffect, useRef } from "react";
import { formatPhone, checkAlienInput } from "./Utils";

export default function InputPhoneField() {
  const [inp, setInp] = useState("");
  const [inpLen, setInpLen] = useState(0);
  const [caretPos, setCaretPos] = useState(0);
  const inpRef = useRef();

  const handleChange = (event) => {
    setCaretPos(inpRef.current.selectionStart);

    // console.log(caretPos);
    const value = event.target.value;
    const key = event.nativeEvent.data;
    const res = formatPhone(value);
    console.log(caretPos, value.length);
    if (caretPos === value.length - 1) {
      console.log("yep");
      setCaretPos((prev) => {
        return prev + value.length - 1;
      });
    }
    setInpLen(res.length);
    setInp(checkAlienInput(key) ? res : inp);
  };

  useEffect(() => {
    console.log("Done afterwards");
    // console.log(inpRef.current.value.length);
    inpRef.current.selectionStart = caretPos;
    inpRef.current.selectionEnd = caretPos;
  }, [inp]);

  return (
    <div className="App">
      <form>
        <input
          ref={inpRef}
          type="tel"
          value={inp}
          data-testid="inputfield"
          onChange={handleChange}
          placeholder="Mobile Number"
        />
      </form>
    </div>
  );
}

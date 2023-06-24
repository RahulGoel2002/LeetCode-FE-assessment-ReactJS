import { useState } from "react";
import { formatPhone, checkAlienInput } from "./Utils";

export default function InputPhoneField() {
  const [inp, setInp] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.nativeEvent.data;
    setInp(checkAlienInput(key) ? formatPhone(value) : inp);
  };

  return (
    <div className="App">
      <form>
        <input
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

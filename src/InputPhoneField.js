import { useState } from "react";
import { formatPhone, checkAlienInput } from "./Utils";

export default function InputPhoneField() {
  const [inp, setInp] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInp(formatPhone(value));
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

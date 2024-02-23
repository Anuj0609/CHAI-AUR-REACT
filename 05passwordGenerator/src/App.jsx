import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberIn, setnumberIn] = useState(false);
  const [charIn, setcharIn] = useState(false);
  const [password, setpassword] = useState("");

  // useref hook
  const passwordRef=useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberIn) str += "0123456789";

    if (charIn) str += "~`!@#$%^&*()_-+={}[]";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberIn, charIn,setpassword]);

  const copyPasswordToClipboard=useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberIn, charIn, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">f Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length={length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberIn}
              id="numberInput"
              onChange={() => {
                setnumberIn((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div>
            {" "}
            <input
              type="checkbox"
              defaultChecked={numberIn}
              id="charcaterInput"
              onChange={() => {
                setcharIn((prev) => !prev);
              }}
            />
            <label htmlFor="charcaterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

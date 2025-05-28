import React, { useEffect } from 'react';
import {useState , useCallback ,useRef} from 'react';

function App() {
  const [password,setpassword] = useState("")
  const [length,setlength] = useState(8)
  const [letters,setletters] = useState(false)
  const [numbers,setnumbers] = useState(false)
  const [symbols,setsymbols] = useState(false)
  const passwordRef =useRef(null)
  const generatePassword = useCallback(()=>{
      let pass=""
      let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numbers) {
        string += "0123456789"
      }
      if(symbols){
        string += "!@#$%^&*()_+[]{}|;:,.<>?"
      }
      for(let i=1;i<length;i++){
        let char=Math.floor(Math.random()*string.length + 1)
        pass += string.charAt(char)
      }
      setpassword(pass)
  },[length,letters,numbers,symbols])

  const copypassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("password copied to clipboard!")
  },[password])

  useEffect(()=>{
    generatePassword()
  },[length,letters,numbers,symbols])

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 px-4">
      <div className="bg-gray-900 w-full max-w-xl p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-white text-3xl font-bold text-center mb-4">🔐 Password Generator</h1>
        
        {/* Password display */}
        <div>
  <input
    type="text"
    value={password}
    readOnly
    ref={passwordRef}
    className="w-full bg-gray-700 text-white text-lg font-mono p-4 rounded-md text-center"
  />
</div>

        {/* Range slider */}
        <div>
          <label className="block text-white mb-2 font-medium">Password Length</label>
          <input 
          onChange={(e)=>{
            setlength(e.target.value)
          }}
            type="range" 
            min="8" 
            max="30" 
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer" 
          />
        </div>

        {/* Checkbox options */}
        <div className="grid grid-cols-2 gap-4 text-white">
          <label className="flex items-center space-x-2">
            <input onChange={()=>{
              setletters((letters)=>!letters)
            }}
            type="checkbox" className="accent-purple-500" />
            <span>Include Letters</span>
          </label>
          <label className="flex items-center space-x-2">
            <input onChange={()=>{
              setnumbers((numbers)=>!numbers)
            }} 
            type="checkbox" className="accent-purple-500" />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input onChange={()=>{
              setsymbols((symbols)=>!symbols)
            }}
            type="checkbox" className="accent-purple-500" />
            <span>Include Symbols</span>
          </label>
        </div>
        <button
          onClick={copypassword}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Copy Password
        </button>
      </div>
    </div>
  );
}

export default App;

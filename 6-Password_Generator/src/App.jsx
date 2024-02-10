import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  // useRef hook
  const passwordRef = useRef(null)


  // callback is used to memoize the function
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<=length; i++){
      let charIdx = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(charIdx)
    }
    
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])
  // above 'setPassword' is given as a parameter for memoization | to kept cache | optimize | 


  // whenever our page refresh or renders it calls at first && if value presents in the dependency array got changed this will be called 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])  


  const copyPassswordToClicpboard = useCallback(() => {
    passwordRef.current?.select()   //it will highlight the copied text
    passwordRef.current?.setSelectionRange(0, 30)  //range wise selection
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>
      <>
        <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800'>
          <p className='text-white text-center my-8 text-4xl'>Password Generator</p>
          <div className='flex shadow-md rounded-lg overflow-hidden mb-8'>
            <input type="text" value={password} className='outline-none w-full py-2 px-3 text-2xl' placeholder='password' readOnly ref={passwordRef} />
            <button className='online-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-2xl active:bg-blue-600' onClick={copyPassswordToClicpboard}>copy</button>
          </div>

          <div className='flex text-xl gap-x-4 mb-4'>
            <div className='flex items-center gap-x-1'>
              <input id='range' type="range" min={6} max={30} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
              <label htmlFor='range'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}} />
              {/* above setNumberAllowed will set opposite boolean value of current value */}

              <label htmlFor='numberInput'>Numbers</label>
             </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={characterAllowed} id='charInput' onChange={() => {setCharacterAllowed((prev) => !prev)}} />
              <label htmlFor='charInput'>Characters</label>
             </div>
          </div>
        </div>
      </>
    </>
  )
}

export default App

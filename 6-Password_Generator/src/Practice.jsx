import { useState, useCallback, useEffect, usere, useRef} from "react"
import './App.css'

function Practice() {

    const [length, setLength] = useState(6)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charaAllowed, setCharaAllowed] = useState(false)
    const [password, setPassword] = useState("")


    // to use useRef we have make a variable using it
    // ref hook
    const passwordRef = useRef(null)  //null = default Value


    const passwordGenerator = useCallback(()=>{ //useCallback is a React Hook that lets you cache a function definition between re-renders

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charaAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for(let i=0; i<length; i++){
            let charIdx = Math.floor(Math.random()*str.length+1);
            pass += str.charAt(charIdx)
        }
        setPassword(pass)

    },[length, numberAllowed, charaAllowed, setPassword])
    // why i give setPassword instead of password? ans this.
    // above 'setPassword' is given as a parameter for memoization | to kept cache | optimize | 


    // whenever our page refresh or renders it calls at first && if value presents in the dependency array got changed this will be called 
    useEffect(()=>{
        passwordGenerator()
    }, [length, numberAllowed, charaAllowed, passwordGenerator])


    const copyPassswordToClicpboard = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 20)
        window.navigator.clipboard.writeText(password)
    },[password])

    return(
        <>
            <div className="w-full max-w-lg mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-2">
                <h1 className="text-4xl text-center">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden my-4">
                    <input type="text" value={password} className="outline-none w-full px-3 py-2 text-lg" placeholder="password" readOnly ref={passwordRef} />
                    {/* now we have reference */}
                    <button className="hover:bg-blue-600 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassswordToClicpboard}>copy</button>
                </div>
                <div className="flex justify-between text-md gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" id="size" min={6} max={20} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
                        <label htmlFor="size">Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => setNumberAllowed(prev => !prev)} />  
                        {/* assume prev value is false so reverse of it is true || value will be flip */}
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={charaAllowed} id="charaInput" onChange={() => setCharaAllowed(prev => !prev)} />  
                        {/* assume prev value is false so reverse of it is true || value will be flip */}
                        <label htmlFor="charaInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Practice

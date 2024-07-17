import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  const changeToPink = () => {
    setColor("pink")
  }

  return (
    <div className="w-full flex h-screen items-start pb-16" style={{backgroundColor: color}}>
      <div className="mt-12 flex justify-around w-full border-4 border-black p-2 ml-6 mr-6 rounded-xl">
        <p onClick={()=> setColor("black")} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[#000] text-white">Black</p>
        <p onClick={()=> setColor("red")} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[red] text-white">Red</p>
        <p onClick={()=> setColor("green")} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[#62b03b] text-black">Green</p>
        <p onClick={()=> setColor("yellow")} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[#e9e935] text-black">Yellow</p>
        <p onClick={()=> setColor("blue")} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[#353be9] text-white">blue</p>
        <p onClick={()=> setColor("orange")} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[#e98635] text-black">Orange</p>
        <p onClick={changeToPink} className="border-2 rounded-sm border-cyan-950 p-3 px-4 text-xl bg-[#de909d] text-black">Pink</p>
      </div>
    </div>
  )
}

export default App

import Sidebar2 from "./Components/Sidebar2";
import { useState } from 'react';


function App() {
  const[mode,setMode]=useState("slate-900")
  const toggleMode = () =>{
    if(mode==="slate-900"){
      setMode("white")
      // showAlert("mode is enabled","Light ")
    }
    else if (mode==="white"){
      setMode("slate-900")
      // showAlert("mode is enabled","Dark ")
    }
  }
  return (
    <div>
      <Sidebar2 mode={mode} toggleMode={toggleMode} UserName="Jarvis" />
      
    </div>
  );
}

export default App;

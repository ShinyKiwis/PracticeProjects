import "./App.css"
import axios from "axios";
import {useState, useEffect} from "react"

function App() {
  const [advice, setAdvice] = useState("") 

  const fetchAdvice = () => {
      axios.get("https://api.adviceslip.com/advice").then((response)=>{
          setAdvice(response.data.slip.advice)
      }).catch((error)=>{
          console.log(error.message)
      })
  }

  useEffect(()=>{
      fetchAdvice()
  })

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={fetchAdvice}><span>Gimme an advice</span></button>
      </div>
    </div>
  );
}

export default App;

import Header from "./Component/Header.jsx"
import UserInput from "./Component/UserInput.jsx"
import { useState } from "react"
function App() {
  const [UserInput,setUserInput]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10,
    })

    function handleChange(inputIdentifier,newValue)
    {
        setUserInput(prevUserInput =>{
            return{
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }
  return (
    <>
    <Header/>
    <UserInput UserInput={UserInput} onChange={handleChange}/>
   

    </>
  )
}

export default App

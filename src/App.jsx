import { useState } from "react"
import Header from "./Component/Header.jsx"
import UserInput from "./Component/UserInput.jsx"
import Results from "./Component/Results.jsx"
function App(){
    const [UserInput,setUserInput]=useState({
        initialInvestment:10000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10,
    })
     function handleChange(inputIdentifier,newvalue)
    {
       setUserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputIdentifier]:newvalue
        }
       })
    }
  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={UserInput}/>
    <Results/>
    </>
  )
}

export default App

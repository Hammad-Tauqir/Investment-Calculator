import { useState } from "react"
function UserInput()
{
    const [UserInput,setUserInput]=useState({
        initialinvestment:10000,
        annualinvestment:1200,
        expectedreturn:6,
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
    return(
        <section id="user-input">
          <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required 
                 value={UserInput.initialinvestment}
                onChange={(event) => handleChange("initialinvestment",event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                 
                 <input type="number" required 
                 value={UserInput.annualinvestment}
                 onChange={(event) => handleChange("annualinvestment",event.target.value)}/>
            </p>
          </div>
           <div className="input-group">
            <p>
                <label>Expected Return</label>
                 <input type="number" required 
                 value={UserInput.expectedreturn}
                 onChange={(event) => handleChange("expectedreturn",event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                value={UserInput.duration}
                 onChange={(event) => handleChange("duration",event.target.value)}/>
            </p>
          </div>
        </section>
    )
}
export default UserInput
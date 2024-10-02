import React from "react"
import Template from "../components/Template"
import signUpImg  from '../assets/signup.png'
const Signup= ({setIsLoggedIn}) =>{
    return(
        <Template 
        title="Join the millions learning code with StudyNotion for free"
       desc1="Buid skills for today,tomorrow and beyond."
       desc2="Education to future proof your carrer."
       image={signUpImg}
       formtype="signup"
       setIsLoggedIn={setIsLoggedIn}
       />
    )
}
export default Signup
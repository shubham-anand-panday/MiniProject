import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InitialCheck.css"

export default function InitialCheck({setIsAuthenticated}){

    const [password, setPassword] = useState("");
    const correctPassword = "shubhamloveslaado";
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password === correctPassword){
            const expiry = Date.now() + 60 * 60 * 1000;
            localStorage.setItem("auth", JSON.stringify({expiry}))
            setIsAuthenticated(true);
            navigate("/first");
        }else{
            alert("Wrong password!");
            setPassword("");
        }
    }

    return(
        <div className="main-bg">
            <h1 className="input-heading">Enter the Password to Proceed</h1>
            <form onSubmit={handleSubmit} className="password-form">
                <input 
                type="password" 
                value={password}
                placeholder="Type your password..." 
                className="password-input"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className="instructions">
                <h1 className="inst-heading">Instructions</h1>
                <ul>
                    <li>This web app consists of 3–4 pages (excluding this login page).</li>
                    <li>Each page has a Next button to proceed.</li>
                    <li>If the button isn’t visible right away, please wait — it will appear shortly.</li>
                    <li>Some pages may have scrolling — explore to see all content.</li>
                    <li>Feel free to explore each page at your own pace and enjoy the experience!</li>
                    <li>Also, make sure to carefully follow the on-screen instructions given at
                        <br /> the top right of the screen.</li>
                </ul>
            </div>
        </div>
    )
}
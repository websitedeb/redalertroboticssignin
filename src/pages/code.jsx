import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import Spinner from "../comps/spinner";
import { useRef, useState } from "react";
import "./icon.css";

export function Auth(){
    const ref = useRef(0);
    const [copied, setState] = useState(false);

    async function Submition(formData){
        const response = await axios.post("/api/code/auth", {
            auth: formData.get("code")
        });
        return response.data;
    }

    // eslint-disable-next-line
    const { mutate, isLoading, isError, data } = useMutation({
        mutationFn: (formData) => Submition(formData),
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutate(formData);
    };

    function teller(){
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 1500);
    }

    const copy = () => {
        const code = ref.current.innerText;
        navigator.clipboard.writeText(code);
        teller();
    }

    if(isLoading){
        return <Spinner />
    }

    if(isError){
        return (
            <>
                <div id="main" className="block bg-gray-100 min-h-screen flex items-center justify-center">
                    <div className="alert alert-danger text-3xl text-center" role="alert">
                            <span>The Code wasn't Correct...</span>
                            <br></br>
                            <Link onClick={() => window.location.reload()}><i class="bi bi-arrow-clockwise"></i> Retry?</Link>
                            <span> or </span>
                            <Link to="/"><i class="bi bi-arrow-90deg-left"></i> Go back?</Link>
                    </div>
                </div>
                <Outlet />
            </>
        );
    }

    if(data){
        return (
            <>
                <div className={copied ? "alert alert-success text-xl text-center" : "hidden"} id="copied">
                    <i className="bi bi-check-lg"></i> Copied!
                </div>
                <div id="main" className="block bg-gray-100 min-h-screen flex items-center justify-center">
                    <div className="alert alert-success text-3xl text-center" role="alert">
                        <span ref={ref}>{data}</span>
                        <br></br> 
                        <Link to="/"><i class="bi bi-arrow-90deg-left"></i> Go back</Link> 
                        &nbsp;&nbsp; 
                        <button onClick={copy}><i class="bi bi-clipboard2-plus" id="copy_icon"></i></button>
                    </div>
                </div>
                <Outlet />
            </>
        );
    }

    return(
        <>
            <div id="main" className="block bg-gray-100 min-h-screen flex items-center justify-center">
                <div id="checker" className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                    <img 
                            src="https://www.redalert1741.org/wp-content/uploads/2024/01/red-alert-brinna-logo-red-letters-PNG-1024x964.png" 
                            alt="Red Alert Robotics Logo"
                            className="w-[200px] h-[200px] object-contain mx-auto"
                    />
                    <header className="text-2xl font-bold text-center mb-6">Red Alert Robotics Code</header>
                    <form id="form" onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input 
                                type="password" 
                                required 
                                placeholder="Passcode" 
                                name="code" 
                                id="name" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <button 
                            type="submit" 
                            id="btn" 
                            className="w-full py-3 bg-red-600 text-white text-3xl rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-all"
                        >
                            <i className="bi bi-check-lg"></i>
                            <span>Get Code</span>
                        </button>
                        <Link to="/" className="text-black text-center justify-center items-center text-xl text-center transition-all hover:text-red-600">
                            <i class="bi bi-arrow-90deg-left"></i>
                            &nbsp;
                            Go Back
                        </Link>
                    </form>
                </div>
            </div>
            <Outlet />
        </>
    )
}
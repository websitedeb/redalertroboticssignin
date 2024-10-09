import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useState } from "react";
import Spinner from "../comps/spinner";
import { Outlet, Link } from "react-router-dom";

export default function Signin() {
    let [test, setTest] = useState(null);

    function changeAlert(isSuccess) {
        if (isSuccess) {
            setTest("alert alert-success");
            setTimeout(() => {
                setTest("");  
            }, 4000);
        } else {
            setTest("alert alert-danger");
            setTimeout(() => {
                setTest("");  
            }, 4000);
        }
    }

    async function Redirect(formData) {
        const response = await axios.post("/api/signin", {
            name: formData.get("name"),
            date: formData.get("date"),
            code: formData.get("code"),
        });
        return response.data;
    }

    // eslint-disable-next-line
    const { mutate, isLoading, isError, data } = useMutation({
        mutationFn: (formData) => Redirect(formData),
        onSuccess: () => changeAlert(true),
        onError: () => changeAlert(false),
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutate(formData);
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Fragment>
            <div id="main" className="block bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                    <img 
                        src="https://www.redalert1741.org/wp-content/uploads/2024/01/red-alert-brinna-logo-red-letters-PNG-1024x964.png" 
                        alt="Red Alert Robotics Logo"
                        className="w-[200px] h-[200px] object-contain mx-auto"
                    />
                    <header className="text-2xl font-bold text-center mb-6">Red Alert Robotics Signin</header>
                    <form id="form" onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input 
                                type="text" 
                                required 
                                placeholder="Your (Full) Name" 
                                name="name" 
                                id="name" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <div>
                            <input 
                                type="datetime-local" 
                                required 
                                name="date" 
                                id="date" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <div>
                            <input 
                                type="number" 
                                required 
                                placeholder="Today's code" 
                                name="code" 
                                id="code" 
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                                min={10000}
                                max={99999}
                            />
                        </div>
                        <div className={test} role="alert">
                            {test === "alert alert-success" ? "Success!" : test === "alert alert-danger" ? "Error!" : ""}
                        </div>
                        <button 
                            type="submit" 
                            id="btn" 
                            className="w-full py-3 bg-red-600 text-white text-3xl rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-all"
                        >
                            <i className="bi bi-check-lg"></i>
                            <span>Sign In</span>
                        </button>
                        <Link to="/auth" className="text-black text-center justify-center items-center text-xl transition-all hover:text-red-600">
                            If you are a staff, click here and get the code
                        </Link>
                    </form>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

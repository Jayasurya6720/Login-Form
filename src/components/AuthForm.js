// src/components/AuthForm.js
import React, { useState } from "react";
import "./AuthForm.css";
import "boxicons/css/boxicons.min.css";

const AuthForm = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`container ${isActive ? "active" : ""}`}>
            {/* Login Form */}
            <div className="form-box login">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="forgot-link">
                        <a href="/">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <p>or login with social platforms</p>
                    <div className="social-icons">
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-google'></i></a>
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-facebook'></i></a>
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-github'></i></a>
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </form>
            </div>

            {/* Register Form */}
            <div className="form-box register">
                <form>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required />
                        <i className="bx bxs-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <p>or Register with social platforms</p>
                    <div className="social-icons">
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-google'></i></a>
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-facebook'></i></a>
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-github'></i></a>
                        <a href="/" onClick={(e) => e.preventDefault()} role="button"><i className='bx bxl-linkedin'></i></a>
                    </div>

                </form>
            </div>

            {/* Toggle Panels */}
            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account?</p>
                    <button className="btn register-btn" onClick={() => setIsActive(true)}>
                        Register
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Welcome Back!</h1>
                    <p>Already have an account?</p>
                    <button className="btn login-btn" onClick={() => setIsActive(false)}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;

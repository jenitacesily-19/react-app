import React from 'react'
import { useState } from 'react';
function Signin() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form was SuccessFully Submitted');

    }
    return (

        <div className="flex flex-col items-center justify-content-center p-6 min-h-screen bg-gray-50">
            <div className='bg-white shadow-lg rounded-2xl p-8  w-full max-w-lg'>
                <h1 className='text-2xl font-bold text-center mb-6'>Form Details</h1>
                <form className='mt-6 space-y-4'>
                    <legend>UserName</legend>
                    <input type="text"
                        placeholder="Enter name"
                        className='w-full border p-3 riunded-xl focus:ring-2
                                focus:ring-orannge-500 outline-none'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <legend>Password</legend>
                    <input type="password"
                        placeholder="enter password"
                        className='w-full border p-3 riunded-xl focus:ring-2
                                focus:ring-orannge-500 outline-none'
                        value={passWord}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <legend>ConfirmPassword</legend>
                    <input type="password"
                        placeholder="enter confirm password"
                        className='w-full border p-3 riunded-xl focus:ring-2
                                focus:ring-orannge-500 outline-none'
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                    />
                    <legend>Email</legend>
                    <input type="email"
                        placeholder=" enter mail"
                        className='w-full border p-3 riunded-xl focus:ring-2
                                focus:ring-orannge-500 outline-none'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <legend>PhoneNo</legend>
                    <input type="tel"
                        placeholder="Enter no"
                        className='w-full border p-3 riunded-xl focus:ring-2
                                focus:ring-orannge-500 outline-none'
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                    />
                    <button
                        className='w-full bg-orange-500 text-white py-3 rounded-xl
                             hover:bg-orange-600 transition'
                        onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
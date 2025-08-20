import { useState } from 'react';
const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = ((e) => {
        e.preventDefault();
    });
    return (
        <div className='flex flex-col items-center justify-content-center p-6 min-h-screen bg-gray-50'>
            <div className='bg-white shadow-lg rounded-2xl p-8  w-full max-w-lg'>
                <h1 className='text-2xl font-bold text-center mb-6'>Login Form</h1>
                <form className='mt-6 space-y-4'>
                    <legend>User Name</legend>
                    <input type="text"
                        placeholder="Enter a your user name"
                        className='w-full border p-3 riunded-xl focus:ring-2
                           focus:ring-orannge-500 outline-none'
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value)
                        }}
                        required
                    />
                    <legend>Password</legend>
                    <input type="text"
                        placeholder="enter your password"
                        className='w-full border p-3 riunded-xl focus:ring-2
                            focus:ring-orannge-500 outline-none'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                    />

                    <button type="submit"
                        className='w-full bg-orange-500 text-white py-3 rounded-xl
                             hover:bg-orange-600 transition'
                        onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

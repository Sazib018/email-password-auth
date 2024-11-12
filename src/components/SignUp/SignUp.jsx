import React from 'react';

const SignUp = () => {
    return (
        <div className='text-center mt-10'>
            <div className='border max-w-[700px] mx-auto p-6 rounded-lg'>
                <h1 className="text-4xl font-bold mb-10 text-cyan-600">Please Sign Up</h1>
                <form>
                    <input className='px-4 py-2 mb-6 w-full border-2 rounded-md' type="email" name='email' placeholder='Your Email' /> <br />
                    <input className='px-4 py-2 mb-6 w-full border-2 rounded-md' type="password" name='password' placeholder='Password' /><br />

                    <input className='px-4 py-2 mb-6 w-full btn btn-primary' type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
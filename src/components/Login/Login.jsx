import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase/firebase.utils';
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('');
    const [emailForgot, setEmailForgot] = useState('');

    const handelLogin = e => {
        e.preventDefault()

        setError('');
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Log In!')
            })
            .catch(err => {
                console.log(err);
                console.log(err.code);
                setError(err.message);

            })
    }

    const handelForgotPassword = () => {
        sendPasswordResetEmail(auth, emailForgot)
            .then(res => {
                console.log(res);
                toast.success('Please Check your email')
            })
            .catch(err => console.log(err)
            )
    }
    return (
        <div>
            <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center rounded-md">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
                    <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
                        Welcome to My Website
                    </h1>
                    <form onSubmit={handelLogin} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmailForgot(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                id="email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                id="password"
                                name="password"
                                type="password"
                            />
                            <label className="label">
                                <button
                                    onClick={handelForgotPassword}
                                    type="button"
                                    className="label-text-alt link link-hover hover:text-blue-500">
                                    Forgot password?
                                </button>
                            </label>

                        </div>
                        {error && <p className='text-red-600'>{error}</p>
                        }
                        <div className='text-center'>
                            <button type='submit' className=" bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-10 rounded-lg">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
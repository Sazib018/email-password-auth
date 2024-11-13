import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [signError, setSignError] = useState('')
    const [isSuccess, setIsSuccess] = useState('')
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate()

    const handleSignUP = e => {
        e.preventDefault()

        setSignError('')
        setIsSuccess('')
        
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            setSignError('Password at least 6 characters longer')
            return
        }
        else if (!(/(?=.*[A-Z])/.test(password))) {
            setSignError('At least one uppercase character')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setIsSuccess('Account Create Successfully.')
                navigate('/login')
            })
            .catch(err => setSignError(err.message))
    }



    return (
        <div className='text-center mt-10'>
            <div className='border max-w-[700px] mx-auto p-6 rounded-lg'>
                <h1 className="text-4xl font-bold mb-10 text-cyan-600">Please Sign Up</h1>
                <form onSubmit={handleSignUP}>
                    <input className='px-4 py-2 mb-6 w-full border-2 rounded-md' type="email" name='email' placeholder='Your Email' required /> <br />

                    <div className='relative mb-6 w-full'>
                        <input
                            className='px-4 py-2 w-full border-2 rounded-md pr-10' type={isShow ? "text" : "password"} name='password' placeholder='Password' required />
                        <button className='absolute inset-y-0 right-3 flex items-center text-2xl' onClick={() => setIsShow(!isShow)}
                            type="button" > {isShow ? <IoIosEye /> : <IoIosEyeOff />}
                        </button>
                    </div> <br />
                    <input className='px-8 py-2 mb-6  btn btn-primary text-white' type="submit" value="Sign Up" />
                </form>

                {
                    signError && <p className='text-red-600'>{signError}</p>
                }

                {
                    isSuccess && <p className='text-green-600'>{isSuccess}</p>
                }
            </div>
        </div>
    );
};

export default SignUp;
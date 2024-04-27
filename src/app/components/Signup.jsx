"use client"

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';


import { HiInformationCircle } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { Alert } from 'flowbite-react';



const Signupcomponent = () => {
  const [proceedForm, setproceedForm] = useState(false);
  const { register, handleSubmit, getValues, reset, formState: { errors }, } = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    try {
      const { email, password } = data;
      // Send data to server or perform other actions
      createUserWithEmailAndPassword(auth, email, password);
      setproceedForm(true);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-dark">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign up
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                    })}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.email && <Alert color="failure" icon={HiInformationCircle}><span className="font-medium">Info alert!</span> {errors.email.message} </Alert>}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.password &&
                  <Alert color="failure" icon={HiInformationCircle}>
                    <span className="font-medium">Info alert!</span> {errors.password.message}
                  </Alert>

                }
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password Again
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword', {
                      required: 'Confirm password is required',
                      validate: (value) =>
                        value === getValues().password || 'Passwords do not match',
                    })}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.confirmPassword && (
                  <Alert color="failure" icon={HiInformationCircle}>
                    <span className="font-medium">Info alert!</span> {errors.confirmPassword.message}
                  </Alert>
                )}
              </div>

              <div>
                <button
                  type="submit" className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign Up
                </button>
                {proceedForm && <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
                  <span className="font-medium">Success</span> Your registered an Account
                </Alert>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signupcomponent

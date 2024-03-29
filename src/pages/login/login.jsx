import React from 'react';
import { useForm } from 'react-hook-form';
import Input from "../../components/input/input";
import { useLogin } from './service/useLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const { register, reset, handleSubmit } = useForm();
    const { mutate, isPending } = useLogin();

    const submit = async (data) => {
        mutate(data,{
            onSuccess:(res)=>{
                console.log(res);

            },
            onError:()=> {

            }
        })
       
    };

    return (
        <div className=" bg-admin-gradient fixed inset-0">
            <form className='w-[400px] p-5 rounded-lg bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' onSubmit={handleSubmit(submit)}>
                <Input 
                    {...register('email', { required: true })} 
                    type="email" 
                    className='border w-full mb-3 py-1 px-1 rounded-lg'
                    name="email"
                    placeholder="Email"
                />
                <Input 
                    {...register('password', { required: true })} 
                    type="password" 
                    className='border w-full py-1 px-1 mb-3 rounded-lg'
                    name="password"
                    placeholder="Password"
                />
                <button className='w-full bg-loginBg text-white py-1 rounded-lg hover:scale-105'>Login</button>
            </form>
            <ToastContainer /> {/* This component renders the toast notifications */}
        </div>
    );
};

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginDashboard = () => {
  const [loginModeSelected, setloginModeSelected] = useState<number>(0); //0 for log in and 1 for sign up
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [loginButtonDisabled, setloginButtonDisabled] = useState<boolean>(true)
  const router=useRouter()

  const handleLogin = async () => {
    try {
      if (loginModeSelected === 0) {
        //assuming the login is success for now
        const res=await axios.post('/api/login',{email,password})
        if(res.status===200 || res.status===201){
          toast.success(res?.data.message,{
            position:'bottom-right'
          })
          router.push('/dashboard')
        }
      } else {
        if (password !== confirmPassword) {
          toast.error("Passwords don't match", {
            position: "bottom-right",
          });
        }else{
          const res=await axios.post('/api/login',{email,password})
          if(res.status===200 || res.status===201){
            toast.success(res?.data.message,{
              position:'bottom-right'
            })
            router.push('/dashboard')
          }
        }
      }
    } catch (error) {
      console.log(error, "err while login");
    }
  };

  useEffect(()=>{
    if(loginModeSelected===0){
      if(email==="" || password===""){
        setloginButtonDisabled(true)
      }else{
        setloginButtonDisabled(false)
      }
    }else{
      if(email==="" || password==="" || confirmPassword===""){
        setloginButtonDisabled(true)
      }else{
        setloginButtonDisabled(false)
      }
    }
  },[email,password,confirmPassword,loginModeSelected])

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="w-80 bg-gray-800 rounded-md p-6">
        <h1 className="text-3xl text-green-400 font-bold text-center mb-4">
          {loginModeSelected == 0 ? "LOG IN" : "Sign Up"}
        </h1>
        <p className="text-white text-center mb-5">
          {loginModeSelected === 0
            ? "Sign In To Your Account"
            : "Create your account"}
        </p>
        <div>
          <input
            type="email"
            className="w-full bg-transparent border-t border-b border-gray-500 
                       pt-2 pb-2 pl-4 text-white placeholder-gray-400 focus:outline-none"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            className="w-full bg-transparent border-b border-gray-500 
                       pt-2 pb-2 pl-4 text-white placeholder-gray-400 focus:outline-none"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        {loginModeSelected === 1 && (
          <div>
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-500 
                       pt-2 pb-2 pl-4 text-white placeholder-gray-400 focus:outline-none"
              placeholder="CONFIRM PASSWORD"
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />
          </div>
        )}
        <div className="w-full flex items-center justify-center mt-6">
          <button
            className={`bg-red-500 hover:bg-red-600 transition-colors text-white 
                px-4 py-2 rounded-md w-2/3 
                ${loginButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => {
              handleLogin();
            }}
            disabled={loginButtonDisabled}
          >
            {loginModeSelected == 0 ? "Log In" : "Sign Up"}
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          {loginModeSelected === 0
            ? "Don't have an account? "
            : "Already have an account? "}
          {loginModeSelected === 0 ? (
            <span
              className="text-green-400 cursor-pointer hover:underline"
              onClick={() => {
                setloginModeSelected(1);
                setemail("");
                setpassword("");
                setconfirmPassword("");
              }}
            >
              Sign Up
            </span>
          ) : (
            <span
              className="text-green-400 cursor-pointer hover:underline"
              onClick={() => {
                setloginModeSelected(0);
                setemail("");
                setpassword("");
                setconfirmPassword("");
              }}
            >
              Log In
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;

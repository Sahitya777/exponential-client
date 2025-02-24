import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginDashboard = () => {
  const [loginModeSelected, setloginModeSelected] = useState<number>(0); //0 for log in and 1 for sign up
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
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
          const res=await axios.post('/api/login',{email,password})
          if(res.status===200 || res.status===201){
            toast.success(res?.data.message,{
              position:'bottom-right'
            })
            router.push('/dashboard')
          }
        }
    } catch (error) {
      // @ts-ignore
      toast.error(error?.response?.data?.message , {
        position: 'bottom-right'
      });
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
      if(email==="" || password===""){
        setloginButtonDisabled(true)
      }else{
        setloginButtonDisabled(false)
      }
    }
  },[email,password,loginModeSelected])

  return (
    <div className="min-h-screen bg-black flex flex-col  justify-center items-center">
        <h1 className="text-3xl text-green-400 font-bold text-center mb-4">
          {loginModeSelected == 0 ? "LOG IN" : "SIGN UP"}
        </h1>
      <div className="w-80 bg-[#201b26] rounded-sm p-4 pl-0 pr-0">
        <p className="text-[#c7c2cf] text-center mb-5 font-bold ">
          {loginModeSelected === 0
            ? "Sign In To Your Account"
            : "Create your account"}
        </p>
        <div>
          <input
            type="email"
            className="w-full bg-transparent border-t border-b border-[#605275] 
                       pt-4 pb-4 pl-8 text-white placeholder-[#8e9599] focus:outline-none"
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
            className="w-full bg-transparent border-b border-[#605275] 
                       pt-4 pb-4 pl-8 text-white placeholder-[#8e9599] focus:outline-none"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex items-center justify-center mt-6">
          <button
            className={`bg-[#df2d4b] hover:bg-red-600 transition-colors text-white 
                px-4 py-2 rounded-sm w-2/3 
                ${loginButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => {
              handleLogin();
            }}
            disabled={loginButtonDisabled}
          >
            {loginModeSelected == 0 ? "Log In" : "Sign Up"}
          </button>
        </div>
        <div className="mt-2 text-center text-white">
          {loginModeSelected === 0 ? (
            <span
              className="text-[#8e9599] text-sm cursor-pointer hover:underline"
              onClick={() => {
                setloginModeSelected(1);
                setemail("");
                setpassword("");
              }}
            >
              OR SIGN UP
            </span>
          ) : (
            <span
              className="text-[#8e9599] text-sm cursor-pointer hover:underline"
              onClick={() => {
                setloginModeSelected(0);
                setemail("");
                setpassword("");
              }}
            >
              OR LOG IN
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;

import { error } from 'console';
import React, { Children, createContext,ReactNode, useContext, useState } from 'react'

interface LoginData {
    email:string;
    password:string;
}
interface SignupData {
  username: string;
  email: string;
  password: string;
}



interface AuthTypes {
  loginData: LoginData;
  setLoginData: React.Dispatch<React.SetStateAction<LoginData>>;
  signupData: SignupData;
  setSignupData: React.Dispatch<React.SetStateAction<SignupData>>;
  emailData:boolean;
  setEmailData:React.Dispatch<React.SetStateAction<boolean>>;
  loading:boolean;
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}



const AuthContext = createContext<AuthTypes | undefined>(undefined);

const AuthProvider = ({children}:{children:ReactNode}) => {
    const [loginData,setLoginData] = useState<LoginData>({
        email:"",
        password:"",
    });

    const [signupData,setSignupData] = useState<SignupData>({
        username:"",
        email:"",
        password:"",
    })

    const [emailData,setEmailData] = useState<boolean>(true)

    const [loading,setLoading] = useState<boolean>(true);

    return (
        <AuthContext.Provider value={{ loginData,setLoginData, signupData,setSignupData,emailData,setEmailData,loading,setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthProvider, AuthContext };

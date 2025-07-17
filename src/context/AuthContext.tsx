import { error } from "console";
import React, {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface LoginData {
  email: string;
  password: string;
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
  emailData: boolean;
  setEmailData: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  selectedSize:string;
  setSelectedSize:React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthTypes | undefined>(undefined);
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
  });

  const [emailData, setEmailData] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);

  const [quantity, setQuantity] = useState<number>(1);

  const [selectedSize, setSelectedSize] = useState<string>("M");


  return (
    <AuthContext.Provider
      value={{
        loginData,
        setLoginData,
        signupData,
        setSignupData,
        emailData,
        setEmailData,
        loading,
        setLoading,
        quantity,
        setQuantity,
        selectedSize,
        setSelectedSize
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

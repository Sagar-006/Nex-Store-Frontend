
import React, {
  createContext,
  ReactNode,
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
export interface ShippingAddress {
  firstname:string;
  lastname:string;
  street:string;
  zip:string;
  city:string;
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
  login:boolean;
  setLogin:React.Dispatch<React.SetStateAction<boolean>>;
  finalPrice:number;
  setFinalPrice:React.Dispatch<React.SetStateAction<number>>;
  shippingAddress:ShippingAddress;
  setShippingAddress:React.Dispatch<React.SetStateAction<ShippingAddress>>;
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

  const [shippingAddress,setShippingAddress] = useState<ShippingAddress>({
    firstname:"",
    lastname:"",
    street:"",
    city:"",
    zip: "",
  })
  const [emailData, setEmailData] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);

  const [quantity, setQuantity] = useState<number>(1);

  const [selectedSize, setSelectedSize] = useState<string>("M");

  const [login, setLogin] = useState<boolean>(false);

  const [finalPrice, setFinalPrice] = useState<number>(0);

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
        setSelectedSize,
        login,
        setLogin,
        finalPrice,
        setFinalPrice,
        shippingAddress,
        setShippingAddress,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

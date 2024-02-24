import React from "react";
import MainLayout from "../components/layout/MainLayout";
import LoginForm from "../components/authform/LoginForm";
const Login = () => {
    return ( 
        <MainLayout>
            <main className=" flex flex-col items-center w-screen">
            <LoginForm/>
            </main>
        </MainLayout>
     );
}
 
export default Login;
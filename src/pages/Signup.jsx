import React from "react";
import MainLayout from "../components/layout/MainLayout";
import SignupForm from "../components/auth/SignupForm"

const Signup = () => {
    return ( 
        <MainLayout>
            <main className=" flex flex-col items-center w-screen">
            <SignupForm/>
            </main>
        </MainLayout>
     );
}
 
export default Signup;
import React from "react";
import { useState } from "react";

//components
import Button from "../ui/Button";
import Input from "../ui/Input";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="p-5 md:p-10 rounded-3xl bg-white w-[calc(100vw-40px)] max-w-[500px] flex flex-col gap-2 h-fit">
      <h3 className="text-xl md:text-2xl font-semibold md:text-left text-center">
        Create Ur Account
      </h3>

      <form className="flex flex-col items-end gap-4 ">
        <Input
          label={"Email"}
          name={"title"}
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required={true}
        />

        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required={true}
        />
        <Input
          label={"Confirm Password"}
          name={"password"}
          type={"password"}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          required={true}
        />

        <Button
          type={"submit"}
          onClick={handleSubmit}
          variation={"secondary"}
          className={"w-full"}
        >
          Create Account
        </Button>

        <p className=" w-full text-center">
          Already have an acoount? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

import { useState } from "react";
import { Link } from "react-router-dom";
import { CommonForm } from "@/components/common/CommonForm";
import { registerFormControls } from "@/config";

const initialState = {
  userName: "",
  email: "",
  password: ""
};

export default function Signup() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign Up</h1>
        <CommonForm formControls={registerFormControls} buttonText={"Sign Up"} formData={formData} setFormData={setFormData} onSubmit={onSubmit} />
        <p className="mt-2">
          Already have an account? <Link className="font-medium text-primary hover:underline" to="/auth/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
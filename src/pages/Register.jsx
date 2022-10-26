import React from "react";
import { FormHeader, SignUp } from "../components";

const Register = () => {
  return (
    <>
      <FormHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <SignUp />
    </>
  );
};

export default Register;

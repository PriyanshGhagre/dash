import { useState } from "react";
import { signupFields } from "../data/content";
import { FormAction, FormInput } from "../components";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const SignUp = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const createAccount = () => {};

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="mt-8 space-y-6 w-1/3" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <FormInput
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;

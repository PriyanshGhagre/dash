import { useState } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { FormHeader, FormInput, FormExtra, FormAction } from "../components";
import {} from "../components";
import { loginFields } from "../data/content";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {};

  return (
    <>
      <FormHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/register"
      />
      <div className="flex flex-col items-center justify-center">
        <form className="mt-8 space-y-6 w-1/3">
          <div className="-space-y-px">
            {fields.map((field) => (
              <FormInput
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          {/* <FormExtra /> */}
          <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;

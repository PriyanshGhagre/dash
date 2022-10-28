import { useState } from "react";
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
    // console.log(e)
    authenticateUser();
  };

  const authenticateUser = () => {
    fetch("http://localhost:8000/api/v1/login", {
      method: "POST",
      body: JSON.stringify(loginState),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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

          {/* <FormAction handleSubmit={handleSubmit} text="Login" /> */}
          <button
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onClick={handleSubmit}
        >Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

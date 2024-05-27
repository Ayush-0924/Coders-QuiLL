import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handelonchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handelonSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setIsLoading(true);
      setErrorMessage(false);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      setIsLoading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-5xl">
            <span className=" px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-red-400 rounded-lg text-white">
              Tech
            </span>
            Tales
          </Link>
          <p className="text-sm mt-5">
            This is a demo project .You can sign up with your email and password
            or with google
          </p>
        </div>
        {/* right side */}
        <div className="flex-1 ">
          <form className="flex flex-col gap-4" onSubmit={handelonSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handelonchange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handelonchange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Passsword"
                id="password"
                onChange={handelonchange}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-indigo-600 via-purple-500 to-red-400"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3 ">Loading...</span>
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span> Have and account</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

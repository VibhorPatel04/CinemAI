import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen w-full">
      <Header />
      <img
        alt="bg-image"
        className=" w-full h-screen"
        aria-hidden="true"
        data-uia="nmhp-card-hero+background+image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
      ></img>
      <div className="h-screen w-full bg-[rgb(0,0,0,0.4)] top-0 z-0  absolute"></div>
      <div className="absolute z-10 top-36 left-[35%] bg-[rgba(0,0,0,0.7)] px-12 py-14">
        <header>
          <h2 className="text-3xl text-white font-bold mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
        </header>
        <form>
          {isSignInForm ? "" : (
            <input
              type="text"
              placeholder="Full Name"
              className="mb-3 block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff] transition"
            />
          ) }
          <input
            type="email"
            placeholder="Email Address"
            className="block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff] transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-3 block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff]  transition"
          />
          <button className="mt-3 block w-72 bg-[rgb(229,9,20)]  rounded text-white px-6 py-2 text-base hover:bg-[rgb(193,17,25)] cursor-pointer transition">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="mt-3 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In Now."}
          </p>
        </form>
        <footer></footer>
      </div>
    </div>
  );
};

export default Login;

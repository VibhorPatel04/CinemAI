import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {PHOTOURL} from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const useName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // valid the form data
    // checkValidData(email, password);

    let message = null;
    if (!isSignInForm && useName.current) {
      message = checkValidData(
        useName.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      message = checkValidData(
        null,
        email.current.value,
        password.current.value
      );
    }
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: useName.current.value, photoURL: {PHOTOURL}
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid, email : email, displayName: displayName, photoURL : photoURL}));
           
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
      ></img>
      <div className="h-screen w-full bg-[rgb(0,0,0,0.4)] top-0 z-0  absolute"></div>
      <div className="absolute z-10 top-36 left-[35%] bg-[rgba(0,0,0,0.7)] px-12 py-14">
        <header>
          <h2 className="text-3xl text-white font-bold mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
        </header>
        <form onSubmit={(e) => e.preventDefault()}>
          {isSignInForm ? (
            ""
          ) : (
            <input
              ref={useName}
              type="text"
              placeholder="Full Name"
              className="mb-3 block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff] transition"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff] transition"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mt-3 block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff]  transition"
          />
          {errorMessage ? (
            <p className="text-[rgb(229,9,20)] font-bold pt-3 w-72">
              {errorMessage}
            </p>
          ) : (
            ""
          )}
          <button
            className="mt-3 block w-72 bg-[rgb(229,9,20)]  rounded text-white px-6 py-2 text-base hover:bg-[rgb(193,17,25)] cursor-pointer transition"
            onClick={handleButtonClick}
          >
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

import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import {BG_IMG_SRC, BG_IMG_SRCSET, PHOTOURL} from "../utils/constants";
import lang from "../utils/languageConstant";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const langKey = useSelector(store => store.config.lang);
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
        src={BG_IMG_SRC}
        srcSet={BG_IMG_SRCSET}
      ></img>
      <div className="h-screen w-full bg-[rgb(0,0,0,0.4)] top-0 z-0  absolute"></div>
      <div className="absolute z-10 top-36 left-[35%] bg-[rgba(0,0,0,0.7)] px-12 py-14">
        <header>
          <h2 className="text-3xl text-white font-bold mb-7">
            {isSignInForm ? lang[langKey].signIn : lang[langKey].signUp}
          </h2>
        </header>
        <form onSubmit={(e) => e.preventDefault()}>
          {isSignInForm ? (
            ""
          ) : (
            <input
              ref={useName}
              type="text"
              placeholder={lang[langKey].fullName}
              className="mb-3 block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff] transition"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder={lang[langKey].emailAddress}
            className="block w-72 bg-[rgba(22,22,22,0.7)] border-2 border-[rgba(128,128,128,0.7)] rounded text-white px-6 py-3 text-base hover:border-[#fff] transition"
          />
          <input
            ref={password}
            type="password"
            placeholder={lang[langKey].password}
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
            {isSignInForm ? lang[langKey].signIn : lang[langKey].signUp}
          </button>
          <p
            className="mt-3 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? lang[langKey].signUptext
              : lang[langKey].signIntext}
          </p>
        </form>
        <footer></footer>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import {onAuthStateChanged} from "firebase/auth";
import {addUser} from "../utils/userSlice";
import {LOGO} from "../utils/constants"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigator("/browse");
      } else {
        dispatch(removeUser());
        navigator("/");
      }
    });
    return () => unsubscibe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser);
      })
      .catch((error) => {
        navigator("/error");
      });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-20 w-full flex justify-between px-10">
      <img src={LOGO} alt="logo" width="150" />
      <div className="pt-4">
        <div
          className="relative text-left flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          {user && (
            <img
              src={user.photoURL ? user?.photoURL : "/user-icon.png"}
              width="40"
              alt="user-icon"
            />
          )}
          {user && (
            <small className="text-white font-bold ps-2">
              ({user.displayName ? user?.displayName : user.email.slice(0, 1)})
            </small>
          )}

          {user && (
            <svg
              className=" h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fff"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}

          <div></div>

          {user && isOpen && (
            <div
              className="origin-top-right absolute right-0 top-10 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1 flex justify-center" role="none">
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

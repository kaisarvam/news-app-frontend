import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FireBaseApp from "../utils/FireBase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(FireBaseApp);
const provider = new GoogleAuthProvider();

const useFireBase = () => {
const navigate = useNavigate();
 const Localuser = localStorage.getItem("userInfo");
  const [user, setUser] = useState((Localuser)?JSON.parse(Localuser):[]);
  const [error,setError] = useState(null);
  // const [userName, setUserName] = useState("");
  useEffect(() => {
    // if (user.displayName) {
    //     setUserName(user.displayName);
    //   }
  }, [user]);

  const GoogleSignIn = () => {
    console.log("Google signin Working !!!");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        localStorage.setItem("userInfo",JSON.stringify(user));
        navigate("/home");
        console.log("found user :", user);
      })
      .catch((error) => {
        const errorText = JSON.stringify(error);
        setError(error.code);
        console.log("found error :", errorText);
        console.log("Type of error :", typeof errorText);
        const closedbyUser = "auth/popup-closed-by-user";
        if (closedbyUser === error.code) {
          console.log("error matched !! closed by user ");
        }
      });
  };

  const GoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
        localStorage.removeItem("userInfo");
        navigate("/login");
      })
      .catch((error) => {
        setError(error.code);
        console.log("signout error :", error);
      });
  };

  const EmailPassSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        localStorage.setItem("userInfo",JSON.stringify(user));
        console.log("found login user :", user);
        navigate("/home");
      })
      .catch((error) => {
        setError(error.code);
        console.log(error);
      });
  };

  const RegisterUser = (email, password, displayName) => {
    //setUserName(displayName);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: displayName,
        });
        const user = result.user;
        setUser(user);
        localStorage.setItem("userInfo",JSON.stringify(user));

        console.log("found user created :", user);
        navigate("/home");
      })
      .catch((error) => {
        //setUserName("");
        setError(error.code);
        console.log("found error :", error);
        console.log("Type of error :", typeof errorText);
        const closedbyUser = "auth/popup-closed-by-user";
        if (closedbyUser === error.code) {
          console.log("error matched !! closed by user ");
        }
      });
  };

  return {
    //userName,
    error,
    setError,
    user,
    GoogleSignIn,
    GoogleSignOut,
    EmailPassSignIn,
    RegisterUser,
  };
};

export default useFireBase;

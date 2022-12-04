import { createContext, React,useState,useEffect } from "react";
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
import {app} from '../service/firebaseConfig';
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();


export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser] = useState(null);
    const [name,setName] = useState(null);
    const [photo,setPhoto] = useState(null);
    // const [name,setName] = useState(null);

    useEffect(() => {
        const loadStorageAuth = ()=>{
            const sessionToken= sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser= sessionStorage.getItem("@AuthFirebase:user");
            const userSession = JSON.parse(sessionUser)
            console.log(userSession)
            if(sessionToken && sessionUser){
              setUser(sessionUser);
              setName(userSession.displayName)
              setPhoto(userSession.photoURL)
              console.log(userSession.photoURL)
            }
        };
        loadStorageAuth();
    }, []);

    // useEffect(() => {
    //     const getUserName = ()=>{

    //         let nomeUsario = JSON.parse(user)
    //         if(nomeUsario !== undefined){
    //           setName(nomeUsario.name);
    //         }
    //     };
    //     getUserName();
    // }, [user]);

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user);
            sessionStorage.setItem("@AuthFirebase:token", token);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          });
      }

      function signOut() {
        sessionStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
      }

      return (
        <AuthGoogleContext.Provider
        value={{signInGoogle, signed: !!user , user,signOut,name, photo}}>
            {children}
        </AuthGoogleContext.Provider>
      )
};

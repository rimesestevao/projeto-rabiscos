import {React,useContext} from 'react'
 import { AuthGoogleContext } from "../contexts/authGoogle";

const Inicio = () => {

   const {  signOut } = useContext(AuthGoogleContext);
  // let userLogado = JSON.parse(user);

  return (
    <div>
      AQUI É O INÍCIO 
    </div>
  )
}

export default Inicio
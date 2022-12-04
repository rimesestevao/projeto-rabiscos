import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../contexts/authGoogle"


const Login = () => {

  const {signInGoogle, signed} = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  if (!signed) {
    return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"65vh"}}>
        <h2 style={{width:"50%",textAlign:"center",fontWeight:500, fontSize:"22px"}}>Para desfrutar de todos os recursos do site logue com a sua conta Google!</h2>
        <br/>
        <button onClick={handleLoginFromGoogle}>Entrar com o Google</button>
      </div>
    );
  }else{
    return <Navigate to ="/"/>
  }
}

export default Login
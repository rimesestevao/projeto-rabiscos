import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inicio from '../pages/Inicio';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DevPage from '../pages/DevPage';
import BlogPage from '../pages/BlogPage';
import Login from "../pages/Login";
import { PrivateRoutes } from ".";




function AppRoutes() {


  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route index path='/' element={<Inicio/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/Dev" element={<PrivateRoutes />}>
          <Route path="/Dev" element={<DevPage />} />
        </Route>
        <Route path="/Blog" element={<PrivateRoutes />}>
          <Route path="/Blog" element={<BlogPage/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;

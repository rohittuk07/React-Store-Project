import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const HomeLayout = () => {
    return(
      <>
      <Header/>
      <Navbar/>
      <h1 className="text-4xl">HomeLayout</h1>
      <Outlet/>
      </>
    )
  };
  export default HomeLayout;
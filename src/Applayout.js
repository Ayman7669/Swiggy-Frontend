import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
// import Body from "./component/Body";
import Footer from "./component/Footer";
import Button from "./component/Button";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";

const AppLayout = () => {
  return (
    <div>
      <UserContext.Provider value={{name:"Ayman",email:"ayman@gmail.com"}}>
      <Header />
      <Button />
      <Outlet />
      <Footer />
    
    </UserContext.Provider>
    </div>

  );
};

export default AppLayout;

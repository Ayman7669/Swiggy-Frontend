import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Button from "./component/Button";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Button />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;

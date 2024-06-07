import { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

type LayoutPros = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPros) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../styles/global.scss";

const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
//메뉴는 맨 왼쪽

export default Layout;

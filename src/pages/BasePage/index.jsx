import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./BasePage.css"
import Footer from "../../components/Footer";

function BasePage (){
       
    return(
         <div className="page-container">
      <div className="layout-container">
        <main className="main-content">
          <div className="layout-content-container">
    <main>
        <Header />
        <Outlet />
        <Footer />
    </main>

             </div>
        </main>
      </div>
    </div>
    )
}

export default BasePage;
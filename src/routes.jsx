import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BasePage from "./pages/BasePage";
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./pages/ContatctUs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<MainPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/faleconosco" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
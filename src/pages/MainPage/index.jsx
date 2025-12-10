import AboutUs from '../../components/AboutUs';
import Hero from '../../components/Hero';
import './mainPage.css';

function MainPage() {
  return (
    <div className="page-container">
      <div className="layout-container">
        <main className="main-content">
          <div className="layout-content-container">
            
            <Hero />
            <AboutUs />

          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
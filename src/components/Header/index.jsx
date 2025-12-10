import "./Header.css"

function Header() {
    return(
        
        <header className="main-header">
            {/* Header Section */}
          <div className="layout-content-container"> 
            <div className="header-inner">
              <div className="logo-group">
                <div className="logo-icon">
                  <img src="././public/vellare-logo.PNG" />
                </div>
                <h2 className="logo-text">Vellare</h2>
              </div>
              
              <div className="nav-desktop">
                <nav className="main-nav">
                  <a className="nav-link" href="/">Home</a>
                  <a className="nav-link" href="/servicos">Serviços</a>
                </nav>
                <a className="btn-primary btn-header" href="/faleconosco">
                  <span className="truncate">Fale Conosco</span>
                </a>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header;
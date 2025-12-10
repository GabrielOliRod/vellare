import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-icon">
                <div className="logo-icon">
                  <img src="././public/vellare-logo.PNG" />
                </div>
          </div>
          <p className="footer-copy">
            © 2025 Vellare. Todos os direitos reservados.
          </p>
        </div>

        <div className="footer-links">
          <a href="/home">Início</a>
          <a href="/servicos">Serviços</a>
          <a href="/faleconosco">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer

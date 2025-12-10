import "./ContactUs.css"

function ContactUs (){
    return(
            <div className="page-root">

      <main className="main">
        <div className="main-container">
          {/* Título */}
          <div className="title-block">
            <h1>Fale Conosco</h1>
            <p>
              Estamos prontos para ajudar a automatizar o seu futuro. Envie sua
              mensagem e nossa equipe entrará em contato.
            </p>
          </div>

          <div className="content-grid">
            {/* Formulário */}
            <div className="form-area">
              <form className="form">
                <div className="form-row">
                  <label>
                    <p>Nome completo</p>
                    <input
                      type="text"
                      placeholder="Digite seu nome completo"
                    />
                  </label>

                  <label>
                    <p>E-mail</p>
                    <input type="email" placeholder="seuemail@exemplo.com" />
                  </label>
                </div>

                <label>
                  <p>Telefone</p>
                  <input type="tel" placeholder="(XX) XXXXX-XXXX" />
                </label>

                <label>
                  <p>O que você gostaria de falar conosco?</p>
                  <textarea placeholder="Digite sua mensagem aqui..." />
                </label>

                <button className="btn-primary full">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contatos */}
            <div className="contact-area">
              <h3>Outras formas de contato</h3>

              <div className="contact-list">

                {/* Email */}
                <a href="mailto:contato@vellare.ai" className="contact-item">
                  <div className="contact-icon">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="contact-label">E-mail</p>
                    <p className="contact-value">vellareltda@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="#" className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">LinkedIn</p>
                    <p className="contact-value">/vellare</p>
                  </div>
                </a>

                {/* X / Twitter */}
                <a href="#" className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">Twitter / X</p>
                    <p className="contact-value">@Vellare</p>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}

export default ContactUs;
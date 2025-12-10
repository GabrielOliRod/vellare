import "./Hero.css"

function Hero () {
  return (
    <section className="section-padding" id="home">
        {/* Hero Section */}
              <div className="hero-content">
                <div className="hero-text-group">
                  <h1 className="hero-title">Transforme seu Negócio com Agentes de IA e Automações Inteligentes</h1>
                  <p className="hero-subtitle">Na Vellare, criamos soluções de IA para otimizar processos, melhorar o atendimento e impulsionar suas vendas.</p>
                </div>
                <a className="btn-primary btn-hero" href="#servicos">
                  <span>Saiba Mais</span>
                </a>
              </div>
              <div className="hero-image-container">
                <div className="hero-image" data-alt="Abstract futuristic background" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAu_xvwGaN1BERs_Q-GdNuj0LCrAMQy_su0fXBLyg_5FtUzOD448rp_8uZbWdPZg0o7wvLPgg1SeOIvXGtQWUQ4c8dn2It-Oqcrr_jdToy3_fSFCjtrwwhfkwNUGtt-SxqnQsUt64rALMhLEaJ0Twbyig7Ce11fp18GjTNdDA3P5jXOeRmkXq1aTyDT02QuepU9ad3aT5M8bf59n_qXQ-4HsArMY6bO4w3uyTiPK1Zs4tStvklLzRpKXd1ZstD6clkxBgm9ykFmTPU')" }}></div>
              </div>
            </section>
  )
}

export default Hero
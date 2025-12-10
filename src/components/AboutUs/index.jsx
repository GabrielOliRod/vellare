import "./AboutUs.css"

function AboutUs() {
    return(
            <section className="section-padding" id="sobre-nos">
                {/* About Us Section */}
              <div className="about-grid">
                <div className="about-image" data-alt="Office" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9JVGBjYd1Lbq3nHMgp7rQTRFLyBXro2lw-sEuzg5HaJhg6ljd66ieG10TqGo50WdfjX8pdNmDwH27M-nvkXbwH5qdOZM82R3N2-ou6_eIzYISSiFAH0zXAVEQsLor-k-PiQNXp1Ufh-KjlEjJKPlxSN552WRbqSOI-lHkvrig-7G8X1u092KgfA_Ed8mC3-_xb5eIbjHmJe4JaACE543Y4zSHZz0h1A8EwoLsEyJNYAeRz9wDd6S2332E8OhKTfgattrOYnzJ9UY')" }}></div>
                
                <div className="about-text-content">
                  <h2 className="section-title">Sobre a Vellare</h2>
                  <p className="about-description">Na Vellare, somos pioneiros na implementação de inteligência artificial para revolucionar a forma como as empresas operam. Nossa missão é clara: melhorar a execução de setores, otimizar o atendimento ao cliente e impulsionar as vendas dos nossos parceiros através de automações inteligentes e agentes de IA personalizados.</p>
                  <a className="btn-secondary-link" href="/faleconosco">
                    <span className="truncate">Vamos Conversar</span>
                  </a>
                </div>
              </div>
            </section>
    )
    }

export default AboutUs
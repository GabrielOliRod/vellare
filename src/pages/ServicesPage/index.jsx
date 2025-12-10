import Cta from "../../components/Cta"
import "./ServicesPage.css"

function ServicesPage (){

    return(
    <div className="page-container">
      <div className="layout-container">
        <main className="main-content">
          <div className="layout-content-container">
            <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Potencialize seu negócio com nossas soluções de IA</h1>
            <p>
              Descubra como nossos agentes e automações inteligentes podem
              transformar seus processos e impulsionar o crescimento.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="services">
          <div className="services-header">
            <h2>Nossos Serviços</h2>
            <p>
              Criamos soluções sob medida para automatizar e otimizar sua
              operação.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span className="material-icon">smart_toy</span>
              <h3>Agentes de IA (Chatbot)</h3>
              <p>
                Atendimento 24/7, qualificação de leads e respostas instantâneas
                com chatbots inteligentes e personalizados.
              </p>
            </div>

            <div className="service-card">
              <span className="material-icon">forward_to_inbox</span>
              <h3>Automações de E-mail</h3>
              <p>
                Personalize e automatize campanhas de comunicação e marketing,
                nutrindo leads automaticamente.
              </p>
            </div>

            <div className="service-card">
              <span className="material-icon">groups</span>
              <h3>Automações de Setores</h3>
              <p>
                Otimize fluxos de RH, Vendas, Comercial e mais. Reduza tarefas
                manuais.
              </p>
            </div>

            <div className="service-card">
              <span className="material-icon">hub</span>
              <h3>Automações de Todos os Tipos!</h3>
              <p>
                Tem um processo repetitivo? Nós automatizamos! Soluções sob
                medida para qualquer desafio.
              </p>
            </div>
          </div>
        </section>
        <Cta />
      </main>
            </div>
        </ main>
      </ div>
    </div>
    )
}

export default ServicesPage
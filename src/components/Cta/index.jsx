import "./Cta.css"

function Cta(){
    return(
        <section className="cta">
            {/* CTA */}
          <h2>Pronto para revolucionar seu negócio?</h2>
          <p>
            Veja como a IA pode transformar sua empresa. Agende uma conversa sem
            compromisso.
          </p>
        <a href="/faleconosco">                
          <button className="btn-primary big">
            Agende uma Demonstração Gratuita
          </button>
          </a>
        </section>
    )
}

export default Cta
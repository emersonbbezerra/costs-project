import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";

function Contact() {
  const whatsappNumber = "5583987561918";

  return (
    <section className={styles.home_container}>
      <h1>
        <span>Contato</span>
      </h1>
      <p>
        Olá! Meu nome é Emerson Bezerra, sou um desenvolvedor especializado em
        Node.js, ReactJS e Angular. Caso sua empresa precise de um profissional
        capacitado, determinado e que adora desafios é só falar comigo.
      </p>
      <LinkButton
        to={`https://wa.me/${whatsappNumber}`}
        text="Fale comigo!"
        target="_blank"
      />
    </section>
  );
}

export default Contact;

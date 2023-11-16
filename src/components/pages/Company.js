import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";

function Home() {
  const whatsappNumber = "5583987561918";
  return (
    <section className={styles.home_container}>
      <h1>
        <span>Costs Project</span>
      </h1>
      <p>
        Um sistema de gerenciamento de projetos da área de TI. Foi criado
        utilizando REACT.JS e um banco de dados fictício alocado na própria raiz
        do projeto para fins de testes. Caso deseje maiores detalhes é só entrar
        em contato comigo clicando no botão abaixo.
      </p>
      <LinkButton
        to={`https://wa.me/${whatsappNumber}`}
        text="Fale comigo!"
        target="_blank"
      />
    </section>
  );
}

export default Home;

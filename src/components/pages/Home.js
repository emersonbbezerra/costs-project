import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs Project</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" target="_blank" />
      <img src={savings} alt="Costs Project" />
    </section>
  );
}

export default Home;

import styles from "./PageNotFound.module.css";
import error404 from "./erro404.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PageNotFound() {
    return (
        <>
            <Header />
                <section className={styles.container}> 
                    <h2>Ops! Página não encontrada.</h2>
                    <img src={error404} alt="Logo de Página Não Encontrada" />
                </section>
            <Footer />
        </>
    )
}

export default PageNotFound;
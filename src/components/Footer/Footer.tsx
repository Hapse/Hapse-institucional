import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoFooter from "../../assets/svgs/logos/logoFooter.svg";
import sebraeLogo from "../../assets/svgs/parceiroSebrae.svg";
import styles from "./styles.module.scss";

const Footer = () => {

  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";
  const whatsappMessageSebrae = "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria, em parceira com o SEBRAE";

  const parceiros = [{ logoParceiro: sebraeLogo, linkParceiro: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessageSebrae)}` }];

  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const offset = location.state?.offset || 0;

      const timer = setTimeout(() => {
        scrollTo(id, offset);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, location.state]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, offset = 0) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollTo(id, offset);
    } else {
      navigate(`/#${id}`, { state: { offset } });
    }
  };

  return (
    <>
      <section className={styles.containerMainFooter}>
        <div className={styles.containerContentFooter}>
          <article className={styles.containerLogoFooter}>
            <img
              className={styles.logoFooter}
              src={logoFooter}
              alt="Logo rodapé"
            />
            <p className={styles.fraseImpacto}>
              COM INTELIGÊNCIA ESTRATÉGICA, UNINDO PRODUÇÃO, MERCADO E
              CONSUMIDOR EM UMA SÓ CADEIA.
            </p>
            <div className={styles.containerRedesSociais}>
              <a
                href="https://www.instagram.com/hapse_consultoria?igsh=eWl5dDR3aW81Ymtr"
                className={styles.iconeInsta}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              />
              <a
                href="https://www.linkedin.com/in/hapse-consultoria-agroalimentar-459697382?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconeLinkedin}
                aria-label="LinkedIn"
              />
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconeWpp}
                aria-label="WhatsApp"
              />
            </div>
          </article>

          <nav className={styles.linksRapidos}>
            <h4 className={styles.titulosFooter}>Links Rápidos</h4>
            <ul className={styles.listasFooter}>
              <li>
                <a href="/#inicio" onClick={(e) => handleNavClick(e, "inicio", -80)}>Inicio</a>
              </li>
              <li>
                <a href="/#quem-somos" onClick={(e) => handleNavClick(e, "quem-somos")}>Quem Somos</a>
              </li>
              <li>
                <a href="/#nossos-servicos" onClick={(e) => handleNavClick(e, "nossos-servicos")}>
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="/#solucoes" onClick={(e) => handleNavClick(e, "solucoes")}>Soluções</a>
              </li>
              <li>
                <a href="/conheca-nosso-time">Nossa Equipe</a>
              </li>
              <li>
                <a href="/#contatos" onClick={(e) => handleNavClick(e, "contatos")}>Contatos</a>
              </li>
            </ul>
          </nav>

          <div className={styles.contatos}>
            <h4 className={styles.titulosFooter}>Contatos</h4>
            <ul className={styles.listasFooter}>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (54) 99679-7398
                </a>
              </li>
              <li>
                <a href="mailto:contato@hapseconsultoria.com">
                  contato@hapseconsultoria.com
                </a>
              </li>
              <li>Segunda à Sexta: 8h às 18h</li>
            </ul>
          </div>

          <article className={styles.parceiros}>
            <h4 className={styles.titulosFooter}>Parceiros</h4>
            {parceiros.map((item, index) => (
              <div key={index}>
                <a target="_blank" href={item.linkParceiro}>
                  <img src={item.logoParceiro} alt="Logo Sebrae - Parceiro" />
                </a>
              </div>
            ))}
          </article>
        </div>
      </section>

      <div className={styles.copyRight}>
        <p>
          © 2026 HAPSE consultoria agroalimentar. Todos os direitos reservados.
        </p>
        <a href="https://portfolio-gabriel-zaparolli.netlify.app/">Desenvolvido por GabrielZaparolliDEV</a>
      </div>
    </>
  );
};

export default Footer;
import { useState } from "react";

import style from "./styles.module.scss";
import logoMini from "../../assets/svgs/logos/logoMini.svg";
import logoMob from "../../assets/svgs/logos/logoMobile.svg";
import sebraeMini from "../../assets/svgs/logos/sebraeMini.svg";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";
  const whatsappMessageSebrae =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria, em parceira com o SEBRAE";

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (id: string) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.containerNavbar}>
      {/* ── Hambúrguer ── */}
      <button
        className={`${style.hamburger} ${isMobileMenuOpen ? style.active : ""}`}
        onClick={toggleMenu}
        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <span className={style.bar} />
        <span className={style.bar} />
        <span className={style.bar} />
      </button>

      {/* ── Logo ── */}
      <a href="/" className={style.logoNavbar}>
        <a href="/" className={style.logoLink}>
          <img className={style.logo} src={logoMini} alt="Hapse Consultoria" />
          <img className={style.logoMobile} src={logoMob} alt=" Hapse Consultoria" />
        </a>
        <div className={style.logoText}>
          <h1>HapseConsultoria</h1>
          <p>AgroAlimentar</p>
        </div>
      </a>

      {/* ── Overlay ── */}
      <div
        className={`${style.overlay} ${isMobileMenuOpen ? style.showOverlay : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Menu ── */}
      <section
        className={`${style.menuNavbar} ${isMobileMenuOpen ? style.menuOpen : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          className={style.closeBtnMobile}
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          &times;
        </button>

        <a onClick={() => handleNavClick("quem-somos")}>Quem Somos</a>
        <a onClick={() => handleNavClick("nossos-servicos")}>Nossos Serviços</a>
        <a onClick={() => handleNavClick("solucoes")}>
          Soluções Personalizadas
        </a>
        <a onClick={() => handleNavClick("contato")}>Contatos</a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessageSebrae)}`}
          onClick={closeMenu}
          target="_blank"
        >
          <img src={sebraeMini} alt="Sebrae" />
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.buttonCttMobile}
          onClick={closeMenu}
        >
          Contate-nos
        </a>
      </section>

      <div className={style.buttonCtt}>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contate-nos
        </a>
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={style.whatsappIconMobile}
        aria-label="Falar no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.855L.057 23.743a.5.5 0 0 0 .624.603l6.044-1.58A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.875 9.875 0 0 1-5.031-1.378l-.36-.214-3.733.977.998-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z" />
        </svg>
      </a>
    </div>
  );
};

export default Navbar;

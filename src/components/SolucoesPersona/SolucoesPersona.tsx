import  { useEffect, useRef } from "react";

import iconeUsers from "../../assets/svgs/icons/users-bold.svg";
import iconeCerebro from "../../assets/svgs/icons/brain-bold.svg";
import iconeRocket from "../../assets/svgs/icons/rocket-bold.svg";
import styles from "./styles.module.scss";

const SolucoesPersona = () => {
  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";
  const sectionRef = useRef<HTMLElement>(null);

  // ── cards de proposta: vêm do fundo para frente ──
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll("[data-depth]");
    if (!els || els.length === 0) return;

    requestAnimationFrame(() => {
      els.forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "scale(0.85) translateY(40px)";
      });
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "";
              (el as HTMLElement).style.transform = "";
              el.classList.add(styles.depthVisible);
            }, i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const container = sectionRef.current?.querySelector(
      `.${styles.cardsProposta}`,
    );
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // ── ciclo: dominó no desk, individual no mobile ──
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll("[data-domino]");
    if (!els || els.length === 0) return;

    requestAnimationFrame(() => {
      els.forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(40px)";
      });
    });

    const isDesktop = window.innerWidth > 1024;

    if (isDesktop) {
      // DESKTOP: observa o container, anima em cascata 1 → seta → 2 → seta → 3
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add(styles.dominoVisible);
              }, i * 250);
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 },
      );

      const container = sectionRef.current?.querySelector(
        `.${styles.linhaTempoPersona}`,
      );
      if (container) observer.observe(container);
      return () => observer.disconnect();
    } else {
      // MOBILE: cada card anima individualmente ao entrar na tela
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.dominoVisible);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );

      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  return (

      <section
        id="solucoes"
        ref={sectionRef}
        className={styles.containerMainSolucoes}
      >
        <h1 className={styles.titSolucoes}>Soluções Personalizadas</h1>

        <div className={styles.cardsProposta}>
          <div className={styles.cardRight} data-depth>
            <h4>Proposta personalizada</h4>
            <p>
              Cada propriedade é única, cada desafio é específico. Por isso,
              criamos soluções exclusivas que se adaptam perfeitamente ao seu
              negócio e seus objetivos.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar consulta agora
            </a>
          </div>

          <div className={styles.cardLeft} data-depth>
            <ul>
              <li>Escuta humanizada</li>
              <li>Processo ágil e eficiente</li>
              <li>Comunicação transparente</li>
              <li>Suporte contínuo e especializado</li>
              <li>Relacionamento próximo e dedicado</li>
            </ul>
          </div>
        </div>

        <h4 className={styles.titLinhaTempo}>Ciclo de Personalização</h4>

        <div className={styles.linhaTempoPersona}>
          <div className={styles.cardLinha} data-domino>
            <span className={styles.numeroCardLinha}>1</span>
            <img src={iconeUsers} alt="" />
            <h4>Diagnóstico Inicial</h4>
            <p>Reunião para entender necessidades específicas e desafios.</p>
            <span className={styles.tag}>100% Personalizado</span>
          </div>
          <span className={styles.setaCards} /> {/* ← sem data-domino */}
          <div className={styles.cardLinha} data-domino>
            <span className={styles.numeroCardLinha}>2</span>
            <img src={iconeCerebro} alt="" />
            <h4>Análise Estratégica</h4>
            <p>
              Nossa equipe desenvolve estratégias sob medida para atender seus
              objetivos
            </p>
            <span className={styles.tag}>Expertise Técnica</span>
          </div>
          <span className={styles.setaCards} /> {/* ← sem data-domino */}
          <div className={styles.cardLinha} data-domino>
            <span className={styles.numeroCardLinha}>3</span>
            <img src={iconeRocket} alt="" />
            <h4>Implementação</h4>
            <p>Acompanhamento completo durante toda a execução do projeto</p>
            <span className={styles.tag}>Resultados Garantidos</span>
          </div>
        </div>
      </section>
  );
};

export default SolucoesPersona;

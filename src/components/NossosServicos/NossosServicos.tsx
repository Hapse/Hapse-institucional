import  { useEffect, useRef } from "react";

import styles from "./styles.module.scss";

const sebraeFlag = "/imgs/sebraeFlag.png";

const NossosServicos = () => {
  const whatsappNumber = "5554996797398";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";
  const whatsappMessageSebrae = "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria, em parceira com o SEBRAE";
  const sectionRef = useRef<HTMLElement>(null);

  // ── cardInfo: slide da esquerda (desktop + mobile) ──
  useEffect(() => {
    const el = sectionRef.current?.querySelector(`[data-slide]`);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.slideInLeft);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── cardParceiros: efeito dominó ──
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll("[data-domino]");
    if (!els || els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number((entry.target as HTMLElement).dataset.domino) * 180;
            setTimeout(() => {
              entry.target.classList.add(styles.dominoVisible);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // estado inicial via JS para evitar flash
    requestAnimationFrame(() => {
      els.forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(30px)";
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (

      <section id="nossos-servicos" ref={sectionRef} className={styles.containerMainServicos}>
        <h1>Nossos Serviços</h1>

        <section className={styles.containerCardsServicos}>

          {/* ── slide da esquerda ── */}
          <div className={`${styles.cardInfo} ${styles.slideLeft}`} data-slide>
            <h4>O que fazemos por você?</h4>
            <p>
              A Hapse oferece consultoria personalizada para produtores rurais,
              agroindústrias e serviços de alimentação, com foco em:
            </p>
            <ul>
              <li>Análise de dados.</li>
              <li>Segurança e qualidade.</li>
              <li>Desenvolvimento do produto.</li>
              <li>Enquadramento e legalização.</li>
              <li>Gestão do negócio e propriedades rurais.</li>
            </ul>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com consultor
            </a>
          </div>

          {/* ── dominó ── */}
          <div className={styles.cardParceiros}>
            <div className={styles.cardParceiroSebrae} data-domino="0">
              <div className={styles.titSubtit}>
                <div className={styles.textContent}>
                  <h4>Parceiros SEBRAE</h4>
                  <span>Certificado Oficial</span>
                </div>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessageSebrae)}`}
                className={styles.imgFlag} target="_blank">
                  <img src={sebraeFlag} alt="" />
                </a>
              </div>
              <p>
                Somos parceiros do SEBRAE, oferecendo soluções para a cadeia
                agroalimentar com benefícios que reduzem custos e aumentam a
                competitividade.
              </p>
              <a className={styles.btnSaibaMaisSebrae} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessageSebrae)}`} target="_blank">
                Saiba mais sobre os benefícios
              </a>
            </div>

            <div className={styles.listaBeneficios}>
              <p data-domino="1">Estratégias personalizadas</p>
              <p data-domino="2">Solução para o seu negócio</p>
              <p data-domino="3">Sustentabilidade e certificações</p>
            </div>
          </div>

        </section>
      </section>

  );
};

export default NossosServicos;
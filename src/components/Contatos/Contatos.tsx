import  { useEffect, useRef } from "react";

import styles from "./styles.module.scss";
import logoMini from "../../assets/svgs/logos/logoMini.svg";

const Contatos = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const left = sectionRef.current?.querySelector("[data-slide-left]");
    const right = sectionRef.current?.querySelector("[data-slide-right]");

    if (!left || !right) return;

    requestAnimationFrame(() => {
      left.classList.add(styles.hiddenLeft);
      right.classList.add(styles.hiddenRight);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          left.classList.remove(styles.hiddenLeft);
          left.classList.add(styles.visibleItem);

          setTimeout(() => {
            right.classList.remove(styles.hiddenRight);
            right.classList.add(styles.visibleItem);
          }, 150);

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const container = sectionRef.current?.querySelector(
      `.${styles.containerContatos}`
    );
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (

      <section
        id="contato"
        ref={sectionRef}
        className={styles.containerMainContatos}
      >
        <h1>Entre em Contato</h1>

        <div className={styles.containerContatos}>
          <form
            className={styles.formContatos}
            data-slide-left
            action="https://formspree.io/f/{form_id}"
            method="POST"
          >
            <div className={styles.form_header}>
              <h2>Solicite sua Consultoria</h2>
              <p>
                Preencha o formulário e nossa equipe entrará em contato em até
                24 horas.
              </p>
            </div>

            <div className={styles.fisrtInputs}>
              <div className={styles.form_group}>
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className={styles.form_group}>
                <label htmlFor="email">Seu Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="seuemail@exemplo.com"
                />
              </div>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Qual o motivo do contato?"
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="mensagem">Mensagem *</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={6}
                required
                placeholder="Descreva noque podemos lhe ajudar."
              />
            </div>

            <button type="submit">Enviar Email</button>
          </form>

          <section
            className={styles.cardsInfosContatos}
            data-slide-right
          >
            <div className={styles.infosContatos}>
              <div className={styles.titEsub}>
                <h4>Informações de Contato</h4>
                <p>
                  Entre em contato, nossa equipe está pronta para lhe atender
                </p>
              </div>

              <ul>
                <li className={styles.phoneList}>
                  <a>(54) 996797398</a>
                </li>
                <li className={styles.emailList}>
                  <a href="mailto:contato@hapseconsultoria.com">contato@hapseconsultoria.com</a>
                </li>
                <li className={styles.horarioList}>
                  Segunda à Sexta: 8h às 18h
                </li>
              </ul>
            </div>

            <div className={styles.cardsDifenciais}>
              <span className={styles.bgOverlay} />
              <h5>Por que escolher a gente?</h5>
              <ul>
                <li className={styles.list1}>
                  Competência técnica e vivência profissional
                </li>
                <li className={styles.list2}>
                  Estratégias sustentáveis e eficientes
                </li>
                <li className={styles.list3}>Foco em resultados concretos</li>
                <li className={styles.list4}>Escuta ativa e humanizada</li>
              </ul>
              <img
                className={styles.logoCardDiferenciais}
                src={logoMini}
                alt=""
              />
            </div>
          </section>
        </div>
      </section>
    
  );
};

export default Contatos;
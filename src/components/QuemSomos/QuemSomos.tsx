import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import missaoIcon from "../../assets/svgs/icons/missaoIcon.svg";
import visaoIcon from "../../assets/svgs/icons/valoresIcon.svg";
import valoresIcon from "../../assets/svgs/icons/visaoIcon.svg";

const fotoFer = "/imgs/fotoFer.jpeg";
const fotoMay = "/imgs/fotoMay.jpeg";
const fotoRafa = "/imgs/fotoRafa.jpeg";

const QuemSomos = () => {
  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";

  const sectionRef = useRef<HTMLElement>(null);

  // Animação desktop: seção inteira
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animação mobile: elemento por elemento
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const elements = sectionRef.current?.querySelectorAll("[data-anim]");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles.animHidden);
            entry.target.classList.add(styles.animVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    requestAnimationFrame(() => {
      elements.forEach((el) => {
        el.classList.add(styles.animHidden);
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  const cardsValores = [
    {
      icone: missaoIcon,
      label: "Missão",
      texto:
        "Oferecer consultoria estratégica ao setor Agroalimentar, que impulsione a sustentabilidade e a produtividade, por meio de soluções inovadoras e personalizadas, conectando produção, mercado e consumidor em uma só cadeia.",
    },
    {
      icone: visaoIcon,
      label: "Visão",
      texto:
        "Ser reconhecida como referência em consultoria pela excelência técnica e compromisso com o desenvolvimento do setor Agroalimentar.",
    },
    {
      icone: valoresIcon,
      label: "Valores",
      texto:
        "Autenticidade com propósito, inovação sustentável e excelência em conformidade. Compromisso socioambiental e relações humanas baseadas em empatia e confiança.",
    },
  ];

  const carsTime = [
    {
      iconePessoa: fotoFer,
      nomePessoa: "Fernanda Flores",
      primeiroNome: "Fernanda",
      descricaoPessoa:
        "Médica Veterinária, Mestre e Doutora com ampla experiência no setor agro, unindo trajetória acadêmica e prática profissional. Sócia-fundadora da HAPSE, atua com foco em qualidade, segurança e sustentabilidade...",
    },
    {
      iconePessoa: fotoMay,
      nomePessoa: "Mayra Vissotto Ribeiro",
      primeiroNome: "Mayra",
      descricaoPessoa:
        "Médica Veterinária, Mestre em Ciência Animal e pós-graduanda em Ciência e Tecnologia de Alimentos, com sólida experiência técnica e estratégica no agronegócio. Sócia-fundadora da HAPSE, une vivência...",
    },
    {
      iconePessoa: fotoRafa,
      nomePessoa: "Rafael Sachet",
      primeiroNome: "Rafael",
      descricaoPessoa:
        "Zootecnista e Mestre em Produção Animal, com foco em bovinocultura de corte e ampla experiência acadêmica e prática no agro. Sócio-fundador da HAPSE, atua com ênfase em produção, manejo e gestão...",
    },
  ];

  return (
    <section
      id="quem-somos"
      ref={sectionRef}
      className={styles.containerMainQuemSomos}
    >
      <h1>Quem somos</h1>

      <div className={styles.containerCards}>
        <div className={`${styles.containerCardLeft} ${styles.slideLeft}`}>
          <article className={styles.articleQuemSomos} data-anim>
            <p>
              A HAPSE Consultoria nasceu em Caxias do Sul (RS) com o propósito
              de transformar a cadeia agroalimentar por meio de soluções
              personalizadas, humanizadas e eficazes. Atuamos diretamente com
              produtores e manipuladores de alimentos — da agroindústria às propriedades
              rurais
            </p>
          </article>

          <div>
            <article className={styles.articleValores}>
              {cardsValores.map((item, index) => (
                <div className={styles.cardValores} key={index} data-anim>
                  <img src={item.icone} alt="" />
                  <span>{item.label}</span>
                  <p>{item.texto}</p>
                </div>
              ))}
            </article>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaQuemSomos}
            data-anim
          >
            Fale agora com consultor especialista
          </a>
        </div>

        {/* ── LADO DIREITO ── */}
        <div className={`${styles.containerCardRight} ${styles.slideRight}`}>
          <h2 data-anim>Nosso time</h2>

          <div className={styles.containerTime}>
            {carsTime.map((item, index) => (
              <div className={styles.cardTime} key={index} data-anim>
                <article className={styles.articleTime}>
                  <div
                    className={styles.imagemPessoa}
                    style={{ backgroundImage: `url(${item.iconePessoa})` }}
                  />
                  <div className={styles.infosPessoa}>
                    <span>{item.nomePessoa}</span>
                    <p>{item.descricaoPessoa}</p>
                    <a href="/conheca-nosso-time">
                      Saiba mais sobre {item.primeiroNome}
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
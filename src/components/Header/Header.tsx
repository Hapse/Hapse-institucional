import styles from "./styles.module.scss";
import iconeBannerUm from "../../assets/svgs/icons/iconBannerUm.svg";
import iconeBannerDois from "../../assets/svgs/icons/iconBannerDois.svg";
import iconeBannerTres from "../../assets/svgs/icons/iconBannerTres.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bannerSalame = "/imgs/banners/salameQueijo.png";
const vacas = "/imgs/banners/vacas.jpg";

const carrosselImages = [
  "/imgs/banners/bannerDoisCarrossel.jpeg",
  "/imgs/banners/bannerUmCarrossel.jpg",
];

const Header = () => {
  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";

  const iconSvgClasses = [
    styles.textoDoSeuPargrafo11,
    styles.textoDoSeuPargrafo21,
    styles.textoDoSeuPargrafo31,
  ];

  const iconesElabel = [
    {
      icone: iconeBannerUm,
      label: (<>Experiência <br /> Técnica</>),
    },
    {
      icone: iconeBannerDois,
      label: (<>Soluções <br /> Adaptativas</>),
    },
    {
      icone: iconeBannerTres,
      label: (<>Visão <br /> Sistêmica</>),
    },
  ];

  const handleScrollToSolucoes = () => {
    document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="inicio" className={styles.bannerHeander}>
      <div className={styles.faixaBanner}>
        <div className={styles.faixaBannerChild} />
        <div className={styles.faixaBannerChildPai}>
          <span className={styles.faixaBannerChildBig} />
        </div>
      </div>

      {/* ── TEXTO — anima com fadeSlide ── */}
      <div className={`${styles.titDireita} ${styles.animFadeSlide}`}>
        <div className={styles.tituloBanner}>
          <i className={styles.transformandoDesafioEmOportContainer}>
            <span>Transformando desafio em </span>
            <span className={styles.oportunidades}>
              Oportunidades<br />
            </span>
            <span className={styles.comConsultoriaEstratgica}>
              com Consultoria Estratégica<br />
            </span>
          </i>
          <div className={styles.oferecemosServiosPersonaliz}>
            Oferecemos serviços personalizados para fortalecer
            agroindústrias, propriedades rurais e setor alimentício.
            Capacitamos produtores e empresas, com soluções inovadoras,
            focadas em sustentabilidade, eficiência e valorização da produção
            e da identidade do produto.
          </div>
        </div>

        <div className={styles.iconesBanner}>
          {iconesElabel.map((item, index) => (
            <div key={index} className={styles[`icone${index + 1}`]}>
              <div className={styles.icone1Child} />
              <b className={styles.experienciaTcnica}>{item.label}</b>
              <img className={iconSvgClasses[index]} src={item.icone} alt="" />
            </div>
          ))}
        </div>

        <div className={styles.btnsAo}>
          <div className={styles.falarComConsultorParent}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.falarComConsultor}
            >
              Falar com Consultor
            </a>
          </div>
          <div className={styles.falarComConsultorParent}>
            <button onClick={handleScrollToSolucoes} className={styles.falarComConsultor}>
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* ── IMAGENS — cada círculo com zoom escalonado ── */}
      <div className={styles.imagensBanners}>

        {/* Salame — delay 1 */}
        <div className={`${styles.salameEQueijo} ${styles.zoomIn1}`}>
          <img src={bannerSalame} alt="" />
        </div>

        {/* Vaca — delay 2 */}
        <div className={`${styles.vacaCuriosaEEngracadaOlhanIcon} ${styles.zoomIn2}`}>
          <img src={vacas} alt="" />
        </div>

        {/* Carrossel — delay 3 */}
        <div className={`${styles.designSemNome61} ${styles.carrosselWrapper} ${styles.zoomIn3}`}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            loop={true}
            className={styles.carrosselSwiper}
          >
            {carrosselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className={styles.carrosselImg} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </header>
  );
};

export default Header;
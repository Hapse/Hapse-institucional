import { useState, useRef } from 'react'
import styles from './styles.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const avaliacao1 = '/imgs/pessoasAvaliacoes/avaliacaoUm.jpeg'
const avaliacao2 = '/imgs/pessoasAvaliacoes/vieiraEventos.jpeg'
const avaliacao3 = '/imgs/pessoasAvaliacoes/avaliacaoTres.jpeg'
const avaliacao4 = '/imgs/pessoasAvaliacoes/casaBiasotto.jpeg'
const avaliacao5 = '/imgs/pessoasAvaliacoes/avaliacaoCinco.jpeg'


const CHAR_LIMIT = 100

type Avaliacao = {
    icone: string
    nome: string
    empresa: string
    stars: number
    descricao: string
}

/* ── Estrelas ── */
function renderStars(rating: number) {
    const stars = []
    const full = Math.floor(rating)
    const half = rating % 1 !== 0
    const empty = 5 - Math.ceil(rating)

    for (let i = 0; i < full; i++)
        stars.push(<svg key={`f${i}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#FFD700" /></svg>)

    if (half)
        stars.push(<svg key="h" width="20" height="20" viewBox="0 0 20 20" fill="none"><defs><linearGradient id="hf"><stop offset="50%" stopColor="#FFD700" /><stop offset="50%" stopColor="#E0E0E0" /></linearGradient></defs><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="url(#hf)" /></svg>)

    for (let i = 0; i < empty; i++)
        stars.push(<svg key={`e${i}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#E0E0E0" /></svg>)

    return stars
}


const ReviewCard = ({
    card,
    onHeightChange,
    truncateLines = 4,
}: {
    card: Avaliacao
    onHeightChange?: () => void
    truncateLines?: number
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const needsTruncate = card.descricao.length > CHAR_LIMIT

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsExpanded(prev => !prev)
        
        requestAnimationFrame(() => requestAnimationFrame(() => onHeightChange?.()))
    }

    return (
        <div className={`${styles.card} ${isExpanded ? styles.cardExpandido : ''}`}>

            {/* Cabeçalho: foto + nome */}
            <div className={styles.perfil}>
                <img src={card.icone} alt={card.nome} />
                <div className={styles.infosPerfil}>
                    <p>{card.nome}</p>
                    <span>{card.empresa}</span>
                </div>
            </div>

            {/* Estrelas */}
            <div className={styles.starsAvaliaco}>
                {renderStars(card.stars)}
            </div>

            {/* Descrição com ver mais */}
            {needsTruncate ? (
                <div className={styles.descricaoWrap}>
                    <p
                        className={`${styles.descricaoTexto} ${isExpanded ? styles.expandida : ''}`}
                        style={!isExpanded ? { WebkitLineClamp: truncateLines } as React.CSSProperties : undefined}
                    >
                        {card.descricao}
                    </p>
                    <button className={styles.verMaisBtn} onClick={handleToggle}>
                        {isExpanded ? 'Ver menos ▲' : 'Ver mais ▼'}
                    </button>
                </div>
            ) : (
                <p
                    className={styles.descricaoTexto}
                    style={{ WebkitLineClamp: truncateLines } as React.CSSProperties}
                >
                    {card.descricao}
                </p>
            )}
        </div>
    )
}


const Avaliacoes = () => {
    const [abertoIndex, setAbertoIndex] = useState<number | null>(null)
    const mobileSwiperRef = useRef<SwiperType | null>(null)
    const marqueeTrackRef = useRef<HTMLDivElement>(null)

    const avaliacoesOriginal: Avaliacao[] = [
        { icone: avaliacao1, nome: "Bruna Ferreira", empresa: "", stars: 5, descricao: "A Hapse possui profissionais proativos, com amplo conhecimento técnico em alimentos e grande disponibilidade. Como atuo em serviço de inspeção municipal, tenho total segurança e confiança para indicar o trabalho da equipe às agroindústrias que fiscalizo." },
        { icone: avaliacao2, nome: "Roque Vieira", empresa: "Vieira eventos", stars: 5, descricao: "A HAPSE está ajudando no momento certo, oferecendo suporte em consultoria e organização de documentos, o que sempre foi uma grande dificuldade. Embora muitos avaliem apenas o custo, o trabalho da HAPSE evita dores de cabeça futuras. São profissionais qualificados na área de alimentos, prestando apoio essencial ao meu empreendimento em gastronomia. A empresa contribui tanto para meu negócio quanto para o desenvolvimento de Caxias do Sul" },
        { icone: avaliacao3, nome: "Pedro Machado", empresa: "", stars: 5, descricao: "A HAPSE consultoria alimentar, fundada por professores universitarios, tem o objetivo de ajudar pequenas, medias e grandes empresas na área da inspeção alimentar e no auxílio ao pequeno produtor na regulamentação de seu próprio negócio relacionado a produção de origem animal." },
        { icone: avaliacao4, nome: "Casa Biasotto", empresa: "Casa Biasotto", stars: 5, descricao: "A Casa Biasotto agradece à Hapse pela Consultoria Agroalimentar Estratégica pelo excelente trabalho desenvolvido e marcado por profissionalismo. A atuação da Fernanda foi fundamental, sempre demonstrando profundo conhecimento técnico, sensibilidade às necessidades do negócio e comprometimento com os resultados. A parceria agregou valor real às nossas decisões e trouxe segurança ao processo. Recomendamos com confiança e satisfação." },
        { icone: avaliacao5, nome: "Suelen Bitencurt", empresa: "", stars: 5, descricao: "Ótimos profissionais, preparados para suprir as necessidades de sua empresa, prestando todo suporte e acessória necessária. Indico a HAPSE, a todo empreendedor que desejar ter melhorias contínuas, e estar atualizado ao mercado." },
    ]

    const whatsappNumber = "5554996797398"
    const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria"

    const perguntasFrequentes = [
        { pergunta: "Por que HAPSE Consultoria Agroalimentar?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia." },
        { pergunta: "O que são Sistemas Agroalimentares?", resposta: "Os sistemas agroalimentares englobam todas as etapas envolvidas na produção, transformação, distribuição e consumo de alimentos. Isso inclui desde a produção no campo, a indústria de processamento, a logística, o varejo até o consumidor final. Mais do que uma cadeia linear, os sistemas agroalimentares representam uma rede integrada, onde cada decisão impacta na qualidade, segurança, sustentabilidade e competitividade dos alimentos. É nesse contexto que a HAPSE atua: oferecendo estratégia e inovação para gerar valor em cada elo desse sistema." },
        { pergunta: "Em que áreas um Consultor Agroalimentar atua?", resposta: "O consultor agroalimentar apoia toda a cadeia dos alimentos, da produção à mesa do consumidor. Atua em eficiência produtiva, qualidade e segurança, logística, mercado e sustentabilidade, sempre com visão estratégica e foco em resultados." },
        { pergunta: "Quando devo procurar um Consultor Agroalimentar?", resposta: "Você deve procurar um consultor agroalimentar quando sua propriedade rural, agroindústria ou serviço de alimentação precisa de apoio estratégico para melhorar processos, garantir qualidade e conformidade regulatória, aumentar a eficiência produtiva, reduzir riscos ou explorar novas oportunidades de mercado. Em momentos de crescimento, mudança ou diante de desafios, o consultor atua como parceiro para transformar complexidade em resultados sustentáveis." },
    ]

    const avaliacoesInfinitas = [...avaliacoesOriginal, ...avaliacoesOriginal, ...avaliacoesOriginal]

    const handleMarqueePause = () => {
        if (marqueeTrackRef.current) marqueeTrackRef.current.style.animationPlayState = 'paused'
    }
    const handleMarqueeResume = () => {
        if (marqueeTrackRef.current) marqueeTrackRef.current.style.animationPlayState = 'running'
    }

    const handleMobileHeight = () => mobileSwiperRef.current?.updateAutoHeight(0)

    return (
        <section className={styles.containerMainAvaliacoes}>
            <h1>Avaliações</h1>

            {/* ── Desktop: marquee infinito + ver mais ── */}
            <div
                className={`${styles.marqueeContainer} ${styles.desktopOnly}`}
                onMouseEnter={handleMarqueePause}
                onMouseLeave={handleMarqueeResume}
                style={{ cursor: 'default' }}
            >
                <div className={styles.marqueeTrack} ref={marqueeTrackRef}>
                    {avaliacoesInfinitas.map((card, i) => (
                        <ReviewCard key={i} card={card} truncateLines={4} />
                    ))}
                </div>
            </div>

            {/* ── Mobile: 1 card + ver mais ── */}
            <div className={`${styles.mobileSlider} ${styles.mobileOnly}`}>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={false}
                    autoHeight
                    onSwiper={s => { mobileSwiperRef.current = s }}
                >
                    {avaliacoesOriginal.map((card, i) => (
                        <SwiperSlide key={i}>
                            <ReviewCard card={card} truncateLines={3} onHeightChange={handleMobileHeight} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <h2 className={styles.subtitleAvaliacoes}>Perguntas frequentes</h2>

            <section className={styles.contPerguntasFrequentes}>
                {perguntasFrequentes.map((item, index) => (
                    <div
                        className={`${styles.cardPergunta} ${abertoIndex === index ? styles.aberto : ''}`}
                        key={index}
                        onClick={() => setAbertoIndex(abertoIndex === index ? null : index)}
                    >
                        <h5 className={styles.perguntaHeader}>{item.pergunta}</h5>
                        <div className={styles.perguntaContent}>
                            <div className={styles.contentInner}>
                                <p>{item.resposta}</p>
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Fale com um consultor
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Avaliacoes
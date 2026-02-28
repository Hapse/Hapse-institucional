import styles from './styles.module.scss'

const fotoFer = "/imgs/fotoFer.jpeg"
const fotoMay = "/imgs/fotoMay.jpeg"
const fotoRafa = "/imgs/fotoRafa.jpeg"

const TimeDescricao = () => {

 

  const cardTime = [
    {
      perfil: fotoFer,
      nome: 'Fernanda Flores',
      linkLattes: 'http://lattes.cnpq.br/6811272951108375',
      descricao: 'Fernanda Flores é Médica Veterinária, Mestre em Medicina Veterinária Preventiva e Doutora em Engenharia Agrícola, na área de Construções Rurais e Ambiência. Sua trajetória no agro iniciou com a história familiar, alicerçada no curso Técnico em Agropecuária e fortalecida ao longo de anos como docente, coordenadora acadêmica e gestora no ensino superior.\n \n Sócia-fundadora da HAPSE, Fernanda possui especializações na área de Inspeção de Alimentos de Produtos de Origem Animal e Gestão de Pessoas, alia experiência acadêmica e prática para oferecer soluções estratégicas ao setor agroalimentar, com foco em qualidade, segurança e sustentabilidade. Sua visão vai além da técnica: acredita que cada cliente busca mais que uma consultoria, busca uma parceira de confiança, capaz de compreender desafios e transformá-los em resultados reais.\n\n Na HAPSE, atua com o propósito de apoiar empresas e produtores a prosperarem de forma sólida, inovadora e responsável, contribuindo para um setor agroalimentar mais eficiente, humano e sustentável.'
    },
    {
      perfil: fotoMay,
      nome: 'Mayra Vissotto',
      linkLattes: 'http://lattes.cnpq.br/4376723276924013',
      descricao: 'Mayra Vissotto Ribeiro é Médica Veterinária, Mestre em Ciência Animal e pós-graduanda em Ciência e Tecnologia de Alimentos. Ao longo da carreira, buscou constante atualização por meio de cursos e especializações, consolidando uma atuação pautada em segurança dos alimentos e gestão estratégica de negócios. Em sua trajetória é possível destacar a experiência em Agroindústria e em setores do agronegócio com atuação técnica e comercial, além de docente e gestora acadêmica nos cursos de Medicina Veterinária e Agronomia.\n\n Sócia-fundadora da HAPSE, Mayra une vivência prática e acadêmica para oferecer soluções estratégicas ao setor agroalimentar, com foco em qualidade, integridade e sustentabilidade. Sua atuação vai além da técnica: acredita que cada cliente é único e busca uma visão estratégica de negócios, capaz de transformar desafios em oportunidades e gerar resultados consistentes.\n\n Na HAPSE, atua com o propósito de apoiar empresas e produtores a crescerem de forma sólida e responsável — contribuindo para um setor agroalimentar mais competitivo, humano e sustentável.'
    },
    {
      perfil: fotoRafa,
      nome: 'Rafael Sachet',
      linkLattes: 'http://lattes.cnpq.br/4161051979323285',
      descricao: 'Rafael Henrique Sachet é Zootecnista, Mestre em Produção Animal com ênfase em Bovinocultura de corte. Sua trajetória no setor agropecuário iniciou pelo interesse na área, antes mesmo da academia, aprimorado ao longo dos anos como docente e gestor no meio acadêmico.\n\n Sócio fundador da HAPSE, Rafael alia experiência acadêmica e prática para oferecer soluções estratégicas ao setor agroalimentar, com ênfase nas questões que envolvem a produção, manejo e gestão de propriedades rurais, buscando sempre formas sustentáveis de aprimoramento. Sua visão técnica e acadêmica busca levar ao cliente alternativas viáveis ao pleno desenvolvimento estratégico e segmentado da cadeia de produção e beneficiamento alimentar.\n\n Na HAPSE, atua com o foco em auxiliar na transformação do setor agroalimentar através do produtor e de empresas de forma a consolidar ações evidentes e promissoras.'
    }
  ]

  return (
    <section className={styles.containerMainTimeInfo}>
      <h1>Conheça nossa equipe</h1>

      <div className={styles.cardsTime}>
        {cardTime.map((member, index) => (
          <div className={styles.cardMember} key={index}>
            {member.linkLattes && (
              <a
                href={member.linkLattes}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkLattes}
              >
              </a>
            )}

            {/* background-image no lugar de <img> */}
            <div
              className={styles.imageContainer}
              style={{ backgroundImage: `url(${member.perfil})` }}
            />

            <h2>{member.nome}</h2>

            <p className={styles.descricao}>{member.descricao}</p>

            <a className={styles.btnCta} href="">Conversar com {member.nome}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimeDescricao;
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: params.locale==='en'?'About Us':params.locale==='ru'?'О Нас':params.locale==='es'?'Sobre Nosotros':params.locale==='fr'?'À Propos':params.locale==='pt'?'Sobre':'关于我们' };
}

// ── 6-language content ──
const t: Record<string, Record<string, string>> = {
  // Hero tagline
  tagline: {
    en: 'Crafted with Eastern Heritage. Engineered for the World.',
    ru: 'Создано с восточным наследием. Спроектировано для мира.',
    zh: '承东方传承，为世界而造。',
    es: 'Elaborado con Herencia Oriental. Diseñado para el Mundo.',
    fr: 'Façonné avec l\'Héritage Oriental. Conçu pour le Monde.',
    pt: 'Criado com Herança Oriental. Projetado para o Mundo.',
  },
  subtitle: {
    en: 'Elevating Global Interiors with Premium Flooring from China',
    ru: 'Преображаем мировые интерьеры премиальными полами из Китая',
    zh: '中国高端地板，提升全球空间品质',
    es: 'Elevando Interiores Globales con Pisos Premium de China',
    fr: 'Sublimer les Intérieurs du Monde avec un Parquet Premium Chinois',
    pt: 'Elevando Interiores Globais com Pisos Premium da China',
  },
  // Company intro
  introTitle: {
    en: 'Who We Are',
    ru: 'Кто Мы',
    zh: '我们是谁',
    es: 'Quiénes Somos',
    fr: 'Qui Sommes-Nous',
    pt: 'Quem Somos',
  },
  introBody: {
    en: 'Avonda is the premium brand of Liancheng Wood Industry, a flooring manufacturer with 40 years of heritage. Headquartered at No. 888 Tunheng Road, Nanxun Town, Nanxun District, Huzhou City, Zhejiang Province, P.R.China — the renowned center of the country\'s wood flooring industry. With 10 years of export experience and backed by four decades of manufacturing heritage, we serve discerning partners and homeowners across more than 50 countries.\n\nOur expertise spans engineered wood, solid wood, laminate, and parquet flooring, crafted within a 30,000 m² production facility equipped with advanced European technology, including Austrian Wintersteiger frame saws, Italian Nardi drying kilns, German HOMAG processing lines, and Belgian Uniclic locking systems.\n\nEvery plank undergoes ten rigorous production stages to ensure exceptional stability, precision, and durability. Beyond manufacturing, we deliver tailored flooring solutions — from custom dimensions and exclusive finishes to private-label packaging — designed to meet the unique requirements of every project.',
    ru: 'Avonda — премиальный бренд компании Liancheng Wood Industry, производителя напольных покрытий с 40-летней историей. Штаб-квартира: No. 888 Tunheng Road, Nanxun Town, Nanxun District, Huzhou City, Zhejiang Province, P.R.China — признанный центр деревообрабатывающей промышленности Китая. С 10-летним экспортным опытом и опираясь на четыре десятилетия производственного опыта Liancheng, мы обслуживаем взыскательных партнеров и домовладельцев в более чем 50 странах.\n\nНаш опыт охватывает инженерные, массивные, ламинированные и паркетные полы, созданные на производстве площадью 30 000 м², оснащенном передовым европейским оборудованием — от австрийских рамных пил Wintersteiger до итальянских сушильных камер Nardi, немецких линий HOMAG и бельгийских замков Uniclic.\n\nКаждая доска проходит десять строгих производственных этапов для исключительной стабильности, точности и долговечности. Мы предлагаем индивидуальные решения — от нестандартных размеров до эксклюзивной упаковки.',
    zh: 'Avonda是联成木业旗下高端品牌。联成木业拥有40年制造传承，位于中国浙江省湖州市南浔区南浔镇屯横路888号 — 中国木地板之都。Avonda拥有10年出口经验，依托联成四十年的制造传承，我们服务全球50多个国家的挑剔客户与合作伙伴。\n\n我们专注于工程地板、实木地板、强化地板和拼花地板，在30,000平方米的生产基地内打造，配备先进的欧洲技术 — 包括奥地利Wintersteiger框锯、意大利Nardi干燥窑、德国HOMAG生产线和比利时Uniclic锁扣系统。\n\n每一块地板都经过十道严格的生产工序，确保卓越的稳定性、精度和耐久性。我们从制造延伸至定制解决方案 — 从特殊尺寸、专属表面处理到自有品牌包装 — 满足每个项目的独特需求。',
    es: 'Avonda es la marca premium de Liancheng Wood Industry, un fabricante de pisos con 40 años de trayectoria. Con sede en No. 888 Tunheng Road, Nanxun Town, Nanxun District, Huzhou City, Zhejiang Province, P.R.China — el reconocido centro de la industria maderera de China. Con 10 años de experiencia exportadora y respaldados por cuatro décadas de excelencia en fabricación de Liancheng, servimos a socios y propietarios exigentes en más de 50 países.\n\nNuestra experiencia abarca pisos de ingeniería, madera maciza, laminados y parquet, elaborados en una instalación de 30,000 m² equipada con avanzada tecnología europea, incluyendo sierras de bastidor austriacas Wintersteiger, hornos de secado italianos Nardi, líneas de procesamiento alemanas HOMAG y sistemas de cierre belgas Uniclic.\n\nCada tabla pasa por diez rigurosas etapas de producción para garantizar estabilidad, precisión y durabilidad excepcionales. Ofrecemos soluciones personalizadas — desde dimensiones a medida hasta acabados exclusivos y empaques de marca privada.',
    fr: 'Avonda est la marque premium de Liancheng Wood Industry, un fabricant de parquet avec 40 ans d\'héritage. Situé au No. 888, Route Tunheng, Bourg de Nanxun, District de Nanxun, Huzhou, Zhejiang, Chine — le centre renommé de l\'industrie chinoise du parquet. Avec 10 ans d\'expérience à l\'export et forts de quatre décennies d\'excellence manufacturière de Liancheng, nous servons des partenaires et propriétaires exigeants dans plus de 50 pays.\n\nNotre expertise couvre les parquets contrecollés, massifs, stratifiés et mosaïques, fabriqués dans une installation de 30 000 m² équipée de technologies européennes avancées — scies à cadre autrichiennes Wintersteiger, séchoirs italiens Nardi, lignes de traitement allemandes HOMAG et systèmes de verrouillage belges Uniclic.\n\nChaque lame passe par dix étapes de production rigoureuses pour garantir une stabilité, une précision et une durabilité exceptionnelles. Nous livrons des solutions personnalisées — des dimensions sur mesure aux finitions exclusives et emballages de marque privée.',
    pt: 'Avonda é a marca premium da Liancheng Wood Industry, uma fabricante de pisos com 40 anos de tradição. Sede em No. 888 Tunheng Road, Nanxun Town, Distrito de Nanxun, Huzhou, Zhejiang, China — o renomado centro da indústria de pisos de madeira da China. Com 10 anos de experiência em exportação e apoiados por quatro décadas de excelência em fabricação da Liancheng, atendemos parceiros e proprietários exigentes em mais de 50 países.\n\nNossa experiência abrange pisos de engenharia, madeira maciça, laminados e parquet, fabricados em uma instalação de 30.000 m² equipada com tecnologia europeia avançada — serras de quadro austríacas Wintersteiger, fornos de secagem italianos Nardi, linhas de processamento alemãs HOMAG e sistemas de trava belgas Uniclic.\n\nCada tábua passa por dez rigorosas etapas de produção para garantir estabilidade, precisão e durabilidade excepcionais. Entregamos soluções personalizadas — de dimensões sob medida a acabamentos exclusivos e embalagens de marca própria.',
  },
  // Section titles
  ourProcess: {
    en: 'Our Manufacturing Process',
    ru: 'Наш Производственный Процесс',
    zh: '我们的制造工艺',
    es: 'Nuestro Proceso de Fabricación',
    fr: 'Notre Processus de Fabrication',
    pt: 'Nosso Processo de Fabricação',
  },
  // Project Cases section
  projectTitle: {
    en: 'Project Cases',
    ru: 'Проекты',
    zh: '项目案例',
    es: 'Proyectos',
    fr: 'Réalisations',
    pt: 'Projetos',
  },
  projectTagline: {
    en: 'Where Craftsmanship Meets Vision',
    ru: 'Где Мастерство Встречает Видение',
    zh: '工艺与愿景的交汇',
    es: 'Donde la Artesanía se Encuentra con la Visión',
    fr: 'Là Où l\'Artisanat Rencontre la Vision',
    pt: 'Onde o Artesanato Encontra a Visão',
  },
  projectDesc: {
    en: 'Every project reflects a commitment to exceptional materials, refined aesthetics, and flawless execution. Trusted by partners across global markets, Avonda Flooring delivers bespoke wood flooring solutions that elevate residential, hospitality, and commercial environments.',
    ru: 'Каждый проект отражает приверженность исключительным материалам, утонченной эстетике и безупречному исполнению. Нам доверяют партнеры на мировых рынках — Avonda Flooring предлагает индивидуальные решения из дерева, которые преображают жилые, гостиничные и коммерческие пространства.',
    zh: '每个项目都体现着对卓越材料、精致美学与完美执行的承诺。Avonda Flooring 深受全球市场合作伙伴的信赖，提供量身定制的地板解决方案，提升住宅、酒店及商业空间品质。',
    es: 'Cada proyecto refleja un compromiso con materiales excepcionales, estética refinada y ejecución impecable. Con la confianza de socios en mercados globales, Avonda Flooring ofrece soluciones de pisos a medida que elevan espacios residenciales, hoteleros y comerciales.',
    fr: 'Chaque projet reflète un engagement envers des matériaux d\'exception, une esthétique raffinée et une exécution sans faille. Reconnu par des partenaires sur les marchés mondiaux, Avonda Flooring propose des solutions de parquet sur mesure qui subliment les espaces résidentiels, hôteliers et commerciaux.',
    pt: 'Cada projeto reflete um compromisso com materiais excepcionais, estética refinada e execução impecável. Reconhecido por parceiros em mercados globais, a Avonda Flooring oferece soluções de pisos sob medida que elevam espaços residenciais, hoteleiros e comerciais.',
  },
  projectBottom: {
    en: 'Discover how our floors shape remarkable spaces worldwide.',
    ru: 'Узнайте, как наши полы преображают пространства по всему миру.',
    zh: '探索我们的地板如何塑造全球卓越空间。',
    es: 'Descubra cómo nuestros pisos dan forma a espacios notables en todo el mundo.',
    fr: 'Découvrez comment nos sols façonnent des espaces remarquables dans le monde entier.',
    pt: 'Descubra como nossos pisos moldam espaços notáveis em todo o mundo.',
  },
  projectCTA: {
    en: 'View Our Projects',
    ru: 'Смотреть Проекты',
    zh: '查看项目案例',
    es: 'Ver Proyectos',
    fr: 'Voir Nos Réalisations',
    pt: 'Ver Projetos',
  },
  aestheticTitle: {
    en: 'Nature Meets Craftsmanship',
    ru: 'Природа Встречает Мастерство',
    zh: '自然与工艺的融合',
    es: 'La Naturaleza se Encuentra con la Artesanía',
    fr: 'La Nature Rencontre l\'Artisanat',
    pt: 'A Natureza Encontra o Artesanato',
  },
  aestheticBody: {
    en: 'Rooted in the beauty of natural wood and elevated through meticulous craftsmanship, our floors are designed to bring warmth, character, and timeless elegance into every space. Each plank reflects a harmony between nature and design — creating foundations that enrich everyday living for generations.',
    ru: 'Укорененные в красоте натурального дерева и возвышенные тщательным мастерством, наши полы призваны привнести тепло, характер и вечную элегантность в каждое пространство. Каждая доска отражает гармонию природы и дизайна, создавая основу для жизни многих поколений.',
    zh: '根植于天然木材之美，以精湛工艺升华，我们的地板为每个空间带来温暖、个性与永恒的优雅。每一块木板都体现着自然与设计的和谐 — 为世代日常生活奠定美好基础。',
    es: 'Arraigados en la belleza de la madera natural y elevados por la artesanía meticulosa, nuestros pisos aportan calidez, carácter y elegancia atemporal a cada espacio. Cada tabla refleja la armonía entre naturaleza y diseño, creando bases que enriquecen la vida cotidiana por generaciones.',
    fr: 'Ancrés dans la beauté du bois naturel et sublimés par un artisanat méticuleux, nos sols apportent chaleur, caractère et élégance intemporelle à chaque espace. Chaque lame reflète l\'harmonie entre nature et design, créant des fondations qui enrichissent la vie quotidienne pour les générations à venir.',
    pt: 'Enraizados na beleza da madeira natural e elevados pelo artesanato meticuloso, nossos pisos trazem calor, caráter e elegância atemporal a cada espaço. Cada tábua reflete a harmonia entre natureza e design, criando fundações que enriquecem a vida cotidiana por gerações.',
  },
};

// ── 10 manufacturing processes ──
interface ProcessStep {
  image: string;
  icon?: string;
  name: Record<string, string>;
  equipment: Record<string, string>;
  advantage: Record<string, string>;
}

const processes: ProcessStep[] = [
  {
    image: '/images/about/process-1.jpg',
    name: {
      en: 'Imported from Europe with Original Packaging',
      ru: 'Импорт из Европы в оригинальной упаковке',
      zh: '欧洲原装进口',
      es: 'Importado de Europa con Embalaje Original',
      fr: 'Importé d\'Europe avec Emballage d\'Origine',
      pt: 'Importado da Europa com Embalagem Original',
    },
    equipment: {
      en: 'Origin: Baltic region of Russia',
      ru: 'Происхождение: Балтийский регион России',
      zh: '产地：俄罗斯波罗的海地区',
      es: 'Origen: Región báltica de Rusia',
      fr: 'Origine : Région baltique de Russie',
      pt: 'Origem: Região báltica da Rússia',
    },
    advantage: {
      en: 'Base material selected from highly stable Nordic birch (hardwood), bonded with high-strength professional environmentally friendly phenolic resin in cross-grain pattern, achieving ENF environmental protection level and maximum stability.',
      ru: 'Основа из высокостабильной северной березы, склеенная высокопрочной экологичной фенольной смолой с перекрестной структурой, обеспечивает уровень защиты ENF и максимальную стабильность.',
      zh: '基材选用高稳定性的北欧桦木（硬木），采用高强度专业环保酚醛树脂十字纹理粘合，达到ENF环保等级，确保最强稳定性。',
      es: 'Material base seleccionado de abedul nórdico altamente estable, unido con resina fenólica ecológica de alta resistencia en patrón de grano cruzado, logrando nivel de protección ambiental ENF y máxima estabilidad.',
      fr: 'Matériau de base sélectionné en bouleau nordique très stable, collé avec résine phénolique écologique haute résistance à grain croisé, atteignant le niveau de protection environnementale ENF et une stabilité maximale.',
      pt: 'Material base selecionado de bétula nórdica altamente estável, colado com resina fenólica ecológica de alta resistência em padrão de grão cruzado, atingindo nível de proteção ambiental ENF e máxima estabilidade.',
    },
  },
  {
    image: '/images/about/process-2.jpg',
    name: {
      en: 'Scientific Spacing Back Groove',
      ru: 'Научно рассчитанные компенсационные пазы',
      zh: '科学间距背槽',
      es: 'Ranura Posterior de Espaciado Científico',
      fr: 'Rainure Arrière à Espacement Scientifique',
      pt: 'Ranhura Traseira com Espaçamento Científico',
    },
    equipment: {
      en: 'Equipment: Italian MIS | Saw blade: German Leitz',
      ru: 'Оборудование: итальянская MIS | Пильный диск: немецкий Leitz',
      zh: '设备：意大利MIS | 锯片：德国Leitz',
      es: 'Equipo: Italiano MIS | Hoja de sierra: Alemana Leitz',
      fr: 'Équipement : Italien MIS | Lame de scie : Allemande Leitz',
      pt: 'Equipamento: Italiano MIS | Lâmina de serra: Alemã Leitz',
    },
    advantage: {
      en: 'Scientifically calculated groove spacing using high-precision equipment ensures better underfloor heating transfer and fully releases birch substrate stress, guaranteeing maximum stability of each floorboard.',
      ru: 'Научно рассчитанное расстояние пазов с использованием высокоточного оборудования обеспечивает лучшую передачу теплого пола и полностью снимает напряжение березовой основы, гарантируя максимальную стабильность каждой доски.',
      zh: '科学计算的槽间距，高精度设备确保间距和深度的精确性，更好地传递地暖热量到地板表面，充分释放桦木基材应力，确保每块地板的最大稳定性。',
      es: 'El espaciado de ranuras calculado científicamente con equipos de alta precisión garantiza una mejor transferencia de calefacción por suelo radiante y libera completamente el estrés del sustrato de abedul.',
      fr: 'L\'espacement des rainures calculé scientifiquement avec un équipement de haute précision assure un meilleur transfert de chauffage au sol et libère complètement le stress du substrat de bouleau.',
      pt: 'O espaçamento de ranhuras calculado cientificamente com equipamentos de alta precisão garante melhor transferência de aquecimento por piso radiante e libera completamente o estresse do substrato de bétula.',
    },
  },
  {
    image: '/images/about/process-3.jpg',
    name: {
      en: 'Substrate Splitting',
      ru: 'Разделение основы',
      zh: '基材分切',
      es: 'División del Sustrato',
      fr: 'Division du Substrat',
      pt: 'Divisão do Substrato',
    },
    equipment: {
      en: 'Equipment: Italian MLS multi-blade saw',
      ru: 'Оборудование: итальянская многопильная пила MLS',
      zh: '设备：意大利MLS多片锯',
      es: 'Equipo: Sierra multidisco italiana MLS',
      fr: 'Équipement : Scie multilames italienne MLS',
      pt: 'Equipamento: Serra multilâmina italiana MLS',
    },
    advantage: {
      en: 'High-performance Italian MLS multi-blade saw ensures width straightness error within 0.05%, guaranteeing precision for subsequent tenoning.',
      ru: 'Высокопроизводительная итальянская многопильная пила MLS обеспечивает погрешность прямолинейности ширины в пределах 0,05%, гарантируя точность последующей обработки шипов.',
      zh: '高性能意大利MLS多片锯，确保宽度直线度误差控制在0.05%以内，保证后续开榫加工精度。',
      es: 'La sierra multidisco italiana MLS de alto rendimiento garantiza un error de rectitud de ancho dentro del 0.05%, asegurando precisión para el posterior machihembrado.',
      fr: 'La scie multilames italienne MLS haute performance garantit une erreur de rectitude de largeur inférieure à 0,05%, assurant la précision pour le tenonnage ultérieur.',
      pt: 'A serra multilâmina italiana MLS de alto desempenho garante erro de retidão de largura dentro de 0,05%, assegurando precisão para o posterior encaixe.',
    },
  },
  {
    image: '/images/about/process-4.jpg',
    name: {
      en: 'Sawing of Watch Boards',
      ru: 'Распиловка лицевых досок',
      zh: '表板锯切',
      es: 'Aserrado de Tablas de Cara',
      fr: 'Sciage des Lames de Parement',
      pt: 'Serragem de Tábuas de Face',
    },
    equipment: {
      en: 'Equipment: Austrian Wintersteiger frame saw',
      ru: 'Оборудование: австрийская рамная пила Wintersteiger',
      zh: '设备：奥地利Wintersteiger框锯',
      es: 'Equipo: Sierra de bastidor austriaca Wintersteiger',
      fr: 'Équipement : Scie à cadre autrichienne Wintersteiger',
      pt: 'Equipamento: Serra de quadro austríaca Wintersteiger',
    },
    advantage: {
      en: 'Veneer selected from sustainably managed forests over 150 years old. The sawing process (vs slicing/rotary cutting) maximally guarantees stability — preventing tearing issues that compromise floor stability with humidity and temperature changes. Austrian Wintersteiger frame saw ensures excellent veneer flatness.',
      ru: 'Шпон из устойчиво управляемых лесов возрастом более 150 лет. Процесс пиления максимально гарантирует стабильность, предотвращая разрывы, которые нарушают стабильность пола при изменении влажности и температуры.',
      zh: '表板选自150年以上可持续管理森林。锯切工艺比刨切工艺更省料，且比旋切和刨切面板更能最大限度保证稳定性，避免因温湿度变化导致的撕裂问题。奥地利Wintersteiger框锯确保表板卓越的平整度。',
      es: 'Chapa seleccionada de bosques gestionados sosteniblemente de más de 150 años. El proceso de aserrado garantiza máxima estabilidad, evitando problemas de desgarro que comprometen la estabilidad del piso con cambios de humedad y temperatura.',
      fr: 'Placage sélectionné dans des forêts gérées durablement de plus de 150 ans. Le processus de sciage garantit au maximum la stabilité, empêchant les problèmes de déchirure qui compromettent la stabilité du sol avec les changements d\'humidité et de température.',
      pt: 'Folha selecionada de florestas manejadas sustentavelmente com mais de 150 anos. O processo de serragem garante máxima estabilidade, evitando problemas de rasgo que comprometem a estabilidade do piso com mudanças de umidade e temperatura.',
    },
  },
  {
    image: '/images/about/process-5.jpg',
    name: {
      en: 'Italian Water Balance Control System',
      ru: 'Итальянская система контроля водного баланса',
      zh: '意大利水分平衡控制系统',
      es: 'Sistema Italiano de Control de Balance de Agua',
      fr: 'Système Italien de Contrôle du Bilan Hydrique',
      pt: 'Sistema Italiano de Controle de Balanço Hídrico',
    },
    equipment: {
      en: 'Equipment: Italian Nardi Drying Kiln',
      ru: 'Оборудование: итальянская сушильная камера Nardi',
      zh: '设备：意大利Nardi干燥窑',
      es: 'Equipo: Horno de secado italiano Nardi',
      fr: 'Équipement : Séchoir italien Nardi',
      pt: 'Equipamento: Forno de secagem italiano Nardi',
    },
    advantage: {
      en: 'Italy\'s precise moisture balance control system ensures the stability and durability of both substrate and veneer throughout the drying process.',
      ru: 'Точная итальянская система контроля влажности обеспечивает стабильность и долговечность как основы, так и шпона на протяжении всего процесса сушки.',
      zh: '意大利精确的水分平衡控制系统确保基材和表板在干燥过程中的稳定性和耐久性。',
      es: 'El preciso sistema italiano de control de balance de humedad garantiza la estabilidad y durabilidad tanto del sustrato como de la chapa durante todo el proceso de secado.',
      fr: 'Le système italien précis de contrôle du bilan hydrique assure la stabilité et la durabilité du substrat et du placage tout au long du processus de séchage.',
      pt: 'O preciso sistema italiano de controle de balanço de umidade garante a estabilidade e durabilidade do substrato e da folha durante todo o processo de secagem.',
    },
  },
  {
    image: '/images/about/process-6.jpg',
    name: {
      en: 'Fixed Thickness Sanding of Substrate',
      ru: 'Шлифовка основы фиксированной толщины',
      zh: '基材定厚砂光',
      es: 'Lijado de Espesor Fijo del Sustrato',
      fr: 'Ponçage à Épaisseur Fixe du Substrat',
      pt: 'Lixamento de Espessura Fixa do Substrato',
    },
    equipment: {
      en: 'Equipment: German Bütfering',
      ru: 'Оборудование: немецкий Bütfering',
      zh: '设备：德国Bütfering',
      es: 'Equipo: Alemán Bütfering',
      fr: 'Équipement : Allemand Bütfering',
      pt: 'Equipamento: Alemão Bütfering',
    },
    advantage: {
      en: 'High-performance German sanding equipment ensures flatness and ultra-high precision of the substrate during processing.',
      ru: 'Высокопроизводительное немецкое шлифовальное оборудование обеспечивает плоскостность и сверхвысокую точность основы при обработке.',
      zh: '高性能德国砂光设备确保基材在加工环节的平整度和超高精度。',
      es: 'El equipo de lijado alemán de alto rendimiento garantiza planitud y precisión ultra alta del sustrato durante el procesamiento.',
      fr: 'L\'équipement de ponçage allemand haute performance assure la planéité et une précision ultra-élevée du substrat pendant le traitement.',
      pt: 'O equipamento de lixamento alemão de alto desempenho garante planicidade e precisão ultra-alta do substrato durante o processamento.',
    },
  },
  {
    image: '/images/about/process-7.jpg',
    name: {
      en: 'Cold Pressing of Substrate & Surface Plate',
      ru: 'Холодное прессование основы и лицевой пластины',
      zh: '基材与表板冷压工艺',
      es: 'Prensado en Frío de Sustrato y Placa Superficial',
      fr: 'Pressage à Froid du Substrat et de la Plaque de Surface',
      pt: 'Prensagem a Frio do Substrato e Placa de Superfície',
    },
    equipment: {
      en: 'Equipment: Siemens & HOMAG continuous press (world\'s only one) | Raw Material: Finnish UPM Plywood',
      ru: 'Оборудование: непрерывный пресс Siemens и HOMAG (единственный в мире) | Сырье: финская фанера UPM',
      zh: '设备：德国西门子与德国HOMAG联合开发的连续压机（全球唯一） | 原料：芬兰UPM胶合板',
      es: 'Equipo: Prensa continua Siemens y HOMAG (única en el mundo) | Material: Contrachapado finlandés UPM',
      fr: 'Équipement : Presse continue Siemens & HOMAG (unique au monde) | Matériau : Contreplaqué finlandais UPM',
      pt: 'Equipamento: Prensa contínua Siemens & HOMAG (única no mundo) | Material: Compensado finlandês UPM',
    },
    advantage: {
      en: 'Two-component raw materials ensure superior environmental protection. The cold pressing process provides better thickness straightness control with error of 0.1%, ensuring excellent panel flatness.',
      ru: 'Двухкомпонентное сырье обеспечивает превосходную экологическую защиту. Холодное прессование обеспечивает лучший контроль прямолинейности толщины с погрешностью 0,1%.',
      zh: '双组分原料确保更优环保等级。冷压工艺更好地控制厚度直线度，误差0.1%，确保更优面板平整度。',
      es: 'Materiales de dos componentes garantizan protección ambiental superior. El prensado en frío proporciona mejor control de rectitud de espesor con error de 0.1%.',
      fr: 'Les matières premières à deux composants assurent une protection environnementale supérieure. Le pressage à froid offre un meilleur contrôle de la rectitude d\'épaisseur avec une erreur de 0,1%.',
      pt: 'Materiais de dois componentes garantem proteção ambiental superior. A prensagem a frio proporciona melhor controle de retidão de espessura com erro de 0,1%.',
    },
  },
  {
    image: '/images/about/process-8.jpg',
    name: {
      en: 'Blank Fine Sand with Fixed Thickness',
      ru: 'Чистовая шлифовка заготовки фиксированной толщины',
      zh: '坯料定厚精砂',
      es: 'Lijado Fino de Pieza con Espesor Fijo',
      fr: 'Ponçage Fin de l\'Ébauche à Épaisseur Fixe',
      pt: 'Lixamento Fino da Peça com Espessura Fixa',
    },
    equipment: {
      en: 'Equipment: Dutch Sandingmaster 3000',
      ru: 'Оборудование: голландский Sandingmaster 3000',
      zh: '设备：荷兰Sandingmaster3000',
      es: 'Equipo: Holandés Sandingmaster 3000',
      fr: 'Équipement : Néerlandais Sandingmaster 3000',
      pt: 'Equipamento: Holandês Sandingmaster 3000',
    },
    advantage: {
      en: 'High-performance Dutch sanding equipment ensures flatness and ultra-high precision of blanks in the final sanding stage.',
      ru: 'Высокопроизводительное голландское шлифовальное оборудование обеспечивает плоскостность и сверхвысокую точность заготовок на финальной стадии шлифовки.',
      zh: '高性能荷兰砂光设备确保坯料在加工环节的平整度和超高精度。',
      es: 'El equipo de lijado holandés de alto rendimiento garantiza planitud y precisión ultra alta de las piezas en la etapa final de lijado.',
      fr: 'L\'équipement de ponçage néerlandais haute performance assure la planéité et une précision ultra-élevée des ébauches à l\'étape finale de ponçage.',
      pt: 'O equipamento de lixamento holandês de alto desempenho garante planicidade e precisão ultra-alta das peças na etapa final de lixamento.',
    },
  },
  {
    image: '/images/about/process-9.jpg',
    name: {
      en: 'Painting Process',
      ru: 'Процесс покраски',
      zh: '涂装工艺',
      es: 'Proceso de Pintura',
      fr: 'Processus de Peinture',
      pt: 'Processo de Pintura',
    },
    equipment: {
      en: 'Equipment: Italian ELMAG | Paint: German KLUMPP | Warranty: 30-year surface coating',
      ru: 'Оборудование: итальянский ELMAG | Краска: немецкий KLUMPP | Гарантия: 30 лет на покрытие',
      zh: '设备：意大利ELMAG | 涂料：德国KLUMPP | 质保：30年表面涂层',
      es: 'Equipo: Italiano ELMAG | Pintura: Alemana KLUMPP | Garantía: 30 años de recubrimiento',
      fr: 'Équipement : Italien ELMAG | Peinture : Allemand KLUMPP | Garantie : 30 ans de revêtement',
      pt: 'Equipamento: Italiano ELMAG | Tinta: Alemã KLUMPP | Garantia: 30 anos de revestimento',
    },
    advantage: {
      en: 'Superior true wood grain display, ensuring full surface finish, flexibility, and wear resistance. Provides a 30-year surface coating warranty for residential users.',
      ru: 'Превосходное отображение натуральной текстуры дерева, обеспечивая полную отделку поверхности, гибкость и износостойкость. Предоставляется 30-летняя гарантия на покрытие.',
      zh: '更好地展现真实木纹，确保表面光洁度、柔韧性和耐磨性。为普通住宅用户提供30年表面涂层质保。',
      es: 'Visualización superior de la veta de madera real, garantizando acabado superficial completo, flexibilidad y resistencia al desgaste. Proporciona garantía de recubrimiento de 30 años.',
      fr: 'Affichage supérieur du grain de bois véritable, assurant une finition de surface complète, une flexibilité et une résistance à l\'usure. Fournit une garantie de revêtement de 30 ans.',
      pt: 'Exibição superior do grão de madeira real, garantindo acabamento superficial completo, flexibilidade e resistência ao desgaste. Fornece garantia de revestimento de 30 anos.',
    },
  },
  {
    image: '/images/about/process-10.jpg',
    name: {
      en: 'Tenoning Process',
      ru: 'Процесс шипования',
      zh: '开榫工艺',
      es: 'Proceso de Machihembrado',
      fr: 'Processus de Tenonnage',
      pt: 'Processo de Encaixe',
    },
    equipment: {
      en: 'Equipment: German HOMAG | Tools: German Leitz | Lock: Belgian Uniclic',
      ru: 'Оборудование: немецкий HOMAG | Инструменты: немецкий Leitz | Замок: бельгийский Uniclic',
      zh: '设备：德国原装进口HOMAG | 刀具：德国原装进口Leitz | 锁扣：比利时Uniclic',
      es: 'Equipo: Alemán HOMAG | Herramientas: Alemán Leitz | Cierre: Belga Uniclic',
      fr: 'Équipement : Allemand HOMAG | Outils : Allemand Leitz | Verrouillage : Belge Uniclic',
      pt: 'Equipamento: Alemão HOMAG | Ferramentas: Alemão Leitz | Trava: Belga Uniclic',
    },
    advantage: {
      en: 'Seamless splicing technology demands extreme precision. German HOMAG, German Leitz, and Belgian Uniclic ensure post-splicing height difference < 0.02mm and joint gap < 0.02mm — achieving "seamless flooring." Combined with Uniclic locking system, enables glue-free installation with zero abnormal noise.',
      ru: 'Технология бесшовного соединения требует чрезвычайной точности. HOMAG, Leitz и Uniclic обеспечивают разницу высот < 0,02 мм и зазор < 0,02 мм. В сочетании с замком Uniclic возможна бесклеевая установка без шума.',
      zh: '无缝拼接技术对工艺和设备要求极高。德国HOMAG、德国Leitz和比利时Uniclic确保拼接后高低差小于0.02mm、缝隙小于0.02mm，实现"无缝地板"。配合比利时Uniclic锁扣系统，无需胶水安装，无异响。',
      es: 'La tecnología de empalme sin costuras exige precisión extrema. HOMAG, Leitz y Uniclic aseguran diferencia de altura < 0.02mm y espacio de junta < 0.02mm — logrando "piso sin costuras." Con sistema Uniclic, permite instalación sin pegamento y sin ruido.',
      fr: 'La technologie d\'assemblage sans couture exige une précision extrême. HOMAG, Leitz et Uniclic assurent une différence de hauteur < 0,02 mm et un écart de joint < 0,02 mm — réalisant un « sol sans couture ». Avec le système Uniclic, permet une installation sans colle et sans bruit.',
      pt: 'A tecnologia de emenda sem costura exige precisão extrema. HOMAG, Leitz e Uniclic garantem diferença de altura < 0,02mm e folga de junta < 0,02mm — alcançando "piso sem costura." Com sistema Uniclic, permite instalação sem cola e sem ruído.',
    },
  },
];

// ── Helper ──
function tx(obj: Record<string, string> | undefined, locale: Locale): string {
  if (!obj) return '';
  return obj[locale] || obj.en || '';
}

export default function AboutPage({ params }: Props) {
  const locale = params.locale as Locale;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/images/about/hero-banner.jpg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.08em] uppercase">
            {locale === 'en' ? 'About Us' : locale === 'ru' ? 'О Нас' : locale === 'es' ? 'Sobre Nosotros' : locale === 'fr' ? 'À Propos' : locale === 'pt' ? 'Sobre' : '关于我们'}
          </h1>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section className="section-padding text-center bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-display-sm md:text-display-md font-light text-black leading-tight">
            {tx(t.tagline, locale)}
          </p>
          <p className="mt-4 text-sm md:text-base font-extralight tracking-[0.2em] uppercase text-neutral-400">
            {tx(t.subtitle, locale)}
          </p>
        </div>
      </section>

      {/* ── Interior Image ── */}
      <section className="bg-neutral-50">
        <div className="container-custom">
          <img
            src="/images/about/background.jpg"
            alt="Avonda Flooring"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ── Company Intro ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-display-sm font-light text-black mb-8">{tx(t.introTitle, locale)}</h2>
          <div className="prose prose-neutral max-w-none font-light text-base md:text-lg leading-relaxed space-y-4">
            {tx(t.introBody, locale).split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Cases ── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Image */}
            <div className="overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src="/images/about/project-cases.jpg"
                alt={tx(t.projectTitle, locale)}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right — Text */}
            <div>
              <h2 className="text-display-sm font-light text-black mb-2">{tx(t.projectTitle, locale)}</h2>
              <div className="mt-4 h-px w-12 bg-neutral-300" />
              <p className="mt-6 text-lg md:text-xl font-light text-black leading-snug">
                {tx(t.projectTagline, locale)}
              </p>
              <p className="mt-4 text-sm md:text-base font-light text-neutral-500 leading-relaxed">
                {tx(t.projectDesc, locale)}
              </p>
              <p className="mt-4 text-sm font-light text-neutral-400 italic">
                {tx(t.projectBottom, locale)}
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 border border-black text-black text-xs font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors"
              >
                {tx(t.projectCTA, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main About Image ── */}
      <section className="bg-neutral-50 py-8">
        <div className="container-custom">
          <img
            src="/images/about/about-main.jpg"
            alt="About Avonda"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ── Manufacturing Process ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-display-sm font-light text-black text-center mb-16">
            {tx(t.ourProcess, locale)}
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {processes.map((proc, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-neutral-100">
                  <img
                    src={proc.image}
                    alt={tx(proc.name, locale)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-light text-neutral-200">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-base md:text-lg font-normal text-black">
                      {tx(proc.name, locale)}
                    </h3>
                  </div>
                  <p className="text-xs font-medium tracking-[0.1em] uppercase text-neutral-400 mb-3">
                    {tx(proc.equipment, locale)}
                  </p>
                  <p className="text-sm font-light text-neutral-500 leading-relaxed">
                    {tx(proc.advantage, locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aesthetic ── */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <img
          src="/images/about/aesthetic-banner.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 container-custom max-w-3xl text-center text-white">
          <h2 className="text-display-sm md:text-display-md font-light mb-6">
            {tx(t.aestheticTitle, locale)}
          </h2>
          <p className="text-sm md:text-base font-light text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {tx(t.aestheticBody, locale)}
          </p>
        </div>
      </section>
    </div>
  );
}

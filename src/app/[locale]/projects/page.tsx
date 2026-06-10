import type { Metadata } from 'next';
import type { Locale } from '@/types';
import { MapPin } from 'lucide-react';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'Projects' }; }

interface ProjectItem {
  image: string;
  name: Record<string, string>;
  desc: Record<string, string>;
  location: Record<string, string>;
}

const projects: ProjectItem[] = [
  {
    image: '/images/projects/project-1.jpg',
    name: {
      en: 'Hyatt Regency',
      ru: 'Hyatt Regency',
      zh: '凯悦酒店',
      es: 'Hyatt Regency',
      fr: 'Hyatt Regency',
      pt: 'Hyatt Regency',
    },
    desc: {
      en: 'Premium engineered wood flooring selected for this five-star hotel, delivering stability and refined texture that match luxury hospitality aesthetics. End-to-end quality control from material selection and production to on-site installation, meeting high-traffic, high-standard demands — bringing natural warmth and comfort to opulent spaces.',
      ru: 'Премиальные инженерные полы для пятизвездочного отеля, сочетающие стабильность и изысканную текстуру. Полный контроль качества от выбора материалов до монтажа.',
      zh: '本项目采用高端实木复合地板，以稳定性能与细腻质感，契合五星级酒店空间美学。从选材、生产到现场铺装全程严控品质，满足大空间、高人流、高规格的使用需求，为奢华空间赋予自然质感与舒适体验。',
      es: 'Pisos de ingeniería premium seleccionados para este hotel cinco estrellas, ofreciendo estabilidad y textura refinada. Control de calidad integral desde la selección de materiales hasta la instalación.',
      fr: 'Parquet contrecollé premium sélectionné pour cet hôtel cinq étoiles, alliant stabilité et texture raffinée. Contrôle qualité complet de la sélection des matériaux à l\'installation.',
      pt: 'Pisos de engenharia premium selecionados para este hotel cinco estrelas, oferecendo estabilidade e textura refinada. Controle de qualidade completo da seleção de materiais à instalação.',
    },
    location: { en: 'Nepal', ru: 'Непал', zh: '尼泊尔', es: 'Nepal', fr: 'Népal', pt: 'Nepal' },
  },
  {
    image: '/images/projects/project-2.jpg',
    name: {
      en: 'Rezen Hotel',
      ru: 'Rezen Hotel',
      zh: '丽呈酒店',
      es: 'Rezen Hotel',
      fr: 'Rezen Hotel',
      pt: 'Rezen Hotel',
    },
    desc: {
      en: 'A benchmark urban boutique hotel project — 4,000 m² total flooring solution. Balancing eco-friendliness, comfort, and aesthetics with practicality and design sensibility, delivered through one-stop service for a high-quality hospitality space.',
      ru: 'Проект городского бутик-отеля — 4 000 м² напольного покрытия. Баланс экологичности, комфорта и эстетики с практичностью и дизайном.',
      zh: '城市精品酒店精装典范，4000㎡整体地面解决方案。注重环保、舒适与美观，兼顾实用性与设计感，一站式服务，高效完成交付，呈现高品质酒店空间效果。',
      es: 'Un proyecto hotelero boutique urbano de referencia — 4,000 m² de solución total de pisos. Equilibrando ecología, confort y estética con practicidad y diseño.',
      fr: 'Un projet hôtelier boutique urbain de référence — 4 000 m² de solution de revêtement totale. Équilibrant écologie, confort et esthétique avec praticité et design.',
      pt: 'Um projeto de hotel boutique urbano de referência — 4.000 m² de solução total de pisos. Equilibrando ecologia, conforto e estética com praticidade e design.',
    },
    location: { en: 'China', ru: 'Китай', zh: '中国', es: 'China', fr: 'Chine', pt: 'China' },
  },
  {
    image: '/images/projects/project-3.jpg',
    name: {
      en: 'Bulgari Hotel',
      ru: 'Bulgari Hotel',
      zh: '宝格丽酒店',
      es: 'Bulgari Hotel',
      fr: 'Bulgari Hotel',
      pt: 'Bulgari Hotel',
    },
    desc: {
      en: 'A tribute to urban luxury landmarks with ultimate texture. Selected premium wood flooring with exquisite grain, stable performance, and sophisticated finish — seamlessly integrated into luxury hotel design, creating understated yet refined visual and tactile experiences.',
      ru: 'Дань городским достопримечательностям роскоши с превосходной текстурой. Премиальные деревянные полы с изысканным зерном и стабильными характеристиками.',
      zh: '以极致质感，致敬城市顶奢地标。精选高端木地板，凭借细腻纹理、稳定性能与高级质感，完美融入奢华酒店设计美学，为高端空间营造低调而精致的视觉与触觉体验。',
      es: 'Un tributo a los hitos del lujo urbano con textura suprema. Pisos de madera premium seleccionados con grano exquisito y rendimiento estable.',
      fr: 'Un hommage aux monuments du luxe urbain avec une texture ultime. Parquet premium sélectionné au grain exquis et aux performances stables.',
      pt: 'Uma homenagem aos marcos do luxo urbano com textura suprema. Pisos de madeira premium selecionados com grão requintado e desempenho estável.',
    },
    location: { en: 'China', ru: 'Китай', zh: '中国', es: 'China', fr: 'Chine', pt: 'China' },
  },
  {
    image: '/images/projects/project-4.jpg',
    name: {
      en: 'BMW 4S Dealership',
      ru: 'BMW 4S Дилерский Центр',
      zh: '宝马4S店',
      es: 'Concesionario BMW 4S',
      fr: 'Concession BMW 4S',
      pt: 'Concessionária BMW 4S',
    },
    desc: {
      en: 'Professional-grade commercial flooring for a premium automotive brand space. Durable, easy-maintenance, and high-end finish — perfectly matching the high-spec image and high-traffic demands of automotive showrooms. Industrial-grade quality elevates the overall spatial experience.',
      ru: 'Профессиональные коммерческие полы для премиального автомобильного бренда. Износостойкие, легкие в уходе, с высококлассной отделкой.',
      zh: '为高端汽车品牌空间，打造专业级商用地面。产品耐磨、易维护、质感高级，适配汽车展厅高规格形象与高流量使用需求，以工业级品质提升整体空间档次与体验。',
      es: 'Pisos comerciales de grado profesional para un espacio de marca automotriz premium. Duradero, fácil mantenimiento y acabado de alta gama.',
      fr: 'Revêtement de sol commercial de qualité professionnelle pour un espace de marque automobile premium. Durable, facile d\'entretien et finition haut de gamme.',
      pt: 'Pisos comerciais de grau profissional para um espaço de marca automotiva premium. Durável, fácil manutenção e acabamento de alta qualidade.',
    },
    location: { en: 'Mongolia', ru: 'Монголия', zh: '蒙古国', es: 'Mongolia', fr: 'Mongolie', pt: 'Mongólia' },
  },
  {
    image: '/images/projects/project-5.jpg',
    name: {
      en: 'Metropolitan Palace Hotel',
      ru: 'Metropolitan Palace Hotel',
      zh: '大都会皇宫酒店',
      es: 'Metropolitan Palace Hotel',
      fr: 'Metropolitan Palace Hotel',
      pt: 'Metropolitan Palace Hotel',
    },
    desc: {
      en: 'A cross-border quality choice — 12,000 m² large-scale installation bringing natural warmth to luxury hospitality. Stable, wear-resistant, eco-friendly flooring solutions meeting rigorous five-star standards. Precision-controlled from production to installation, delivering a surface that balances luxury with comfort.',
      ru: 'Трансграничный выбор качества — 12 000 м² масштабной укладки. Стабильные, износостойкие, экологичные напольные решения, соответствующие строгим пятизвездочным стандартам.',
      zh: '跨越国界的品质之选，12000㎡大面积铺装，以稳定、耐磨、环保的木地板解决方案，匹配五星级酒店严苛标准，从生产到施工全程精工把控，呈现奢华与舒适兼具的地面效果。',
      es: 'Una elección de calidad transfronteriza — 12,000 m² de instalación a gran escala. Soluciones de pisos estables, resistentes al desgaste y ecológicas que cumplen con rigurosos estándares cinco estrellas.',
      fr: 'Un choix de qualité transfrontalier — 12 000 m² d\'installation à grande échelle. Solutions de revêtement stables, résistantes à l\'usure et écologiques répondant aux normes cinq étoiles rigoureuses.',
      pt: 'Uma escolha de qualidade transfronteiriça — 12.000 m² de instalação em grande escala. Soluções de pisos estáveis, resistentes ao desgaste e ecológicas que atendem aos rigorosos padrões cinco estrelas.',
    },
    location: { en: 'Serbia', ru: 'Сербия', zh: '塞尔维亚', es: 'Serbia', fr: 'Serbie', pt: 'Sérvia' },
  },
  {
    image: '/images/projects/project-6.jpg',
    name: {
      en: 'Wyndham Grand',
      ru: 'Wyndham Grand',
      zh: '温德姆至尊酒店',
      es: 'Wyndham Grand',
      fr: 'Wyndham Grand',
      pt: 'Wyndham Grand',
    },
    desc: {
      en: 'A comprehensive wood flooring solution designed for commercial spaces demanding high wear resistance, easy maintenance, and eco-stability. Products pass rigorous environmental and wear-resistance tests, suitable for hotels, premium clubs, and large-scale commercial projects — quality that stands the test of time.',
      ru: 'Комплексное решение для коммерческих помещений с высокими требованиями к износостойкости и экологичности. Продукция проходит строгие испытания.',
      zh: '针对商业空间高耐磨、易维护、环保稳定的专业需求，提供整体木地板解决方案。产品通过严格环保与耐磨检测，适用于酒店、高端会所等大型工装项目，品质经得起时间与使用考验。',
      es: 'Una solución integral de pisos de madera para espacios comerciales que exigen alta resistencia al desgaste y eco-estabilidad. Los productos pasan rigurosas pruebas ambientales y de resistencia.',
      fr: 'Une solution complète de revêtement de sol en bois pour les espaces commerciaux exigeant une haute résistance à l\'usure et une éco-stabilité. Les produits passent des tests rigoureux.',
      pt: 'Uma solução abrangente de pisos de madeira para espaços comerciais que exigem alta resistência ao desgaste e eco-estabilidade. Os produtos passam por testes rigorosos.',
    },
    location: { en: 'China', ru: 'Китай', zh: '中国', es: 'China', fr: 'Chine', pt: 'China' },
  },
  {
    image: '/images/projects/project-7.jpg',
    name: {
      en: 'Atour Hotel',
      ru: 'Atour Hotel',
      zh: '亚朵酒店',
      es: 'Atour Hotel',
      fr: 'Atour Hotel',
      pt: 'Atour Hotel',
    },
    desc: {
      en: 'High wear resistance, easy maintenance, eco-friendly and stable — our flooring meets Atour\'s stringent quality and comfort standards for premium lifestyle hospitality. Warm, natural texture with proven durability that withstands long-term use.',
      ru: 'Высокая износостойкость, легкий уход, экологичность и стабильность — наши полы соответствуют строгим стандартам качества и комфорта Atour.',
      zh: '高耐磨、易维护、环保稳定 — 产品契合亚朵高端旅居空间的严苛品质与舒适标准。温润自然质感，可靠耐用，经得起长期使用考验。',
      es: 'Alta resistencia al desgaste, fácil mantenimiento, ecológico y estable — nuestros pisos cumplen con los exigentes estándares de calidad y confort de Atour.',
      fr: 'Haute résistance à l\'usure, entretien facile, écologique et stable — nos sols répondent aux normes exigeantes de qualité et de confort d\'Atour.',
      pt: 'Alta resistência ao desgaste, fácil manutenção, ecológico e estável — nossos pisos atendem aos rigorosos padrões de qualidade e conforto do Atour.',
    },
    location: { en: 'China', ru: 'Китай', zh: '中国', es: 'China', fr: 'Chine', pt: 'China' },
  },
];

const labels: Record<string, Record<string, string>> = {
  en: { title: 'Project Cases', subtitle: 'Wood flooring solutions for clients worldwide', location: 'Location' },
  ru: { title: 'Проекты', subtitle: 'Решения деревянных полов для клиентов по всему миру', location: 'Локация' },
  zh: { title: '项目案例', subtitle: '我们为全球客户提供的木地板解决方案', location: '地点' },
  es: { title: 'Proyectos', subtitle: 'Soluciones de pisos de madera para clientes en todo el mundo', location: 'Ubicación' },
  fr: { title: 'Réalisations', subtitle: 'Solutions de parquet pour clients dans le monde entier', location: 'Lieu' },
  pt: { title: 'Projetos', subtitle: 'Soluções de pisos de madeira para clientes no mundo todo', location: 'Local' },
};

function tx(obj: Record<string, string> | undefined, locale: Locale): string {
  if (!obj) return '';
  return obj[locale] || obj.en || '';
}

export default function ProjectsPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;

  return (
    <div>
      {/* Hero — with background image */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 text-center overflow-hidden">
        <img
          src="/images/about/background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl font-light sm:text-5xl text-[#2E2E2E]">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-neutral-500">{t.subtitle}</p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((proj, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-white border border-neutral-100 hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={tx(proj.name, locale)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-light text-black">{tx(proj.name, locale)}</h3>
                  <p className="mt-3 text-sm md:text-base font-light text-neutral-500 leading-relaxed">
                    {tx(proj.desc, locale)}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-neutral-400">
                    <MapPin className="h-4 w-4" />
                    <span>{tx(proj.location, locale)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

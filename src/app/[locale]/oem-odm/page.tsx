import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getProducts, localizedValue } from '@/lib/cms';
import type { Locale } from '@/types';
import ODMRenderingsCarousel from './ODMRenderingsCarousel';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'OEM/ODM' }; }

// ── 6-language content ──
const t: Record<string, Record<string, string>> = {
  heroTitle: { en:'OEM/ODM', ru:'OEM/ODM', zh:'OEM/ODM', es:'OEM/ODM', fr:'OEM/ODM', pt:'OEM/ODM' },
  heroSub: { en:'Your One-Stop Solution for OEM/ODM Services', ru:'Ваше Комплексное Решение для OEM/ODM Услуг', zh:'您的一站式OEM/ODM服务解决方案', es:'Su Solución Integral para Servicios OEM/ODM', fr:'Votre Solution Tout-en-Un pour Services OEM/ODM', pt:'Sua Solução Completa para Serviços OEM/ODM' },
  // What is OEM
  oemWhat: { en:'What Is OEM?', ru:'Что Такое OEM?', zh:'什么是OEM？', es:'¿Qué es OEM?', fr:'Qu\'est-ce que l\'OEM ?', pt:'O que é OEM?' },
  oemDesc: {
    en: 'OEM (Original Equipment Manufacturer) refers to a business model where a manufacturer designs and produces products based on the specific requirements of its clients. These products are then marked and sold under the client\'s brand name. This model allows clients to focus on brand building and market development while relying on the manufacturer\'s expertise in production and quality control. We specialize in providing high-quality customized wood flooring (engineered flooring, laminate flooring, SPC flooring, etc.) solutions to meet the unique needs of your brand and market.',
    ru: 'OEM (Original Equipment Manufacturer) — это бизнес-модель, при которой производитель разрабатывает и производит продукцию в соответствии с конкретными требованиями клиентов. Эта продукция затем маркируется и продается под брендом клиента. Мы специализируемся на предоставлении высококачественных индивидуальных решений по деревянным напольным покрытиям.',
    zh: 'OEM（原始设备制造商）是指制造商根据客户的具体要求设计和生产产品的商业模式。这些产品以客户的品牌名义进行销售。这种模式使客户能够专注于品牌建设和市场开发，同时依靠制造商在生产和质量控制方面的专业知识。我们专注于提供高质量的定制木地板（工程地板、强化地板、SPC地板等）解决方案，满足您品牌和市场的独特需求。',
    es: 'OEM (Fabricante de Equipo Original) se refiere a un modelo de negocio donde un fabricante diseña y produce productos según los requisitos específicos de sus clientes. Estos productos son luego marcados y vendidos bajo la marca del cliente. Nos especializamos en soluciones de pisos de madera personalizados de alta calidad.',
    fr: 'OEM (Original Equipment Manufacturer) désigne un modèle commercial dans lequel un fabricant conçoit et produit des produits selon les exigences spécifiques de ses clients. Ces produits sont ensuite commercialisés sous la marque du client. Nous sommes spécialisés dans les solutions de parquet personnalisé de haute qualité.',
    pt: 'OEM (Fabricante de Equipamento Original) refere-se a um modelo de negócios onde um fabricante projeta e produz produtos com base nos requisitos específicos de seus clientes. Esses produtos são então marcados e vendidos sob a marca do cliente. Somos especializados em soluções de pisos de madeira personalizados de alta qualidade.',
  },
  // OEM Process
  oemProcess: { en:'Our OEM Process', ru:'Наш OEM Процесс', zh:'我们的OEM流程', es:'Nuestro Proceso OEM', fr:'Notre Processus OEM', pt:'Nosso Processo OEM' },
  // ODM
  odmWhat: { en:'What Is ODM?', ru:'Что Такое ODM?', zh:'什么是ODM？', es:'¿Qué es ODM?', fr:'Qu\'est-ce que l\'ODM ?', pt:'O que é ODM?' },
  odmDesc: {
    en: 'ODM (Original Design Manufacturer) is a business model where a manufacturer not only produces but also designs products that clients can market under their own brand names. This model offers a turnkey solution for companies looking to bring innovative, high-quality products to market without investing in design and development. We specialize in designing and manufacturing exceptional wood flooring (engineered flooring, laminate flooring, SPC flooring, etc.) solutions, offering a comprehensive end-to-end service to help your brand stand out in the market.',
    ru: 'ODM (Original Design Manufacturer) — это бизнес-модель, при которой производитель не только производит, но и разрабатывает дизайн продукции, которую клиенты могут продавать под своим брендом. Мы специализируемся на разработке и производстве исключительных решений по деревянным напольным покрытиям.',
    zh: 'ODM（原始设计制造商）是一种商业模式，制造商不仅生产产品，还设计产品，客户可以以自己的品牌名称进行销售。这种模式为希望在不需要投资设计和开发的情况下将创新、高质量产品推向市场的公司提供了交钥匙解决方案。我们专注于设计和制造卓越的木地板解决方案，提供全面的端到端服务。',
    es: 'ODM (Fabricante de Diseño Original) es un modelo de negocio donde un fabricante no solo produce sino que también diseña productos que los clientes pueden comercializar bajo su propia marca. Ofrecemos un servicio integral para ayudar a su marca a destacar en el mercado.',
    fr: 'ODM (Original Design Manufacturer) est un modèle commercial dans lequel un fabricant non seulement produit mais conçoit également des produits que les clients peuvent commercialiser sous leur propre marque. Nous offrons un service complet de bout en bout pour aider votre marque à se démarquer.',
    pt: 'ODM (Fabricante de Design Original) é um modelo de negócios onde um fabricante não apenas produz, mas também projeta produtos que os clientes podem comercializar sob sua própria marca. Oferecemos um serviço completo para ajudar sua marca a se destacar no mercado.',
  },
  // ODM Renderings
  odmRender: { en:'ODM Product Renderings', ru:'Визуализации Продуктов ODM', zh:'ODM产品效果图', es:'Renderizados de Productos ODM', fr:'Rendus de Produits ODM', pt:'Renderizações de Produtos ODM' },
  odmRenderDesc: {
    en: 'If you have more ideas about your design — any style, logo, quantity, or material — please let us know. Our experienced staff can provide useful suggestions to improve your design. Email us your design and our engineers and R&D department will make samples accordingly. We will recommend relevant materials for your new series. We will make your dream come true.',
    ru: 'Если у вас есть идеи по дизайну — стиль, логотип, количество или материал — сообщите нам. Наши опытные сотрудники предложат полезные рекомендации. Отправьте дизайн, и наши инженеры изготовят образцы.',
    zh: '如果您对设计有更多想法 — 任何风格、标志、数量或材料 — 请告诉我们。我们经验丰富的员工可以提供有用的建议来改进您的设计。请将设计发送给我们，我们的工程师和研发部门将据此制作样品。我们将为你的新系列推荐相关材料。我们将让您的梦想成真。',
    es: 'Si tiene más ideas sobre su diseño — cualquier estilo, logotipo, cantidad o material — háganoslo saber. Nuestro personal experimentado puede proporcionar sugerencias útiles. Envíenos su diseño y nuestros ingenieros harán muestras.',
    fr: 'Si vous avez plus d\'idées sur votre design — style, logo, quantité ou matériau — faites-le nous savoir. Notre personnel expérimenté peut fournir des suggestions utiles. Envoyez-nous votre design et nos ingénieurs fabriqueront des échantillons.',
    pt: 'Se você tem mais ideias sobre seu design — qualquer estilo, logotipo, quantidade ou material — informe-nos. Nossa equipe experiente pode fornecer sugestões úteis. Envie-nos seu design e nossos engenheiros farão amostras.',
  },
  cta: { en:'Contact Us', ru:'Связаться', zh:'联系我们', es:'Contáctenos', fr:'Contactez-nous', pt:'Contate-nos' },
};

// ── OEM Process Steps ──
const oemSteps = [
  {
    img: '/images/oem/oem-consultation.jpg',
    title: { en:'Consultation', ru:'Консультация', zh:'需求沟通', es:'Consulta', fr:'Consultation', pt:'Consulta' },
    desc: { en:'Understand your product requirements and brand vision.', ru:'Понимание требований к продукту и видения бренда.', zh:'了解您的产品需求和品牌愿景。', es:'Comprender los requisitos de su producto y la visión de su marca.', fr:'Comprendre vos exigences produit et votre vision de marque.', pt:'Compreender os requisitos do seu produto e a visão da sua marca.' },
  },
  {
    img: '/images/oem/oem-design.jpg',
    title: { en:'Design & Sample', ru:'Дизайн и Образец', zh:'设计与打样', es:'Diseño y Muestra', fr:'Design et Échantillon', pt:'Design e Amostra' },
    desc: { en:'Create custom designs and produce samples for your approval.', ru:'Создание индивидуальных дизайнов и образцов.', zh:'创建定制设计并生产样品供您确认。', es:'Crear diseños personalizados y producir muestras para su aprobación.', fr:'Créer des designs personnalisés et produire des échantillons.', pt:'Criar designs personalizados e produzir amostras para aprovação.' },
  },
  {
    img: '/images/oem/oem-contract.jpg',
    title: { en:'Contract & Signing', ru:'Контракт и Подписание', zh:'合同签订', es:'Contrato y Firma', fr:'Contrat et Signature', pt:'Contrato e Assinatura' },
    desc: { en:'Finalize details, timelines, and agreements.', ru:'Согласование деталей, сроков и договоренностей.', zh:'确定细节、时间表和协议。', es:'Finalizar detalles, plazos y acuerdos.', fr:'Finaliser les détails, les délais et les accords.', pt:'Finalizar detalhes, prazos e acordos.' },
  },
  {
    img: '/images/oem/oem-manufacturing-new.png',
    title: { en:'Manufacturing', ru:'Производство', zh:'规模生产', es:'Fabricación', fr:'Fabrication', pt:'Fabricação' },
    desc: { en:'Full-scale production with rigorous quality control at every stage.', ru:'Полномасштабное производство со строгим контролем качества.', zh:'全规模生产，每个阶段都有严格的质量控制。', es:'Producción a gran escala con riguroso control de calidad.', fr:'Production à grande échelle avec contrôle qualité rigoureux.', pt:'Produção em grande escala com rigoroso controle de qualidade.' },
  },
  {
    img: '/images/oem/oem-delivery-new.jpg',
    title: { en:'Delivery', ru:'Доставка', zh:'全球配送', es:'Entrega', fr:'Livraison', pt:'Entrega' },
    desc: { en:'Ensure timely and safe shipment of finished products worldwide.', ru:'Своевременная и безопасная доставка готовой продукции по всему миру.', zh:'确保成品及时安全地运送到全球各地。', es:'Garantizar el envío puntual y seguro de productos terminados.', fr:'Assurer l\'expédition rapide et sécurisée des produits finis.', pt:'Garantir o envio pontual e seguro dos produtos acabados.' },
  },
];

function tx(obj: Record<string, string> | undefined, locale: Locale): string {
  if (!obj) return '';
  return obj[locale] || obj.en || '';
}

export default function OEMODMPage({ params }: Props) {
  const locale = params.locale as Locale;
  const allProducts = getProducts(locale);
  // Pick 7 products with matching aspect ratio (0.75) for uniform carousel look
  const pickSlugs = ['herringbone-1', 'herringbone-4', 'geometric-5', 'versailles-19', 'art-parquet-32', 'chevron-41', 'geometric-12'];
  const renderingProducts = pickSlugs.map(slug => allProducts.find(p => p.slug === slug)).filter(Boolean) as typeof allProducts;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden bg-black">
        <img src="/images/oem/oem-hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl font-light sm:text-5xl">{tx(t.heroTitle, locale)}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-neutral-300">{tx(t.heroSub, locale)}</p>
        </div>
      </section>

      {/* ── What is OEM ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-display-sm font-light text-black mb-6">{tx(t.oemWhat, locale)}</h2>
          <p className="text-base md:text-lg font-light text-neutral-500 leading-relaxed">{tx(t.oemDesc, locale)}</p>
        </div>
      </section>

      {/* ── Our OEM Process ── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-display-sm font-light text-black text-center mb-12">{tx(t.oemProcess, locale)}</h2>
          <div className="space-y-8">
            {oemSteps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100">
                  <img src={step.img} alt={tx(step.title, locale)} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-500 mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-light text-black">{tx(step.title, locale)}</h3>
                  <p className="mt-2 text-sm md:text-base font-light text-neutral-400">{tx(step.desc, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ODM Introduction ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-display-sm font-light text-black mb-6">{tx(t.odmWhat, locale)}</h2>
          <p className="text-base md:text-lg font-light text-neutral-500 leading-relaxed">{tx(t.odmDesc, locale)}</p>
        </div>
      </section>

      {/* ── ODM Product Renderings ── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-display-sm font-light text-black text-center mb-4">{tx(t.odmRender, locale)}</h2>
          <p className="text-sm font-light text-neutral-400 text-center max-w-2xl mx-auto mb-10">{tx(t.odmRenderDesc, locale)}</p>
          <ODMRenderingsCarousel products={renderingProducts} locale={locale} />
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors">
              {tx(t.cta, locale)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

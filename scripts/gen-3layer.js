const fs = require('fs');
const path = require('path');

const products = [
  { slug: "3layer-solid-43", img: "3layer-solid-43.png", model: { en:"QN-65 Oak", ru:"QN-65 Дуб", zh:"QN-65 橡木", es:"QN-65 Roble", fr:"QN-65 Chêne", pt:"QN-65 Carvalho" },
    wood: { en:"Oak", ru:"Дуб", zh:"橡木", es:"Roble", fr:"Chêne", pt:"Carvalho" },
    eco: "ENF",
    size: "1900*190*14/3mm", lock: { en:"4-Sided Large Click Lock", ru:"4-Сторонний Большой Замок", zh:"四边大锁扣", es:"4 Lados Click Grande", fr:"4 Côtés Grand Clips", pt:"4 Lados Click Grande" },
    finish: { en:"Natural Texture, Knot & Crack", ru:"Натуральная Текстура, Сучки и Трещины", zh:"自然纹理・结巴裂缝", es:"Textura Natural, Nudos y Grietas", fr:"Texture Naturelle, Nœuds et Fissures", pt:"Textura Natural, Nós e Rachaduras" } },
  { slug: "3layer-solid-44", img: "3layer-solid-44.png", model: { en:"QN-66 Oak", ru:"QN-66 Дуб", zh:"QN-66 橡木", es:"QN-66 Roble", fr:"QN-66 Chêne", pt:"QN-66 Carvalho" },
    wood: { en:"Oak", ru:"Дуб", zh:"橡木", es:"Roble", fr:"Chêne", pt:"Carvalho" },
    eco: "ENF",
    size: "1900*190*14/3mm", lock: { en:"4-Sided Large Click Lock", ru:"4-Сторонний Большой Замок", zh:"四边大锁扣", es:"4 Lados Click Grande", fr:"4 Côtés Grand Clips", pt:"4 Lados Click Grande" },
    finish: { en:"Natural Texture, Knot & Crack", ru:"Натуральная Текстура, Сучки и Трещины", zh:"自然纹理・结巴裂缝", es:"Textura Natural, Nudos y Grietas", fr:"Texture Naturelle, Nœuds et Fissures", pt:"Textura Natural, Nós e Rachaduras" } },
  { slug: "3layer-solid-45", img: "3layer-solid-45.png", model: { en:"D202 Yadan Red Oak", ru:"D202 Ядань Красный Дуб", zh:"D202 雅丹 北美红橡木", es:"D202 Yadan Roble Rojo", fr:"D202 Yadan Chêne Rouge", pt:"D202 Yadan Carvalho Vermelho" },
    wood: { en:"North American Red Oak", ru:"Североамериканский Красный Дуб", zh:"北美红橡木", es:"Roble Rojo Norteamericano", fr:"Chêne Rouge d'Amérique du Nord", pt:"Carvalho Vermelho Norte-Americano" },
    eco: "ENF",
    size: "1910*192*15/3mm", lock: { en:"5G Lock", ru:"5G Замок", zh:"5G 锁扣", es:"Cierre 5G", fr:"Verrou 5G", pt:"Trava 5G" },
    finish: { en:"Smooth, Deep Smoked Invisible Oil UV Lacquer", ru:"Гладкая, Глубокое Копчение UV Лак", zh:"平面・深烟熏隐形油 UV 漆", es:"Liso, Ahumado Profundo UV", fr:"Lisse, Fumé Profond UV", pt:"Liso, Defumado Profundo UV" } },
  { slug: "3layer-solid-46", img: "3layer-solid-46.png", model: { en:"D101 Velvet Red Oak", ru:"D101 Бархат Красный Дуб", zh:"D101 鹅绒 北美红橡木", es:"D101 Terciopelo Roble Rojo", fr:"D101 Velours Chêne Rouge", pt:"D101 Veludo Carvalho Vermelho" },
    wood: { en:"North American Red Oak", ru:"Североамериканский Красный Дуб", zh:"北美红橡木", es:"Roble Rojo Norteamericano", fr:"Chêne Rouge d'Amérique du Nord", pt:"Carvalho Vermelho Norte-Americano" },
    eco: "ENF",
    size: "1910*192*15/3mm", lock: { en:"5G Lock", ru:"5G Замок", zh:"5G 锁扣", es:"Cierre 5G", fr:"Verrou 5G", pt:"Trava 5G" },
    finish: { en:"Light Brushed, UV Lacquer", ru:"Легкая Брашировка, УФ Лак", zh:"轻拉丝・UV 漆", es:"Cepillado Ligero, Laca UV", fr:"Légèrement Brossé, Laque UV", pt:"Escovado Leve, Laca UV" } },
  { slug: "3layer-solid-47", img: "3layer-solid-47.png", model: { en:"D103 Ivory Red Oak", ru:"D103 Слоновая Кость Красный Дуб", zh:"D103 象牙 北美红橡木", es:"D103 Marfil Roble Rojo", fr:"D103 Ivoire Chêne Rouge", pt:"D103 Marfim Carvalho Vermelho" },
    wood: { en:"North American Red Oak", ru:"Североамериканский Красный Дуб", zh:"北美红橡木", es:"Roble Rojo Norteamericano", fr:"Chêne Rouge d'Amérique du Nord", pt:"Carvalho Vermelho Norte-Americano" },
    eco: "ENF",
    size: "1910*192*15/3mm", lock: { en:"5G Lock", ru:"5G Замок", zh:"5G 锁扣", es:"Cierre 5G", fr:"Verrou 5G", pt:"Trava 5G" },
    finish: { en:"Light Brushed, UV Lacquer", ru:"Легкая Брашировка, УФ Лак", zh:"轻拉丝・UV 漆", es:"Cepillado Ligero, Laca UV", fr:"Légèrement Brossé, Laque UV", pt:"Escovado Leve, Laca UV" } },
  { slug: "3layer-solid-48", img: "3layer-solid-48.png", model: { en:"J101 Wood Wax European Oak", ru:"J101 Воск Европейский Дуб", zh:"J101 木蜡 欧洲橡木", es:"J101 Cera Roble Europeo", fr:"J101 Cire Chêne Européen", pt:"J101 Cera Carvalho Europeu" },
    wood: { en:"European Oak", ru:"Европейский Дуб", zh:"欧洲橡木", es:"Roble Europeo", fr:"Chêne Européen", pt:"Carvalho Europeu" },
    eco: "ENF",
    size: "2210*242*15/4mm", lock: { en:"5G Lock", ru:"5G Замок", zh:"5G 锁扣", es:"Cierre 5G", fr:"Verrou 5G", pt:"Trava 5G" },
    finish: { en:"Light Brushed, UV Oil", ru:"Легкая Брашировка, УФ Масло", zh:"轻拉丝・UV 油", es:"Cepillado Ligero, Aceite UV", fr:"Légèrement Brossé, Huile UV", pt:"Escovado Leve, Óleo UV" } },
  { slug: "3layer-solid-49", img: "3layer-solid-49.png", model: { en:"J402 Monarch Butterfly European Oak", ru:"J402 Монарх Европейский Дуб", zh:"J402 王蝶 欧洲橡木", es:"J402 Monarca Roble Europeo", fr:"J402 Monarque Chêne Européen", pt:"J402 Monarca Carvalho Europeu" },
    wood: { en:"European Oak", ru:"Европейский Дуб", zh:"欧洲橡木", es:"Roble Europeo", fr:"Chêne Européen", pt:"Carvalho Europeu" },
    eco: "ENF",
    size: "1910*192*14/3mm", lock: { en:"5G Lock", ru:"5G Замок", zh:"5G 锁扣", es:"Cierre 5G", fr:"Verrou 5G", pt:"Trava 5G" },
    finish: { en:"Low Relief, Butterfly Knot, Deep Smoked UV Oil", ru:"Низкий Рельеф, Бабочка, Глубокое Копчение UV Масло", zh:"浅浮雕・蝴蝶结・深烟熏 UV 油", es:"Bajorrelieve, Nudo Mariposa, Ahumado UV", fr:"Bas-Relief, Nœud Papillon, Fumé Profond UV", pt:"Baixo Relevo, Nó Borboleta, Defumado UV" } },
  { slug: "3layer-solid-50", img: "3layer-solid-50.jpg", model: { en:"J403 Spotted Butterfly European Oak", ru:"J403 Пятнистая Бабочка Европейский Дуб", zh:"J403 斑蝶 欧洲橡木", es:"J403 Mariposa Moteada Roble Europeo", fr:"J403 Papillon Tacheté Chêne Européen", pt:"J403 Borboleta Manchada Carvalho Europeu" },
    wood: { en:"European Oak", ru:"Европейский Дуб", zh:"欧洲橡木", es:"Roble Europeo", fr:"Chêne Européen", pt:"Carvalho Europeu" },
    eco: "ENF",
    size: "1910*192*14/3mm", lock: { en:"5G Lock", ru:"5G Замок", zh:"5G 锁扣", es:"Cierre 5G", fr:"Verrou 5G", pt:"Trava 5G" },
    finish: { en:"Low Relief, Butterfly Knot, Deep Smoked UV Oil", ru:"Низкий Рельеф, Бабочка, Глубокое Копчение UV Масло", zh:"浅浮雕・蝴蝶结・深烟熏 UV 油", es:"Bajorrelieve, Nudo Mariposa, Ahumado UV", fr:"Bas-Relief, Nœud Papillon, Fumé Profond UV", pt:"Baixo Relevo, Nó Borboleta, Defumado UV" } }
];

const locales = ["en","ru","zh","es","fr","pt"];
const core = { en:"Imported Finnish Spruce Core", ru:"Импортный Финский Еловый Сердечник", zh:"进口芬兰云杉芯", es:"Núcleo de Abeto Finlandés", fr:"Noyau d'Épicéa Finlandais", pt:"Núcleo de Abeto Finlandês" };
const base = "/images/uploads/parquet/3layer-solid/";

const specNames = {
  model: { en:"Model", ru:"Модель", zh:"型号", es:"Modelo", fr:"Modèle", pt:"Modelo" },
  wood: { en:"Wood Species", ru:"Порода", zh:"树种", es:"Especie", fr:"Essence", pt:"Espécie" },
  eco: { en:"Eco Standard", ru:"Эко Стандарт", zh:"环保", es:"Estándar Eco", fr:"Norme Éco", pt:"Padrão Eco" },
  grade: { en:"Grade", ru:"Сорт", zh:"等级", es:"Grado", fr:"Grade", pt:"Grau" },
  size: { en:"Size", ru:"Размер", zh:"规格", es:"Tamaño", fr:"Taille", pt:"Tamanho" },
  core: { en:"Core", ru:"Сердечник", zh:"芯材", es:"Núcleo", fr:"Noyau", pt:"Núcleo" },
  lock: { en:"Lock", ru:"Замок", zh:"槽口", es:"Cierre", fr:"Verrou", pt:"Trava" },
  finish: { en:"Finish", ru:"Отделка", zh:"工艺", es:"Acabado", fr:"Finition", pt:"Acabamento" }
};

const grade = { en:"AB", ru:"AB", zh:"AB", es:"AB", fr:"AB", pt:"AB" };
const ecoVal = { en:"ENF", ru:"ENF", zh:"ENF 级", es:"ENF", fr:"ENF", pt:"ENF" };

for (const p of products) {
  const json = {
    slug: p.slug,
    title: p.model,
    category: "3layer-solid",
    featured_image: base + p.img,
    gallery: [base + p.img],
    short_description: {},
    body: Object.fromEntries(locales.map(l => [l, ""])),
    specs: [
      { name: specNames.model, value: p.model },
      { name: specNames.wood, value: p.wood },
      { name: specNames.eco, value: ecoVal },
      { name: specNames.grade, value: grade },
      { name: specNames.size, value: Object.fromEntries(locales.map(l => [l, p.size])) },
      { name: specNames.core, value: core },
      { name: specNames.lock, value: p.lock },
      { name: specNames.finish, value: p.finish }
    ],
    is_featured: false
  };

  // short_description
  for (const l of locales) {
    json.short_description[l] = [
      `Model: ${p.model[l]}`,
      `Wood: ${p.wood[l]}`,
      `Eco: ${ecoVal[l]}`,
      `Grade: AB`,
      `Size: ${p.size}`,
      `Core: ${core[l]}`,
      `Lock: ${p.lock[l]}`,
      `Finish: ${p.finish[l]}`
    ].join(' | ');
  }

  for (const l of locales) {
    const dir = `c:/Users/23135/Claude Code Text/flooring-website/src/content/products/${l}/`;
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${p.slug}.json`), JSON.stringify(json, null, 2));
    console.log(`  ${l}/${p.slug}.json`);
  }
}

console.log(`Done: ${products.length * locales.length} JSON files`);

const fs = require('fs');
const path = require('path');

const products = [
  {
    slug: 'annie-princess-oak',
    category: 'parquet-flooring',
    image: 'parquet-1.png',
    en_title: 'Anne Princess — Oak Parquet',
    en_short: 'Special-shaped parquet series. Oak wood with Italian coating on Russian birch base. ENF certified.',
    en_body: '## Anne Princess Oak Parquet\n\nSpecial-shaped parquet flooring crafted from premium oak wood. Precision-cut with Italian coating finish on a Russian imported birch base. Designed for luxury interiors.\n\n### Specifications\n- **Wood Species**: Oak\n- **Model**: Anne Princess\n- **Size**: 1120×1120/4.0mm\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Анна Принцесса — Дубовый Паркет',
    ru_short: 'Паркет специальной формы. Дуб с итальянским покрытием на российской березовой основе. Сертифицирован ENF.',
    ru_body: '## Анна Принцесса\n\nПаркет специальной формы из премиального дуба. Итальянское покрытие на основе российской березы. Для роскошных интерьеров.',
    zh_title: '安妮公主 — 橡木拼花',
    zh_short: '异性拼花系列。橡木材质，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 安妮公主 橡木拼花\n\n精选橡木异性拼花地板。意式涂装工艺，俄罗斯进口全桦基材。适用于高端住宅及商业空间。\n\n### 产品参数\n- **木种**: 橡木\n- **型号**: 安妮公主\n- **规格**: 1120×1120/4.0mm\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '橡木'], ['型号', '安妮公主'], ['规格', '1120×1120/4.0mm'],
      ['工艺', '意式涂装'], ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'lotus-night-rain-walnut',
    category: 'parquet-flooring',
    image: 'parquet-2.png',
    en_title: 'Lotus Night Rain — Walnut Parquet',
    en_short: 'Special-shaped parquet series. Black walnut with Italian coating on Russian birch base. ENF certified.',
    en_body: '## Lotus Night Rain Walnut Parquet\n\nExquisite black walnut special-shaped parquet. Italian coating finish on Russian birch base. A designer-recommended piece for statement interiors.\n\n### Specifications\n- **Wood Species**: Black Walnut\n- **Model**: Lotus Night Rain\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Лотос Ночной Дождь — Ореховый Паркет',
    ru_short: 'Паркет специальной формы. Черный орех с итальянским покрытием на российской березовой основе. ENF.',
    ru_body: '## Лотос Ночной Дождь\n\nИзысканный паркет из черного ореха. Итальянское покрытие на березовой основе. Рекомендовано дизайнерами.',
    zh_title: '荷风夜雨 — 黑胡桃拼花',
    zh_short: '异性拼花系列。黑胡桃材质，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 荷风夜雨 黑胡桃拼花\n\n精选黑胡桃异性拼花地板。意式涂装工艺，俄罗斯进口全桦基材。设计师推荐产品。\n\n### 产品参数\n- **木种**: 黑胡桃\n- **型号**: 荷风夜雨\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '黑胡桃'], ['型号', '荷风夜雨'], ['工艺', '意式涂装'],
      ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'hexagon-dyed-veneer',
    category: 'parquet-flooring',
    image: 'parquet-3.png',
    en_title: 'Hexagon — Dyed Veneer Parquet',
    en_short: 'Special-shaped parquet series. Dyed wood veneer with Italian coating on Russian birch base. ENF certified.',
    en_body: '## Hexagon Parquet\n\nUnique hexagon-shaped parquet with dyed wood veneer surface. Italian coating on Russian birch base creates a distinctive geometric pattern for modern interiors.\n\n### Specifications\n- **Wood Species**: Dyed Veneer\n- **Model**: Hexagon\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Гексагон — Паркет из Крашеного Шпона',
    ru_short: 'Паркет специальной формы. Крашеный шпон с итальянским покрытием на российской березовой основе. ENF.',
    ru_body: '## Гексагон\n\nУникальный шестиугольный паркет с крашеным шпоном. Геометрический узор для современных интерьеров.',
    zh_title: '六边形 — 染色木皮拼花',
    zh_short: '异性拼花系列。染色木皮材质，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 六边形 染色木皮拼花\n\n独特六边形拼花地板，染色木皮表面，意式涂装。几何图案设计，适用于现代风格空间。\n\n### 产品参数\n- **木种**: 染色木皮\n- **型号**: 六边形\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '染色木皮'], ['型号', '六边形'], ['工艺', '意式涂装'],
      ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'assaria-walnut',
    category: 'parquet-flooring',
    image: 'parquet-4.png',
    en_title: 'Assaria — Walnut Parquet',
    en_short: 'Special-shaped parquet series. Black walnut with Italian coating on Russian birch base. 520×300mm. ENF certified.',
    en_body: '## Assaria Walnut Parquet\n\nElegant Assaria design in black walnut. Precision-cut to 520×300mm with Italian coating. Russian birch base ensures lasting dimensional stability.\n\n### Specifications\n- **Wood Species**: Black Walnut\n- **Model**: Assaria\n- **Size**: 520×300mm\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Ассария — Ореховый Паркет',
    ru_short: 'Паркет специальной формы. Черный орех, 520×300мм, итальянское покрытие на российской березе. ENF.',
    ru_body: '## Ассария\n\nЭлегантный дизайн Ассария из черного ореха. Размер 520×300мм с итальянским покрытием.',
    zh_title: '阿萨利亚 — 黑胡桃拼花',
    zh_short: '异性拼花系列。黑胡桃材质，520×300mm，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 阿萨利亚 黑胡桃拼花\n\n优雅的阿萨利亚黑胡桃拼花。520×300mm规格，意式涂装工艺，俄罗斯全桦基材。\n\n### 产品参数\n- **木种**: 黑胡桃\n- **型号**: 阿萨利亚\n- **规格**: 520×300mm\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '黑胡桃'], ['型号', '阿萨利亚'], ['规格', '520×300mm'],
      ['工艺', '意式涂装'], ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'annie-princess-walnut',
    category: 'parquet-flooring',
    image: 'parquet-5.png',
    en_title: 'Anne Princess — Walnut Parquet',
    en_short: 'Special-shaped parquet series. Black walnut with Italian coating on Russian birch base. 785×785mm. ENF certified.',
    en_body: '## Anne Princess Walnut Parquet\n\nThe Anne Princess design in rich black walnut. Large 785×785mm format with Italian coating. A bold statement for grand interiors.\n\n### Specifications\n- **Wood Species**: Black Walnut\n- **Model**: Anne Princess\n- **Size**: 785×785mm\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Анна Принцесса — Ореховый Паркет',
    ru_short: 'Паркет специальной формы. Черный орех, 785×785мм, итальянское покрытие на российской березе. ENF.',
    ru_body: '## Анна Принцесса\n\nДизайн Анна Принцесса из черного ореха. Крупный формат 785×785мм с итальянским покрытием.',
    zh_title: '安妮公主 — 黑胡桃拼花',
    zh_short: '异性拼花系列。黑胡桃材质，785×785mm，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 安妮公主 黑胡桃拼花\n\n安妮公主黑胡桃拼花。大规格785×785mm，意式涂装工艺。适合大空间豪宅。\n\n### 产品参数\n- **木种**: 黑胡桃\n- **型号**: 安妮公主\n- **规格**: 785×785mm\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '黑胡桃'], ['型号', '安妮公主'], ['规格', '785×785mm'],
      ['工艺', '意式涂装'], ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'little-leaf-walnut',
    category: 'parquet-flooring',
    image: 'parquet-6.png',
    en_title: 'Little Leaf — Walnut Fabric Parquet',
    en_short: 'Special-shaped parquet series. Black walnut fabric texture with Italian coating. 448×286mm. ENF certified.',
    en_body: '## Little Leaf Parquet\n\nDelicate leaf-pattern parquet in black walnut fabric finish. Compact 448×286mm format with Italian coating on Russian birch base.\n\n### Specifications\n- **Wood Species**: Black Walnut Fabric\n- **Model**: Little Leaf\n- **Size**: 448×286mm\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Маленький Лист — Ореховый Паркет',
    ru_short: 'Паркет специальной формы. Текстура черного ореха, 448×286мм, итальянское покрытие. ENF.',
    ru_body: '## Маленький Лист\n\nНежный паркет с лиственным узором. Компактный формат 448×286мм с итальянским покрытием.',
    zh_title: '小树叶 — 黑胡桃布纹拼花',
    zh_short: '异性拼花系列。黑胡桃布纹，448×286mm，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 小树叶 黑胡桃布纹拼花\n\n精致小树叶图案拼花。黑胡桃布纹表面，448×286mm规格，意式涂装工艺。\n\n### 产品参数\n- **木种**: 黑胡桃布纹\n- **型号**: 小树叶\n- **规格**: 448×286mm\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '黑胡桃布纹'], ['型号', '小树叶'], ['规格', '448×286mm'],
      ['工艺', '意式涂装'], ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'combo-oak',
    category: 'parquet-flooring',
    image: 'parquet-7.png',
    en_title: 'Combo — Oak Parquet',
    en_short: 'Special-shaped combination parquet. Oak with Italian coating on Russian birch base. ENF certified.',
    en_body: '## Combo Oak Parquet\n\nCreative combination parquet in premium oak. Mix-and-match pattern design with Italian coating. Russian birch base for lasting stability.\n\n### Specifications\n- **Wood Species**: Oak\n- **Model**: Combo\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Комбо — Дубовый Паркет',
    ru_short: 'Комбинированный паркет из дуба. Итальянское покрытие на российской березовой основе. ENF.',
    ru_body: '## Комбо\n\nКреативный комбинированный паркет из дуба. Дизайн микс-энд-матч с итальянским покрытием.',
    zh_title: '组合拼 — 橡木拼花',
    zh_short: '异性拼花系列。橡木材质，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 组合拼 橡木拼花\n\n创意组合拼花地板。橡木材质，意式涂装工艺。自由组合图案设计。\n\n### 产品参数\n- **木种**: 橡木\n- **型号**: 组合拼\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '橡木'], ['型号', '组合拼'], ['工艺', '意式涂装'],
      ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  },
  {
    slug: 'tangram-oak',
    category: 'parquet-flooring',
    image: 'parquet-8.png',
    en_title: 'Tangram — Oak Parquet',
    en_short: 'Special-shaped parquet series. Oak with Italian coating on Russian birch base. Puzzle-inspired design. ENF certified.',
    en_body: '## Tangram Oak Parquet\n\nPlayful tangram-inspired parquet in oak. Geometric puzzle pieces create unique floor art. Italian coating on Russian birch base.\n\n### Specifications\n- **Wood Species**: Oak\n- **Model**: Tangram\n- **Finish**: Italian Coating\n- **Base**: Russian Imported Birch\n- **Lock**: Flat Lock\n- **Certification**: ENF',
    ru_title: 'Танграм — Дубовый Паркет',
    ru_short: 'Паркет специальной формы из дуба. Дизайн в стиле головоломки. ENF.',
    ru_body: '## Танграм\n\nИгривый паркет в стиле танграм из дуба. Геометрические части создают уникальный дизайн пола.',
    zh_title: '七巧板 — 橡木拼花',
    zh_short: '异性拼花系列。橡木材质，七巧板设计，意式涂装，俄罗斯进口全桦基材。ENF认证。',
    zh_body: '## 七巧板 橡木拼花\n\n趣味七巧板橡木拼花。几何拼图设计，意式涂装工艺。打造独特地板艺术。\n\n### 产品参数\n- **木种**: 橡木\n- **型号**: 七巧板\n- **工艺**: 意式涂装\n- **基材**: 俄罗斯进口全桦\n- **扣型**: 平扣\n- **认证**: ENF',
    specs: [
      ['木种', '橡木'], ['型号', '七巧板'], ['工艺', '意式涂装'],
      ['基材', '俄罗斯进口全桦'], ['扣型', '平扣'], ['认证', 'ENF']
    ]
  }
];

const locales = ['en', 'ru', 'zh'];

for (const p of products) {
  for (const loc of locales) {
    const dir = `src/content/products/${loc}`;
    fs.mkdirSync(dir, { recursive: true });

    const data = {
      slug: p.slug,
      title: { en: p.en_title, ru: p.ru_title, zh: p.zh_title },
      category: p.category,
      featured_image: `/images/uploads/products/${p.image}`,
      gallery: [`/images/uploads/products/${p.image}`],
      short_description: { en: p.en_short, ru: p.ru_short, zh: p.zh_short },
      body: { en: p.en_body, ru: p.ru_body, zh: p.zh_body },
      specs: p.specs.map(([n, v]) => ({
        name: { en: n, ru: n, zh: n },
        value: { en: v, ru: v, zh: v }
      })),
      is_featured: true
    };

    fs.writeFileSync(
      path.join(dir, `${p.slug}.json`),
      JSON.stringify(data, null, 2)
    );
  }
}

console.log(`Created ${products.length} products in ${locales.length} locales`);

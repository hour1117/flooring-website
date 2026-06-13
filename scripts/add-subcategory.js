const fs = require('fs');
const path = require('path');

// Folder → subcategory translations
const subcats = {
  '黑胡桃': { en:'Black Walnut', ru:'Черный Орех', zh:'黑胡桃', es:'Nogal Negro', fr:'Noyer Noir', pt:'Nogueira Preta' },
  '北美红橡木': { en:'North American Red Oak', ru:'Североамериканский Красный Дуб', zh:'北美红橡木', es:'Roble Rojo Norteamericano', fr:'Chêne Rouge Amérique du Nord', pt:'Carvalho Vermelho Norte-Americano' },
  '欧洲橡木': { en:'European Oak', ru:'Европейский Дуб', zh:'欧洲橡木', es:'Roble Europeo', fr:'Chêne Européen', pt:'Carvalho Europeu' },
};

// File → slug mapping (from the image filenames)
const mapping = {
  'D101_鹅绒_北美红橡木.png': '3layer-solid-46',
  'D103_象牙_北美红橡木.png': '3layer-solid-47',
  'D202_雅丹_北美红橡木.png': '3layer-solid-45',
  'J101_木蜡_欧洲橡木.png': '3layer-solid-48',
  'J402_王蝶_欧洲橡木.png': '3layer-solid-49',
  'J403_斑蝶_欧洲橡木.jpg': '3layer-solid-50',
  'QN-19_欧洲橡木.png': '3layer-solid-31',
  'QN-65_橡木.png': '3layer-solid-43',
  'QN-6661_欧洲橡木.png': '3layer-solid-26',
  'QN-6663_欧洲橡木.png': '3layer-solid-28',
  'QN-6667_欧洲白橡木.png': '3layer-solid-29',
  'QN-6669_欧洲白橡木.png': '3layer-solid-30',
  'QN-66_橡木.png': '3layer-solid-44',
  'QN-41_黑胡桃.png': '3layer-solid-22',
  'QN-41_黑胡桃_2.png': '3layer-solid-27',
  'QN-61_黑胡桃.png': '3layer-solid-25',
  'QN-62_黑胡桃.png': '3layer-solid-23',
  'QN-62_黑胡桃_2.png': '3layer-solid-24',
};

// Build slug → subcategory
const slugToSubcat = {};
const baseDir = 'C:/Users/23135/Desktop/纯三层分类';

for (const [folderName, trans] of Object.entries(subcats)) {
  const dir = path.join(baseDir, folderName);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const slug = mapping[file];
    if (slug) {
      slugToSubcat[slug] = trans;
    }
  }
}

console.log('Slug → Subcategory mapping:');
for (const [s, sc] of Object.entries(slugToSubcat)) {
  console.log(`  ${s} → ${sc.zh}`);
}

// Update all locale JSONs
const locales = ['en','ru','zh','es','fr','pt'];
let updated = 0;

for (const [slug, sub] of Object.entries(slugToSubcat)) {
  for (const l of locales) {
    const file = `c:/Users/23135/Claude Code Text/flooring-website/src/content/products/${l}/${slug}.json`;
    if (!fs.existsSync(file)) { console.log(`  MISSING: ${file}`); continue; }
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    data.subcategory = sub;
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    updated++;
  }
}

console.log(`\nUpdated ${updated} JSON files across ${locales.length} languages`);

import fs from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';

const REGISTRY_URL = 'https://raw.githubusercontent.com/elclaudioabierto/registry/main/index.yaml';
const outPath = path.resolve('src/data/registry.json');

const res = await fetch(REGISTRY_URL);
if (!res.ok) {
  throw new Error(`Failed to fetch registry: ${res.status} ${res.statusText}`);
}
const text = await res.text();
const data = YAML.parse(text);
const recipes = (data.recipes || []).map((r) => ({
  id: r.id,
  name: r.name,
  description: r.description,
  tags: r.tags || [],
  kind: r.kind || 'recipe'
}));

const packages = recipes.filter((r) => r.kind === 'package');
const capabilities = recipes.filter((r) => r.kind === 'capability');
const aliases = recipes.filter((r) => r.kind === 'alias');

await fs.writeFile(
  outPath,
  JSON.stringify({ recipes, packages, capabilities, aliases }, null, 2)
);
console.log(`Wrote ${recipes.length} recipes to ${outPath}`);

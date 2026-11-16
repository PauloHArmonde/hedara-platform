// lab/01-logica-hedara.js
// Objetivo: Entender como Arrays (listas), Objetos (fichas) e o método .filter() funcionam.

// 1. LISTA DE FORNECEDORES (Array de Objetos)
// Cada chave { ... } representa a ficha de um profissional no Vale do Aço.
const suppliers = [
  {
    slug: "claudio-azevedo",
    name: "Claudio Azevedo Fotografia",
    category: "Fotografia",
    city: "Ipatinga • MG",
    isOfficial: true, // Página Oficial (Assinante)
  },
  {
    slug: "sitio-vale-das-aguas",
    name: "Sítio Vale das Águas",
    category: "Espaços e Sítios",
    city: "Timóteo • MG",
    isOfficial: true,
  },
  {
    slug: "atelie-flores-do-campo",
    name: "Ateliê Flores do Campo",
    category: "Decoração Floral",
    city: "Coronel Fabriciano • MG",
    isOfficial: false, // Página Livre (Gerada por citação)
  },
];

// 2. LISTA DE CASAMENTOS REAIS (Array de Objetos)
// Observe o campo 'supplierSlugs': ele guarda apenas os códigos (slugs) de quem trabalhou na festa.
const weddings = [
  {
    title: "Clara & Mateus",
    venue: "Sítio Vale das Águas",
    supplierSlugs: ["claudio-azevedo", "sitio-vale-das-aguas", "atelie-flores-do-campo"],
  },
  {
    title: "Juliana & Pedro",
    venue: "Sítio Vale das Águas",
    supplierSlugs: ["sitio-vale-das-aguas"],
  },
];

// 3. FUNÇÃO DE CRUZAMENTO (A inteligência do diretório)
// Dado o 'slug' de um fornecedor, esta função vasculha todos os casamentos
// e retorna apenas aqueles onde o código dele aparece na lista.
function getWeddingsBySupplier(targetSlug) {
  return weddings.filter((wedding) => wedding.supplierSlugs.includes(targetSlug));
}

// 4. TESTANDO NO TERMINAL
const claudioPortfolio = getWeddingsBySupplier("claudio-azevedo");
const sitioPortfolio = getWeddingsBySupplier("sitio-vale-das-aguas");

console.log("Casamentos do Claudio Azevedo:", claudioPortfolio.length);
console.log(claudioPortfolio);

console.log("\nCasamentos no Sítio Vale das Águas:", sitioPortfolio.length);
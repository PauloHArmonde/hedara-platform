// types/hedara.ts

/**
 * Primeira versão (v1) dos contratos de dados do Hedara.
 * Estes tipos representam o modelo inicial do produto (MVP)
 * e poderão evoluir conforme as regras de negócio forem validadas.
 
 * Define os dois níveis comerciais de um fornecedor na plataforma:
 * - FREE_PPL: Página Livre gerada automaticamente pelas citações das noivas.
 * - OFFICIAL_SUBSCRIPTION: Página Oficial ativada por assinatura mensal.
 */
export type PlanTier = "FREE_PPL" | "OFFICIAL_SUBSCRIPTION";

export type CityValeDoAco =
  | "Ipatinga • MG"
  | "Timóteo • MG"
  | "Coronel Fabriciano • MG"
  | "Santana do Paraíso • MG"
  | "Vale do Aço • MG";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Contrato principal de um Fornecedor.
 * O sinal '?' indica campos opcionais (que só aparecem quando o perfil é enriquecido).
 */
export interface SupplierProfile {
  slug: string;
  name: string;
  category: string;
  city: CityValeDoAco;
  locationDetail: string;
  planTier: PlanTier;
  coverImage: string;
  whatsapp?: string;
  priceRange?: string;
  bioParagraphs?: string[];
  faqs?: FaqItem[];
  deliverables?: string[];
  specialties?: string[];
}

/**
 * Contrato de um Casamento Real.
 * O campo 'supplierSlugs' guarda a lista de identificação dos fornecedores que trabalharam no evento.
 */
export interface WeddingRecord {
  id: string;
  slug: string;
  title: string;
  brideName: string;
  groomName: string;
  editionMonth: string;
  venueName: string;
  city: CityValeDoAco;
  coverImage: string;
  summary: string;
  supplierSlugs: string[];
}
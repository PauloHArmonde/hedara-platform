// components/supplier/EditorialStatusBanner.tsx
import { PlanTier } from "@/types/hedara";

// Definimos aqui o que este componente precisa receber para funcionar (as "Props")
interface EditorialStatusBannerProps {
  planTier: PlanTier;
  supplierName: string;
}

export function EditorialStatusBanner({
  planTier,
  supplierName,
}: EditorialStatusBannerProps) {
  // Verificamos se o fornecedor é assinante da Página Oficial
  const isOfficial = planTier === "OFFICIAL_SUBSCRIPTION";

  // CENÁRIO 1: Fornecedor Assinante (Página Oficial)
  if (isOfficial) {
    return (
      <div className="border-b border-amber-500/30 bg-neutral-950 text-amber-400 px-6 py-2.5 text-xs tracking-widest uppercase flex items-center justify-between">
        <span className="font-semibold">
          ✦ Perfil Oficial Verificado • Curadoria Hedara
        </span>
        <span className="text-neutral-400 hidden sm:inline">
          Vale do Aço • Edição 2026
        </span>
      </div>
    );
  }

  // CENÁRIO 2: Fornecedor Não-Assinante (Página Livre gerada por citação)
  return (
    <div className="border-b border-neutral-200 bg-neutral-100 text-neutral-700 px-6 py-3 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <span>
        <strong>Página Livre Editorial:</strong> Vitrine criada a partir das
        citações de noivas da Hedara sobre <strong>{supplierName}</strong>.
      </span>
      <a
        href="#reivindicar-perfil"
        className="font-semibold text-neutral-950 underline underline-offset-4 hover:text-amber-700 transition-colors"
      >
        É você? Reivindicar Página Oficial →
      </a>
    </div>
  );
}
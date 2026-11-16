// components/supplier/SupplierHeroBio.tsx
import { SupplierProfile } from "@/types/hedara";

interface SupplierHeroBioProps {
  supplier: SupplierProfile;
}

export function SupplierHeroBio({ supplier }: SupplierHeroBioProps) {
  const isOfficial = supplier.planTier === "OFFICIAL_SUBSCRIPTION";

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 border-b border-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* COLUNA DA ESQUERDA (7 colunas): Textos e Identidade */}
        <div className="md:col-span-7 space-y-5">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
            {supplier.category} • {supplier.city}
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-neutral-950 leading-tight">
            {supplier.name}
          </h1>

          <p className="text-sm text-neutral-500">
            {supplier.locationDetail}
            {isOfficial && supplier.priceRange ? ` • ${supplier.priceRange}` : ""}
          </p>

          {/* Parágrafos da Biografia (aparecem se estiverem preenchidos) */}
          {supplier.bioParagraphs && supplier.bioParagraphs.length > 0 ? (
            <div className="space-y-3 pt-2 text-neutral-700 leading-relaxed">
              {supplier.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="pt-2 text-neutral-600 italic">
              Perfil editorial gerado a partir das participações registradas em eventos do Vale do Aço.
            </p>
          )}
        </div>

        {/* COLUNA DA DIREITA (5 colunas): Fotografia Editorial */}
        <div className="md:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
            <img
              src={supplier.coverImage}
              alt={supplier.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
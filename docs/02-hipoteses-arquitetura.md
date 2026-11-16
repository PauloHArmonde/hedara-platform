# Hedara — Hipóteses de Produto & Evolução Arquitetural (v1)

Este documento registra as premissas iniciais adotadas no MVP da plataforma. Elas funcionam como hipóteses em validação no mercado do Vale do Aço e guiarão a evolução do banco de dados.

## 1. Modelo Página Livre vs. Página Oficial (Governança & Consentimento)
- **Hipótese:** Fornecedores citados em casamentos reais ou listas de noivas ganham uma vitrine básica indexável ("Página Livre") e podem reivindicar/assinar para desbloquear recursos comerciais ("Página Oficial").
- **Risco mapeado:** Publicação de dados desatualizados ou exposição sem ciência prévia do profissional.
- **Próximo passo técnico:** Criar fluxo de reivindicação de perfil (*Claim Profile*) e status de moderação (`PENDING_REVIEW`, `VERIFIED`, `OPT_OUT`) antes de abrir indexação pública em massa.

## 2. O Evento como Fonte Única da Verdade (Single Source of Truth)
- **Hipótese:** Cadastrar um casamento real (`WeddingRecord`) uma única vez e distribuir automaticamente suas fotos e créditos para todos os fornecedores participantes reduz o atrito operacional e cria prova social verificada.

## 3. Evolução do Relacionamento (`supplierSlugs` -> Tabela de Participação)
- **Estado atual (MVP):** O vínculo entre casamento e fornecedor é feito por um array simples de identificadores (`supplierSlugs: string[]`).
- **Evolução planejada (PostgreSQL / Ranking):** Transformar esse vínculo em uma entidade própria (`EventParticipation`), armazenando:
  - `roleInEvent`: função específica desempenhada naquela festa (ex: "Cerimonial do Dia" vs. "Assessoria Completa").
  - `vendorApproved`: flag booleana confirmando que o fornecedor autorizou o crédito.
  - `verifiedByCouple`: peso de validação para alimentar o futuro algoritmo de ranking e menções da Hedara.
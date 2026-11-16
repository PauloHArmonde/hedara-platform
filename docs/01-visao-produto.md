# Hedara — Plataforma Editorial & Diretório de Eventos (Vale do Aço)

## 1. Problema de Negócio
O mercado de casamentos e eventos no Vale do Aço (Ipatinga, Timóteo, Coronel Fabriciano) é fragmentado. Noivas dependem de buscas manuais em redes sociais, enquanto excelentes fornecedores locais não possuem vitrines indexadas no Google nem páginas focadas em conversão de orçamento.

## 2. Solução Arquitetural
Plataforma híbrida que une **Jornalismo Editorial** (Casamentos Reais e Listas das Noivas) com um **Diretório Relacional de Fornecedores**:
- **Página Livre (Aquisição):** Criada automaticamente a partir das citações das noivas e eventos reais.
- **Página Oficial (Monetização - Assinatura):** Perfil completo desbloqueado pelo profissional com biografia estendida, FAQ, entregáveis e botão direto de conversão (WhatsApp/Lead).

## 3. Estratégia de Dados (Fonte Única da Verdade)
O cadastro de um único evento (`WeddingRecord`) alimenta automaticamente os portfólios e menções de todos os fornecedores envolvidos, eliminando retrabalho operacional.
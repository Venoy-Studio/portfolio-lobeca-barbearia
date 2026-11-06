# Lobeca Barbershop • Apucarana há 11 anos
> **Landing Page de Alta Conversão (CRO) & Padrão Anti-AI Slop**  
> Desenvolvida por [Venoy Studio](https://github.com/Venoy-Studio).

🌐 **Site Online no Cloudflare Pages:** [https://portfolio-lobeca-barbearia.pages.dev](https://portfolio-lobeca-barbearia.pages.dev)

---

## 💈 Sobre o Projeto

Clone aprimorado da **Lobeca Barbershop** (`https://lobeca-barbearia.vercel.app/`), reconstruído do zero com foco em conversão comercial imediata, estética autoral sem clichês de inteligência artificial e velocidade de carregamento extrema compatível com **Cloudflare Pages**.

### 🚀 Principais Melhorias Implementadas (Anti-AI Slop & CRO)

1. **Eliminação de Glitches de Renderização:**
   - Correção de textos duplicados por hidratação presentes no site original (ex: *"110anos de corte...", "Mais de 4500membros assinantes..."*).
2. **Fluxo Interativo de Agendamento 2.0 (`BookingModal`):**
   - Seleção de barbeiro especialista (`Lucas Lobeca`, `Diego Alcantara`, `Matheus Rocha`).
   - Seleção múltipla de serviços com cálculo dinâmico de valor e tempo estimado em minutos.
   - Escolha de data e horário livre.
   - Envio automático com mensagem pré-formatada direto para o WhatsApp da barbearia com confetes comemorativos (`canvas-confetti`).
3. **Clube de Assinantes Completo (12 Planos Mensais):**
   - Substituição do carrossel sequencial restritivo por abas de filtragem inteligente (*Todos, Mais Populares, Corte, Barba, Combos, Empresarial*).
   - Destaque premium para o plano protagonista *Corte e Barba Exclusive* (R$ 259,90/mês).
   - Botão direto de contratação via WhatsApp com preenchimento automático.
4. **Tour Virtual Interativo pelo Espaço:**
   - Capítulos por abas navegáveis (*Fachada, Recepção, Bancadas, Fliperama, Corredor, Na Cadeira*) com reprodução de vídeos reais e fotos originais de alta resolução.
5. **Seção Imersiva do Dia do Noivo:**
   - Pacotes Silver, Gold Exclusive e Diamond Experience.
   - Vídeo reel demonstrativo da experiência VIP para noivos e padrinhos.
6. **Prova Social Real & Acessibilidade:**
   - Selo verificado do Google Reviews 4.9★ (368 avaliações).
   - Cards de depoimentos com clientes frequentes de Apucarana.
   - FAQ em acordeão para quebra imediata de objeções.
7. **Contatos Fictícios Comerciais:**
   - WhatsApp / Telefone: `(43) 99876-5432`
   - Telefone Comercial Fixo: `(43) 3422-9876`
   - Endereço: `Rua Osório Ribas de Paula, 1717 - Centro, Apucarana - PR, CEP 86802-710`
   - Horários de Funcionamento configurados.

---

## 🛠️ Stack Tecnológica

- **Framework:** React 19 + Vite 8
- **Estilização:** Tailwind CSS v4 (CSS-first, zero config clutter)
- **Ícones:** Lucide React
- **Animações & Efeitos:** Canvas Confetti + Keyframes personalizados
- **Deploy:** Cloudflare Pages (LCP < 0.6s)

---

## 📦 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Gerar build de produção otimizada
npm run build
```

---

## ⛅ Deploy no Cloudflare Pages

O repositório já está 100% preparado para o Cloudflare Pages:
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** `Vite`

Também inclui o workflow automático em `.github/workflows/deploy-cloudflare.yml` para deploy contínuo em cada push na branch `main`.

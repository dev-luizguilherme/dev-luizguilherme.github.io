# PROMPT MESTRE — Gerador de Site Portfólio de TI

---

## PAPEL

Você é um(a) desenvolvedor(a) front-end sênior, especialista em HTML semântico, CSS moderno, JavaScript vanilla, SEO técnico e acessibilidade (WCAG 2.2 AA). Sua tarefa é construir um **site portfólio profissional de TI** com os meus dados, no estilo que escolhi, e entregar o resultado final como um arquivo **.zip**.

---

## 1. MEUS DADOS

### 1.1 Identidade
- **Nome completo:** [Luiz Guilherme Barreto da Silva]
- **Nome de exibição (curto):** [EX.: Luiz Guilherme]
- **Título profissional:** [Desenvolvedor Web Front-End | Estudante de Engenharia de Software]
- **Idioma do site:** [pt-BR]

### 1.2 Sobre mim
<!-- 2 a 4 parágrafos curtos: quem você é, sua trajetória, o que te motiva e o que você busca. -->
[
- Estudo para evoluir e construo projetos para mostrar capacitação.
- No ramo de Front-End Web, construo interfaces com responsividade e acessibilidade usando HTML e CSS.
- Estou estudando como alterar o comportamento de webpages usando Javascript.]

### 1.3 Contato e redes
- **E-mail:** [lg.link.pro@gmail.com]
- **Telefone/WhatsApp (opcional):** [5592984647931]
- **LinkedIn:** [www.linkedin.com/in/luiz-guilherme-barreto-da-silva-97587a42a]
- **GitHub:** [https://github.com/dev-luizguilherme]
- **Link do currículo em PDF (opcional):** [em anexo "anexo/Luiz Guilherme - Currículo.pdf"]

### 1.4 Habilidades (agrupe como preferir)
- **Linguagens:** [JavaScript]
- **Front-end:** [HTML, CSS]
- **Ferramentas e metodologias:** [Git e Github]
- **Soft skills (opcional):** [Comunicação clara, colaboração, autonomia, pensamento analítico, resolução de problemas e senso de responsabilidade.]

### 1.5 Projetos em destaque
<!-- Repita o bloco para cada projeto (recomendado: 3 a 6). -->
- **Nome do projeto:** [Landing Page Restaurante Bom Sabor]
  - **Descrição (2–3 frases) e problema que resolve:** [Landing page desenvolvida para o cliente consultar as opções do cardápio e fazer o pedido ao ir para o WhatsApp do Restaurante.]
  - **Meu papel:** [Desenvolvedor Front-End]
  - **Tecnologias:** [HTML, CSS]
  - **Link do repositório:** [https://github.com/dev-luizguilherme/landing-page-restaurante]
  - **Link da demo/produção:** [https://dev-luizguilherme.github.io/landing-page-restaurante/]
  - **Imagem/captura (caminho ou "usar placeholder"):** [anexo/capa-restaurante-bom-sabor]

### 1.6 Formação, certificações e cursos
- **Formação acadêmica:** [Centro Universitário FAMETRO | Jan/2026 - Em andamento (2º período)]
- **Certificações:** [Certificação de Web Design Responsivo - freeCodeCamp (Credencial - https://www.freecodecamp.org/certification/fcc-4ecd3044-dcc8-43ef-95df-50a84e2cffb1/responsive-web-design-v9)]

### 1.7 Extras (opcional)
- **Foto de perfil (caminho ou "usar avatar com iniciais"):** [anexo/perfil.jpg]
---

## 2. ESTILO DO SITE

**Estilo**
**B. Dark Dev / Terminal** | Fundo escuro, fonte monoespaçada em destaques, detalhes estilo editor de código/CLI

- **Cor de destaque (opcional, hex):** [#e90e0e]
- **Fonte preferida (opcional):** [você escolhe]
- **Tema:** [ ] Claro  [ ] Escuro  [X] Ambos com alternância (botão de tema + respeita `prefers-color-scheme`)
- **Nível de animação:** [ ] Nenhuma  [ ] Sutil  [X] Expressiva (sempre respeitando `prefers-reduced-motion`)

---

## 3. REQUISITOS TÉCNICOS (OBRIGATÓRIOS)

### 3.1 HTML Semântico
- Documento com `<!DOCTYPE html>`, `lang` correto no `<html>`, `<meta charset="UTF-8">` e `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Estrutura com `<header>`, `<nav>`, `<main>`, `<section>` (cada uma com título e `aria-labelledby`), `<article>` (projetos/experiências), `<aside>` quando fizer sentido, `<footer>`.
- **Um único `<h1>`**, hierarquia de títulos sem saltos (h1 → h2 → h3).
- Listas reais (`<ul>/<ol>/<dl>`) para habilidades, experiências e links; `<time datetime="">` para datas; `<address>` para contato; `<figure>/<figcaption>` para imagens de projetos; `<button>` para ações e `<a>` apenas para navegação.
- Formulário de contato (se solicitado) com `<form>`, `<label>` associado a cada campo, `<fieldset>/<legend>` quando necessário e validação nativa.
- Sem uso de `<div>`/`<span>` onde exista elemento semântico apropriado. Sem estilos inline e sem `onclick` inline.

### 3.2 Mobile First
- CSS escrito **primeiro para telas pequenas (≥320px)** e ampliado com `@media (min-width: ...)`, nunca o contrário.
- Breakpoints sugeridos: 480px, 768px, 1024px, 1280px.
- Alvos de toque com no mínimo 44×44px; menu hambúrguer acessível no mobile; sem scroll horizontal em nenhuma largura.

### 3.3 Responsividade
- Layout com CSS Grid e Flexbox; unidades relativas (`rem`, `%`, `clamp()`, `vw` com moderação); tipografia fluida com `clamp()`.
- Imagens com `max-width: 100%`, `height: auto`, atributos `width`/`height` (evita CLS), `loading="lazy"` (exceto acima da dobra) e `decoding="async"`; usar `<picture>`/`srcset` quando houver imagens reais.
- Testar mentalmente e validar: 320px, 375px, 768px, 1024px, 1440px.

### 3.4 SEO
- `<title>` único (50–60 caracteres) e `<meta name="description">` (até 155 caracteres) com as palavras-chave.
- `<link rel="canonical">` (se houver URL), `<meta name="robots" content="index, follow">`, `<meta name="theme-color">`.
- **Open Graph** (`og:title`, `og:description`, `og:type=website`, `og:url`, `og:image`, `og:locale`) e **Twitter Cards**.
- **JSON-LD** (`schema.org/Person`) com nome, cargo, URL, `sameAs` (redes), `knowsAbout` (habilidades) e localidade.
- Arquivos na raiz: `robots.txt`, `sitemap.xml` e favicon (SVG ou PNG) com `<link rel="icon">`.
- Textos de âncora descritivos, atributos `alt` significativos, URLs limpas, performance otimizada (CSS/JS mínimos, `defer` no script, fontes com `preconnect` e `display=swap`).

### 3.5 Acessibilidade (WCAG 2.2 AA)
- **Skip link** ("Pular para o conteúdo") como primeiro elemento focável.
- Contraste mínimo 4.5:1 para texto normal e 3:1 para texto grande e componentes de interface — **em todos os temas**.
- Navegação 100% por teclado, ordem de foco lógica, `:focus-visible` bem evidente, sem armadilhas de foco.
- `alt` em imagens informativas e `alt=""` em decorativas; ícones decorativos com `aria-hidden="true"`; ícones-link com `aria-label`.
- ARIA somente quando o HTML nativo não resolver (`aria-expanded` e `aria-controls` no menu mobile, `aria-current="page"` no link ativo, `aria-live="polite"` em mensagens de formulário).
- Respeitar `prefers-reduced-motion`, `prefers-color-scheme` e zoom até 200% sem perda de conteúdo; não transmitir informação apenas por cor.
- Links externos com `rel="noopener noreferrer"` e indicação textual/visual de que abrem em nova aba.

### 3.6 Qualidade de código
- JavaScript vanilla (ES6+), sem frameworks e sem dependências obrigatórias; progressive enhancement (o site deve ser legível sem JS).
- Funcionalidades JS esperadas: menu mobile acessível, alternância de tema (se escolhida) com persistência em `localStorage`, destaque do link ativo durante a rolagem (`IntersectionObserver`), animações de entrada (se escolhidas) e validação/feedback do formulário (se houver).
- CSS organizado com **variáveis CSS (`:root`)** para cores, espaçamentos e tipografia; comentários por seção; metodologia consistente (ex.: BEM leve); reset/normalize mínimo.
- Código indentado, comentado onde necessário, sem código morto.

---

## 4. SEÇÕES DO SITE (nesta ordem, omitindo as sem dados)

1. Cabeçalho com navegação (e botão de tema, se aplicável)
2. **Hero** — nome, título, slogan, botões de ação (ver projetos / contato / baixar currículo)
3. **Sobre mim** (com foto, se houver)
4. **Habilidades**
5. **Experiência profissional** (linha do tempo acessível)
6. **Projetos**
7. **Formação e certificações**
8. **Depoimentos / Extras** (se houver)
9. **Contato** (e-mail, redes, formulário opcional via `mailto:` ou serviço indicado por mim: [Formspree / Netlify Forms / apenas mailto])
10. **Rodapé** (direitos autorais com ano atual, links, "voltar ao topo")

---

## 5. ESTRUTURA DE ARQUIVOS DE ENTREGA

O .zip final deve conter **exatamente** esta organização (HTML, CSS e JS **em arquivos separados**; CSS e JS em subpastas de `assets`):

```
portfolio/
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md              ← instruções de uso, edição e publicação
└── assets/
    ├── css/
    │   └── style.css      ← (pode ser dividido em base.css, layout.css, components.css, themes.css, se útil)
    ├── js/
    │   └── main.js
    ├── img/               ← favicon, imagem OG, foto, capturas dos projetos (ou placeholders)
    └── fonts/             ← apenas se fontes forem hospedadas localmente
```

- Referenciar todos os arquivos com **caminhos relativos** (o site precisa funcionar abrindo `index.html` direto no navegador).
- Não usar CDN para CSS/JS próprios. Fontes: preferir Google Fonts com `preconnect` **ou** fontes do sistema; informar a escolha no README.
- Se eu não fornecer imagens, criar **placeholders em SVG** (leves e acessíveis) em `assets/img/`.

---

## 6. PROCESSO DE TRABALHO

1. **Antes de começar**, se algum dado essencial estiver faltando ou for ambíguo (nome, título, e-mail, estilo), pergunte de forma objetiva; para o resto, adote padrões sensatos e registre-os no README.
2. Planeje a estrutura, crie os arquivos (um por vez, com ferramentas de arquivo) e gere o `.zip` com o terminal.
3. **Nunca invente** dados pessoais, empresas, métricas, certificações ou links. Onde faltar informação, use um texto neutro claramente marcado como `[EDITAR]` no HTML e liste esses pontos no README.
4. **Revise antes de entregar** (checklist da seção 7), corrigindo o que falhar.
5. Entregue o `.zip` como arquivo para download e finalize com um resumo de **no máximo 8 linhas**: estilo aplicado, decisões relevantes, pontos `[EDITAR]` pendentes e como publicar.

---

## 7. CHECKLIST DE VALIDAÇÃO (execute antes de entregar)

- [ ] HTML válido (sem tags não fechadas, IDs únicos, um único `<h1>`, hierarquia de títulos correta)
- [ ] Todos os links internos (âncoras) e arquivos referenciados existem
- [ ] CSS escrito em mobile first; sem rolagem horizontal em 320px
- [ ] Contraste de cores conferido (texto, botões, links, estados de foco) nos temas disponíveis
- [ ] Navegação completa por teclado; skip link e `:focus-visible` funcionando
- [ ] `alt`, `aria-label`, `lang`, `title`, meta description, canonical, OG, Twitter e JSON-LD presentes
- [ ] `robots.txt` e `sitemap.xml` coerentes com a URL informada
- [ ] `prefers-reduced-motion` respeitado
- [ ] Sem estilos/scripts inline, sem erros de console, sem dependências externas obrigatórias
- [ ] README com: estrutura de pastas, como editar conteúdo/cores, como testar localmente e como publicar (GitHub Pages, Netlify ou Vercel)
- [ ] `.zip` gerado, testado (listar o conteúdo) e entregue

---

## 8. SAÍDA ESPERADA

Um único arquivo **`portfolio.zip`** contendo o site completo, mais um resumo curto conforme a seção 6, item 5. Não cole o código inteiro na conversa.

**Pode começar.**

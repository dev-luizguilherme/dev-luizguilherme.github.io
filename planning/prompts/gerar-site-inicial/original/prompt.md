# PROMPT MESTRE — Gerador de Site Portfólio de TI

> **Como usar:** preencha os campos da seção 1 (dados) e da seção 2 (estilo), apague os comentários entre `<!-- -->` e cole tudo em uma conversa com o Claude. Campos que você não tiver podem ficar como `—` (a seção correspondente será omitida do site).

---

## PAPEL

Você é um(a) desenvolvedor(a) front-end sênior, especialista em HTML semântico, CSS moderno, JavaScript vanilla, SEO técnico e acessibilidade (WCAG 2.2 AA). Sua tarefa é construir um **site portfólio profissional de TI** com os meus dados, no estilo que escolhi, e entregar o resultado final como um arquivo **.zip**.

---

## 1. MEUS DADOS

### 1.1 Identidade
- **Nome completo:** [SEU NOME]
- **Nome de exibição (curto):** [EX.: Ana Souza]
- **Título profissional:** [EX.: Desenvolvedor Full Stack | Analista de Infraestrutura | Engenheira de Dados]
- **Slogan / frase de impacto (1 linha):** [EX.: Transformo problemas complexos em software simples.]
- **Cidade / Estado / País:** [EX.: Manaus, AM, Brasil]
- **Disponibilidade:** [EX.: Aberto a oportunidades remotas | Freelance | CLT | Não disponível]
- **Idioma do site:** [pt-BR | en | es]
- **URL final do site (para SEO/canonical):** [EX.: https://seunome.dev — ou "ainda não tenho"]

### 1.2 Sobre mim
<!-- 2 a 4 parágrafos curtos: quem você é, sua trajetória, o que te motiva e o que você busca. -->
[TEXTO]

### 1.3 Contato e redes
- **E-mail:** [EMAIL]
- **Telefone/WhatsApp (opcional):** [NÚMERO]
- **LinkedIn:** [URL]
- **GitHub:** [URL]
- **Outros (Behance, GitLab, Medium, Dev.to, YouTube, Lattes...):** [URLs]
- **Link do currículo em PDF (opcional):** [URL ou "gerar botão sem link"]

### 1.4 Habilidades (agrupe como preferir)
- **Linguagens:** [EX.: Python, JavaScript, TypeScript, Java, SQL]
- **Front-end:** [EX.: React, Vue, Tailwind]
- **Back-end:** [EX.: Node.js, Django, Spring]
- **Banco de dados:** [EX.: PostgreSQL, MongoDB, Redis]
- **Cloud / DevOps / Infra:** [EX.: AWS, Docker, Kubernetes, Linux, CI/CD]
- **Segurança / Redes / Dados / IA (se aplicável):** [EX.: Pentest, Cisco, Power BI, Machine Learning]
- **Ferramentas e metodologias:** [EX.: Git, Jira, Scrum, Figma]
- **Soft skills (opcional):** [EX.: comunicação, liderança técnica]

### 1.5 Experiência profissional
<!-- Repita o bloco para cada experiência, da mais recente para a mais antiga. -->
- **Cargo | Empresa | Local | Período (mês/ano – mês/ano ou "atual")**
  - Responsabilidades e conquistas (use números sempre que possível):
    - [EX.: Reduzi o tempo de deploy em 60% com pipelines CI/CD.]
    - [...]
  - Tecnologias usadas: [LISTA]

### 1.6 Projetos em destaque
<!-- Repita o bloco para cada projeto (recomendado: 3 a 6). -->
- **Nome do projeto:** [NOME]
  - **Descrição (2–3 frases) e problema que resolve:** [TEXTO]
  - **Meu papel:** [EX.: líder técnico, solo, back-end]
  - **Tecnologias:** [LISTA]
  - **Link do repositório:** [URL]
  - **Link da demo/produção:** [URL ou "—"]
  - **Imagem/captura (caminho ou "usar placeholder"):** [CAMINHO]
  - **Resultado/impacto (opcional):** [EX.: 5 mil usuários ativos]

### 1.7 Formação, certificações e cursos
- **Formação acadêmica:** [Curso | Instituição | Ano de início–conclusão]
- **Certificações:** [EX.: AWS Cloud Practitioner (2025), CCNA, Scrum PSM I — com link de credencial se houver]
- **Cursos complementares (opcional):** [LISTA]
- **Idiomas:** [EX.: Português (nativo), Inglês (avançado), Espanhol (básico)]

### 1.8 Extras (opcional)
- **Depoimentos/recomendações:** [Nome, cargo, empresa, texto]
- **Artigos, palestras ou comunidade:** [TÍTULO | LINK]
- **Prêmios, hackathons, voluntariado:** [LISTA]
- **Foto de perfil (caminho ou "usar avatar com iniciais"):** [CAMINHO]

### 1.9 Dados para SEO
- **Palavras-chave principais:** [EX.: desenvolvedor full stack Manaus, portfólio desenvolvedor Python]
- **Descrição para buscadores (até 155 caracteres):** [TEXTO ou "gerar"]
- **Imagem de compartilhamento (Open Graph) — caminho ou "gerar placeholder":** [CAMINHO]

---

## 2. ESTILO DO SITE

**Escolha UM estilo** (marque com `X`) e, se quiser, personalize cores e fontes.

| Marque | Estilo | Características |
|:--:|---|---|
| [ ] | **A. Minimalista Clean** | Muito espaço em branco, tipografia grande, paleta neutra com um único acento, animações discretas |
| [ ] | **B. Dark Dev / Terminal** | Fundo escuro, fonte monoespaçada em destaques, acentos verde/ciano, detalhes estilo editor de código/CLI |
| [ ] | **C. Neon Cyberpunk** | Fundo quase preto, gradientes neon (magenta/ciano), brilhos sutis, grid futurista |
| [ ] | **D. Glassmorphism** | Cartões translúcidos com blur, gradientes suaves ao fundo, bordas leves |
| [ ] | **E. Neo-Brutalismo** | Bordas grossas, sombras sólidas deslocadas, cores vibrantes chapadas, tipografia ousada |
| [ ] | **F. Corporativo Profissional** | Layout limpo e estruturado, azul/cinza, tipografia sóbria, foco em credibilidade |
| [ ] | **G. Bento Grid Moderno** | Seções em cartões de tamanhos variados (grade tipo "bento"), cantos arredondados, visual de produto SaaS |
| [ ] | **H. Retrô / Pixel 8-bit** | Paleta limitada, fonte pixelada em títulos, elementos de interface retrô (mantendo legibilidade) |
| [ ] | **I. Editorial / Revista** | Tipografia serifada expressiva, grid assimétrico, muito contraste tipográfico |
| [ ] | **J. Personalizado** | Descrevo abaixo |

- **Se J, descreva o estilo desejado:** [DESCRIÇÃO / referências]
- **Cor de destaque (opcional, hex):** [EX.: #0EA5E9 — ou "você escolhe"]
- **Fonte preferida (opcional):** [EX.: Inter, JetBrains Mono — ou "você escolhe"]
- **Tema:** [ ] Claro  [ ] Escuro  [ ] Ambos com alternância (botão de tema + respeita `prefers-color-scheme`)
- **Nível de animação:** [ ] Nenhuma  [ ] Sutil  [ ] Expressiva (sempre respeitando `prefers-reduced-motion`)

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

---
name: Wireframe Skeleton System
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f3"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1a1c1c"
  on-surface-variant: "#4c4546"
  inverse-surface: "#2f3131"
  inverse-on-surface: "#f1f1f1"
  outline: "#7e7576"
  outline-variant: "#cfc4c5"
  surface-tint: "#5e5e5e"
  primary: "#000000"
  on-primary: "#ffffff"
  primary-container: "#1b1b1b"
  on-primary-container: "#848484"
  inverse-primary: "#c6c6c6"
  secondary: "#5e5e5e"
  on-secondary: "#ffffff"
  secondary-container: "#e1dfdf"
  on-secondary-container: "#626262"
  tertiary: "#000000"
  on-tertiary: "#ffffff"
  tertiary-container: "#1b1b1b"
  on-tertiary-container: "#848484"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e2e2e2"
  primary-fixed-dim: "#c6c6c6"
  on-primary-fixed: "#1b1b1b"
  on-primary-fixed-variant: "#474747"
  secondary-fixed: "#e4e2e2"
  secondary-fixed-dim: "#c7c6c6"
  on-secondary-fixed: "#1b1c1c"
  on-secondary-fixed-variant: "#464747"
  tertiary-fixed: "#e2e2e2"
  tertiary-fixed-dim: "#c6c6c6"
  on-tertiary-fixed: "#1b1b1b"
  on-tertiary-fixed-variant: "#474747"
  background: "#f9f9f9"
  on-background: "#1a1c1c"
  surface-variant: "#e2e2e2"
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: "0"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: "1.4"
    letterSpacing: "0"
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  xxl: 4rem
---

## Marca & Estilo

Este sistema de design foi concebido como uma estrutura de baixa fidelidade (Skeleton UI) focada puramente em hierarquia, fluxo e disposição de elementos. A personalidade é neutra, técnica e funcional, eliminando distrações visuais para que as decisões de UX e arquitetura de informação sejam priorizadas.

O estilo visual baseia-se no **Minimalismo**, utilizando uma estética de "esqueleto" para representar o conteúdo que ainda será definido. O objetivo é evocar uma resposta de clareza estrutural e organização, permitindo que stakeholders foquem na jornada do usuário sem se prenderem a detalhes estéticos finais.

## Cores

A paleta deste sistema de design é estritamente em tons de cinza (grayscale). Não são permitidas cores cromáticas.

- **Preto (#000000):** Utilizado para textos principais, ícones ativos e elementos de máxima ênfase.
- **Cinza Escuro (#666666):** Reservado para textos secundários e estados desabilitados.
- **Cinza Médio (#CCCCCC):** Cor padrão para bordas e divisores.
- **Cinza Claro (#F2F2F2):** Utilizado para preenchimentos de "skeletons" e fundos de containers.
- **Branco (#FFFFFF):** Cor de fundo principal da interface.

O contraste deve ser mantido para garantir a legibilidade da estrutura mesmo em baixa fidelidade.

## Tipografia

A tipografia utiliza a fonte **Inter** por sua natureza sistemática e legibilidade excepcional em telas. A hierarquia é definida pelo peso e tamanho, garantindo que a estrutura do conteúdo seja compreensível sem o uso de cores.

Os títulos (H1 a H3) devem ser diretos e funcionais. O corpo de texto foca na legibilidade, enquanto os labels e captions ajudam a identificar metadados e micro-textos de interface. Toda a comunicação deve estar em Português do Brasil (pt-BR).

## Layout & Espaçamento

Este sistema utiliza um modelo de **Grade Fluida (Fluid Grid)** de 12 colunas para web e uma grade adaptativa para dispositivos móveis. O ritmo vertical é baseado em um sistema de 8px, garantindo consistência matemática entre todos os elementos.

As margens e paddings devem seguir as unidades definidas (xs a xxl). O uso de espaços em branco (whitespace) é fundamental para separar grupos funcionais, já que não contamos com cores para criar essa distinção. Elementos de layout devem ser representados por blocos com preenchimento cinza claro para indicar áreas de conteúdo futuro.

## Elevação & Profundidade

A hierarquia visual é transmitida através de **Camadas Tonais** e **Contornos de Baixo Contraste**.

Não utilizamos sombras realistas ou gradientes. A profundidade é sugerida pelo empilhamento de planos:

1. **Nível de Base:** Fundo branco puro.
2. **Nível de Superfície:** Containers com bordas de 1px (#CCCCCC) ou fundos em cinza claro (#F2F2F2).
3. **Nível de Destaque:** Elementos com bordas mais espessas ou preenchimento em cinza médio para indicar foco ou interação.

A separação de profundidade deve ser clara, mas discreta, mantendo o aspecto de "wireframe" plano.

## Formas

A linguagem de formas é amigável e moderna, utilizando blocos arredondados. O valor padrão de arredondamento é de **0.5rem (8px)**, conferindo uma estética suave que ajuda a suavizar a natureza técnica do wireframe.

- **Componentes pequenos (inputs, chips):** Seguem o arredondamento padrão.
- **Componentes grandes (cards, seções):** Podem utilizar `rounded-lg` (1rem) ou `rounded-xl` (1.5rem) para enfatizar o agrupamento de informações.
- **Skeletons de imagem:** Devem sempre apresentar cantos arredondados para manter a consistência visual do sistema.

## Componentes

Os componentes devem ser representados em sua forma mais essencial:

- **Botões:** Bordas de 1px pretas com texto centralizado. Para estados primários, preenchimento preto com texto branco. Para secundários, apenas contorno.
- **Skeletons (Marcadores):** Blocos sólidos de cor `#F2F2F2` com cantos arredondados, usados para representar imagens ou blocos de texto em carregamento.
- **Campos de Entrada (Inputs):** Retângulos com borda `#CCCCCC`, canto arredondado e texto de placeholder em cinza escuro.
- **Ícones:** Representações geométricas simples (linhas e formas básicas) em preto, sem detalhes ornamentais.
- **Cards:** Containers com borda fina e padding generoso (usualmente `md` ou `lg`), servindo como base para agrupar informações relacionadas.
- **Listas:** Separadas por divisores de 1px em cinza claro, com alinhamento rigoroso à esquerda.

Cada componente deve focar na usabilidade e no espaço ocupado na tela, preparando o caminho para o design visual final.

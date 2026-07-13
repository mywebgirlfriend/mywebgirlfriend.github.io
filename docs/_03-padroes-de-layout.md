# Padrões de Layout

**Arquivo:**

```text
docs/_03-padroes-de-layout.md
```

---

# Objetivo

Este documento descreve a arquitetura dos layouts utilizados pelo projeto.

Os layouts são responsáveis exclusivamente pela estrutura visual das páginas.

Eles não devem conter conteúdo específico.

O conteúdo é responsabilidade dos arquivos Markdown e dos templates das seções.

---

# Filosofia

O projeto utiliza herança de layouts.

Isso permite reutilizar a estrutura comum do site e criar layouts especializados apenas quando necessário.

A arquitetura busca evitar duplicação de código e facilitar futuras alterações.

---

# Estrutura atual

```text
base.njk

        ▲

        │

blog.njk

        ▲

        │

Markdown
```

---

# base.njk

O arquivo:

```text
layouts/base.njk
```

é o layout principal do projeto.

Toda página publicada utiliza esse layout direta ou indiretamente.

---

## Responsabilidades

O layout base é responsável por:

* estrutura HTML;
* elemento `<head>`;
* carregamento do CSS global;
* barra lateral;
* área principal da página;
* blocos reutilizáveis.

Ele não possui responsabilidade editorial.

---

## O que não pertence ao base.njk

O layout base não deve conter:

* conteúdo de artigos;
* listas de posts;
* regras específicas do Blog;
* lógica de publicação.

---

# blog.njk

Arquivo:

```text
layouts/blog.njk
```

O `blog.njk` é o layout utilizado exclusivamente pelos artigos do Blog.

É importante distinguir o layout dos artigos da página principal da seção Blog.

A página:

```text
content/blog/index.njk
```

representa o índice do Blog.

Já:

```text
content/blog/posts/*.md
```

representam os artigos individuais.

Todos os artigos herdam automaticamente o `blog.njk`.

---

## Responsabilidades

O `blog.njk` é responsável por apresentar elementos comuns a todos os artigos, incluindo:

* data de publicação;
* título do artigo;
* separador visual entre cabeçalho e conteúdo;
* conteúdo do artigo;
* navegação automática entre artigos (Previous / Next).

Ele não deve conter lógica de listagem de artigos nem elementos específicos da página principal do Blog.

---

## O que não pertence ao blog.njk

Não pertencem ao `blog.njk`:

* a lista de artigos;
* a barra lateral;
* o botão "Back to Home";
* elementos comuns a todas as páginas do site.

Esses elementos pertencem ao `base.njk` ou às páginas específicas da seção.

---

# index.njk

O arquivo:

```text
content/blog/index.njk
```

não é um layout.

Ele representa uma página do site.

Sua responsabilidade é listar automaticamente os artigos publicados.

Ele nunca deverá ser tratado como um artigo.

---

# Herança

A arquitetura utiliza herança em apenas um sentido.

```text
base.njk

↓

blog.njk

↓

Markdown
```

Isso evita duplicação de estrutura.

---

# Estrutura recomendada

Sempre que uma nova seção necessitar de um comportamento visual diferente, deve ser criado um novo layout.

Exemplo futuro:

```text
layouts/

base.njk

blog.njk

gallery.njk

disease.njk
```

Cada layout deve possuir apenas uma responsabilidade.

---

# CSS

O carregamento dos estilos segue duas camadas.

Primeira camada:

```text
assets/css/style.css
```

Responsável por todo o site.

---

Segunda camada:

```text
assets/css/blog.css
```

Responsável apenas pelos artigos do Blog.

Novos layouts poderão possuir seus próprios arquivos CSS.

---

# Blocos

Os layouts utilizam blocos para permitir especializações.

Atualmente os principais blocos são:

```text
title

extraCss

body

pageContent
```

Cada bloco possui uma responsabilidade específica.

---

## title

Define o título da página.

---

## extraCss

Permite carregar folhas de estilo específicas.

---

## body

Representa o corpo principal da página.

---

## pageContent

Representa o conteúdo específico daquela página ou artigo.

---

# Organização

A arquitetura procura separar quatro responsabilidades.

```text
Markdown

↓

Conteúdo

↓

Layout

↓

Estrutura

↓

CSS
```

Cada camada conhece apenas sua própria responsabilidade.

---

# Quando criar um novo layout?

Criar um novo layout apenas quando houver diferença estrutural.

Não criar layouts apenas para alterar pequenas propriedades visuais.

Mudanças pequenas devem ser realizadas através de CSS.

---

# Quando reutilizar um layout?

Sempre que duas páginas compartilham praticamente a mesma estrutura.

A reutilização deve ser preferida sempre que possível.

---

# Boas práticas

* Um layout deve possuir apenas uma responsabilidade.
* Evitar lógica de negócio dentro dos layouts.
* Centralizar estrutura comum no layout base.
* Especializar apenas quando necessário.
* Reutilizar blocos.

---

# Más práticas

* Duplicar HTML entre layouts.
* Misturar estrutura e conteúdo.
* Criar layouts desnecessários.
* Repetir CSS global em layouts especializados.

---

# Decisões arquiteturais

## Regra nº 1

Todo layout deve possuir responsabilidade única.

---

## Regra nº 2

Layouts especializados herdam do layout base.

---

## Regra nº 3

Markdown nunca define estrutura HTML.

---

## Regra nº 4

Layouts nunca contêm conteúdo editorial.

---

## Regra nº 5

Mudanças de aparência devem ser resolvidas preferencialmente por CSS.

---

# Evolução prevista

Futuramente poderão existir layouts específicos para:

* Disease
* Pics
* Galerias
* Landing Pages

Todos deverão seguir exatamente os mesmos princípios definidos neste documento.

---

# Referências

Relacionados:

* `_01-arquitetura-de-diretorios.md`
* `_02-convencoes-do-projeto.md`
* `_06-estrutura-do-blog.md`
* `03-layout-base.md`
* `09-primeiro-post-e-refinamento-da-arquitetura-do-blog.md`

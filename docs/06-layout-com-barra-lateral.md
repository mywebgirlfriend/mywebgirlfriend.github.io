# Passo 6 — Primeira versão do Layout do Site e Barra Lateral

**Arquivo:**

```text
docs/06-layout-com-barra-lateral.md
```

---

# Objetivo desta etapa

Nesta etapa criamos a estrutura visual permanente do site.

Até este momento existia apenas uma página ocupando toda a largura da tela.

Agora o projeto passa a possuir duas áreas independentes:

* Barra lateral fixa.
* Área principal de conteúdo.

Essa será a base utilizada por praticamente todo o restante do projeto.

---

# Arquivos alterados

Durante esta etapa modificamos apenas:

```text
layouts/base.njk
```

e

```text
assets/css/style.css
```

Nenhum outro arquivo foi alterado.

---

# O que foi construído?

Criamos duas regiões principais:

```text
┌────────────────────┬─────────────────────────────────────┐
│                    │                                     │
│ Barra lateral      │                                     │
│                    │                                     │
│ Home               │                                     │
│ Blog               │          Conteúdo                   │
│ Pics               │                                     │
│ Links              │                                     │
│                    │                                     │
│                    │                                     │
└────────────────────┴─────────────────────────────────────┘
```

Essa estrutura permanecerá durante praticamente todo o projeto.

Novas funcionalidades serão adicionadas sobre essa base.

---

# O papel do arquivo base.njk

O arquivo:

```text
layouts/base.njk
```

continua sendo o layout principal do projeto.

Agora ele também passou a ser responsável por dividir visualmente a página em duas partes:

* Navegação.
* Conteúdo.

Ele continua sem conhecer detalhes específicos do Blog.

Isso é muito importante.

---

# O papel da barra lateral

Neste momento a barra lateral contém apenas quatro links:

```text
Home

Blog

Pics

Links
```

Esses links representam apenas a estrutura inicial do projeto.

Eles não significam que essas páginas já existam.

---

# Por que alguns links retornam 404?

Isso é esperado.

Nesta etapa construímos apenas a navegação.

As páginas serão criadas posteriormente.

Por exemplo:

```text
Blog
```

ainda não existe.

O mesmo vale para:

```text
Pics
```

e

```text
Links
```

Isso não representa erro de arquitetura.

Significa apenas que essas páginas ainda não foram implementadas.

---

# Como testar

Depois de alterar os arquivos:

```text
layouts/base.njk
```

e

```text
assets/css/style.css
```

deve-se:

1. Fazer commit.

2. Fazer push.

3. Aguardar o GitHub Actions.

Resultado esperado:

```text
Build

✅
```

```text
Deploy

✅
```

Depois abrir:

```text
https://mywebgirlfriend.github.io
```

O esperado é visualizar:

* fundo preto;
* texto branco;
* barra lateral;
* área principal do conteúdo.

---

# O que pode dar errado?

## A barra lateral não aparece

Verificar:

* se o conteúdo do `<body>` foi substituído corretamente;
* se as classes CSS possuem exatamente os mesmos nomes utilizados no HTML.

---

## Todo o conteúdo continua ocupando a largura inteira

Verificar se o CSS da classe:

```text
.layout
```

foi adicionado corretamente.

Essa classe é responsável por criar duas colunas.

---

## Os links aparecem um abaixo do outro, mas o conteúdo não fica ao lado

Verificar se existe:

```text
display: flex;
```

na classe:

```text
.layout
```

Sem essa propriedade o navegador empilhará todos os elementos verticalmente.

---

## Os links retornam 404

Isso é esperado.

Nesta etapa ainda não criamos:

* Blog;
* Pics;
* Links.

---

# Por que utilizamos Flexbox?

O Flexbox é uma ferramenta do CSS criada justamente para organizar elementos lado a lado.

Neste projeto ele será utilizado porque:

* é simples;
* é amplamente suportado pelos navegadores;
* facilita futuras alterações no layout;
* permite adicionar novas áreas sem reconstruir toda a página.

---

# Por que a barra lateral está escrita diretamente no base.njk?

Apenas para simplificar os primeiros testes.

Esta não será a arquitetura definitiva.

---

# Arquitetura futura

Mais adiante pretendemos transformar a barra lateral em um componente muito mais flexível.

O objetivo é que adicionar uma nova seção do site não exija editar:

```text
layouts/base.njk
```

Pretendemos que a barra lateral seja construída automaticamente a partir de um único arquivo de configuração.

Assim, adicionar uma nova seção significará alterar apenas um local do projeto.

Essa melhoria será implementada posteriormente.

---

# Relação com os outros arquivos

Fluxo atual:

```text
Página

↓

base.njk

↓

Barra lateral

↓

style.css

↓

HTML

↓

GitHub Actions

↓

GitHub Pages
```

---

# Boas práticas

* Manter a barra lateral simples.
* Adicionar apenas links permanentes.
* Evitar colocar lógica complexa dentro do layout principal.
* Centralizar a navegação em um único local.
* Documentar qualquer nova seção criada.

---

# Más práticas

* Duplicar menus em várias páginas.
* Criar barras laterais diferentes para cada seção.
* Alterar diretamente o layout principal para adicionar pequenas funcionalidades.
* Misturar estilos específicos do Blog na barra lateral.

---

# O que aprenderemos nas próximas etapas?

Depois desta etapa construiremos:

* a página inicial definitiva;
* a página principal do Blog;
* o sistema automático de posts;
* o layout exclusivo do Blog;
* a primeira publicação.

Depois disso, cada arquivo Markdown criado dentro de:

```text
content/blog/
```

gerará automaticamente uma nova página do site.

Esse é um dos principais objetivos arquiteturais do projeto.

---

# Resumo da etapa

Ao concluir esta etapa aprendemos:

✅ Como dividir a página em duas áreas.

✅ Como criar uma barra lateral permanente.

✅ Como utilizar Flexbox.

✅ Como organizar a navegação principal.

✅ Por que alguns links ainda retornam 404.

✅ Como essa estrutura servirá de base para todo o restante do projeto.

---

# Histórico

## Versão 1

* Criação da barra lateral.
* Definição da estrutura permanente do layout.
* Primeira utilização de Flexbox.
* Preparação para o sistema automático de seções e posts.

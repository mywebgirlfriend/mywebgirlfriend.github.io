# Estrutura do Blog

**Arquivo:**

```text
docs/_06-estrutura-do-blog.md
```

---

# Objetivo

Este documento descreve completamente a arquitetura do Blog.

Seu objetivo é explicar como um artigo nasce, como ele é processado pelo Eleventy e como se transforma automaticamente em uma página publicada.

Este documento representa o estado atual da arquitetura do Blog.

---

# Filosofia

O Blog foi projetado para que publicar um novo artigo seja uma atividade exclusivamente editorial.

Publicar um artigo não deve exigir conhecimento sobre:

* Eleventy
* GitHub Actions
* GitHub Pages
* layouts
* configuração interna

O autor deve preocupar-se apenas com o conteúdo.

---

# Estrutura

Atualmente o Blog possui a seguinte organização.

```text
content/

└── blog/

    index.njk

    posts/

        posts.11tydata.js

        *.md
```

---

# Responsabilidade de cada diretório

## blog/

Contém apenas infraestrutura.

Exemplos:

* página principal do Blog;
* configurações futuras da seção.

Esta pasta não contém artigos.

---

## posts/

Contém exclusivamente artigos.

Todo arquivo Markdown existente nesta pasta será considerado um artigo publicado.

---

# Página principal

Arquivo:

```text
content/blog/index.njk
```

Responsabilidades:

* listar automaticamente os artigos;
* apresentar a página principal do Blog.

Ela não representa um artigo.

---

# Artigos

Cada artigo corresponde exatamente a um arquivo Markdown.

Exemplo:

```text
content/blog/posts/

meu-primeiro-post.md
```

↓

gera automaticamente uma página HTML.

---

# Front Matter

Atualmente cada artigo deve conter:

```yaml
---
title:
date:
---
```

Esses campos representam a fonte oficial das informações editoriais.

---

# title

Responsável por:

* título exibido;
* título da página;
* geração do slug da URL.

---

# date

Responsável por:

* data oficial do artigo;
* organização cronológica;
* geração do permalink.

A data do arquivo não é utilizada.

---

# Layout

Os artigos não informam:

```yaml
layout:
```

Essa configuração é herdada automaticamente.

---

# Tags

Da mesma forma:

```yaml
tags:
```

também são herdadas automaticamente.

# Navegação entre artigos

A navegação entre artigos é gerada automaticamente.

Cada artigo pode apresentar:

* artigo anterior;
* artigo seguinte.

Esses links são calculados a partir da coleção do Blog.

A página principal do Blog (`content/blog/index.njk`) não utiliza essa navegação.

Ela existe apenas nos artigos individuais.

Essa separação mantém o índice do Blog responsável apenas pela listagem das publicações, enquanto o `blog.njk` permanece responsável pela experiência de leitura de cada artigo.

---

# posts.11tydata.js

Arquivo:

```text
content/blog/posts/posts.11tydata.js
```

Esse arquivo centraliza todas as configurações comuns aos artigos.

Seu objetivo é eliminar repetição.

Atualmente ele controla:

* layout;
* tags;
* permalink.

Futuramente poderá controlar outras propriedades compartilhadas.

---

# Coleção

O Blog utiliza a coleção oficial:

```text
collections.blog
```

Ela reúne automaticamente todos os artigos.

A coleção é utilizada por:

* página principal do Blog;
* futuras funcionalidades.

---

# Ordem dos artigos

Os artigos aparecem automaticamente em ordem cronológica.

Ordem utilizada:

```text
Mais recente

↓

Mais antigo
```

Nenhuma ordenação manual é necessária.

---

# URL

Formato oficial:

```text
/blog/AAAA/MM/DD/titulo-do-post/
```

A URL é gerada automaticamente.

Nenhum artigo deve definir manualmente:

```yaml
permalink:
```

---

# Slug

O slug é gerado automaticamente a partir do título.

Isso garante URLs consistentes.

---

# Fluxo completo

```text
Novo Markdown

↓

posts.11tydata.js

↓

Coleção Blog

↓

Layout blog.njk

↓

Layout base.njk

↓

Eleventy

↓

HTML

↓

GitHub Pages
```

---

# Publicando um artigo

Fluxo oficial:

1.

Criar um arquivo Markdown.

2.

Escrever:

```yaml
title:

date:
```

3.

Escrever o conteúdo.

4.

Commit.

5.

Push.

Nenhuma outra alteração deverá ser necessária.

---

# O que um artigo não deve fazer

Nunca:

* definir layout;
* definir tags;
* definir permalink;
* alterar listas de artigos.

Essas responsabilidades pertencem à infraestrutura.

---

# Boas práticas

* Um arquivo representa um artigo.
* Um artigo possui um título.
* Um artigo possui uma data.
* Utilizar nomes simples para os arquivos.
* Publicar alterações pequenas.

---

# Más práticas

* Duplicar configurações.
* Misturar infraestrutura e conteúdo.
* Criar exceções para artigos específicos.
* Alterar URLs já publicadas sem necessidade.

---

# Evolução prevista

A arquitetura já está preparada para receber:

* RSS;
* Sitemap;
* últimos artigos na Home;
* categorias;
* páginas de arquivo;
* paginação.

Essas funcionalidades deverão reutilizar a coleção existente.

---

# Decisões arquiteturais

## Regra nº 1

Todo artigo pertence à pasta:

```text
content/blog/posts/
```

---

## Regra nº 2

A pasta:

```text
content/blog/
```

não contém artigos.

Ela contém apenas infraestrutura.

---

## Regra nº 3

As configurações comuns pertencem ao:

```text
posts.11tydata.js
```

---

## Regra nº 4

A página principal do Blog nunca deve ser tratada como um artigo.

---

## Regra nº 5

Publicar um novo artigo nunca deverá exigir alterar outro arquivo.

Essa é considerada uma regra permanente da arquitetura.

---

# Referências

Relacionados:

* `_01-arquitetura-de-diretorios.md`
* `_02-convencoes-do-projeto.md`
* `_03-padroes-de-layout.md`
* `_04-fluxo-de-publicacao.md`
* `07-colecao-blog.md`
* `08-configuracao-da-secao-blog.md`
* `09-primeiro-post-e-refinamento-da-arquitetura-do-blog.md`
* `10-urls-automaticas-do-blog.md`

# Passo 7 — Criando a coleção oficial do Blog

**Arquivo:**

```text
docs/07-colecao-blog.md
```

---

# Objetivo desta etapa

Nesta etapa ensinamos o Eleventy a reconhecer automaticamente quais arquivos pertencem ao Blog.

Até este momento o Eleventy apenas processava arquivos individualmente.

Agora ele passa a possuir uma coleção oficial chamada:

```text
collections.blog
```

Essa coleção será utilizada em diversas partes do projeto, como:

* Página principal do Blog;
* Página inicial do site (últimos posts);
* RSS (futuramente);
* Sitemap (futuramente);
* Qualquer outra funcionalidade que precise listar artigos.

---

# Arquivo alterado

Durante esta etapa alteramos apenas:

```text
.eleventy.js
```

---

# O que é uma coleção?

Uma coleção é um grupo de páginas que possuem alguma característica em comum.

Neste projeto decidimos que um artigo pertence ao Blog quando possuir a seguinte tag:

```yaml
tags:
    - blog
```

Isso significa que não é o nome da pasta que define um post.

É a presença da tag.

---

# Por que utilizar tags?

Imagine o seguinte cenário no futuro.

Um artigo poderá pertencer simultaneamente a:

* Blog
* Linux
* Filosofia

Tudo dependerá apenas das tags atribuídas ao arquivo.

Isso torna o projeto muito mais flexível.

Mesmo que inicialmente utilizemos apenas a tag:

```yaml
blog
```

a arquitetura já estará preparada para crescer.

---

# Como a coleção funciona?

Sempre que o Eleventy encontrar um arquivo contendo:

```yaml
tags:
    - blog
```

ele adicionará automaticamente esse arquivo à coleção:

```text
collections.blog
```

Não será necessário editar nenhum outro arquivo do projeto.

---

# Ordenação automática

A coleção do Blog é ordenada automaticamente.

A ordem utilizada é:

```text
Mais recente

↓

Mais antigo
```

Essa ordenação acontece dentro do próprio Eleventy.

Nenhum arquivo Markdown precisa ser reorganizado manualmente.

---

# Por que apenas o Blog possui uma coleção?

Durante o desenvolvimento avaliamos criar coleções também para:

* Disease
* Links
* Pics

Decidimos não fazer isso.

O motivo é simples.

Essas seções não representam um diário cronológico.

Elas representam documentação.

Portanto, faz mais sentido permitir que sua organização seja definida manualmente.

---

# Diferença entre Blog e as demais seções

## Blog

Características:

* cronológico;
* cresce continuamente;
* mais recente aparece primeiro.

---

## Disease

Características:

* documental;
* páginas permanentes;
* organização definida manualmente.

---

## Links

Características:

* coleção de referências;
* organização definida manualmente.

---

## Pics

Características:

* galeria;
* organização definida manualmente.

---

# Como publicar um novo post?

Depois que a arquitetura estiver concluída, publicar um artigo exigirá apenas:

1. Criar um arquivo Markdown.

2. Fazer commit.

3. Fazer push.

Nenhum outro arquivo precisará ser alterado.

Essa é uma das principais metas arquiteturais deste projeto.

---

# Como testar esta etapa?

Após alterar:

```text
.eleventy.js
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

Neste momento ainda não existirão posts.

Portanto, a coleção estará vazia.

Isso é esperado.

---

# O que pode dar errado?

## O Build falha

Verificar cuidadosamente:

* sintaxe do JavaScript;
* chaves;
* parênteses;
* ponto e vírgula.

---

## Nenhum post aparece futuramente

Verificar se o arquivo contém:

```yaml
tags:
    - blog
```

Sem essa tag o arquivo não fará parte da coleção.

---

# Boas práticas

* Utilizar apenas uma coleção cronológica: Blog.
* Centralizar toda a lógica do Blog no `.eleventy.js`.
* Evitar duplicação de regras em outros arquivos.
* Documentar alterações importantes na coleção.

---

# Más práticas

* Criar listas manuais de posts.
* Editar a página principal do Blog sempre que publicar um artigo.
* Duplicar a ordenação em diferentes arquivos.
* Criar coleções desnecessárias para seções documentais.

---

# Decisões arquiteturais

## Regra nº 1

Somente o Blog possui comportamento cronológico automático.

---

## Regra nº 2

As demais seções do site são documentais.

Sua organização será definida manualmente.

---

## Regra nº 3

A publicação de um novo artigo nunca deverá exigir modificar outro arquivo além do próprio post.

Essa regra deverá permanecer válida durante toda a vida do projeto.

---

# Relação com o restante do projeto

Fluxo completo:

```text
Arquivo Markdown

↓

Tag "blog"

↓

collections.blog

↓

Página principal do Blog

↓

Página inicial

↓

RSS (futuro)

↓

Sitemap (futuro)
```

---

# O próximo passo

Na próxima etapa criaremos o primeiro artigo do Blog.

Esse artigo servirá para validar todo o fluxo do projeto.

Ao final da próxima etapa deveremos conseguir:

* criar um arquivo Markdown;
* fazer commit;
* fazer push;
* visualizar automaticamente uma nova página publicada pelo GitHub Pages.

Esse será o primeiro teste completo da arquitetura do Blog.

---

# Resumo da etapa

Ao concluir esta etapa aprendemos:

✅ O que é uma coleção do Eleventy.

✅ Como o Blog identifica seus artigos.

✅ Por que utilizamos tags.

✅ Como os posts serão ordenados.

✅ Por que apenas o Blog possui comportamento cronológico.

✅ Qual é a filosofia de publicação do projeto.

---

# Histórico

## Versão 1

* Criação da coleção oficial do Blog.
* Definição da arquitetura cronológica.
* Definição da diferença entre seções cronológicas e documentais.
* Registro da filosofia de publicação com um único arquivo Markdown por post.

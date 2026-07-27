# Tutorial: Formatação das datas

## Objetivo

Este tutorial explica como funciona a formatação automática das datas dos artigos deste projeto.

Ao final deste tutorial, o leitor compreenderá:

* como o Eleventy obtém a data de um artigo;
* quais arquivos participam dessa automação;
* como o cabeçalho do artigo é gerado automaticamente;
* como a listagem do blog é gerada automaticamente;
* como modificar qualquer um desses formatos.

Este tutorial explica apenas os arquivos envolvidos na automação das datas e do cabeçalho dos artigos.

---

# Resultado esperado

Ao final da implementação, um artigo deverá ser exibido da seguinte forma.

## Dentro do artigo

```text
Sat, Jul 11, 2026 - São Paulo

Meu primeiro post
```

---

## Na lista do blog

```text
11/07/2026 - Meu primeiro post
```

Observe que o autor não escreve nenhuma dessas datas manualmente.

Todo esse conteúdo é produzido automaticamente pelo sistema.

---

# Arquivos envolvidos

A funcionalidade depende apenas dos seguintes arquivos.

```text
.eleventy.js

layouts/blog.njk

content/blog/index.njk
```

Nenhum outro arquivo participa da formatação automática das datas.

---

# Como a automação funciona

O processo completo pode ser resumido da seguinte maneira.

```text
Data do artigo
        │
        ▼
.eleventy.js
        │
        ├────────► Cabeçalho do artigo
        │
        └────────► Lista do blog
```

O arquivo `.eleventy.js` cria filtros de formatação.

Os templates (`blog.njk` e `index.njk`) apenas utilizam esses filtros para exibir a data no formato desejado.

---

# Arquivo 1 — .eleventy.js

Este é o arquivo mais importante da implementação.

Ele registra dois filtros:

* um para o cabeçalho do artigo;
* outro para a lista de artigos.

---

## Filtro do cabeçalho

```javascript
eleventyConfig.addFilter("formatPostDate", function (date) {

    const formatter = new Intl.DateTimeFormat("en-US", {

        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "America/Sao_Paulo"

    });

    return `${formatter.format(date)} - São Paulo`;

});
```

---

## Explicação linha por linha

```javascript
eleventyConfig.addFilter("formatPostDate", function (date) {
```

Cria um filtro chamado **formatPostDate**.

Sempre que um template utilizar:

```njk
{{ date | formatPostDate }}
```

o Eleventy executará esse código.

O parâmetro `date` representa automaticamente a data do artigo.

---

```javascript
const formatter = new Intl.DateTimeFormat("en-US", {
```

Cria um formatador de datas utilizando a API nativa do JavaScript.

Foi escolhido o idioma **en-US** para produzir o estilo típico utilizado em blogs clássicos.

---

```javascript
weekday: "short",
```

Mostra o dia da semana abreviado.

Exemplo:

```text
Sat
```

---

```javascript
month: "short",
```

Mostra o mês abreviado.

Exemplo:

```text
Jul
```

---

```javascript
day: "numeric",
```

Mostra apenas o número do dia.

Resultado:

```text
11
```

---

```javascript
year: "numeric",
```

Mostra o ano utilizando quatro dígitos.

Resultado:

```text
2026
```

---

```javascript
timeZone: "America/Sao_Paulo"
```

Garante que toda a formatação utilize o fuso horário de São Paulo.

Isso evita diferenças de datas quando o site é gerado em outro país.

---

```javascript
return `${formatter.format(date)} - São Paulo`;
```

Formata a data utilizando todas as configurações anteriores.

Depois acrescenta automaticamente:

```text
- São Paulo
```

O resultado final produzido pelo filtro será:

```text
Sat, Jul 11, 2026 - São Paulo
```

---

# Segundo filtro

O mesmo arquivo cria um segundo filtro responsável pela lista do blog.

```javascript
eleventyConfig.addFilter("formatPostDateBR", function (date) {

    return new Intl.DateTimeFormat("pt-BR", {

        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "America/Sao_Paulo"

    }).format(date);

});
```

---

## Explicação linha por linha

```javascript
eleventyConfig.addFilter("formatPostDateBR", function (date) {
```

Cria um segundo filtro chamado **formatPostDateBR**.

Sua única finalidade é produzir uma data no padrão brasileiro.

---

```javascript
return new Intl.DateTimeFormat("pt-BR", {
```

Diferentemente do filtro anterior, este utiliza o idioma **pt-BR**.

Assim, a ordem dos elementos da data muda automaticamente para o formato brasileiro.

---

```javascript
day: "2-digit",
```

Sempre utiliza dois dígitos.

Exemplo:

```text
11
```

---

```javascript
month: "2-digit",
```

Sempre utiliza dois dígitos para o mês.

Resultado:

```text
07
```

---

```javascript
year: "numeric",
```

Mostra o ano completo.

Resultado:

```text
2026
```

---

```javascript
timeZone: "America/Sao_Paulo"
```

Mantém o mesmo fuso horário utilizado pelo restante do projeto.

---

```javascript
}).format(date);
```

Formata a data recebida e devolve:

```text
11/07/2026
```

Esse valor será utilizado apenas na lista do blog.

# Arquivo 2 — layouts/blog.njk

Este arquivo é responsável pela aparência de cada artigo do blog.

Entre outras funções, ele exibe a data formatada no cabeçalho.

O trecho responsável é o seguinte.

```njk
<p class="post-date">

    {{ date | formatPostDate }}

</p>
```

---

## Explicação linha por linha

```njk
<p class="post-date">
```

Cria o parágrafo que receberá a data do artigo.

A classe `post-date` normalmente é utilizada apenas para aplicar estilos CSS.

Ela não altera a data.

---

```njk
{{ date }}
```

Obtém automaticamente a data daquele artigo.

Essa data é fornecida pelo próprio Eleventy.

O autor do artigo não precisa criar essa variável.

---

```njk
| formatPostDate
```

Aqui acontece a parte mais importante.

O caractere `|` envia a variável `date` para um filtro.

Nesse caso, o filtro é:

```text
formatPostDate
```

que foi criado anteriormente no arquivo:

```text
.eleventy.js
```

O valor original da data deixa de ser utilizado.

No lugar dele, passa a ser exibido o resultado devolvido pelo filtro.

---

Como o filtro retorna:

```text
Sat, Jul 11, 2026 - São Paulo
```

esse será exatamente o texto exibido no cabeçalho do artigo.

---

```njk
</p>
```

Fecha o parágrafo.

---

# Fluxo completo do cabeçalho

O processo ocorre nesta ordem.

```text
Data do artigo

↓

layouts/blog.njk

↓

{{ date }}

↓

formatPostDate

↓

Sat, Jul 11, 2026 - São Paulo

↓

Exibição na página
```

Observe que o template não sabe como formatar datas.

Ele apenas envia a data para o filtro.

Toda a inteligência da formatação permanece centralizada no `.eleventy.js`.

---

# Arquivo 3 — content/blog/index.njk

Este arquivo monta automaticamente a lista de artigos do blog.

Cada item da lista possui o seguinte formato.

```text
11/07/2026 - Meu primeiro post
```

O trecho responsável é semelhante ao seguinte.

```njk
<a href="{{ post.url }}">

    {{ post.date | formatPostDateBR }} - {{ post.data.title }}

</a>
```

---

## Explicação linha por linha

```njk
<a href="{{ post.url }}">
```

Cria o link para o artigo.

O endereço é obtido automaticamente pelo Eleventy.

---

```njk
{{ post.date }}
```

Obtém a data daquele artigo específico.

Essa data ainda está em seu formato original.

---

```njk
| formatPostDateBR
```

Envia essa data para o filtro brasileiro criado no `.eleventy.js`.

O filtro devolve:

```text
11/07/2026
```

---

Após isso, o template acrescenta um hífen.

```text
 -
```

---

Em seguida:

```njk
{{ post.data.title }}
```

Obtém automaticamente o título do artigo.

O resultado final torna-se:

```text
11/07/2026 - Meu primeiro post
```

---

# Como o título aparece automaticamente

Observe que o template nunca escreve manualmente o nome do artigo.

Ele apenas utiliza:

```njk
{{ post.data.title }}
```

O valor dessa variável já chega pronto ao template.

Isso significa que o arquivo `index.njk` não possui nenhuma lógica responsável por transformar o título.

Sua única responsabilidade é exibi-lo.

Da mesma forma, o template também não possui nenhuma lógica para converter datas.

Ele apenas utiliza os filtros registrados anteriormente no `.eleventy.js`.

Essa separação torna o código mais organizado.

Cada arquivo possui apenas uma responsabilidade.

---

# Resumo da responsabilidade de cada arquivo

| Arquivo                  | Responsabilidade                                         |
| ------------------------ | -------------------------------------------------------- |
| `.eleventy.js`           | Criar os filtros responsáveis por converter datas.       |
| `layouts/blog.njk`       | Exibir a data formatada no cabeçalho do artigo.          |
| `content/blog/index.njk` | Exibir a data brasileira e o título na lista de artigos. |

---

# Código final dos arquivos

Os próximos códigos representam a implementação completa utilizada neste projeto.

Caso alguma parte da funcionalidade deixe de funcionar, compare estes arquivos com os do seu projeto.

## 1. `.eleventy.js`

```
module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("blog", function (collectionApi) {

        return collectionApi
            .getFilteredByTag("blog")
            .reverse();

    });

    eleventyConfig.addFilter("formatPostDate", function (date) {

        const formatter = new Intl.DateTimeFormat("en-US", {

            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "America/Sao_Paulo"

        });

        return `${formatter.format(date)} - São Paulo`;

    });

    eleventyConfig.addFilter("formatPostDateBR", function (date) {

        return new Intl.DateTimeFormat("pt-BR", {

            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: "America/Sao_Paulo"

        }).format(date);

    });

    return {

        dir: {

            input: "content",

            includes: "../layouts",

            output: "docs"

        },

        markdownTemplateEngine: "njk",

        htmlTemplateEngine: "njk",

        dataTemplateEngine: "njk"

    };

};
```

---

## 2. `layouts/blog.njk`

Esse é o layout responsável pelo cabeçalho dos artigos.

```
{% extends "base.njk" %}

{% block title %}

    {{ title }}

{% endblock %}

{% block extraCss %}

<link
    rel="stylesheet"
    href="/assets/css/blog.css">

{% endblock %}

{% block pageContent %}

{% set previousPost = collections.blog | getPreviousCollectionItem %}
{% set nextPost = collections.blog | getNextCollectionItem %}

<p class="post-date">

    {{ date | formatPostDate }}

</p>

<h1>

    {{ title }}

</h1>

<hr class="section-divider">

<article class="blog-post">

    {{ content | safe }}

</article>

<hr class="section-divider">

<nav class="post-navigation">

    <div>

        {% if previousPost %}

            <a href="{{ previousPost.url }}">

                ← Previous

            </a>

        {% endif %}

    </div>

    <div>

        {% if nextPost %}

            <a href="{{ nextPost.url }}">

                Next →

            </a>

        {% endif %}

    </div>

</nav>

{% endblock %}
```

---

## 3. `content/blog/index.njk`

Esse arquivo é responsável por montar automaticamente a listagem do blog.

```
---
layout: base.njk
title: Blog
tags: []
---

{% block body %}

<h1>Blog</h1>

<ul>

{% for post in collections.blog %}

    <li>

        <a href="{{ post.url }}">

            {{ post.date | formatPostDateBR }} - {{ post.data.title }}

        </a>

    </li>

{% endfor %}

</ul>

{% endblock %}
```

---

# Conclusão

Toda a formatação das datas deste projeto está centralizada nos filtros registrados em `.eleventy.js`.

Os templates `layouts/blog.njk` e `content/blog/index.njk` não possuem regras de formatação próprias. Eles apenas reutilizam esses filtros para apresentar a mesma data em formatos diferentes, de acordo com o contexto.

Essa abordagem evita duplicação de código, facilita futuras alterações e mantém todo o comportamento relacionado às datas concentrado em um único local.

Segue o documento proposto para a pasta `docs`.

# _13-formatacao-de-datas.md

# Formatação de Datas

## Objetivo

Este documento descreve como as datas são tratadas no projeto, desde a publicação de um artigo até sua exibição no site. Também explica por que existem dois formatos de data diferentes e onde cada um deles é utilizado.

---

# Fluxo da data

Quando um novo artigo é publicado, o Eleventy associa automaticamente uma data ao post.

Essa data é disponibilizada durante a geração do site através das propriedades:

* `date`
* `post.date`

A mesma data é utilizada em diferentes partes do projeto, porém cada uma possui uma finalidade distinta.

---

# Dois filtros para duas finalidades

O projeto utiliza dois filtros diferentes para evitar que uma alteração em um local afete outro.

## formatPostDate

Finalidade:

Exibir a data no cabeçalho de cada artigo.

Formato:

```text
Fri, Jul 24, 2026 - São Paulo
```

Características:

* idioma inglês;
* dia da semana abreviado;
* mês abreviado;
* fuso horário configurado para `America/Sao_Paulo`;
* identificação amigável do fuso como **São Paulo**.

Arquivo onde é utilizado:

```text
layouts/blog.njk
```

Trecho correspondente:

```njk
{{ date | formatPostDate }}
```

---

## formatPostDateBR

Finalidade:

Exibir a data na lista de artigos da página principal do blog.

Formato:

```text
24/07/2026
```

Características:

* padrão brasileiro;
* dia/mês/ano;
* sem horário;
* sem nome do fuso.

Arquivo onde é utilizado:

```text
content/blog/index.njk
```

Trecho correspondente:

```njk
{{ post.date | formatPostDateBR }} - {{ post.data.title }}
```

Resultado:

```text
24/07/2026 - Meu primeiro post
```

---

# Por que existem dois filtros?

Inicialmente o projeto utilizava apenas um filtro para todas as páginas.

Isso fazia com que qualquer alteração na formatação da data modificasse simultaneamente:

* o cabeçalho dos artigos;
* a lista de artigos do blog.

Como essas duas áreas possuem objetivos diferentes, foi adotada a separação em dois filtros independentes.

Essa abordagem segue o princípio de responsabilidade única: cada filtro possui apenas uma função específica.

---

# Fluxo completo

O funcionamento da data no projeto ocorre na seguinte sequência:

1. Um novo artigo é criado.
2. O Eleventy associa uma data ao post.
3. A coleção `blog` reúne todos os artigos.
4. `content/blog/index.njk` percorre `collections.blog`.
5. A lista utiliza `formatPostDateBR`.
6. Cada artigo individual utiliza `formatPostDate`.

Representação simplificada:

```text
Post
   │
   ▼
Eleventy
   │
   ▼
collections.blog
   │
   ├── index.njk ──► formatPostDateBR
   │
   └── blog.njk ──► formatPostDate
```

---

# Configuração do fuso horário

Ambos os filtros utilizam:

```text
America/Sao_Paulo
```

Isso garante que todas as datas sejam apresentadas de forma consistente, independentemente do sistema operacional ou da localização do servidor responsável pela geração do site.

---

# Convenções do projeto

As seguintes regras devem ser mantidas:

* O cabeçalho dos artigos deve utilizar `formatPostDate`.
* A listagem do blog deve utilizar `formatPostDateBR`.
* Não reutilizar um filtro para as duas finalidades.
* Caso um novo formato de data seja necessário, criar um novo filtro específico em vez de alterar os existentes.

Essa separação evita efeitos colaterais e facilita a manutenção futura do projeto.

Esse documento complementa naturalmente o `_12-arquivos-11tydata.md` e registra a decisão de arquitetura adotada para a formatação das datas.

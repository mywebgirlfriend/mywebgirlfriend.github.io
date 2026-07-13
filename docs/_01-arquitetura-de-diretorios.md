# Arquitetura de Diretórios

**Arquivo:**

`docs/_01-arquitetura-de-diretorios.md`

---

# Objetivo

Este documento descreve a arquitetura oficial de diretórios do projeto.

Diferentemente da documentação cronológica (`01-*.md`), este documento representa sempre o estado atual da estrutura do projeto.

Sempre que uma alteração arquitetural modificar a organização das pastas, este documento deverá ser atualizado.

---

# Estrutura geral

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
│   ├── css/
│   ├── icons/
│   ├── images/
│   └── videos/
│
├── content/
│   ├── _data/
│   │   └── navigation.js
│   │
│   ├── index.md
│   │
│   ├── blog/
│   │   ├── index.njk
│   │   └── posts/
│   │       ├── posts.11tydata.js
│   │       └── *.md
│   │
│   ├── disease-history/
│   │   ├── disease-history.11tydata.json
│   │   └── index.md
│   │
│   ├── links/
│   │   ├── links.11tydata.json
│   │   └── index.md
│   │
│   └── pics/
│       ├── pics.11tydata.json
│       └── index.md
│
├── docs/
│
├── layouts/
│   ├── base.njk
│   └── blog.njk
│
├── .eleventy.js
├── package.json
└── README.md
```

---

# Responsabilidade de cada pasta

## .github/

Contém toda a infraestrutura de automação do projeto.

Exemplos:

* GitHub Actions;
* Workflows de Build;
* Workflows de Deploy.

Nenhum conteúdo do site deve ser colocado nesta pasta.

---

## assets/

Contém todos os arquivos estáticos.

Exemplos:

* folhas de estilo;
* imagens;
* ícones;
* vídeos.

Esses arquivos não representam conteúdo editorial.

---

## content/

É a principal pasta do projeto.

Todo conteúdo publicado nasce dentro dela.

Cada subdiretório representa uma seção do site.

---

## layouts/

Contém exclusivamente layouts reutilizáveis.

Layouts definem estrutura visual.

Eles não armazenam conteúdo.

---

## docs/

Contém toda a documentação técnica do projeto.

Esta pasta é dividida em duas categorias.

### Documentação histórica

Arquivos:

```text
01-*.md
```

Descrevem como o projeto foi construído.

Esses documentos registram a evolução do projeto e não devem perder seu contexto histórico.

---

### Documentação de referência

Arquivos:

```text
_01-*.md
```

Descrevem o estado atual da arquitetura.

Sempre que uma convenção permanente mudar, esses documentos deverão ser atualizados.

---

# Estrutura da pasta content

## Página inicial

```text
content/index.md
```

Representa:

```text
/
```

É a página inicial do site.

---

## Blog

```text
content/blog/
```

Representa:

```text
/blog/
```

Esta pasta contém apenas a infraestrutura da seção Blog.

Ela não contém artigos.

Sua principal responsabilidade é apresentar automaticamente a lista de publicações.

---

## Artigos do Blog

```text
content/blog/posts/
```

Contém exclusivamente artigos.

Cada arquivo Markdown existente nesta pasta gera automaticamente uma página do Blog.

As configurações compartilhadas são centralizadas em:

```text
posts.11tydata.js
```

---

## Disease History

```text
content/disease-history/
```

Representa:

```text
/disease-history/
```

Esta seção contém a documentação permanente relacionada ao histórico da doença.

Seu objetivo é reunir informações que não possuem natureza cronológica, como:

* exames;
* laudos médicos;
* exames de imagem;
* resultados laboratoriais;
* histórico clínico;
* tratamentos realizados;
* documentação médica de apoio.

Diferentemente do Blog, esta seção possui natureza documental. Seu conteúdo é organizado manualmente e representa uma referência permanente do projeto, não uma sequência de publicações por data.

---

## Links

```text
content/links/
```

Representa:

```text
/links/
```

Esta seção reúne referências externas organizadas manualmente.

Ela não utiliza coleção cronológica.

---

## Pics

```text
content/pics/
```

Representa:

```text
/pics/
```

Esta seção concentra conteúdo visual do projeto.

Assim como as demais seções documentais, não utiliza coleção cronológica.

---

## _data

```text
content/_data/
```

Contém dados compartilhados pelo site.

Atualmente armazena:

```text
navigation.js
```

que define toda a estrutura do menu lateral.

Novos dados globais deverão ser adicionados nesta pasta.

---

# Fluxo de publicação

O fluxo oficial de publicação é:

```text
Novo arquivo Markdown

↓

Commit

↓

Push

↓

GitHub Actions

↓

Eleventy

↓

GitHub Pages

↓

Site publicado
```

---

# Organização do projeto

A arquitetura procura separar claramente quatro responsabilidades.

```text
Conteúdo

↓

Configuração

↓

Layout

↓

Arquivos estáticos
```

Cada responsabilidade possui sua própria pasta.

---

# Boas práticas

* Cada pasta possui apenas uma responsabilidade.
* Conteúdo permanece em `content/`.
* Layouts permanecem em `layouts/`.
* Arquivos estáticos permanecem em `assets/`.
* Configurações compartilhadas permanecem em `_data/`.
* Configurações específicas de uma pasta utilizam `*.11tydata`.

---

# Más práticas

* Misturar infraestrutura e conteúdo.
* Duplicar configurações.
* Colocar artigos fora de `content/blog/posts/`.
* Editar manualmente arquivos gerados em `docs/`.

---

# Decisões arquiteturais

## Regra nº 1

Todo conteúdo publicado nasce dentro de `content/`.

---

## Regra nº 2

A pasta `blog/` contém infraestrutura.

Os artigos pertencem exclusivamente à pasta `blog/posts/`.

---

## Regra nº 3

As seções documentais utilizam um único `index.md`.

Não possuem coleção cronológica.

---

## Regra nº 4

O menu lateral é gerado automaticamente a partir de:

```text
content/_data/navigation.js
```

Nenhum item do menu deve ser escrito diretamente em `layouts/base.njk`.

---

## Regra nº 5

Layouts nunca armazenam conteúdo.

Conteúdo nunca define estrutura visual.

---

## Regra nº 6

A documentação histórica e a documentação de referência evoluem de forma independente.

---

# Estado atual

Este documento representa a arquitetura oficial do projeto.

Toda alteração estrutural deverá atualizar este arquivo.

---

# Referências

Documentação relacionada:

* `_02-convencoes-do-projeto.md`
* `_03-padroes-de-layout.md`
* `_04-fluxo-de-publicacao.md`
* `_05-github-actions.md`
* `_06-estrutura-do-blog.md`

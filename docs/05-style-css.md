# Passo 5 — O arquivo `style.css`

**Arquivo:**

```text
docs/05-style-css.md
```

---

# Objetivo desta etapa

Criar o primeiro arquivo responsável pela aparência do site.

Até este momento o projeto possuía apenas estrutura.

Agora passamos a controlar como o navegador desenha essa estrutura.

---

# Arquivo desta etapa

```text
assets/css/style.css
```

---

# O que é o style.css?

O `style.css` é o arquivo responsável pela aparência comum de todo o projeto.

Ele controla coisas como:

* cores;
* fontes;
* tamanho dos textos;
* margens;
* espaçamentos;
* largura do conteúdo;
* comportamento das imagens;
* aparência geral do site.

---

# O que NÃO deve ficar neste arquivo?

Uma das regras mais importantes deste projeto é:

**Nunca colocar estilos exclusivos do Blog dentro do CSS global.**

Exemplos de coisas que NÃO pertencem ao `style.css`:

* linha tracejada dos artigos;
* cursor piscando;
* alinhamento dos artigos;
* recuos especiais;
* classes auxiliares do Blog;
* tipografia específica dos artigos.

Esses estilos pertencerão ao:

```text
assets/css/blog.css
```

---

# Organização adotada

Neste projeto utilizaremos a seguinte organização:

```text
assets/

└── css/

    style.css

    blog.css
```

Cada arquivo possui uma responsabilidade.

---

# Responsabilidade do style.css

Este arquivo será responsável por:

* fundo preto;
* texto branco;
* links;
* aparência geral;
* layout principal;
* barra lateral (no futuro);
* footer (no futuro).

---

# Responsabilidade do blog.css

Este arquivo será responsável por:

* aparência dos artigos;
* tipografia do Blog;
* citações;
* blocos de código;
* linha tracejada;
* cursor piscando (caso decidamos mantê-lo apenas no Blog);
* classes auxiliares.

---

# Por que separar?

Imagine que daqui alguns anos exista uma seção chamada:

```text
Projetos
```

Essa seção provavelmente não utilizará:

* texto justificado;
* recuos literários;
* linha tracejada.

Se tudo estivesse dentro do CSS global, essa nova seção herdaria estilos desnecessários.

Separando os arquivos, cada seção recebe apenas o que realmente precisa.

---

# Cores escolhidas

Neste momento utilizamos:

Fundo

```text
#000000
```

Texto

```text
#FFFFFF
```

Essas escolhas seguem o objetivo definido no início do projeto:

> Um site extremamente simples, minimalista e inspirado na simplicidade do site do Richard Stallman.

---

# Fonte escolhida

Atualmente utilizamos:

```text
Courier New
```

Motivos:

* simplicidade;
* legibilidade;
* aparência minimalista;
* disponível praticamente em todos os sistemas.

Essa escolha poderá ser revista futuramente.

---

# Links

Neste momento os links utilizam a mesma cor do texto.

Os links visitados passaram a utilizar uma cor diferente.

Essa decisão melhora a navegação, principalmente em listas grandes de artigos.

---

# Organização futura

No futuro pretendemos transformar as cores em variáveis CSS.

Exemplo:

```text
:root

↓

cores principais

↓

todo o restante do CSS utiliza essas variáveis
```

Isso permitirá alterar toda a identidade visual modificando apenas um único local.

Essa alteração será feita apenas quando a estrutura visual estiver consolidada.

---

# Como este arquivo se relaciona com o restante do projeto?

Fluxo simplificado:

```text
Página

↓

base.njk

↓

style.css

↓

Navegador

↓

Site renderizado
```

O navegador recebe o HTML gerado pelo Eleventy e utiliza o CSS para desenhar a página.

---

# Como testar esta etapa?

Depois de alterar:

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

Quando existir uma página inicial, o navegador deverá mostrar:

* fundo preto;
* texto branco;
* fonte monoespaçada.

---

# O que pode dar errado?

## O CSS não é carregado

Possíveis causas:

* caminho incorreto;
* nome do arquivo diferente;
* arquivo colocado na pasta errada.

---

## As alterações não aparecem

Possíveis causas:

* navegador utilizando cache;
* deploy ainda não terminou;
* commit não foi enviado.

---

## O Build falha

É raro que CSS provoque erro de Build.

Normalmente o problema estará em outro arquivo.

Mesmo assim, sempre consultar primeiro a aba:

```text
Actions
```

---

# Como corrigir?

Verificar:

* nome do arquivo;
* localização;
* caminho informado em:

```text
layouts/base.njk
```

---

# Boas práticas

* Separar CSS global do CSS especializado.
* Escrever código organizado.
* Comentar decisões importantes.
* Evitar duplicação.
* Utilizar nomes claros.

---

# Más práticas

* Misturar estilos do Blog com o restante do site.
* Alterar cores aleatoriamente em vários arquivos.
* Duplicar regras CSS.
* Escrever estilos sem documentar mudanças importantes.

---

# Decisões arquiteturais desta etapa

## Regra nº 1

Todo estilo compartilhado pertence ao:

```text
style.css
```

---

## Regra nº 2

Todo estilo exclusivo do Blog pertence ao:

```text
blog.css
```

---

## Regra nº 3

O layout nunca deve depender do CSS do Blog.

O Blog depende do layout.

Nunca o contrário.

---

# O que ainda falta?

Nas próximas etapas construiremos:

* primeira página;
* fim do erro 404;
* barra lateral;
* footer;
* layout exclusivo do Blog;
* primeiro post.

---

# Resumo da etapa

Ao terminar esta etapa aprendemos:

✅ O que é o CSS global.

✅ O que pertence ao CSS global.

✅ O que pertence ao CSS do Blog.

✅ Como o navegador utiliza o CSS.

✅ Como testar alterações.

✅ Como identificar problemas.

✅ Como corrigi-los.

---

# Histórico

## Versão 1

* Criação do CSS global.
* Definição da arquitetura de estilos.
* Separação entre estilos globais e estilos do Blog.
* Registro das primeiras decisões visuais do projeto.

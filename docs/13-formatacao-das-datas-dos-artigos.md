# Passo 13 — Padronização da formatação das datas dos artigos

---

# Objetivo

Os artigos do Blog passaram a exibir uma data de publicação formatada de maneira consistente e legível.

Anteriormente, a data era exibida utilizando a representação padrão do objeto `Date` do JavaScript, o que produzia uma saída extensa e pouco adequada para leitura.

---

# Situação anterior

A data era renderizada diretamente pelo template utilizando:

```text
{{ date }}
```

O resultado era semelhante a:

```text
Thu Feb 20 2020 00:00:00 GMT+0000 (Coordinated Universal Time)
```

Embora tecnicamente correta, essa representação expunha detalhes internos do JavaScript que não agregavam valor ao visitante.

---

# Nova implementação

Foi criado um filtro próprio do Eleventy responsável por formatar todas as datas de publicação.

A exibição passou a utilizar o formato:

```text
Thu, Feb 20, 2020 - GMT-03:00
```

A lógica de formatação foi centralizada no arquivo:

```text
.eleventy.js
```

O layout dos artigos deixou de conhecer detalhes de formatação, limitando-se apenas a solicitar a exibição da data formatada.

---

# Alteração no layout

O arquivo:

```text
layouts/blog.njk
```

deixou de utilizar:

```text
{{ date }}
```

e passou a utilizar:

```text
{{ date | formatPostDate }}
```

Com isso, o template permanece responsável apenas pela apresentação do conteúdo.

---

# Responsabilidades

## .eleventy.js

Responsável por:

* registrar o filtro `formatPostDate`;
* definir o padrão visual das datas;
* centralizar toda a lógica de formatação.

---

## layouts/blog.njk

Responsável apenas por exibir a data utilizando o filtro disponibilizado pelo Eleventy.

Nenhuma regra de formatação permanece no layout.

---

# Benefícios

A centralização da formatação oferece diversas vantagens:

* padronização visual entre todos os artigos;
* eliminação de lógica dentro dos templates;
* facilidade para alterar o formato futuramente;
* ausência de duplicação de código.

Qualquer alteração futura na aparência das datas exigirá modificações apenas em um único ponto do projeto.

---

# Arquivos alterados

```text
.eleventy.js

layouts/blog.njk
```

---

# Considerações arquiteturais

Esta alteração reforça um princípio adotado durante o desenvolvimento do projeto:

Os layouts são responsáveis apenas pela apresentação dos dados.

Toda lógica de transformação ou formatação deve permanecer centralizada em um único local, utilizando filtros, coleções ou outras funcionalidades disponibilizadas pelo Eleventy.

Essa abordagem reduz o acoplamento entre estrutura e apresentação, simplificando a manutenção e aumentando a consistência do projeto.

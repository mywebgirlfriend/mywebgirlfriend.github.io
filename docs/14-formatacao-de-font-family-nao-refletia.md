# Documentação — Por que as fontes não estavam mudando

## Objetivo

Documentar o motivo pelo qual as fontes da página inicial permaneceram em **Courier New**, mesmo utilizando classes como `verdana` e `trebuchet` no arquivo Markdown.

---

# Sintoma

Ao abrir a página inicial, todo o texto aparecia utilizando a fonte padrão definida para o site.

Mesmo utilizando:

```html
<div class="verdana">
```

ou

```html
<div class="trebuchet">
```

nenhuma diferença visual era percebida.

---

# Investigação

O primeiro passo foi verificar se havia algum erro no arquivo Markdown.

Foi encontrado um `<div>` que permanecia aberto, o que deixava o HTML inválido. Esse problema foi corrigido.

Apesar disso, as fontes continuaram exatamente iguais.

Isso indicava que o problema provavelmente não estava no Markdown.

---

# Verificação do CSS

Ao analisar completamente o arquivo `assets/css/style.css`, foi constatado que as seguintes classes simplesmente **não existiam**.

Classes utilizadas na página:

```text
verdana
trebuchet
green-hacker
text-red
blockquote
```

Nenhuma delas possuía uma definição CSS.

---

# Como o navegador interpreta isso

Quando o navegador encontra:

```html
<div class="verdana">
```

ele procura uma regra parecida com:

```css
.verdana {
    ...
}
```

Se essa regra não existir, o navegador simplesmente ignora a classe.

Nenhum erro é exibido.

A classe apenas deixa de produzir qualquer efeito.

---

# O que acontece então?

Como nenhuma dessas classes existia, o navegador utilizou a fonte herdada do elemento `<body>`.

No projeto, o `body` possui:

```css
body {
    font-family:
        "Courier New",
        Courier,
        monospace;
}
```

Como consequência, todo o texto continuou sendo renderizado em **Courier New**.

---

# Variáveis CSS não criam classes

Outro detalhe importante encontrado durante a investigação foi a existência destas variáveis:

```css
:root {

    --text-red: #D32F2F;
    --green-hacker: #44d42a;

}
```

Essas variáveis apenas armazenam valores.

Elas **não criam automaticamente** as classes:

```css
.text-red
.green-hacker
```

Essas classes precisam ser criadas manualmente.

---

# O mesmo ocorreu com blockquote

No Markdown existe:

```html
<blockquote class="blockquote">
```

Porém, também não existe nenhuma regra:

```css
.blockquote {

}
```

Assim, essa classe igualmente não produz efeito algum.

---

# Conclusão

O problema não estava no Eleventy.

O problema não estava no Markdown.

O problema não estava no layout.

O motivo era simplesmente que diversas classes utilizadas pelas páginas nunca haviam sido definidas no arquivo `style.css`.

Enquanto essas classes não forem implementadas, o navegador continuará utilizando os estilos herdados do elemento `body`, especialmente a fonte **Courier New**.

---

# Lição aprendida

Sempre que uma classe for utilizada em um arquivo Markdown, HTML ou Nunjucks, confirme que existe uma regra correspondente no CSS.

Utilizar:

```html
class="alguma-classe"
```

não cria automaticamente essa classe.

Ela somente produzirá efeito se existir uma definição semelhante a:

```css
.alguma-classe {

}
```

Caso contrário, o navegador ignora a classe silenciosamente e aplica apenas os estilos herdados dos elementos ancestrais.

# Links Visitados (`:visited`)

## Objetivo

Este documento descreve a convenção adotada pelo projeto para a exibição de links já visitados pelo usuário.

A alteração foi introduzida para melhorar a navegação sem comprometer a identidade visual do site.

---

## O que é `:visited`

`:visited` é uma pseudo-classe do CSS utilizada para aplicar uma aparência diferente aos links que o navegador considera já acessados pelo usuário.

Exemplo:

```css
a:visited {
    color: #9400D3;
}
```

Essa alteração é feita automaticamente pelo navegador, sem necessidade de JavaScript.

---

## Diferença entre os estados dos links

### `a`

Representa a aparência padrão do link.

---

### `a:hover`

Define como o link aparece quando o cursor do mouse está sobre ele.

---

### `a:active`

Representa o curto instante em que o link está sendo clicado.

---

### `a:visited`

Representa links cujo destino já foi visitado anteriormente pelo navegador.

---

## Problema encontrado

Inicialmente todos os links de exemplo utilizavam o mesmo endereço.

Como o navegador identifica um link visitado pelo seu destino (URL) e não pelo texto exibido, ao visitar um deles todos passaram a ser considerados visitados.

O comportamento observado era semelhante a:

* Link A → `@`
* Link B → `@`
* Link C → `@`

Após abrir qualquer um deles, todos mudavam para a cor de link visitado.

Esse comportamento é esperado e faz parte da especificação dos navegadores.

---

## Convenção adotada

O projeto estabelece duas regras distintas.

### Links do conteúdo

Os links presentes dentro do conteúdo das páginas podem utilizar a cor de links visitados.

Isso ajuda o visitante a identificar quais recursos externos já foram consultados.

---

### Links de navegação

Os links responsáveis pela navegação do próprio site (barra lateral) nunca devem mudar de cor.

Sua função é estrutural, e alterar sua aparência poderia transmitir a impressão incorreta de que fazem parte do conteúdo.

Esses links permanecem sempre utilizando a cor principal definida pelo projeto.

---

## Como isso foi resolvido

A solução adotada consiste em utilizar seletores CSS mais específicos para impedir que a pseudo-classe `:visited` seja aplicada aos links da barra lateral.

Dessa forma:

* navegação → aparência permanente;
* conteúdo → aparência dinâmica.

Essa abordagem preserva tanto a usabilidade quanto a consistência visual.

---

## Boas práticas

* Permitir `:visited` apenas em links cujo objetivo é levar o usuário para conteúdos.
* Evitar alterar a aparência da navegação principal.
* Não utilizar a cor de links visitados para indicar progresso interno do site.
* Sempre utilizar URLs reais durante os testes para evitar resultados enganosos provocados por múltiplos links apontando para o mesmo destino.

---

## Resumo

A diferenciação entre links de navegação e links de conteúdo tornou a interface mais previsível para o usuário.

Essa decisão passa a fazer parte da arquitetura visual do projeto e deve ser mantida em futuras alterações do CSS.

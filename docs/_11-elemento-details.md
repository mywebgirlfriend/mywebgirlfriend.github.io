# Elemento `<details>` e sua utilização no projeto

## Objetivo

Este documento descreve o funcionamento do elemento HTML `<details>`, sua integração com Markdown e a forma como ele deve ser utilizado neste projeto.

Seu objetivo é padronizar o uso de seções recolhíveis em todo o site, mantendo a interface organizada e sem depender de JavaScript.

---

## O que é `<details>`

`<details>` é um elemento nativo do HTML5 criado para exibir informações que podem ser abertas ou fechadas pelo visitante.

Seu funcionamento já faz parte dos navegadores modernos, dispensando bibliotecas externas ou scripts adicionais.

Quando fechado, apenas um pequeno cabeçalho é exibido.

Quando aberto, todo o conteúdo interno torna-se visível.

---

## O que é `<summary>`

O elemento `<summary>` representa o título clicável de um bloco `<details>`.

É ele que o navegador utiliza para permitir ao usuário expandir ou recolher o conteúdo.

Cada `<details>` deve possuir apenas um `<summary>`.

Exemplo:

```html
<details>
<summary>Livros</summary>

Conteúdo...

</details>
```

---

## O `<details>` pertence ao Markdown?

Não.

`<details>` e `<summary>` pertencem ao HTML5.

O Markdown tradicional não possui um mecanismo próprio para criar blocos recolhíveis.

Entretanto, o Eleventy, assim como a maioria dos renderizadores Markdown modernos, permite inserir HTML diretamente dentro dos arquivos `.md`.

Isso significa que um mesmo documento pode misturar HTML e Markdown normalmente.

Exemplo:

```html
<details>
<summary>Literatura Russa</summary>

- Crime e Castigo
- Os Irmãos Karamázov
- O Mestre e Margarida

</details>
```

Neste exemplo:

* `<details>` e `<summary>` são HTML;
* a lista continua sendo escrita em Markdown.

O renderizador processa ambos corretamente durante a geração do site.

---

## O CSS faz parte do funcionamento?

Não.

O CSS não é responsável por abrir ou fechar o componente.

Mesmo removendo completamente o arquivo `style.css`, o `<details>` continuará funcionando normalmente.

O CSS apenas controla aspectos visuais, como:

* cores;
* margens;
* espaçamentos;
* bordas;
* tipografia;
* aparência quando aberto ou fechado.

Ou seja, o comportamento pertence ao HTML; a aparência pertence ao CSS.

---

## O JavaScript é necessário?

Não.

Uma das principais vantagens do `<details>` é justamente não depender de JavaScript.

Todo o comportamento é implementado pelo próprio navegador.

Isso reduz a complexidade do projeto e melhora a compatibilidade.

---

## Por que este projeto utiliza `<details>`

O site possui diversas páginas compostas por grandes listas de informações.

Sem algum mecanismo de organização, essas páginas rapidamente se tornariam muito extensas.

O uso de `<details>` permite:

* reduzir a quantidade de conteúdo visível simultaneamente;
* separar assuntos em grupos independentes;
* facilitar a localização de informações;
* melhorar a leitura;
* evitar a necessidade de criar diversas páginas pequenas.

---

## Onde ele pode ser utilizado

O componente pode ser utilizado em qualquer página do projeto que seja renderizada como HTML.

Alguns exemplos incluem:

* Links;
* Wishlists;
* How to Help;
* FAQ;
* listas de referências;
* listas de recursos;
* documentação técnica;
* páginas de apoio.

Também pode ser utilizado em artigos do Blog quando existir conteúdo complementar que não seja essencial para a compreensão do texto principal.

---

## Onde seu uso deve ser evitado

Embora tecnicamente funcione em qualquer lugar, ele não deve ser utilizado para esconder informações indispensáveis.

Por exemplo, não é recomendado utilizá-lo para esconder:

* introduções;
* explicações principais;
* instruções obrigatórias;
* conteúdo cuja leitura deva ser contínua.

Nesses casos, obrigar o visitante a abrir diversos blocos prejudica a experiência de navegação.

---

## Pode ser utilizado em páginas futuras?

Sim.

Não existe nenhuma limitação imposta pela arquitetura do projeto.

Qualquer novo arquivo Markdown pode utilizar `<details>` sempre que fizer sentido organizar grandes quantidades de informação.

Essa decisão deve ser baseada na experiência de leitura e não em limitações técnicas.

---

## O que seria necessário mudar para utilizá-lo em qualquer contexto?

Do ponto de vista funcional, nenhuma alteração é necessária.

Basta inserir o elemento HTML na página.

Entretanto, caso o projeto passe a utilizá-lo amplamente em diversas seções, pode ser interessante evoluir a folha de estilos para torná-lo um componente visual reutilizável.

Algumas melhorias possíveis incluem:

* criação de regras CSS específicas para `<details>`;
* padronização de margens e espaçamentos;
* padronização das cores do `<summary>`;
* definição de estilos para estados aberto e fechado;
* criação de uma identidade visual consistente para todos os blocos expansíveis.

Essas alterações afetariam apenas a aparência.

O funcionamento continuaria sendo fornecido pelo próprio HTML.

---

## Papel do Eleventy

O Eleventy não cria o componente.

Sua função é apenas copiar o HTML existente no arquivo Markdown para a página final gerada.

Todo o comportamento continua sendo responsabilidade do navegador.

Isso torna o componente extremamente portátil e independente da ferramenta utilizada para gerar o site.

---

## Convenção adotada neste projeto

Neste projeto, `<details>` é considerado um componente reutilizável de organização de conteúdo.

Seu uso é recomendado sempre que houver listas extensas ou grupos independentes de informações que possam ser consultados individualmente.

Por outro lado, informações fundamentais para compreender uma página devem permanecer visíveis imediatamente, sem exigir interação do visitante.

---

## Resumo

O elemento `<details>` é um recurso nativo do HTML5 utilizado para criar seções expansíveis.

Ele não pertence ao Markdown, não depende de CSS para funcionar e não necessita de JavaScript.

No contexto deste projeto, ele é utilizado para melhorar a organização de páginas com grande quantidade de informações, mantendo a interface simples, leve e compatível com navegadores modernos.

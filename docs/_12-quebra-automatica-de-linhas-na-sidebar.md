# Quebra automática de linhas na barra lateral

## Objetivo

Permitir que os itens do menu lateral permaneçam em uma única linha enquanto houver espaço disponível e, caso ultrapassem a largura máxima da barra lateral, sejam quebrados automaticamente entre palavras.

---

## Motivação

Inicialmente foi utilizada a propriedade:

```css
white-space: nowrap;
```

Essa configuração impedia qualquer quebra de linha, fazendo com que itens muito longos ultrapassassem a largura da barra lateral e comprometessem o layout.

O comportamento desejado passou a ser:

* manter o texto em uma única linha sempre que possível;
* limitar a largura máxima da barra lateral;
* quebrar automaticamente o texto quando esse limite for atingido;
* priorizar a quebra entre palavras;
* dividir uma palavra apenas como último recurso, evitando overflow.

---

## Implementação

A barra lateral passou a utilizar largura baseada no conteúdo, porém limitada a um valor máximo.

```css
.sidebar {

    width: fit-content;
    max-width: 300px;

    padding: 2rem 16px 2rem 2rem;

    flex-shrink: 0;

    border-right: 1px solid var(--gray-middle);

}
```

Os links do menu passaram a utilizar a seguinte configuração:

```css
.sidebar a {

    white-space: normal;
    word-break: normal;
    overflow-wrap: break-word;

}
```

---

## Funcionamento

### Até a largura máxima

Enquanto o texto couber dentro de `300px`, ele permanecerá em apenas uma linha.

Exemplo:

```
Blog
Links
Pictures
```

---

### Acima da largura máxima

Quando um item ultrapassar `300px`, o navegador quebrará a linha automaticamente.

Exemplo:

```
How to Help
(PT-BR/EN-US)
```

---

### Palavras extremamente longas

Caso exista uma palavra sem espaços suficiente para ultrapassar o limite estabelecido, ela será dividida automaticamente para impedir que o layout seja quebrado.

Esse comportamento é fornecido por:

```css
overflow-wrap: break-word;
```

---

## Justificativa técnica

As propriedades utilizadas possuem responsabilidades diferentes:

| Propriedade                 | Função                                                                                    |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| `white-space: normal`       | Permite que o navegador faça quebras de linha quando necessário.                          |
| `word-break: normal`        | Prioriza a quebra entre palavras, preservando a leitura.                                  |
| `overflow-wrap: break-word` | Permite dividir palavras apenas quando não houver outra alternativa para evitar overflow. |
| `max-width: 300px`          | Define a largura máxima da barra lateral antes que ocorram as quebras automáticas.        |
| `width: fit-content`        | Faz a barra lateral ocupar apenas o espaço necessário até atingir o limite máximo.        |

---

## Resultado esperado

A barra lateral adapta sua largura automaticamente ao conteúdo.

Itens curtos permanecem em uma única linha.

Itens maiores são quebrados automaticamente em linhas adicionais, preservando a legibilidade e impedindo que o layout ultrapasse a largura máxima definida para o menu.

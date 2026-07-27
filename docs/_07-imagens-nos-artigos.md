# Imagens nos Artigos

Este documento descreve o padrão adotado pelo projeto para inserção de imagens nos artigos do Blog.

O objetivo é manter uma aparência consistente, preservar a qualidade das imagens e evitar configurações específicas em cada publicação.

---

# Local de armazenamento

Todas as imagens utilizadas pelos artigos devem ser armazenadas em:

```text
assets/images/
```

É recomendado organizar as imagens em subpastas quando houver grande quantidade de arquivos.

Exemplo:

```text
assets/
└── images/
    ├── foto.jpg
    ├── retrato.png
    └── viagens/
        ├── roma.jpg
        └── paris.jpg
```

---

# Inserindo uma imagem

A forma recomendada é utilizar a sintaxe padrão do Markdown.

Exemplo:

```markdown
![Vista de Roma](/assets/images/viagens/roma.jpg)
```

O texto entre colchetes (`[]`) é utilizado como descrição da imagem.

Essa descrição é importante para acessibilidade e também será exibida caso a imagem não possa ser carregada.

---

# Exemplo completo

```markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

![Vista de Roma](/assets/images/viagens/roma.jpg)

Suspendisse potenti. Donec vel massa vitae tortor commodo luctus.
```

---

# Comportamento automático

O CSS do projeto faz com que todas as imagens dos artigos tenham o seguinte comportamento:

* permanecem no tamanho original quando são menores que a largura do texto;
* nunca são ampliadas;
* são reduzidas automaticamente quando ultrapassam a largura da coluna do artigo;
* permanecem centralizadas.

Nenhuma configuração adicional é necessária em cada publicação.

---

# Exemplo prático

Imagem original:

```text
600 × 400 pixels
```

Resultado:

A imagem continuará sendo exibida exatamente com 600 × 400 pixels.

---

Imagem original:

```text
4000 × 2500 pixels
```

Resultado:

A imagem será reduzida automaticamente até caber dentro da largura do artigo, preservando sua proporção.

---

# Não definir largura manualmente

Evite utilizar atributos como:

```html
<img src="/assets/images/foto.jpg" width="500">
```

ou

```html
<img src="/assets/images/foto.jpg" height="300">
```

O projeto controla automaticamente o tamanho das imagens através do CSS.

---

# Não ampliar imagens pequenas

O projeto nunca amplia uma imagem.

Uma imagem de baixa resolução continuará sendo exibida em seu tamanho original.

Essa decisão evita perda de qualidade e mantém a fidelidade do conteúdo publicado.

---

# Formatos recomendados

Os formatos preferenciais são:

* JPG para fotografias;
* PNG para imagens com transparência;
* SVG para gráficos vetoriais e ícones;
* WebP quando desejado.

---

# Boas práticas

* utilizar nomes de arquivos simples;
* evitar espaços;
* evitar acentos;
* utilizar letras minúsculas;
* utilizar hífens para separar palavras.

Exemplo:

```text
segunda-guerra-mundial.jpg
```

Em vez de:

```text
Segunda Guerra Mundial.JPG
```

---

# Resumo

Para adicionar uma imagem basta:

1. copiar o arquivo para `assets/images/`;
2. referenciá-lo utilizando Markdown.

Exemplo:

```markdown
![Descrição da imagem](/assets/images/foto.jpg)
```

Nenhuma configuração adicional é necessária para tamanho, alinhamento ou responsividade.

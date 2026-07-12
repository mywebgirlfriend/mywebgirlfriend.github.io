# docs/02-configuracao-eleventy.md

# Passo 2 — Configuração do Eleventy (`.eleventy.js`)

## Objetivo deste documento

Explicar como o Eleventy encontra os arquivos do projeto e como ele transforma esses arquivos em um site estático.

Este documento também registra as primeiras decisões de arquitetura do projeto.

---

# O que é o arquivo `.eleventy.js`?

O `.eleventy.js` é o arquivo de configuração do Eleventy.

Imagine que o Eleventy seja um funcionário novo.

Quando ele chega para trabalhar, ele não sabe:

* onde estão os textos;
* onde estão os layouts;
* onde estão as imagens;
* onde deve colocar o site pronto.

O arquivo `.eleventy.js` responde todas essas perguntas.

---

# Onde este arquivo fica?

Na raiz do projeto.

A estrutura deve ser:

```text
/
.eleventy.js
package.json
.github/
assets/
content/
docs/
layouts/
```

---

# Como o Eleventy trabalha?

Sempre que o site for publicado, ele seguirá este caminho:

```text
1. Ler package.json

↓

2. Instalar o Eleventy

↓

3. Ler .eleventy.js

↓

4. Encontrar o conteúdo

↓

5. Encontrar os layouts

↓

6. Aplicar os layouts

↓

7. Copiar os arquivos da pasta assets

↓

8. Gerar o site dentro da pasta docs
```

Todo esse processo acontece automaticamente durante a publicação do site.

---

# Por que usamos a pasta `content`?

Queremos separar claramente:

* conteúdo;
* aparência;
* arquivos estáticos.

Por isso:

```text
content/
```

guardará apenas o conteúdo do site.

Exemplos:

```text
content/blog

content/links

content/pics
```

Essa organização facilita muito a manutenção.

---

# Por que usamos a pasta `layouts`?

Os layouts controlam a aparência.

Eles definem:

* cabeçalho;
* barra lateral;
* rodapé;
* estrutura da página.

Os textos não devem conhecer o layout.

Isso permite alterar a aparência do site sem modificar o conteúdo.

---

# Por que usamos a pasta `assets`?

A pasta `assets` guarda tudo que não é texto.

Exemplos:

* CSS
* imagens
* ícones
* vídeos

O Eleventy copia essa pasta inteira para o site pronto.

Assim não precisamos criar regras separadas para cada tipo de arquivo.

---

# Por que o site será gerado na pasta `docs`?

Esta foi uma decisão arquitetural importante.

O Eleventy normalmente gera os arquivos em:

```text
_site/
```

Neste projeto isso NÃO será utilizado.

O site será gerado diretamente em:

```text
docs/
```

Motivos:

* simplifica a publicação;
* funciona muito bem com GitHub Pages;
* reduz etapas;
* reduz arquivos temporários;
* facilita o entendimento do projeto.

---

# Decisão de arquitetura nº 1

**Separação entre conteúdo e aparência**

Nunca escreveremos textos diretamente dentro dos layouts.

Os layouts apenas exibem informações.

Todo conteúdo ficará na pasta `content`.

---

# Decisão de arquitetura nº 2

**Separação entre aparência e arquivos estáticos**

Nunca colocaremos imagens dentro dos layouts.

Imagens pertencem à pasta:

```text
assets/images
```

Vídeos pertencem à pasta:

```text
assets/videos
```

Ícones pertencem à pasta:

```text
assets/icons
```

CSS pertence à pasta:

```text
assets/css
```

---

# Decisão de arquitetura nº 3

**O layout nunca dependerá do nome das seções.**

Este projeto foi planejado para crescer.

Hoje existem:

* Blog
* Links
* Fotos

Amanhã poderão existir:

* Projetos
* Livros
* Estudos
* Receitas
* Música

O objetivo é que criar uma nova seção exija o mínimo possível de alterações.

No futuro construiremos um menu que não precisará ser reescrito sempre que surgir uma nova seção.

---

# Como verificar se está correto?

Confira:

✅ Existe um arquivo chamado:

```text
.eleventy.js
```

✅ Ele está na raiz.

✅ Existe a pasta:

```text
content
```

✅ Existe a pasta:

```text
layouts
```

✅ Existe a pasta:

```text
assets
```

✅ O arquivo informa que a saída será:

```text
docs
```

---

# Erros comuns

## Erro 1

Trocar o nome da pasta `content`.

Isso fará o Eleventy deixar de encontrar os textos.

---

## Erro 2

Trocar o nome da pasta `layouts`.

Os layouts deixarão de funcionar.

---

## Erro 3

Alterar a pasta de saída.

Isso fará o restante da documentação deixar de corresponder ao projeto.

---

## Erro 4

Mover o arquivo `.eleventy.js`.

Ele deve permanecer na raiz do projeto.

---

# Como corrigir esses erros

Verifique:

* o nome das pastas;
* o nome do arquivo;
* se a estrutura continua igual à documentação.

Caso alguma alteração arquitetural seja realmente necessária, ela deve ser documentada antes de ser adotada.

---

# Boas práticas

* Manter uma única configuração central.
* Alterar apenas quando necessário.
* Documentar qualquer mudança.
* Evitar configurações desnecessárias.
* Manter a estrutura previsível.

---

# Más práticas

* Espalhar configurações por vários arquivos.
* Alterar a estrutura do projeto sem atualizar a documentação.
* Copiar configurações da internet sem entender o que fazem.

---

# Relação com os próximos passos

Agora que o Eleventy conhece a estrutura do projeto, podemos começar a criar:

* layouts;
* páginas;
* blog;
* menu lateral;
* GitHub Actions.

Todos dependerão desta configuração.

---

# Histórico deste documento

## Versão 1

* Explicação do arquivo `.eleventy.js`.
* Registro das primeiras decisões de arquitetura.
* Explicação da estrutura do projeto.
* Documentação das boas práticas.
* Documentação dos erros mais comuns.

# docs/01-package-json.md

# Passo 1 — O arquivo `package.json`

## Objetivo desta etapa

Criar o arquivo mais importante do projeto depois da estrutura de pastas.

O `package.json` informa ao computador:

* qual é o projeto;
* quais ferramentas ele utiliza;
* como construir (gerar) o site;
* quais programas precisam ser instalados automaticamente.

Sem esse arquivo, o GitHub Actions não consegue saber como gerar o site.

---

# Onde este arquivo fica?

Na raiz do projeto.

A estrutura deve ficar assim:

```
/
package.json
.github/
assets/
content/
docs/
layouts/
```

**Importante**

O arquivo **não** deve ficar dentro da pasta `docs`, `assets`, `layouts` ou qualquer outra.

Ele deve ficar exatamente na raiz do projeto.

---

# Para que serve o package.json?

Imagine que o projeto seja uma receita de bolo.

O `package.json` é a lista de ingredientes e também as instruções básicas para preparar o bolo.

Quando o GitHub Actions começar a trabalhar, ele abrirá esse arquivo e perguntará:

> "O que preciso instalar?"

Depois perguntará:

> "Como construo este site?"

As respostas estarão dentro do `package.json`.

---

# O que existe dentro dele?

Neste projeto ele possui:

* nome do projeto;
* versão;
* descrição;
* lista de ferramentas utilizadas;
* comando para construir o site.

Cada informação possui uma finalidade específica.

---

# Como ele se relaciona com o restante do projeto?

O fluxo será sempre este:

```
package.json
        │
        ▼
Eleventy
        │
        ▼
Layouts
        │
        ▼
Conteúdo Markdown
        │
        ▼
Site estático
        │
        ▼
GitHub Actions
        │
        ▼
GitHub Pages
```

Por esse motivo ele foi criado antes de qualquer outro arquivo de configuração.

---

# Por que estamos criando este arquivo primeiro?

Porque todos os próximos passos dependem dele.

Se tentarmos configurar o GitHub Actions antes, ele não saberá:

* qual ferramenta instalar;
* qual comando executar;
* como construir o site.

---

# Como verificar se está correto?

Confira esta lista.

✅ Existe um arquivo chamado exatamente:

```
package.json
```

✅ Ele está na raiz do projeto.

✅ O nome possui todas as letras minúsculas.

✅ A extensão é `.json`.

---

# Erros mais comuns

## Erro 1

O arquivo foi criado dentro da pasta errada.

Exemplo:

```
docs/package.json
```

### Como corrigir

Mover o arquivo para a raiz do projeto.

---

## Erro 2

O arquivo recebeu um nome diferente.

Exemplos:

```
Package.json
package.JSON
package.txt
```

### Como corrigir

Renomear para exatamente:

```
package.json
```

---

## Erro 3

Alterar o conteúdo sem entender o que está sendo alterado.

### Como corrigir

Sempre consultar esta documentação antes de modificar o arquivo.

No futuro, quando adicionarmos novas ferramentas, esta documentação será atualizada.

---

# Boas práticas

* Manter o arquivo organizado.
* Adicionar apenas dependências realmente necessárias.
* Atualizar as versões das ferramentas com cuidado.
* Documentar qualquer alteração importante neste arquivo.
* Fazer um commit após alterações importantes.

---

# Más práticas

* Instalar ferramentas sem necessidade.
* Copiar trechos de outros projetos sem entender sua função.
* Alterar comandos de build sem atualizar a documentação.
* Remover dependências sem verificar se alguma parte do projeto ainda as utiliza.

---

# O que ainda NÃO fazemos nesta etapa?

Ainda não:

* instalamos o Eleventy;
* configuramos o GitHub Actions;
* configuramos o GitHub Pages;
* criamos layouts;
* criamos páginas.

Tudo isso será feito nas próximas etapas.

---

# Como esta documentação será usada daqui a 10 anos?

Se alguém encontrar este projeto no futuro, deverá conseguir responder às seguintes perguntas apenas lendo este documento:

* O que é o `package.json`?
* Onde ele fica?
* Por que ele existe?
* O que acontece se ele não existir?
* Como saber se ele está correto?
* Quais erros costumam acontecer?
* Como corrigir esses erros?

Se todas essas perguntas puderem ser respondidas apenas lendo este arquivo, então esta documentação cumpriu seu objetivo.

---

# Histórico deste documento

## Versão 1

* Criação inicial da documentação do `package.json`.
* Explicação do papel do arquivo.
* Explicação da relação com o restante do projeto.
* Lista inicial de boas práticas.
* Lista inicial de erros comuns.

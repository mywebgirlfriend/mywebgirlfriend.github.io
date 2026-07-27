# Arquivos `.11tydata.json`

## Objetivo

Os arquivos `*.11tydata.json` permitem definir **dados e configurações padrão** para todos os arquivos localizados na mesma pasta e em suas subpastas.

Eles fazem parte do funcionamento do Eleventy e são carregados automaticamente durante a geração do site.

---

# Quando utilizar

Crie um arquivo `.11tydata.json` apenas quando houver a necessidade de aplicar configurações comuns a vários arquivos ao mesmo tempo.

Exemplos de uso:

* definir um layout padrão;
* definir tags automaticamente;
* definir um autor padrão;
* criar variáveis reutilizadas por toda a seção;
* configurar propriedades que serão herdadas pelos arquivos da pasta.

Exemplo:

```json
{
  "layout": "blog.njk",
  "author": "Ga Briella",
  "tags": ["blog"]
}
```

Todos os arquivos Markdown ou templates localizados naquela pasta (e em suas subpastas) herdarão esses valores, salvo quando um arquivo definir explicitamente outro valor.

---

# Quando NÃO utilizar

Se o arquivo contiver apenas:

```json
{}
```

ou não possuir nenhuma configuração útil, **ele não produz qualquer efeito**.

Nesse caso, ele pode ser removido sem alterar o funcionamento do site.

---

# Escopo de funcionamento

O arquivo afeta apenas o diretório onde está localizado e seus descendentes.

Exemplo:

```
content/

blog/
    blog.11tydata.json
    index.njk

    posts/
        primeiro-post.md
        segundo-post.md
```

Neste exemplo:

* `index.njk` herda as configurações;
* `primeiro-post.md` herda as configurações;
* `segundo-post.md` herda as configurações.

Arquivos localizados em outras pastas não serão afetados.

---

# Boas práticas adotadas neste projeto

Neste projeto, os arquivos `.11tydata.json` **não devem ser criados por padrão**.

Eles somente deverão existir quando houver uma necessidade real de compartilhar configurações entre vários arquivos da mesma seção.

Evitar arquivos vazios torna o projeto mais limpo, facilita a manutenção e deixa evidente que qualquer arquivo `.11tydata.json` existente possui uma finalidade específica.

---

# Resumo

| Situação                              | Criar `.11tydata.json`? |
| ------------------------------------- | ----------------------- |
| Aplicar layout para toda a seção      | Sim                     |
| Compartilhar variáveis                | Sim                     |
| Definir tags automaticamente          | Sim                     |
| Arquivo ficaria apenas com `{}`       | Não                     |
| Não há configuração para compartilhar | Não                     |

---

# Filosofia deste projeto

Neste projeto, um arquivo `.11tydata.json` representa a intenção explícita de compartilhar configurações para toda uma seção do site.

Se não existe nenhuma configuração a compartilhar, o arquivo não deve existir.

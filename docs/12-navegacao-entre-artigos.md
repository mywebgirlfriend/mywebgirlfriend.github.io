# Passo 12 — Navegação entre artigos

---

# Objetivo

Após concluir a navegação global do site, o próximo objetivo foi melhorar a experiência de leitura dentro do Blog.

Foi implementada uma navegação automática entre artigos consecutivos, permitindo ao leitor percorrer as publicações sem precisar retornar à lista principal do Blog.

---

# Situação anterior

Ao terminar a leitura de um artigo, o visitante possuía apenas uma opção de navegação:

```text id="z69nwl"
← Back to Home
```

Para continuar lendo outro artigo era necessário retornar ao índice do Blog e selecionar manualmente uma nova publicação.

---

# Nova funcionalidade

Foi adicionada uma navegação automática entre artigos.

Dependendo da posição do artigo dentro da coleção, o layout passa a apresentar:

```text id="brw1mq"
← Previous

Next →
```

Os links são gerados automaticamente durante o Build.

Nenhuma configuração adicional é necessária em cada artigo.

---

# Funcionamento

A navegação utiliza a coleção oficial do Blog.

Cada artigo identifica automaticamente:

* o artigo imediatamente anterior;
* o artigo imediatamente seguinte.

Os links são exibidos apenas quando realmente existem.

---

# Primeiro artigo

Quando o visitante estiver lendo o primeiro artigo publicado, apenas o link:

```text id="8qnsl3"
Next →
```

será exibido.

Não existe link para um artigo anterior inexistente.

---

# Último artigo

Quando o visitante estiver lendo o artigo mais recente, apenas:

```text id="jcx88i"
← Previous
```

será exibido.

O layout nunca apresenta links quebrados.

---

# Artigos intermediários

Quando existirem vários artigos, o layout exibirá ambos os links.

Exemplo:

```text id="7vulw8"
← Previous                    Next →
```

Essa navegação será atualizada automaticamente conforme novos artigos forem publicados.

---

# Responsabilidade

A navegação pertence exclusivamente ao layout dos artigos.

Arquivo:

```text id="xxlqzz"
layouts/blog.njk
```

Ela não faz parte da página principal do Blog.

---

# Página do Blog

O arquivo:

```text id="0gzixv"
content/blog/index.njk
```

continua responsável apenas por listar as publicações.

Ele não apresenta navegação entre artigos.

Essa decisão mantém responsabilidades bem definidas.

---

# Organização visual

A navegação foi posicionada abaixo do conteúdo do artigo.

Ela é separada do texto principal por um divisor visual discreto.

Após a navegação, o rodapé global do site continua apresentando o botão:

```text id="c3tw26"
← Back to Home
```

---

# Arquivos alterados

```text id="k7z5s3"
layouts/blog.njk

assets/css/blog.css
```

---

# Benefícios

A nova navegação trouxe diversas melhorias:

* leitura contínua entre artigos;
* menor quantidade de cliques;
* melhor descoberta de conteúdo antigo;
* navegação automática;
* ausência de manutenção manual.

Sempre que um novo artigo é publicado, a navegação é atualizada automaticamente.

---

# Decisões arquiteturais

Durante a implementação foi decidido que:

* a navegação entre artigos pertence exclusivamente ao layout dos artigos;
* o índice do Blog continua responsável apenas pela listagem das publicações;
* o layout base permanece responsável apenas pela navegação global do site.

Essa separação evita sobreposição de responsabilidades entre os diferentes layouts do projeto.

---

# Próximos passos

Com a navegação do Blog concluída, a infraestrutura da seção passou a ser considerada funcionalmente completa.

As próximas etapas do projeto concentram-se principalmente na evolução do conteúdo, da Home e das demais seções do site.

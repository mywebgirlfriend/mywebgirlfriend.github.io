# Mídias — Vídeos

Este documento descreve o padrão oficial para utilização de vídeos nos artigos.

---

# Local de armazenamento

Vídeos pertencentes ao projeto devem ser armazenados em:

```text
assets/videos/
```

Podem ser organizados em subpastas.

---

# Inserindo um vídeo local

Utilize HTML.

```html
<video controls>

    <source
        src="/assets/videos/video.mp4"
        type="video/mp4">

    Seu navegador não suporta vídeos.

</video>
```

O atributo `controls` adiciona automaticamente os controles do navegador.

---

# Inserindo vídeos do YouTube

Nunca copie o link da página do vídeo.

Errado:

```text
https://www.youtube.com/watch?v=ABCDEFGHIJK
```

Utilize o formato Embed.

```html
<iframe
    src="https://www.youtube.com/embed/ABCDEFGHIJK"
    title="Título do vídeo"
    allowfullscreen>
</iframe>
```

---

# Outros serviços

O mesmo princípio vale para Vimeo e outras plataformas que forneçam código Embed.

Sempre utilize o código oficial disponibilizado pelo serviço.

---

# Quando utilizar vídeo local

Prefira vídeo local quando:

* o vídeo pertence ao projeto;
* possui tamanho reduzido;
* faz parte permanente do artigo.

---

# Quando utilizar YouTube

Prefira YouTube quando:

* o vídeo é longo;
* o vídeo já existe no canal;
* deseja economizar espaço no repositório;
* deseja aproveitar streaming adaptativo.

---

# Resumo

Vídeo local:

```html
<video controls>

    <source src="/assets/videos/video.mp4" type="video/mp4">

</video>
```

YouTube:

```html
<iframe
    src="https://www.youtube.com/embed/ABCDEFGHIJK"
    allowfullscreen>
</iframe>
```

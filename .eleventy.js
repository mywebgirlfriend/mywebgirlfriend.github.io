module.exports = function (eleventyConfig) {

    /*
     * Copia toda a pasta assets para o site final.
     * Inclui CSS, imagens, ícones e vídeos.
     */
    eleventyConfig.addPassthroughCopy("assets");

    /*
     * ==========================================================
     * Coleção oficial do Blog
     * ==========================================================
     *
     * Todo arquivo que possuir:
     *
     * tags:
     *   - blog
     *
     * fará parte automaticamente da coleção "blog".
     *
     * A coleção é ordenada do mais recente para o mais antigo.
     *
     * Nenhuma outra seção do site utiliza coleção neste momento.
     */
    eleventyConfig.addCollection("blog", function (collectionApi) {

        return collectionApi
            .getFilteredByTag("blog")
            .reverse();

    });

    /*
     * ==========================================================
     * Filtro para formatação das datas dos artigos
     * ==========================================================
     *
     * Exemplo de saída:
     *
     * 27/07/2026
     *
     */
    eleventyConfig.addFilter("formatPostDate", function (date) {

        return new Intl.DateTimeFormat("pt-BR", {

            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: "America/Sao_Paulo"

        }).format(date);

    });

    return {

        /*
         * Estrutura principal do projeto.
         */
        dir: {

            /*
             * Conteúdo do site.
             */
            input: "content",

            /*
             * Layouts compartilhados.
             */
            includes: "../layouts",

            /*
             * Site final gerado pelo Eleventy.
             */
            output: "docs"

        },

        /*
         * Engines utilizadas pelo projeto.
         */
        markdownTemplateEngine: "njk",

        htmlTemplateEngine: "njk",

        dataTemplateEngine: "njk"

    };

};

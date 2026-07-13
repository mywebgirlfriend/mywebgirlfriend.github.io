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

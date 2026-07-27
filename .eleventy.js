module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("blog", function (collectionApi) {

        return collectionApi
            .getFilteredByTag("blog")
            .reverse();

    });

    eleventyConfig.addFilter("formatPostDate", function (date) {

        const formatter = new Intl.DateTimeFormat("en-US", {

            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "America/Sao_Paulo"

        });

        return `${formatter.format(date)} - São Paulo`;

    });

    eleventyConfig.addFilter("formatPostDateBR", function (date) {

        return new Intl.DateTimeFormat("pt-BR", {

            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: "America/Sao_Paulo"

        }).format(date);

    });

    return {

        dir: {

            input: "content",

            includes: "../layouts",

            output: "docs"

        },

        markdownTemplateEngine: "njk",

        htmlTemplateEngine: "njk",

        dataTemplateEngine: "njk"
// a
    };

};

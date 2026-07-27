module.exports = {

    layout: "blog.njk",

    tags: [
        "blog"
    ],

    eleventyComputed: {

        permalink: function (data) {

            const year = data.page.date.getFullYear();

            const month = String(data.page.date.getMonth() + 1).padStart(2, "0");

            const day = String(data.page.date.getDate()).padStart(2, "0");

            return `/blog/${year}/${month}/${day}/${this.slugify(data.title)}/`;

        }

    }
// a
};

toggle = document.querySelector("button");
html = document.querySelector("html");
main = document.querySelector("main");

toggle.addEventListener("click", function () {
    html.classList.toggle("dark-theme");
});

const content = articles
    .map((article) => {
        const { title, date, length, content } = article;
        const formatDate = moment(date).format("MMMM Do, YYYY");

        return `<article>
<h1>${title}</h1>
<span>${formatDate} ${length} min read</span>
<p>
${content}

</p>
</article>
`;
    })
    .join("");

main.innerHTML = content;

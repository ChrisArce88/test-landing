console.log("FULL URL:", window.location.href);

const params = new URLSearchParams(window.location.search);

console.log("SEARCH STRING:", window.location.search);

const loc = params.get("loc");
const partner = params.get("partner");

document.body.innerHTML = `
  <h1>DEBUG</h1>
  <p>loc: ${loc}</p>
  <p>partner: ${partner}</p>
`;

const params = new URLSearchParams(window.location.search);
const loc = params.get("loc") || "test";

const iframe = document.createElement("iframe");
iframe.src =
  "https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU"
  + `?location_id=${loc}`;

iframe.style = "height:500px;width:99%;border:none;";

document.body.appendChild(iframe);

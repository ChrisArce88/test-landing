const params = new URLSearchParams(window.location.search);

const partner = params.get("partner") || "";
const loc = params.get("loc") || "";

const base =
  "https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU";

const iframe = document.createElement("iframe");

iframe.src =
  base +
  "?partner=" + encodeURIComponent(partner) +
  "&location_id=" + encodeURIComponent(loc);

iframe.style = "height:500px;width:99%;border:none;";

document.getElementById("form-container").appendChild(iframe);

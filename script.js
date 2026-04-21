const params = new URLSearchParams(window.location.search);

const loc = params.get("loc") || "";
const partner = params.get("partner") || "";

const formBase =
  "https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU";

const iframe = document.createElement("iframe");

iframe.src =
  formBase +
  "?partner=" + encodeURIComponent(partner) +
  "&location_id=" + encodeURIComponent(location);

iframe.style = "height:500px;width:99%;border:none;";

document.getElementById("form-container").innerHTML = "";
document.getElementById("form-container").appendChild(iframe);

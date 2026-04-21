const params = new URLSearchParams(window.location.search);

const loc = params.get("loc") || "";
const partner = params.get("partner") || "";

const formBase =
  "https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU";

window.location.href =
  formBase +
  "?partner=" + encodeURIComponent(partner) +
  "&location=" + encodeURIComponent(loc);

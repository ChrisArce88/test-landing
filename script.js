const params = new URLSearchParams(window.location.search);

const loc = params.get("location");
const partner = params.get("partner");

// 1. validación obligatoria
if (!loc || !partner) {
  document.body.innerHTML = "Missing parameters";
  throw new Error("Missing partner or location");
}

// 2. construir URL segura
const formBase =
  "https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU";

const url =
  formBase +
  "?Partner=" + encodeURIComponent(partner) +
  "&Location_ID=" + encodeURIComponent(loc);

// 3. delay mínimo para estabilidad móvil
setTimeout(() => {
  window.location.replace(url);
}, 150);

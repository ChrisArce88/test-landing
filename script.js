const params = new URLSearchParams(window.location.search);

const loc = params.get("loc");
const partner = params.get("partner");

const zoho =
  "https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/XXXX";

window.location.replace(
  zoho +
  "?Partner=" + encodeURIComponent(partner) +
  "&Location_ID=" + encodeURIComponent(loc)
);

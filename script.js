const params = new URLSearchParams(window.location.search);

const partner = params.get("partner") || "unknown";
const loc = params.get("loc") || "unknown";

const formUrl =
  `https://forms.zoho.com/TU_FORM` +
  `?partner_id=${partner}` +
  `&location_id=${loc}`;

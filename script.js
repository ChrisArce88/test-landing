const params = new URLSearchParams(window.location.search);
const loc = params.get("loc") || "no-loc";

document.getElementById("output").innerText =
  "Location received: " + loc;// JavaScript Document

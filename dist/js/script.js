addEventListener("DOMContentLoaded", (event) => {
  const yearSpan = document.querySelector("#year");
  const currentYear = new Date().getFullYear();

  yearSpan.innerHTML = currentYear;
});

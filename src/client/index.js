import handleSubmit from "./js/handleSubmit";
import { isValidURL } from "./js/urlChecker";
import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    handleSubmit();
  });
});
export { handleSubmit };

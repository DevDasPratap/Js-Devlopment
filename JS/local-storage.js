const inputName = document.querySelector("#input-name");
const button = document.querySelector("#print-name");
const username = document.querySelector("#uname");

button.addEventListener("click", () => {
  const value = inputName.value;
  console.log(value);
  localStorage.setItem("name", value);
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  username.innerText = value;
});

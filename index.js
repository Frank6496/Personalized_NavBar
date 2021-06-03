const linkName = document.querySelector(".link-name");
const inputName = document.querySelector(".input-name");

function setName(name) {
  linkName.innerText = "Welcome, ";
  let nameInner = document.createElement("span");
  nameInner.innerText = name;
  nameInner.setAttribute("class", "name");
  linkName.appendChild(nameInner);
  //   return nameInner;
  console.log(nameInner);
}
inputName.addEventListener("change", () => {
  setName(inputName.value);
});

import { data } from "./data.js";

const dataJS = JSON.parse(data);
console.log(dataJS);

const divContent = document.createElement("div");
divContent.classList.add("content-wrp");
divContent.style.display = "flex";
divContent.style.gap = "30px";

dataJS.forEach(({ temperature, wind, description, img }) => {
  const div = document.createElement("div");
  div.classList.add(".content");

  const h2 = document.createElement("h2");
  h2.classList.add("temp");
  h2.textContent = temperature;
  h2.style.color = "blue";

  const h3 = document.createElement("h3");
  h3.classList.add("wind");
  h3.textContent = wind;
  h3.style.background = "yellow";

  const descr = document.createElement("p");
  descr.classList.add("description");
  descr.textContent = description;

  const image = document.createElement("img");
  image.classList.add("image");
  image.src = img;
  image.style.width = "500px";
  image.style.height = "500px";

  document.querySelector("body").appendChild(divContent);
  divContent.appendChild(div);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(descr);
  div.appendChild(image);
});

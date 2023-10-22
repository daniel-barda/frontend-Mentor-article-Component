"use strict";

const btnEL = document.querySelector(".card__post-meta__button");
const postMeta = document.querySelector(".card__post-meta");

btnEL.addEventListener("click", (e) => {
  e.preventDefault();
  postMeta.classList.toggle("visible");
});

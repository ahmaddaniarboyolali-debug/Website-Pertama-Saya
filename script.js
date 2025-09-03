"use strict";

let main = document.getElementsByClassName("main")[0];
let load = document.getElementsByClassName("load")[0];

setTimeout(
  () => {
    load.classList.add("load-invis");
    main.classList.add("main-vis");
  }, 3000
)

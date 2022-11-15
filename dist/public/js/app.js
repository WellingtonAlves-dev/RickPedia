import { Main } from "./Controllers/Main.js";
let prevButton;
let nextButton;
prevButton = document.querySelector("#prev");
nextButton = document.querySelector("#next");
let main = new Main;
main.main();
prevButton.addEventListener("click", (event) => {
    main.prevPage();
});
nextButton.addEventListener("click", (event) => {
    main.nextPage();
});

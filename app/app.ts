import { Main } from "./Controllers/Main.js";

let prevButton: HTMLButtonElement;
let nextButton: HTMLButtonElement;

prevButton = document.querySelector("#prev");
nextButton = document.querySelector("#next");

let main = new Main;
main.main();

prevButton.addEventListener("click", (event: Event) => {
    main.prevPage();
});
nextButton.addEventListener("click", (event: Event) => {
    main.nextPage();
});



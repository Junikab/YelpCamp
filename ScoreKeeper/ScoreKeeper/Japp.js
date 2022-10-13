const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const reset = document.querySelector("#reset");

const winningToSelect = document.querySelector("#playTo");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameOn = true;

p1Btn.addEventListener("click", function () {
    if (isGameOn) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOn = false;
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (isGameOn) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOn = false;
            p1Display.classList.add("has-text-danger");
            p2Display.classList.add("has-text-success");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

winningToSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    resetF();
});

reset.addEventListener("click", resetF);

function resetF() {
    isGameOn = true;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("has-text-danger", "has-text-success");
    p2Display.classList.remove("has-text-danger", "has-text-success");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}

const style = getComputedStyle(inblock);
let padding = parseInt(style.padding);
let margin = parseInt(style.margin);
paddingText.innerHTML = "Padding ↕ " + style.padding;
marginText.innerHTML = "Margin ↕ " + style.margin;

function changePadding() {
    padding += 1;
    inblock.style.padding = padding.toString() + "px";
    paddingText.innerHTML = "Padding ↕ " + inblock.style.padding;
    if (padding == 50) {
        padding = 20;
    }
}
function changeMargin() {
    margin += 1;
    inblock.style.margin = margin.toString() + "px";
    marginText.innerHTML = "Margin ↕ " + inblock.style.margin;
    if (margin == 50) {
        margin = 20;
    }
}
paddingText.addEventListener("click", changePadding);
marginText.addEventListener("click", changeMargin);
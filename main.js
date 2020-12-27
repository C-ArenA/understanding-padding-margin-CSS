const style = getComputedStyle(inblock);
let padding = parseInt(style.padding);
let margin = parseInt(style.margin);
paddingText.innerHTML = "Padding ↕ " + style.padding;
marginText.innerHTML = "Margin ↕ " + style.margin;

function changePadding() {
    padding = paddingChanger.value;
    inblock.style.padding = padding.toString() + "px";
    paddingText.innerHTML = "Padding ↕ " + inblock.style.padding;
}
function changeMargin() {
    margin = marginChanger.value;
    inblock.style.margin = margin.toString() + "px";
    marginText.innerHTML = "Margin ↕ " + inblock.style.margin;
}
paddingText.addEventListener("click", changePadding);
marginText.addEventListener("click", changeMargin);
paddingChanger.addEventListener("input", changePadding);
marginChanger.addEventListener("input", changeMargin);
const matchMediaObj = window.matchMedia("(prefers-color-scheme: dark)");
const container = document.querySelector("div.container");
const optionDarkMode = container.querySelector("select.option-darkmode");

window.addEventListener("load", handleDefaultDarkOrLightMode);

optionDarkMode.addEventListener("change", function() {
    if (this.value === "dark") {
        container.classList.add("darkmode");
    } else if (this.value === "light") {
        container.classList.remove("darkmode");
    } else {
        handleDefaultDarkOrLightMode();
    }
});

function handleDefaultDarkOrLightMode() {
    if (matchMediaObj.matches) {
        container.classList.add("darkmode");
    } else {
        container.classList.remove("darkmode");
    }
}

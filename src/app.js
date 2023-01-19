const baseElem = document.querySelector("#base");
const heightElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
    let base = Number(baseElem.value);
    let height = Number(heightElem.value);
    let area = clacTriangleArea(base, height);
    console.log(area);
} );

function clacTriangleArea(base, height) {
    let area = base * height / 2;
    return area;

}
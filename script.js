const bg = document.getElementById('background');
const fc = document.getElementById('color');
const padding = document.getElementById('padding');
const border = document.getElementById('border');
const border_radius = document.getElementById('border-radius');
const text = document.getElementById('text');
const btn1 = document.getElementById('btn1');
const dynamicStyle = document.getElementById('dynamic');

let dynamicListStyle = []

let styles = {
    [bg.id]: bg.value,
    [fc.id]: fc.value,
    [padding.id]: padding.value,
    [border.id]: border.value,
    [border_radius.id]: border_radius.value,

}



window.addEventListener("click", (e) => {
    if (e.target.type !== "button") return;
    console.log(e.target.id)
    styles.id = e.target.id

})

bg.addEventListener("input", (e) => {
    styles[e.target.id] = e.target.value;
    dynamicListStyle = []
    dynamicListStyle.push(styles)

    dynamicStyle.textContent = ` #${styles.id} { ${Object.entries(styles).map(([key, value]) => `${key}: ${value}; `).join("")}} `

})
fc.addEventListener("input", (e) => {
    styles[e.target.id] = e.target.value;
    dynamicListStyle = []
    dynamicListStyle.push(styles)

    dynamicStyle.textContent = ` #${styles.id} { ${Object.entries(styles).map(([key, value]) => `${key}: ${value}; `).join("")}} `

})
padding.addEventListener("input", (e) => {
    styles[e.target.id] = e.target.value;
    dynamicListStyle = []
    dynamicListStyle.push(styles)

    dynamicStyle.textContent = ` #${styles.id} { ${Object.entries(styles).map(([key, value]) => `${key}: ${value}; `).join("")}} `

})
border.addEventListener("input", (e) => {
    styles[e.target.id] = e.target.value;
    dynamicListStyle = []
    dynamicListStyle.push(styles)

    dynamicStyle.textContent = ` #${styles.id} { ${Object.entries(styles).map(([key, value]) => `${key}: ${value}; `).join("")}} `

})
border_radius.addEventListener("input", (e) => {
    styles[e.target.id] = e.target.value;
    dynamicListStyle = []
    dynamicListStyle.push(styles)

    dynamicStyle.textContent = ` #${styles.id} { ${Object.entries(styles).map(([key, value]) => `${key}: ${value}; `).join("")}} `

})
text.addEventListener("input", (e) => {

    btn1.innerText = e.target.value;

})

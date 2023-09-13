const fbIcon = document.getElementById('fb_icon');
const fbLogo = document.getElementById('fb_logo');
fbIcon.addEventListener('mouseover', () => {
    fbLogo.style.fill = "hsl(180, 66%, 49%)"
})
fbIcon.addEventListener('mouseleave', () => {
    fbLogo.style.fill = "#FFF"
})

const twIcon = document.getElementById('tw_icon');
const twLogo = document.getElementById('tw_logo');
twIcon.addEventListener('mouseover', () => {
    twLogo.style.fill = "hsl(180, 66%, 49%)"
})
twIcon.addEventListener('mouseleave', () => {
    twLogo.style.fill = "#FFF"
})

const pnIcon = document.getElementById('pn_icon');
const pnLogo = document.getElementById('pn_logo');
pnIcon.addEventListener('mouseover', () => {
    pnLogo.style.fill = "hsl(180, 66%, 49%)"
})
pnIcon.addEventListener('mouseleave', () => {
    pnLogo.style.fill = "#FFF"
})

const igIcon = document.getElementById('ig_icon');
const igLogo = document.getElementById('ig_logo');
igIcon.addEventListener('mouseover', () => {
    igLogo.style.fill = "hsl(180, 66%, 49%)";
    // igLogo.style.fill = "#000";
})
igIcon.addEventListener('mouseleave', () => {
    igLogo.style.fill = "#FFF"
})
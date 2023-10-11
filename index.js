// FOOTER SOCIAL ICONS ANIMATION
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

// HAMBUGER MENU BAR 
const menu = (e) => {
    const menuIcon = document.getElementById('menu-icon');
    e.name === 'menu-sharp' ? (e.name = 'close-sharp', menuIcon.classList.add('hidden')) : (e.name = 'menu-sharp', menuIcon.classList.remove('hidden'));
    // menuBar.classList === 'fa fa-bars' ? menuBar.classList.add('fa fa-times') : menuBar.classList.remove('fa fa-bars'); 
    console.log('kkeekr');
}

// SHORTEN LINK










// function shortenUrl() {
//     const inputVal = document.getElementById("input-value").value;
//     const shortenedUrlLink = 'sho.rtl/' + Math.random().toString(28).substring(2, 6) + '/' + Math.random().toString(28).substring(2, 9);
//     // const inputBorder = document.getElementById("input-value");
    
//     // specifying when where the shortened url is to display.
//     // if (inputVal == ""){
//     //     document.getElementById("shortenedUrl").style.display = "none";
//     // }
//     // else{
//     //     document.getElementById("shortenedUrl").style.display = "flex";
//     // }

//     if (inputVal) {
//         // specifying validation below for text and border.
//         document.getElementById("shortenedUrlLink").textContent = shortenedUrlLink;
        
//         // inputBorder.style.borderColor = "";
//         // inputBorder.style.borderWidth = ""; 
//         // inputBorder.style.borderStyle = "";
//         // document.getElementById("linkLb").style.visibility = "hidden";

//         // Pointing out where the long url should also display after shortening.
//         const codedUrlLink = document.getElementById("codedUrlLink");
//         codedUrlLink.textContent = inputVal;
      
//         // Get the div element by its ID
//         const shortUrlDiv = document.getElementById("shortUrlDiv");
//         // Display the shortened URL inside the div
//         shortUrlDiv.textContent = "Shortened URL: " + shortenedUrlLink;
//     } 
//     else {    
//         return false;
//     }
     
//      // Using the document.execCommand('copy') method to copy text temporarily.
//     function copyToClipboard(link) {
//         const tempInput = document.createElement("input");
//         tempInput.value = link;
//         document.body.appendChild(tempInput);
//         tempInput.select();
//         document.execCommand("copy");
//         document.body.removeChild(tempInput);
//     }

//     //Calling the copyToClipboard function.
//     document.getElementById("copyBtn").addEventListener("click", copyToClipboard(shortenedUrlLink));
// }
// // Add an event listener to the "Shorten" button
// document.getElementById("shortenBtn").addEventListener("click", shortenUrl);
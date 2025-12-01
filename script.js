//main js file
import { config } from "./settings.js";

console.log('config', config);

const webIntegrationId = config.webIntegrationId;

/* Login function  */
// function login() {
//   function isLoggedIn() {
//     return fetch("https://" + config.tenant + "/api/v1/users/me", {
//       method: 'GET',
//       mode: 'cors',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'qlik-web-integration-id': webIntegrationId,
//       },
//     }).then(response => {
//       return response.status === 200;
//     });
//   }
//   return isLoggedIn().then(loggedIn => {
//     if (!loggedIn) {
//       // check login
//         window.top.location.href = "https://" + config.tenant + "/login?qlik-web-integration-id=" + webIntegrationId + "&returnto=" + top.location.href;
//       throw new Error('not logged in');
//     }
//   });
// }

// login();

/*  Main logic */

//default iframe link
/* var src = `https://${config.tenant}/single/?appid=${config.appId}&sheet=${config.sheets[0]}&theme=breeze&opt=nointeraction,noselections`;
var iframe = `<iframe src = "${src}"></iframe>`;
const iframe_container = document.getElementById('iframe-container');
iframe_container.innerHTML = iframe;  */

//generate random string for token
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

//set background based on sheet config
function setBackground(sheetConfig) {
  const container = document.querySelector('#single-object #grid-wrap');
  if (sheetConfig.background) {
    container.style.backgroundImage = `url('${sheetConfig.background}')`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
  } else {
    container.style.backgroundImage = 'none';
  }
}

const randomToken = generateRandomString(8);
console.log('Generated token:', randomToken);

const iframe_container = document.getElementById('iframe-container');

//initial load
var src = `https://${config.tenant}/single/?appid=${config.sheets[0].appId}&sheet=${config.sheets[0].sheetId}&theme=breeze&opt=nointeraction,noselections&identity=${randomToken}`;
var iframe = `<iframe src = "${src}"></iframe>`;
iframe_container.innerHTML = iframe;
setBackground(config.sheets[0]);

let ind = 1;

setInterval(() => {
  if(ind >= config.sheets.length) {
    ind = 0;
  }

  src = `https://${config.tenant}/single/?appid=${config.sheets[ind].appId}&sheet=${config.sheets[ind].sheetId}&theme=breeze&opt=nointeraction,noselections&identity=${randomToken}`;
  console.log('src', src); 

  var find_iframe = document.querySelector('iframe');
  find_iframe.src = src;
  
  //update background for current sheet
  setBackground(config.sheets[ind]);

  console.log('index', ind);
  ind++;

}, config.period * 1000);


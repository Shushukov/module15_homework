const wsUri = " wss://echo-ws-service.herokuapp.com";
const input = document.querySelector(".input");
const btnSend = document.querySelector(".button_send");
const btnGeo = document.querySelector(".button_geo");
const chatUser = document.querySelector(".chat_user");
const chatServer = document.querySelector(".chat_server");
const chat = document.querySelector(".chat");

function writeToScreen(message, position = "flex-end") {
  let element = `
        <p class='messages' style='align-self: ${position}'>
            ${message}
        </p>
    `;
  chatUser.innerHTML += element;
  chat.scrollTop = chat.scrollHeight;
}

let websocket = new WebSocket(wsUri);
websocket.onopen = function (evt) {
  console.log("CONNECTED");
};
websocket.onmessage = function (evt) {
  writeToScreen(`Server say: ${evt.data}`, "flex-start");
};
websocket.onerror = function (evt) {
  writeToScreen(`Server say: ${evt.data}`, "flex-start");
};

btnSend.addEventListener("click", () => {
  let message = input.value;
  websocket.send(message);
  writeToScreen(`You: ${message}`);
  input.value = "";
});

const error = () => {
  let textError = "Geolocation is no found...";
  writeToScreen(textError);
};

const success = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  writeToScreen(`<a  href='${geoLink}' target='_blank'>You'r geolocation:</a>`);
};

btnGeo.addEventListener("click", () => {
  if (!navigator.geolocation) {
    console.log("Geolocation do not support in you browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});

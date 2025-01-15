
//const socket = io("http://localhost:4000");
const socket = io("http://localhost:4000");
socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);
});
//full changes done
const container = document.querySelector(".container");
const btn=document.getElementsByClassName("btn");
const form = document.querySelector("#form-container");
const mymsg=document.querySelector("#mymsg");
let audioRecieve = new Audio("../images/mixkit-correct-answer-tone-2870.wav")
let audioSend = new Audio("../images/mixkit-message-pop-alert-2354.mp3")
// C:\Users\user\OneDrive\Desktop\chat-nodejs\we-Chat\images\
// C:\Users\user\OneDrive\Desktop\chat-nodejs\we-Chat\images\        

const namee = prompt("Enter your name");

socket.emit("new-user-add-in-users", namee);

form.addEventListener('submit',(e)=>{
  e.preventDefault();//it will help the webpage not to reload.
  const msg = mymsg.value;
  append("You",msg,"right");
  socket.emit("send",msg);
  mymsg.value='';
})
btn[0].addEventListener("click",(e)=>{
  // e.preventDefault();//it will help the webpage not to reload.
  const msg = mymsg.value;
  append("You",msg,"right");
  socket.emit("send",msg);
  mymsg.value=''
})


const append = (name, msg, position) => {
  console.log("came to append method");
  console.log(name, msg, position);
  const msgDiv = document.createElement("div");
  msgDiv.innerText = ""+name+": "+msg;
  msgDiv.classList.add("message");
  msgDiv.classList.add(position);
  console.log(msgDiv.innerText);
  console.log(msgDiv);
  container.append(msgDiv);
  if(position=="right") audioSend.play();
  else audioRecieve.play();
};

socket.on("display-user", (name) => {
  console.log("came to display user");

  append(name, "joined the chat", "middle");
});

socket.on("recieve",data=>{
  append(data.name,data.message,"left");
})

socket.on("checking", (msg) => {
  console.log("checking call backs");
  console.log(`some random ${msg}`);
});

console.log("sugar baby");

//const socket = io("http://localhost:4000");
const socket = io("http://localhost:4000");
socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);
});

const container = document.querySelector(".container");

const namee = prompt("Enter your name");

socket.emit("new-user-add-in-users", namee);

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
};

socket.on("display-user", (name) => {
  console.log("came to display user");

  append(name, "joined the chat", "middle");
});

socket.on("checking", (msg) => {
  console.log("checking call backs");
  console.log(`some random ${msg}`);
});

console.log("sugar baby");

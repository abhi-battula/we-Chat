//const  io  = require('socket.io');

// this is node server which will handle socket io connections
//const io=require('socket.io')(4000);


const io = require('socket.io')(4000, {
    cors: {
        origin: "*", // Allow all origins for testing (you can replace '*' with a specific URL if needed)
        methods: ["GET", "POST"]
    }
});


const users={};
console.log("hello******************");



io.on('connection',Socket=>{

    console.log("A user connected: " + Socket.id);

    Socket.on('new-user-add-in-users',name=>{
        users[Socket.id]=name;
        console.log("*****************");
        console.log(users);
        Socket.emit('display-user', name);
        console.log(name);
        
        console.log(`----------${name}`);
        
    })


    console.log("checking-----");
    Socket.broadcast.emit('checking');
    
})

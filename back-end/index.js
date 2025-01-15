//const  io  = require('socket.io');

// this is node server which will handle socket io connections
//const io=require('socket.io')(4000);


const io = require('socket.io')(4000, {
    cors: {
        origin: "*", // Allow all origins for testing (you can replace '*' with a specific URL if needed)
        methods: ["GET", "POST"]
    }
});

//full changes done 
const users={};
console.log("hello******************");



io.on('connection',Socket=>{

    console.log("A user connected: " + Socket.id);

    Socket.on('new-user-add-in-users',name=>{
        users[Socket.id]=name;
        console.log("*****************");
        console.log(users);
        Socket.broadcast.emit('display-user', name);
        console.log(name);
        
        console.log(`----------${name}`);
        Socket.emit('checking');
        
    })

    Socket.on('send',msg=>{
        Socket.broadcast.emit('recieve',{message:msg,name: users[Socket.id]})
    })


    console.log("checking-----");
    
    
})

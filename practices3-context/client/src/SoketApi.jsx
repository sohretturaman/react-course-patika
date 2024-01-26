import io from 'socket.io-client';

let socket ;

export const init = () => {
	console.log("Sunucuya bağlanılıyor...");

	socket = io("http://localhost:3001", {
		transports: ["websocket"],
	});

	socket.on("connect", () =>
		console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
	);
};

export const  sendColor =(color)=>{
  socket.emit('newColor',color); //emit is the keyword to send data fromuser to server , and the verianle name ,s 
  //which determined in app.js file inside backend folder 
  //newColor is channel name , and color is my data to send server
}
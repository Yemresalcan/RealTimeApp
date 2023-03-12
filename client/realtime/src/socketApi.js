import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("Sunucuya bağlanılıyor...");
	/*Connection */
	socket = io("http://localhost:3001", {
		transports: ["websocket"],
	});

	socket.on("connect", () =>
		console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
	);
};

/*client to backend server or backend to client send to data*/
export const send = (color) => {
	socket.emit("newColor", color);
};

/* some funciton subcribe */ 
export const subscribe = (cb) => {
	socket.on("receive", (color) => {
		console.log(color);
		cb(color);
	});
};

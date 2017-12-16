// /**
//  * Socket通信
//  */
// const express = require('express');
// const router = express.Router();
// const http = require('http').Server(router);
// const io = require('socket.io')(http);
// const fs = require('fs');
// 
// function skio() {
//   // Socket.IO
//  http.listen(router.get('port'), function() {
//       console.log('listening!!!');
//   });
// 
//  io.on('connection', function(socket){
//         socket.on('chat message', function(msg){
//             console.log('message: ' + msg);
//             io.emit('chat message', msg);
//       });
//   });
// }
// 
// module.exports = skio;
// function sktio() {
//   // Socket.IO
//  http.listen(router.get('port'), function() {
//       console.log('listening!!!');
//   });
// 
//   io.on('connection', (socket) => {
//     console.log('サーバーと接続したよ！');
//     let data = {msg: `${socket.id}さんが接続しました`}
//     socket.emit('connected', data);
// 
//     socket.on('clientToServer', (txt) => {
//       let date = new Date();
//       let h = date.getHours();
//       let m = date.getMinutes();
//       let msg = {time: `${h}:${m}`}
//       socket.emit('serverToClient', msg);
//       socket.broadcast.emit('serverToClient', msg);
//       //let data = {msg: `${socket.id}さんが接続しました`}
// 
//     });
//     socket.on('clientToServerImg', (data) => {
//       console.log('test');
//       let date = new Date();
//       let fileName = date.getTime();
//       let path = `images/${fileName}.jpg`;
// 
//       const writeStream = fs.createWriteStream(`./public/${path}`);
//       writeStream.write(data.contents, 'binary', (err) => {
//         if (err) {
//           return;
//         }
//         writeStream.end();
//       });
// 
//       writeStream.on('finish', () => {
//         // クライアントにファイルパスを送信！
//         console.log('finish');
//         // 送信してきたユーザーに返信
//         //socket.emit('uploadedImage', path);
//         // 接続している他のユーザーに送信
//         socket.broadcast.emit('uploadedImage', path);
//       });
//     });
//     socket.on('join', () => {
// 
//       socket.join('roomA');
//       //console.log(socket);
//       console.log('join');
//     });
// 
//     socket.on('roomSend', (msg) => {
//       console.log('roomSend');
//       // ルームに入っている人すべて
//       io.to('roomA').emit('roomASendMsg', msg);
//       // 自分以外
//       socket.to('roomA').emit('roomASendMsg', msg);
//     });
// 
//     socket.on('leave', () => {
//       socket.leave('roomA');
//     });
// 
//   });
// }
// 
// module.exports = sktio
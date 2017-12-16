;(function(){

    const socket = io();

    // connected イベントのMsg受信
    socket.on('connected', (data) => {
        console.log(data.msg);
    });

    // DOM読み込みが完了したら
    document.addEventListener('DOMContentLoaded', () => {
        // 送信ボタン
        let btnEl = document.getElementById('send-btn');
        let name = $('.name').data('name');
        console.log(name);
        btnEl.addEventListener('click', (evt) => {
            // 入力したテキストをサーバーに送信
            socket.emit('clientToServer', '🍺', name);
        }, false);

        // 出力する要素の取得
        var outputEl = document.getElementById('output');

        socket.on('serverToClient',(data) => {
            let h3El = document.createElement('h3');
            h3El.className = 'card-header';
            h3El.textContent= `${data.hour}:${data.min}@${data.name} => ${data.txt}`;
            // let h4El = h3El.append('h4')
            // h4El.className = 'card-block';
            // h4El.textContent= data.hour;
            outputEl.appendChild(h3El);
            //pEl.textContent= data;
            // outputEl.append(data
            //   // '<h3 class="card-header">Featured</h3>
            //   // <div class="card-block">
            //   //     <h4 class="card-title">Special title treatment</h4>
            //   //     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            //   //     <a href="#" class="btn btn-primary">Go somewhere</a>
            //   // </div>'
            // );
        });


        // //--------------------------------------
        // // 画像アップロード処理
        // //--------------------------------------
        // let selectedFile = null;
        // $('#file').on('change', (evt) => {
        //     console.log(evt.target.files[0]);
        //     selectedFile = evt.target.files[0];
        // });
        // 
        // // 画像送信ボタンが押されたら
        // $('#img-send-btn').on('click', () => {
        //     // 選択した画像をバイナリ => 文字列
        //     let fileReader = new FileReader();
        //     fileReader.readAsBinaryString(selectedFile);
        //     fileReader.addEventListener('load', (evt) => {
        //         let data = {};
        //         data.contents = evt.target.result;
        // 
        //         // Socketでサーバーに送信
        //         socket.emit('clientToServerImg', data);
        //     });
        // });

        // socket.on('uploadedImage', (path) => {
        //     // imgタグを生成して、src属性に画像パスを設定
        //     let imgEl = $('<img>').attr({src: path});
        //     // 表示領域に出力
        //     $('#output').append(imgEl);
        // });

        //--------------------------------
        // ルームの処理
        //--------------------------------
        $('#join').on('click', () => {
            socket.emit('join', '');
        });

        $('#room-send').on('click', () => {
            socket.emit('roomSend', 'ルームAに送信');
        });

        $('#leave').on('click', () => {
            socket.emit('leave', '');
        });

        socket.on('roomASendMsg', (msg) => {
            console.log(msg);
        });
    });


})();
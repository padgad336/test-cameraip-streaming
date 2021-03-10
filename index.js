// Stream = require('node-rtsp-stream')
// stream = new Stream({
//     name: 'name',
//     streamUrl: 'rtsp://service:Ah-2020%23@10.38.194.174/rtsp_tunnel',
//     wsPort: 9000,
//     ffmpegOptions: { // options ffmpeg flags
//         '-stats': '',
//         '-r': '30'
//     }
// })
// // stream.on(() => {
// //     console.log('d');
// // }
// // )
const express = require('express');
const ffmpegPath = require('ffmpeg-static');
Stream = require('node-rtsp-stream');



let app = express();

let server = app.listen(3000);
stream = new Stream({

    name: 'name',
    streamUrl: 'rtsp://service:Ah-2020%23@10.38.194.174/rtsp_tunnel',
    wsPort: 9999,
    ffmpegPath: ffmpegPath

});
app.get('/video', function (req, res) {


    // https://cdnjs.cloudflare.com/ajax/libs/jsmpeg/0.2/jsmpg.min.js
    res.send(
        `<!DOCTYPE html>
        <html>
        <head>
            <meta name = "viewport" content = "width=640, initial-scale=1"/>
            <style type = "text/css">
            html, body {
                width: 480px;
                height: 360px;
                margin: 0;
            }
            canvas {
                width: 480px;
                height: 360px;
                margin: 0;
                background-color:#000
            }
            </style>
        </head>
        <body>
        <h1>cctv</h1>
            <canvas id = "video"></canvas>
            <script src = "https://padgad336.github.io/assets/jsmpeg.min.js"></script>
            <script type="text/javascript">
    player = new JSMpeg.Player('ws://10.38.194.163:9999', {
        canvas: document.getElementById('video') // Canvas should be a canvas DOM element
    })
</script>
        </body>
        </html>`
    );

});
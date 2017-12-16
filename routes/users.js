const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // セッション情報を取得
    let name = req.session.userName;

    if(name){
        // ログイン済みなのでusersを表示
        res.render('users', {data: name});
    }
    else {
        // ログインしてないのでログインページに飛ばす
        res.redirect('/');
    }
  
});

router.post('/', (req, res, next) => {
  res.render('users', { title: 'Express' });
})

module.exports = router;

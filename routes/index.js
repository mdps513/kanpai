const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let id = req.session.userName;

  if(id){
    // ログイン済み
    res.redirect('/users');
  }
  else {
    res.render('index', {});
  }
});

router.post('/', (req, res, next) => {
    let id = req.body.user_name;

    if(id){
      // データをセッションに保持
      req.session.userName = id;
      req.session.save(() => {
        // users
        res.redirect('/users');
      });
    }
    // ログイン失敗時
    else {
      res.render('index', {});
    }
})

module.exports = router;

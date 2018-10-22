var express = require('express');//express 모듈을 사용하겠다는 뜻입니다
var router = express.Router();//Router() 객체를 통해 routing을 실행하겠습니다

//get의 index routing method 작성
router.get('/', function(req, res, next) {
    res.json({
        "hello" : "world"
    });

});

module.exports = router;// router를 작성하고 exports 시켜줍니다
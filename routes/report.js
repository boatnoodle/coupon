var express = require('express');
var router = express.Router()
var reportController = require('../controller/reportController');

router.get('/reportDaily',function(req,res,next){
    res.render('reports/reportDaily');
})

router.get('/reportMonthly', function(req, res, next) {
    res.render('reports/reportMonthly');
})

router.get('/getDataReportDaily', reportController.getDataReportDaily);

router.post('/getDataReportMonthly', reportController.getDataReportMonthly)
module.exports = router;
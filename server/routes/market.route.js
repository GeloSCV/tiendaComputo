const{ Router}= require('express');
const router= Router();
const {
    getProduct,
    sumitTicket,
    postProduct
}= require('../controllers/controllers')


router.get('/allproduct', getProduct);
router.post('/support/ticket',sumitTicket)
router.post('/addProduct',postProduct)
module.exports =router;
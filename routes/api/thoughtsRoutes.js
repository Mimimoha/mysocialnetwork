const router = require('express').Router();

const {
    getallthought, getthoughtbyid, postallthought, putthought, deletethought, postreaction, deletereaction
} = require('../../controlers/thoughtsController');


router.route('/').get(getallthought).post(postallthought)


router.route('/:id').get(getthoughtbyid).delete(deletethought).put(putthought)


router.route('/:id/reaction').post(postreaction)


router.route('/:id/reaction/:reactionId').delete(deletereaction)



module.exports = router
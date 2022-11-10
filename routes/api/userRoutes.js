const router = require('express').Router();


// methods that come directly from user controller

const { 
    getallusers, getuserbyid, postuser, putuser, deleteuser, postfriend, deletefriend
} = require('../../controlers/userController')


// /api/user

router.route('/').get(getallusers).post(postuser)


router.route('/:id').get(getuserbyid).delete(deleteuser).put(putuser)


router.route('/:id/friends/:friendId').post(postfriend)


router.route('/:id/friends/:friendId').delete(deletefriend)


module.exports = router

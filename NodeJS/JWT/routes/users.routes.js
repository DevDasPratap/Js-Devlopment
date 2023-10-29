const { get_users, get_user_by_id, post_user, delete_user, patch_user, put_user } = require('../controller/users')
const router = require('express').Router()


//Get user by ID
router.get('/:userId', get_user_by_id)
//Get user by email
router.get('/:userId', ()=>{})
//Get user by ID - Put -> all field or blank field value update
router.put('/:userId', put_user) 
//Get user by ID - Patch-> Particular one or more field value update
router.patch('/:userId', patch_user)

// Delete user by id
router.delete('/:userId', delete_user)

/**
 * Get all users, include
 * filter
 * sort
 * pagination
 * select properties
 * @route /api/v1/users?sort=['by','name']
 * @method GET
 * @visibility Private
 */

router.get('/', get_users)
router.post('/', post_user)


module.exports = router
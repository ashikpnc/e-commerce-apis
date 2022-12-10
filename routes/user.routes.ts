import express from 'express'
import { deleteProfile, getProfile, updateProfile } from '../controllers/user.controllers'

const router = express.Router()
router.route('/profile')
    .get(getProfile)
    .patch(updateProfile)
    .delete(deleteProfile)
export default router
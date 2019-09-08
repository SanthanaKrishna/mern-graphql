const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');
const authMiddleware = require('../../middleware/auth');

/**
 * @route   GET api/Profile/me
 * @desc    GET current users profile
 * @access  Private
 */
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        console.log('profile', profile);
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };

});


module.exports = router;
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const House = mongoose.model('house');

module.exports = app => {
    app.get('api/house', requireLogin, async(req, res) => {
        const house = await house.find({ _user: req.user.id}).select({
            rooms: false
        });
        res.send(house);
    });

    app.post('api/houses', requireLogin, async (req, res) => {
        const { houseName } = req.body;

        const house = new house({
            houseName,
            _user: req.user.id
        });

        try {
            const user = await req.user.save();
            res.send(user)
        } catch(err) {
            res.status(422).send(err)
        }
    });
}



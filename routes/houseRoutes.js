const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const House = mongoose.model('house');

module.exports = app => {
    app.get('api/house', requireLogin, async(req, res) => {
        const house = await House.find({ _user: req.user.id}).select({
            rooms: false
        });
        res.send(house);
    });

    app.post('api/house', requireLogin, async (req, res) => {
        const { houseName } = req.body;

        const house = new House({
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



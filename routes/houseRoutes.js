const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const House = mongoose.model('house');

module.exports = app => {

    app.get('/', (req, res) => {
        res.send('Link works')
    })

    app.get('/api/house', requireLogin, async(req, res) => {
        const house = await House.find({ _user: req.user.id}).select({
            rooms: false
        });
        res.send(house);
    });

    // @TODO: Check if user has a house
    app.post('/api/house/create', requireLogin, async (req, res) => {
         const house = new House({
                houseName,
                address: address.split(',').map(address => ({ address })), // creates an object
                owner,
                houseType,
                // rooms: rooms.split(',').map(room => ({ room })),
                _user: req.user.id,
        });

        try {
            const user = await req.user.save();
            res.send(user);
        } catch(err) {
            res.status(422).send(err)
        }
    });
}



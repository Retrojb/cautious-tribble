const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const House = mongoose.model('house');

module.exports = app => {

    app.get('/', (req, res) => {
        res.send('Link works')
    })

    app.get('/api/dashboard', requireLogin, async(req, res) => {
        const house = await House.find({ _user: req.user.id}).select({
            rooms: false
        });
        res.send(house);
    });

    // @TODO: Check if user has a house
    app.post('/api/dashboard', requireLogin, async (req, res) => {
        const { houseName, houseType, owner, street, city, state, zipcode } = req.body;
         const house = new House({
                houseName,
                houseType,
                owner,
                street,
                city,
                state,
                zipcode,
                _user: req.user.id,
        });

        try {
            await house.save();
            const user = await req.user.save();
            res.send(user);
        } catch(err) {
            res.status(422).send(err)
        }
    });
}



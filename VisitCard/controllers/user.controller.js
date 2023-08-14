const Card = require('../models/card.model');
const User = require('../models/user.model');
module.exports.home = async (req, res) => {
      const user = await User.findById(req.userId);
      const cards = await Card.find({userId: req.userId});
      
      res.render('account',
                 {
                    title: 'Account',
                     user: user,
                     userName: user.name,
                    cards: cards,
                    
                 }
                );
   }
module.exports.createCard = async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        userId: req.body.userId
    };
    await Card.create(data);
    res.status(200).json(data);
}
module.exports.me=async (req, res) => {
    const user = await User.findById(req.userId);
    res.status(200).json(user);
}
const Registrant = require('../model/Registrants');

const getAllRegistrants = async (req, res) => {
    const registrants = await Registrant.find();
    if (!registrants) return res.status(204).json({'message': 'no registrants found'});
    res.json(registrants);
}

const createNewRegistrant = async (req, res) => {
    if (!req?.body?.firstname 
            || !req?.body?.lastname 
            || !req?.body?.age 
            || !req?.body?.email) {
                return res.status(400).json({'message': 'name, age, and email are required'});
            }

    const duplicate = await Registrant.findOne({ email: req.body.email }).exec();
    
    if (duplicate) return res.sendStatus(409);

    try {
        const result = await Registrant.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            home: {
                city: req.body.city,
                state: req.body.state
                },
            phone: req.body.phone,
            email: req.body.email
        });

        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllRegistrants,
    createNewRegistrant
}
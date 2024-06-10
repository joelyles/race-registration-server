const Registrant = require('../model/Registrants');

const getAllRegistrants = async (req, res) => {
    const registrants = await Registrant.find();
    if (!registrants) return res.status(204).json({'message': 'no registrants found'});
    res.json(registrants);
}

const createNewRegistrant = async (req, res) => {
    const { firstname, lastname, age, city, state, phone, email } = req.body;

    if (!req?.body?.firstname 
            || !req?.body?.lastname 
            || !req?.body?.age 
            || !req?.body?.email) {
                return res.status(400).json({'message': 'name, age, and email are required'});
            }

    const duplicate = await Registrant.findOne({ email: email }).exec();
    
    if (duplicate) return res.sendStatus(409);

    try {
        const result = await Registrant.create({
            "firstname": firstname,
            "lastname": lastname,
            "age": age,
            "city": city,
            "state": state,
            "phone": phone,
            "email": email
        });

        console.log(result)
        res.status(201).json({ 'success': `${firstname}, your registration was submitted`});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllRegistrants,
    createNewRegistrant
}
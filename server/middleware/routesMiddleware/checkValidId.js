import mongoose from 'mongoose';


// invalid ObjectId type.

const checkValidId = (req, res, next) => {
    const { id } = req.params;
    const { ObjectId } = mongoose.Types;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send('NOT INVALID REQUEST (id)');
    } else {
        return next();
    }
}

export default checkValidId;
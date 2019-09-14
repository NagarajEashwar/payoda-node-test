import User from '../../schemas/user';
import constants from '../../constants';

export const update = async (req, res) => {
    let updateUser = () => {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate({ id: req.body.id }, { $set: req.body }, { new: true }).exec((err, data) => {
                err ?
                    reject(err) :
                    resolve(data)
            })
        })
    }
    try {
        let data = {
            updatedUser: await updateUser(),
        }
        res.status(constants.RESPONSE.OK.STATUS).send({ data });
    } catch (e) {
        res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE });
    }
}
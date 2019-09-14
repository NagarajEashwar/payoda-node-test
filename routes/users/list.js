'use strict';
import User from '../../schemas/user';
import constants from '../../constants';

export const list = async (req, res) => {

    User.find({}).exec((err, data) => {
        (err) ?
            res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE }) :
            res.status(constants.RESPONSE.OK.STATUS).send({ data });
    });
}

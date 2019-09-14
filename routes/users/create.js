'use strict';
import User from '../../schemas/user';
import axios from 'axios';
import constants from '../../constants';

export const create = async (req, res) => {

    const getUsers = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                resolve(response.data)
            })
        });
    }

    const handleError = (err) => {
        if (err.code === constants.DUPLICATE_KEY.CODE) {
            res.status(constants.RESPONSE.BAD_REQUEST.STATUS).send({ error: constants.DUPLICATE_KEY.MESSAGE });
        } else {
            res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE });
        }
    };

    const saveUsers = (users) => {
        console.log('users', users);
        User.insertMany(users, (err, data) => {
            console.log('err', err);
            (err) ?
                handleError(err) :
                res.status(constants.RESPONSE.OK.STATUS).send({ data });
        });
    };

    try {
        const users = await getUsers();
        saveUsers(users);
    } catch (e) {
        res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE });
    }

}

'use strict';
import mongoose, { SchemaTypes } from 'mongoose';
const { Model, Schema } = mongoose;
const User = new Schema({
    id: { type: String },
    name: { type: String },
    username: { type: String },
    phone: { type: String },
    email: { type: String, unique : true, required : true, dropDups: true },
    address: { 
        street: {
            type: String
        },
        suite: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
        geo: {
            type: Array
        }
    },
    website: { type: String },
    company: { 
        name: {
            type: String 
        },
        catchPhrase: {
            type: String 
        },
        bs: {
            type: String 
        }
    },
});

User.index({ email: 1 });

export default mongoose.model('User', User);
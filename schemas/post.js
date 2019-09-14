'use strict';
import mongoose, { SchemaTypes } from 'mongoose';
const { Model, Schema } = mongoose;
const Post = new Schema({
    id: { type: String },
    userId: { type: String },
    title: { type: String },
    body: { type: String },
    comments: { type: Array },
});

export default mongoose.model('Post', Post);
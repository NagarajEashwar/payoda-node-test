'use strict';
import Post from '../../schemas/post';
import axios from 'axios';
import constants from '../../constants';

export const create = async (req, res) => {

    const getPosts = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                resolve(response.data)
            })
        });
    }

    const getComments = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
                resolve(response.data)
            })
        });
    }

    const mapCommentsToPosts = (posts, comments) => {
        return new Promise((resolve, reject) => {
            comments.forEach((comment) => {
                if (posts[comment.postId]) {
                    if (posts[comment.postId]['comments']) {
                        posts[comment.postId]['comments'].push(comment)
                    } else {
                        posts[comment.postId]['comments'] = [];
                        posts[comment.postId]['comments'].push(comment)
                    }
                }
            });
            resolve(posts);
        });
    }

    const handleError = (err) => {
        res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE });
    };

    const savePosts = (posts) => {
        Post.insertMany(posts, (err, data) => {
            (err) ?
                handleError(err) :
                res.status(constants.RESPONSE.OK.STATUS).send({ data });
        });
    };

    try {
        const posts = await getPosts();
        const comments = await getComments();
        const mappedPosts = await mapCommentsToPosts(posts, comments);
        if (mappedPosts) {
            savePosts(mappedPosts);
        } else {
            res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE });
        }
    } catch (e) {
        res.status(constants.RESPONSE.ERROR.STATUS).send({ error: constants.RESPONSE.ERROR.MESSAGE });
    }

}

# Node.js-Express-MongoDB CRUD sample Application

This is a simple Node.js CRUD application using MongoDB.

It has the following features:

+ Adding users information to users collection and posts information to posts collection.
+ Fetching users and posts list.
+ Updating users information. 

It has Four REST ful API's 
1.Creating Users and Posts(localhost:3000/create)-get method.
2.Fetching user list (localhost:3000/users)-get method.
3.Fetching post list (localhost:3000/posts)-get method.
4.Updating user Info (localhost:3000/update)-post method.

### How to run
      First we need to add nodejs latest version and install mongodb. 
      Start mongodb service then navigate to the project file path then run the below commands. 
	npm install
	npm start

### Configuration

MongoDB: `mongodb://mongodb`

Express: `app.listen(process.env.PORT || 3000);`


### 1.0.0

- Initial version

## License

ISC, Version 1.0


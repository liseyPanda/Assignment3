//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb://liseyPanda:CatTigger77@ds129344.mlab.com:29344/liseypen', //place the URI of your mongo database here.
    }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
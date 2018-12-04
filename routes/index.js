let express = require('express');
let router = express.Router();
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});



/// USER ROUTES ///

// GET request for creating a User. NOTE This must come before routes that display User (uses id).
router.get('/users/new', function(req, res){
  res.render('users/new');
});

// POST request for creating User.
router.post('/users', function(req, res){
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    // validation
    body('email', 'Empty email').isEmpty();
    body('username', 'Empty username').isEmpty();
    body('password', 'Empty password').isEmpty();
    body('email', 'Invalid email').isEmail();
    body('email', 'Email must be between 5-100 characters.').isLength({min:5, max:100});
    body('username', 'Username must be between 5-20 characters.').isLength({min:5, max:20});
    body('password', 'Password must be between 5-100 characters.').isLength({min:5, max:100});



    let query = 'select * from user';
    connection.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
    });
});

/*
// GET request to delete Book.
router.get('/book/:id/delete', user_controller.book_delete_get);

// POST request to delete Book.
router.post('/book/:id/delete', user_controller.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update', user_controller.book_update_get);

// POST request to update Book.
router.post('/book/:id/update', user_controller.book_update_post);

// GET request for one Book.
router.get('/book/:id', user_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', user_controller.book_list);

/// PHOTO ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// COMMENT ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);
*/
module.exports = router;

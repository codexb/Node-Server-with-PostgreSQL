var express = require('express');
var router = express.Router();
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://systemuser:systemuser@localhost:5432/webservice';


/**
 * Get User List 
 */
router.get('/list', function(req, res) {
    const client = new pg.Client(connectionString);
    client.connect();
    client.query('SELECT * FROM public.users', [], (err, listData) => {
        var result = [];
        if(listData.rows && listData.rowCount){
            for(var i=0; i<listData.rowCount; i++){
                result.push(listData.rows[i]);
            }
        }
        res.send(result);
        client.end()
    })
});

/**
 * Get User current profile details
 */
router.get('/self', function(req, res) {
    res.send('NOT IMPLEMENTED: User /self');
});

/**
 * Get User List with query params
 */
router.get('/query', function(req, res) {
    res.send('NOT IMPLEMENTED: User /self');
});

/**
 * Get User by ID
 */
router.get('/:id', function(req, res) {
    const client = new pg.Client(connectionString);
    client.connect();
    client.query('SELECT * FROM public.users where id=$1', [req.params.id], (err, listData) => {
        if(listData.rowCount === 1){
            res.send(listData.rows[0]);
        }else if (listData.rowCount > 1){
            res.send('multiple users exist');
        }else{
            res.send('No results');
        }
        client.end()
    })
});

/**
 * Create New User
 */
router.post('/', function(req, res) {
    res.send('NOT IMPLEMENTED: User /self');
});

/**
 * Update User Profile 
 */
router.post('/:id', function(req, res) {
    res.send('NOT IMPLEMENTED: User /self');
});
module.exports = router;
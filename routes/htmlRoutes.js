const path = require('path');


module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', (req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
    });
};

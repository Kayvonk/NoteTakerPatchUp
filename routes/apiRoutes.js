const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')
console.log(notes)
const saveDb = () => {
    fs.writeFileSync(
        path.resolve(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 4)
    )
}
module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(notes.map((note, index) => ({
            ...note,
            id: index + 1
        })))
    });

    app.post('/api/notes', (req, res) => {
        console.log(req.body)
        notes.push(req.body)
        saveDb();
        res.json(notes)
    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log(req.params)
        notes.splice(req.params.id - 1, 1)
        saveDb()
        res.json(notes)
    });

};
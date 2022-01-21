const router = require('express').Router()
const res = require('express/lib/response');
const path = require('path')

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router

// res.render();
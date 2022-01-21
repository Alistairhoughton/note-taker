const router = require("express").Router();
const Notes = require("../db/db");

// requesting the existing notes

router.get("/notes", (req, res) => {
  Notes.getNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => {
      res.status(503).json(err);
    });
});

// posting note function route

router.post("/notes", (req, res) => {
  Notes.addNote(req.body)
    .then((note) => {
      res.json(note);
    })
    .catch((err) => {
      res.status(503).json(err);
    });
});

// delete note function route

router.delete("/notes/:id", (req, res) => {
  Notes.deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(503).json(err));
});

module.exports = router;

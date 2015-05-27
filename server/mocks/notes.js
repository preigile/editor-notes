module.exports = function(app) {
  var express = require('express');
  var notesRouter = express.Router();

  notesRouter.get('/', function(req, res) {
    res.send({
      'notes': []
    });
  });

  notesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  notesRouter.get('/:id', function(req, res) {
    res.send({
      'notes': {
        id: req.params.id
      }
    });
  });

  notesRouter.put('/:id', function(req, res) {
    res.send({
      'notes': {
        id: req.params.id
      }
    });
  });

  notesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/notes', notesRouter);
};

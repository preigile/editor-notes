module.exports = function(app) {
  var express = require('express');
  var notesRouter = express.Router();

  notesRouter.get('/', function(req, res) {
    res.send({
      'notes': [
        {
          id: 1,
          title: 'Какой чудесный день',
          date: Date.now() - (1000 * 60 * 60 * 24)
        },
        {
          id: 2,
          title: 'Какой чудесный пень',
          date: new Date(2013, 7, 1, 8, 3, 0)
        },
        {
          id: 3,
          title: 'Какой чудесный я',
          date: new Date(2015, 4, 27, 6, 8, 0)
        },
        {
          id: 4,
          title: 'И песенка моя',
          date: new Date(2015, 2, 1, 6, 5, 0)
        }
      ]
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
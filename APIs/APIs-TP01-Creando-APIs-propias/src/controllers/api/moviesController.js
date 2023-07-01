const { Movie } = require("../../database/models");

const moviesController = {
      list: async (req, res) => {
            const MOVIES = await Movie.findAll();
            return res.status(200).json({
                  meta: {
                        status: 200,
                        total: MOVIES.length,
                        url: "api/v1/movies",
                  },
                  data: MOVIES,
            });
      },
      store: async (req, res) => {
            try {
                  const RESULT = await Movie.create({
                        title: req.body.title,
                        rating: req.body.rating,
                        awards: req.body.awards,
                        release_date: req.body.release_date,
                        length: req.body.length,
                        genre_id: req.body.genre_id,
                  });
                  return res.status(201).json({
                        meta: {
                              status: 201,
                              url: "api/v1/movies/create",
                              msg: "Se agregó la pelicula",
                        },
                        data: RESULT,
                  });
            } catch (error) {}
      },
      destroy: async (req, res) => {
            const RESULT = await Movie.destroy({
                  where: { id: req.params.id },
            });
            if (RESULT === 1) {
                  RESPONSE = {
                        meta: {
                              status: 201,
                              url: "api/v1/movies/delete/:id",
                              msg: "Se eliminó la pelicula",
                        },
                  };
            } else {
                  RESPONSE = {
                        meta: {
                              status: 201,
                              url: "api/v1/movies/delete/:id",
                              msg: "No se encuentra la pelicula",
                        },
                  };
            }
            return res.status(201).json(RESPONSE);
      },
};

module.exports = moviesController;
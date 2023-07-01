const { Genre } = require("../../database/models");

const genresController = {
      list: async (req, res) => {
            const GENRES = await Genre.findAll();
            return res.status(200).json({
                  meta: {
                        status: 200,
                        total: GENRES.length,
                        url: "api/v1/genres",
                  },
                  data: GENRES,
            });
      },
      detail: async (req, res) => {
            const GENRE_ID = await Genre.findByPk(req.params.id);
            return res.status(200).json({
                  meta: {
                        status: 200,
                        url: "api/v1/genres/:id",
                  },
                  data: GENRE_ID,
            });
      },
};

module.exports = genresController;
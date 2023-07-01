const db = require("../database/models");

module.exports = {
    list: (req, res) => {
        db.Actor.findAll()
        .then((actors) => {
            return res.render("actorsList", {actors});
        })
    },
    detail: (req, res) => {
        const actorId = req.params.id;

        db.Actor.findByPk(actorId)
        .then((actor) => {
            return res.render('actorsDetail', {actor});
        })
    },
}
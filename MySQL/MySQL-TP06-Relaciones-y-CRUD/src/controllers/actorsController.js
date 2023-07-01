const { Actor } = require('../database/models');

module.exports = {
    list: (req, res) => {
        Actor.findAll()
        .then((actors) => {
            return res.render("actorsList", {actors});
        })
    },
    detail: (req, res) => {
        const actorId = req.params.id;

        Actor.findByPk(actorId)
        .then((actor) => {
            return res.render('actorsDetail', {actor});
        })
    },
    delete: function (req, res) {
        const ACTOR_ID = req.params.id;

        Actor.findByPk(ACTOR_ID)
        .then(ActorToDelete =>
            res.render(
                "actorsDelete",
                {Actor: ActorToDelete})
            )
            .catch(error => console.log(error));
    },
    destroy: function (req, res) {
        Actor.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect("/actors");
        })
        .catch(error => console.log(error));
    }
}
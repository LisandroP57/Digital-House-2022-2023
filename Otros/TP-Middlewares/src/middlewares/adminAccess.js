const admins = ['Greta', 'Ada', 'Tim', 'Vim',]


module.exports = (req,res,next) => {
    if(admins.includes(req.query.user)){
        next()
    }

    return res.send("Usuario invalido");
};
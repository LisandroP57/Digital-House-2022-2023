const admins = ['Riky', 'Maxi', 'Lisan', 'Cami',]

module.exports = (req,res,next) => {
    if(admins.includes(req.query.admin)){
        next()
    }

    return res.send("Usuario invalido");
};
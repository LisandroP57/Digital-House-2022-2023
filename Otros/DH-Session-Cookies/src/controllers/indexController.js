const { validationResult } = require("express-validator");

module.exports = {
      index: (req, res) => {
            res.locals.user = req.session.user;
            res.render('index',
            {
                  old:req.body,
                  session:req.session
            })
      },
      userSave: (req, res) => {
            const errors = validationResult(req);

            if (errors.isEmpty()) {
                  const {name, color, email, age} = req.body
                  
                  req.session.user = {
                        name,
                        color,
                        email,
                        age
                  }
                  let lifeTime = 160000;
        
                  if (req.body.remember){
                        res.cookie(
                              "color",
                              req.session.user,
                              {
                                    expires: new Date(Date.now() + lifeTime),
                                    httpOnly: true
                              }
                        )
                  }
                  res.locals.user = req.session.user;
                  res.redirect('/')
            }else{
                  res.render('index',{
                        errors:errors.mapped(),
                        old:req.body,
                        session:req.session
                  })
            }
      },
      user: (req, res) => {
            res.locals.user = req.session.user;
            res.render('user',{
                  color: req.session.user.color,
                  name:req.session.user.name,
                  session:req.session
            })
      },
      forget: (req, res) => {
            req.session.destroy();
            if (req.cookies.color) {
                  res.cookie("color", "", { maxAge: -1 });
            }
            
            res.redirect("/");
      },
};
Router.route('/')
    .get((req, res) => {
        Request.find((err, r) => {
            if (err) {
                console.log(err)
            } else {
                res.json(r)
            }
        })
    })
    .post((req, res) => {
        const request = new Request({
            type: req.body.type,
            info: req.body.info
        });
        request.info.user = req.user._id;
        console.log("ABOUT TO SAVE REQUEST", request);
        request.save((err, r) => {
            if (err) {
                /*Not correct
                res.json({ message: 'there was an error saving your r' });*/
                return next(err)
            } else {
                res.json(r);
            }
        });
    });
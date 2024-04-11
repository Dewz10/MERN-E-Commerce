const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    try {
        const token = req.header["authtoken"]

        if (!token) {
            return res.status(401).send('No token, authorization denied');
        }
        const decoded = jwt.verify(token,'jwtSecret');

        console.log("Middleware", decoded);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send('Token Invalid!');
    }
}
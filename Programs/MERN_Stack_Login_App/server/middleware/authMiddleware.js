const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized - InValid token' });
    }
    console.log('decoded', decoded);
    req.user = decoded; // Attach decoded token payload to the request
    next();
  });
};

exports.checkRole = (roles) => {
  return (req, res, next) => {
    console.log('roles', req.user.userType);
    if (!roles.includes(req.user.userType)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
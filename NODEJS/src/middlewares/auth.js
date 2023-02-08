
const { verifyJWT } = require('../components/Auth/jwt.service');
const { UnauthorizedError } = require('../utils/api-errors');

const decodeToken = async (header) => {
  if (!header) {
    throw new UnauthorizedError('Authorization header missing');
  }
  const token = header.replace('Bearer ', '');
  const payload = await verifyJWT({ token });
  return payload;
};

module.exports = async (req, res, next) => {
  const { method, path } = req;
  if (method === 'OPTIONS' || ['/auth/login'].includes(path)) {
    return next();
  }
  const context = await decodeToken(req.header('Authorization') || req.header('authorization'));
  req.body.userId=context.userId;
  req.body.role=context.role;
  return next();
};



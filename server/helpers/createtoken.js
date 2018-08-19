import jwt from 'jsonwebtoken';

const secret = 'myydiaryapi';

const createToken = id => jwt.sign(
  { id },
  secret,
  { expiresIn: '1 day' },
);

export default createToken;

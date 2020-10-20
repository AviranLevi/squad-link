import jwt from 'jsonwebtoken';
const { env } = process;

export const signToken = (userId) =>
  jwt.sign(
    {
      iss: 'squadLink',
      sub: userId,
    },
    env.JWT_KEY,
    { expiresIn: '24h' }
  );

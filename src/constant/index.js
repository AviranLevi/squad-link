export const httpResponseStatus = {
  OK: 200,
  ERR: 500,
};

export const dbResponses = {
  findErr: {
    error: true,
    message: 'Something went wrong, try again later',
  },
  alreadyExists: {
    error: true,
    message: 'User already exists',
  },
  emailAlreadyInUse: {
    error: true,
    message: `Email's already in use`,
  },
};

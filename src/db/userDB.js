import User from '../models/User';
import moment from 'moment';
import { dbResponses } from '../constant';

const currentDate = moment().format('MMM Do YYYY');

export const createUser = async (data) => {
  try {
    const { email } = data;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return dbResponses.alreadyExists;
    } else {
      const user = new User(data);
      user.save();
      console.log(`New user created - ${user.userName} `);
      return user;
    }
  } catch (error) {
    throw error;
  }
};

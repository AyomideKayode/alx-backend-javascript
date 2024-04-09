import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  const allSettled = [];

  try {
    const user = await signUpUser(firstName, lastName);
    allSettled.push({
      status: 'fulfilled',
      value: user,
    });
  } catch (error) {
    allSettled.push({
      status: 'rejected',
      value: `Error: ${error.message}`,
    });
  }

  try {
    const photo = await uploadPhoto(fileName);
    allSettled.push({
      status: 'fulfilled',
      value: photo,
    });
  } catch (error) {
    allSettled.push({
      status: 'rejected',
      value: `Error: ${error.message}`,
    });
  }
  return allSettled;
}

export default handleProfileSignup;

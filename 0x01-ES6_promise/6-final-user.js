import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // const allSettled = [];

  try {
    return await signUpUser(firstName, lastName).then((value) => ({
      status: 'fulfilled',
      value,
    })).catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));
  } catch (error) {
    // Handle error here
  }

  try {
    return await uploadPhoto(fileName).then((value) => ({
      status: 'fulfilled',
      value,
    })).catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));
  } catch (error) {
    // Handle error here
  }
  const allSettled = await Promise.all([signUpUser, uploadPhoto]);
  return allSettled;
}

type VerifyUserfn = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserfn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'marcus', password: '123' };
const sentValue = { username: 'marcus', password: '123', permissions: '' };
const logginIn = verifyUser(bdUser, sentValue);

console.log(logginIn);

// Dummy user data for testing
const DUMMY_USERS = [
  {
    idNumber: "211-02009",
    email: "cj.pads120@gmail.com",
    firstName: "Carl John",
    lastName: "Padecio",
    password: "password123"
  },
  {
    idNumber: "211-02010",
    email: "cj.pads120@gmail.com",
    firstName: "Carl John",
    lastName: "Padecio",
    password: "password123"
  }
];

export const setUserSession = (userData) => {
  sessionStorage.setItem('user', JSON.stringify(userData));
};

export const getUserSession = () => {
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearUserSession = () => {
  sessionStorage.removeItem('user');
};

// Helper function to check dummy credentials
export const checkDummyCredentials = (idNumber, password) => {
  const dummyUser = DUMMY_USERS.find(user => user.idNumber === idNumber);
  if (dummyUser && dummyUser.password === password) {
    return dummyUser;
  }
  return null;
};

// Helper function to check if dummy user exists
export const isDummyUser = (idNumber) => {
  return DUMMY_USERS.some(user => user.idNumber === idNumber);
}; 
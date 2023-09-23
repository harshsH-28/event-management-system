// Login
const login = (req, res, next) => {
  res.status(200).send("Login API");
};

// Signup
const signup = (req, res, next) => {
  res.status(200).send("Signup API");
};

const logout = (req, res, next) => {
  res.status(200).send("Logout API");
};

export { login, signup, logout };

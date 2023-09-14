const AuthGuard = async function (to, from, next) {
  const isAuth = localStorage.getItem('auth')
  try {
    if (!isAuth) {
      next({name: '/'})
    } else {
      next();
    }
  } catch (err) {
    next({name: '/'})
  }
};

export default AuthGuard;
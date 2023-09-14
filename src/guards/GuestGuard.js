const GuestGuard = function (to, from, next) {
  const hasAuth = localStorage.getItem('auth');
  if (hasAuth) next({name: 'Dashboard'});
  else next();
};

export default GuestGuard;
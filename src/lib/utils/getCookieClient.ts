export const getCookieClient = () => {
  const jwtCookie = document.cookie.split("=");

  return jwtCookie[1];
};

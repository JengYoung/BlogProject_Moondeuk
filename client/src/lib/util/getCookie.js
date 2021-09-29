export default function getCookie(key) {
  console.log(key, document.cookie)
  return document.cookie
    .split("; ")
    .filter(cookie => cookie.split("=")[0] === key)
    .map(cookie => cookie.split("=")[1])[0] ?? ''
}
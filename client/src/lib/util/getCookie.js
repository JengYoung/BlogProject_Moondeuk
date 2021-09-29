export default function getCookie(key) {
  return document.cookie
    .split("; ")
    .filter(cookie => cookie.split("=")[0] === key)
    .map(cookie => cookie.split("=")[1])[0] ?? ''
}
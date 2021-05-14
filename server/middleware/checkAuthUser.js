const checkAuthUser = (req, res, next) => {
    console.log("check", req.user);
    return next();
}
export default checkAuthUser;
const logoutController = (req, res) => {
    res.clearCookie('access_token');
    res.status(204).send('logout Success');
}

export default logoutController;


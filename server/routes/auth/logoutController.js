const logoutController = (req, res) => {
    req.cookies = null,
    res.status(204).send('logout Success');
}

export default logoutController;


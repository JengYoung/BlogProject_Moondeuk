const checkController = async (req, res) => {
    const user = req.user;
    console.log(user);
    if (!user) {
        res.status(401).send("Cannot find valid token...");
        return;
    }
    res.send(user);
}

export default checkController;
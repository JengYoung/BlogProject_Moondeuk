import extractOmittedBodyText from '../../lib/extractOmittedBodyText.js';
import getDate from '../../lib/getDate.js';
import Post from '../../models/post.js';
import User from '../../models/user.js';

const listController = async (req, res) => {
    const { tag, userId } = req.query;
    const { last_id } = req.body;
    const query = {
        ...(userId ? { 'author.authorId': userId } : {}),
        ...(tag ? { tags: tag } : {}),
        ...(last_id ? { _id: { $lt: last_id }} : {})
    }
    try {
        const posts = await Post.find(query)
                                .lean()
                                .sort({postedDate: -1})
                                .limit(15);
        await Promise.all(
            posts.map(async post => {
                const { author, body, postedDate } = post;
                const { userImage } = await User.findById(author._id).lean();
                post.author = {
                    ...post.author,
                    userImage,
                }
                post.body = extractOmittedBodyText(body);
                post.postedDate = getDate(postedDate);
                return post
            }
        ));
        res.send(posts);
    } catch(e) {
        res.status(500).send(e);
    }
};

export default listController;
import extractOmittedBodyText from '../../lib/extractOmittedBodyText.js';
import getDate from '../../lib/getDate.js';
import Post from '../../models/post.js';
import User from '../../models/user.js';

const listController = async (req, res) => {
    const { tag, userId } = req.query;
    console.log(tag, userId)
    const query = {
        ...(userId ? { 'author.authorId': userId } : {}),
        ...(tag ? { tags: tag } : {})
    }
    console.log(query);
    try {
        const posts = await Post.find(query)
                                .lean()
                                .sort({postedDate: -1});
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
import Post from '../models/post.js';
import User from '../models/user.js';
/*
    {
        _id: 6110b0192ed82a56086c35f3,
        checkRead: true,
        sender_id: 61109c9a2ed82a56086c35e0,
        receiver_id: 609b847f05962468a03a2bb0,
        type: 'ReplyComment',
        type_detail: {
            diary_id: '60f90646b1bbd761786ddba6',
            comment_id: '6103e5361580695420551bea',
            content: '저두염:)'
        }
    },
*/
const alertMessage = async (alert) => {
    const { sender_id, receiver_id, type, type_detail } = alert; 
    try {
        const sender = await User.findById(sender_id);
        const receiver = await User.findById(receiver_id);
        let diary = null;
        if (Object.keys(type_detail).includes("diary_id")) {
            diary = await Post.findById(type_detail.diary_id)
        }
        switch(type) {
            case "Subscribe":
                return `${sender.nickname}님이 ${receiver.nickname}님을 구독합니다.`
            case "ReplyComments":
                return `${sender.nickname}님이 댓글에 답글을 남겼습니다.`
            case "Comment":
                return `${sender.nickname}님이 ${diary.title} 일기에 댓글을 남겼습니다.`
            case "Like":
                return `${sender.nickname}님이 ${diary.title} 일기를 좋아합니다.`
            case "Comment_Like":
                return `${sender.nickname}님이 다음 댓글을 좋아합니다.`
            case "ReplyComment_Like":
                return `${sender.nickname}님이 다음 답글을 좋아합니다.`
        }
    } catch(e) {
        throw new Error(e) // 잘못된 요청.
    }
}

export default alertMessage
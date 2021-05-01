import client from '../client';

const checkReplyCommentAPI = (comment_id) =>
    client.get(`/routes/replycomment/608a03b8aa3e5154a412fe1d`); 

export default checkReplyCommentAPI;
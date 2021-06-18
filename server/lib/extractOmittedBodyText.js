import sanitizeHtml from 'sanitize-html';

const extractOmittedBodyText = body => {
    const BodyRemovedTags = sanitizeHtml(body, {
        allowedTags: [],
    });
    return BodyRemovedTags.length > 50 ? `${BodyRemovedTags.slice(0, 50)}...` : BodyRemovedTags;
}

export default extractOmittedBodyText;
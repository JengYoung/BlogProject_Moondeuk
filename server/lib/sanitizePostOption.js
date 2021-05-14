// import sanitizeHtml from 'sanitize-html';

/**
 * ! Diary를 작성할 시, 허용하는 option을 setting.
 */ 

const sanitizePostOption = {
    allowedTag: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'b',
        'i',
        'u',
        's',
        'p',
        'img',
        'br',
        'div',
        'span',
        'ul',
        'li',
        'ol',
        'blockquote',
        'pre',
    ],
    allowedAttribute: {
        a: [
            'href', 
            'name', 
            'target'
        ],
        img: ['src'],
    },
    allowedSchemes: ['data', 'http'],
};

export default sanitizePostOption
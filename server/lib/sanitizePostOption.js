// import sanitizeHtml from 'sanitize-html';

/**
 * ! Diary를 작성할 시, 허용하는 option을 setting.
 */ 

const sanitizeOption = {
    allowedTags: [
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
        'em',
        'strong',
        'script',
    ],
    allowedAttributes: {
        a: [
            'href', 
            'name', 
            'target'
        ],
        img: ['src'],
        li: ['class'],
        span: ['class'],
    },
    allowedSchemes: ['data', 'http'],
};

export default sanitizeOption;
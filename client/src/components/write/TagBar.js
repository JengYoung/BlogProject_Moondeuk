import myColors from 'lib/styles/_color';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

/*
*/

const StyledTagBar = styled.div`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    z-index: 10;
`;
const StyledTagsForm = styled.form`
    width: auto;
    display: flex;
`;

const StyledTagsInput = styled.input`
    display: inline-flex;
    /* width: 10rem; */
    height: auto;
    outline: none;
    border: none;
    padding-left: 0.5rem;
    background: transparent;
    font-weight: 200;
    height: 1.5rem;
    margin-bottom: 0.5rem;
    ${props =>
        (props.titleStyle.color !== "" || props.titleStyle.thumbnail !== "") && css`
            color: white;
            &::placeholder {
                color: white;
            }
        `
    }
    ${({ theme }) => css`
        color: ${theme.fontColor};
        &::placeholder {
            color: lightgray;
        }
    `}
`;

const StyledTagsWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    ${props =>
        (props.titleStyle.isCenter === true) && css`
            justify-content: center;
        `
    }
`;

const StyledTag = styled.div`
    display: inline-flex;
    margin-right: 1rem;
    border: 1px solid ${myColors.gray[5]};
    color: ${myColors.gray[5]};
    font-weight: 200;
    border-radius: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
    font-size: 0.9rem;
    ${props =>
        (props.titleStyle.color !== "" || props.titleStyle.thumbnail !== "") && css`
            color: white;
            border: 1px solid white;
        `
    }
    &:hover {
        cursor: pointer;
        ${({ theme }) => css`
            transition: all 0.3s;
            border: none;
            background: #bb1818;
            color: ${theme.tagColor};
        `}
    }
`;

const Tag = React.memo(({tag, onRemove, titleStyle}) => 
                <StyledTag onClick={() => onRemove(tag)} titleStyle={titleStyle}>#{tag}</StyledTag>)

const TagsWrapper = React.memo(({ tags, onRemove, onChange, value, onSubmit, titleStyle }) => (
    <StyledTagsWrapper titleStyle={titleStyle}>
        {tags.map(
            tag => (
                <Tag tag={tag} onRemove={onRemove} titleStyle={titleStyle}/>
            )
        )}
        <StyledTagsForm onSubmit={onSubmit}>
            <StyledTagsInput onChange={onChange} value={value} titleStyle={titleStyle} placeholder="태그를 입력하세요."/>
        </StyledTagsForm>
    </StyledTagsWrapper>
))

const TagBar = ({ onChangeTags, tags, titleStyle }) => {
    const [ input, setInput ] = useState('');
    const [ nowTags, setNowTags ] = useState([]);
    
    const insertTag = useCallback(
        tag => {
            if ((!tag) || (nowTags.includes(tag))) return;

            const addedTag = [...nowTags, tag];
            setNowTags(addedTag);
            onChangeTags(addedTag);

        },
        [onChangeTags, nowTags]);

    const onChange = useCallback(e => {
        setInput(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        insertTag(input.trim());
        setInput('');
    },[input, insertTag]);

    const onRemove = useCallback(
        tag => {
            const filteredTags = nowTags.filter(now => now !== tag);
            setNowTags(filteredTags);
            onChangeTags(filteredTags);
        }, [onChangeTags, nowTags]
    )

    // Redux tags 상태관리에 맞춰서 하도록.
    useState(() => {
        setNowTags(tags)
    }, [tags])

    return (
        <StyledTagBar>
            <TagsWrapper 
                tags={nowTags} 
                onRemove={onRemove} 
                onChange={onChange} 
                value={input} 
                onSubmit={onSubmit}
                titleStyle={titleStyle}
            />
        </StyledTagBar>
    );
};

export default TagBar;
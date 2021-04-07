import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

/*
*/

const StyledTagBar = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 3rem;
    background: white;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    z-index: 10;
`;
const StyledTagsForm = styled.form`
    width: auto;
    height: 100%;
    background-color: green;
    display: flex;
`;

const StyledTagsInput = styled.input`
    width: 10rem;
    height: auto;
`;

const StyledTagsBtn = styled.button`
    width: 3rem;
    height: auto;
`;

const StyledTagsWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    width: 100%;
    height: 100%;
`;

const StyledTag = styled.div`
    margin-right: 1rem;
    padding: 0.25rem 1rem;
    background-color: purple;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.3);
    border-radius: 50px;
    font-weight: 700;
    color: white;
`;

const Tag = React.memo(({tag, onRemove}) => <StyledTag onClick={() => onRemove(tag)}># {tag}</StyledTag>)

const TagsWrapper = React.memo(({ tags, onRemove }) => (
    <StyledTagsWrapper>
        {tags.map(
            tag => (
                <Tag tag={tag} onRemove={onRemove} />
            )
        )}
    </StyledTagsWrapper>
))

const TagBar = ({ onChangeTags, tags }) => {
    const [ input, setInput ] = useState('');
    const [ nowTags, setNowTags ] = useState([]);
    console.log("tags값", tags);
    
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

    return (
        <StyledTagBar>
            <StyledTagsForm onSubmit={onSubmit}>
                <StyledTagsInput onChange={onChange} value={input} />
                <StyledTagsBtn type="submit">등록</StyledTagsBtn>
            </StyledTagsForm>
            <TagsWrapper tags={nowTags} onRemove={onRemove}></TagsWrapper>
        </StyledTagBar>
    );
};

export default TagBar;
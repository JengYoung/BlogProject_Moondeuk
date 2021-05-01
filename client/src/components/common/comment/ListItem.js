import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledListItem = styled.div`
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    &:first-child {
        border-top: 1px solid gray;
    }
    border-bottom: 1px solid gray;
    position: relative;
`;

const ListItem = props => {
    return (
        <StyledListItem {...props} />
    );
};

export default ListItem;
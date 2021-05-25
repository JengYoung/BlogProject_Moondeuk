import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledModalListItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid gray;
    div {
        margin-right: 1rem;
    }
`;

const ModalListItem = (props) => {
    return (
        <StyledModalListItem {...props} />
    );
};

export default ModalListItem;
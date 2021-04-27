import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledModalListItem = styled.div`
    padding: 1rem;
    border-bottom: 1px solid gray;
`;

const ModalListItem = (props) => {
    return (
        <StyledModalListItem {...props} />
    );
};

export default ModalListItem;
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledSearchDataItem = styled(Link)`
    ${props => {
        switch(props.$keywordType) {
            case 'user':
                return css`
                    display: flex;
                    padding: 0 1rem;
                    align-items: center;
                    width: 100%;
                    height: 5rem;
                    margin-top: 0.5rem;
                    border: 1px solid lightgray;
                    border-radius: 10px;
                    background: white;
                    transition: all 0.3s ease-in;
                    font-size: 0.9rem;
                    
                    &:hover {
                        cursor: pointer;
                        background: #e9d4e9;
                        box-shadow: 0 4px 3px rgba(0,0,0,0.2);
                    }

                    @media screen and (min-width: 481px) {
                        padding: 0 2rem;
                        font-size: 1rem;
                        width: 400px;
                    }
                `
            case 'title':
                return css`
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 10rem;
                    border: 1px solid lightgray;
                    background: white;
                    transition: all 0.3s ease-in;
                    font-size: 0.9rem;
                    overflow: hidden;
                    
                    &:hover {
                        cursor: pointer;
                        background: #e9d4e9;
                        box-shadow: 0 4px 3px rgba(0,0,0,0.2);
                    }

                    @media screen and (min-width: 481px) {
                        padding: 0 2rem;
                        font-size: 1rem;
                    }
                `
            default: return;
        }
    }}
`;
const SearchDataItem = ({ children, keywordType, ...rest }) => {
    return (
        <StyledSearchDataItem $keywordType={keywordType} {...rest}>
            { children }
        </StyledSearchDataItem>
    )
}

export default SearchDataItem

import styled from 'styled-components';

export const TitleWrapper = styled.div`
    border-bottom: 1px solid hsl(228, 12%, 44%);
    padding: 40px 0;
    @media only screen and (min-width: 768px) {
        border-bottom: none;
    }
    h1, h3 {
        margin: 0;
    } 
`

export const ColorThemeSelectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 40px 0;
    h3 {
        float: left;
    }
    input {
        float: right;
        cursor: pointer;
    }
    @media only screen and (min-width: 768px) {
        h3 {
            margin-right: 10px;
        }
    }
`
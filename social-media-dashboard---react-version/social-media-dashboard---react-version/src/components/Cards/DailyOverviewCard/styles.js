import styled from "styled-components";
import { CardBase, CardNumber } from "../CardBase";

export const Card = styled(CardBase)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
`;
export const Column = styled.div`
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const RightColumn = styled(Column)`
    float: right;
    text-align: right;
`;
export const LeftColumn = styled(Column)`
    float: left;
    text-align: left;
`;
export const Number = styled(CardNumber)`
    font-size: 2rem;
    letter-spacing: -0.05em;
`;

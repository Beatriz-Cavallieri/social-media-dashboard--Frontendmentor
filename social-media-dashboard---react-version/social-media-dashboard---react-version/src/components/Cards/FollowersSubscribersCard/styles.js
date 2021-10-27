import styled from "styled-components";
import { CardNumber } from "../CardBase";
import { light, dark } from "../../../style/themes";

export const BigNumber = styled(CardNumber)`
    font-size: 3rem;
    letter-spacing: -0.05em;
`;
export const Title = styled.h4`
    font-size: 12px;
`;
export const Sub = styled.p`
    color: ${light.smallText};
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0 0 20px 0;
    font-size: 12px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        align-self: center;
        margin-right: 5px;
    }
`;

import styled from "styled-components";
import { light } from "../../style/themes";

const BackgroundDetail = styled.div`
    background-color: ${light.backgroundDetail};
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    z-index: -1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export default BackgroundDetail;

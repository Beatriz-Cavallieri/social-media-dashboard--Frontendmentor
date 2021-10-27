// Packages
import React from "react";

// Components
import { Arrow, CardBase, GrowthPercentage } from "../CardBase";
import { Title, TitleWrapper, Sub, BigNumber } from "./styles";

// Assets
import upArrow from "../../../assets/images/icon-up.svg";
import downArrow from "../../../assets/images/icon-down.svg";

// Utils
import { bigNumberFormat } from "../../../utils/utils";
import { socialNetworkData } from "../utils";

// ----------------- Component -----------------------

function FollowersSubscribersCard({ name, identifier, followers }) {
    const subtitle = socialNetworkData[name].subtitle;

    const { isGrowthPositive, total, growth } = followers[0];

    return (
        <div>
            <CardBase className={`with-upper-line ${name}`}>
                <TitleWrapper>
                    <img src={socialNetworkData[name].imageSource} alt={name} />
                    <Title>{identifier}</Title>
                </TitleWrapper>

                <BigNumber>{bigNumberFormat(total)}</BigNumber>
                <Sub>{subtitle}</Sub>
                <Arrow as="img" src={isGrowthPositive ? upArrow : downArrow} />

                <GrowthPercentage isPositive={isGrowthPositive}>
                    {growth}%
                </GrowthPercentage>
            </CardBase>
        </div>
    );
}

export default FollowersSubscribersCard;

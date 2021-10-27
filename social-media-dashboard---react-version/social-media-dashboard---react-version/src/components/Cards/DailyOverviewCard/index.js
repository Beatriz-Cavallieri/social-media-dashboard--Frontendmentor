import React from "react";
//Components
import { Arrow, GrowthPercentage } from "../CardBase";
import { Card, LeftColumn, Number, RightColumn } from "./styles";
// Assets
import upArrow from "../../../assets/images/icon-up.svg";
import downArrow from "../../../assets/images/icon-down.svg";
// Utils
import { socialNetworkData } from "../utils";

function DailyOverviewCard({ name, visibility, likes }) {
    return (
        <>
            <Card>
                <LeftColumn>
                    <h3>Page Views</h3>
                    <Number>{visibility.total}</Number>
                </LeftColumn>
                <RightColumn>
                    <img src={socialNetworkData[name].imageSource} alt={name} />
                    <div>
                        <Arrow
                            as="img"
                            src={
                                visibility.isGrowthPositive
                                    ? upArrow
                                    : downArrow
                            }
                        />
                        <GrowthPercentage
                            isPositive={visibility.isGrowthPositive}
                        >
                            {visibility.growth}%
                        </GrowthPercentage>
                    </div>
                </RightColumn>
            </Card>

            <Card>
                <LeftColumn>
                    <h3>Likes</h3>
                    <Number>{likes.total}</Number>
                </LeftColumn>
                <RightColumn>
                    <img src={socialNetworkData[name].imageSource} alt={name} />
                    <div>
                        <Arrow
                            as="img"
                            src={likes.isGrowthPositive ? upArrow : downArrow}
                        />
                        <GrowthPercentage isPositive={likes.isGrowthPositive}>
                            {likes.growth}%
                        </GrowthPercentage>
                    </div>
                </RightColumn>
            </Card>
        </>
    );
}

export default DailyOverviewCard;
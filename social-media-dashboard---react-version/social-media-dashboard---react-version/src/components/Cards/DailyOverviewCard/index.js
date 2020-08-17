import React from 'react'
import { CardBase, CardNumber, Arrow, PositiveGrowthPercentage, NegativeGrowthPercentage } from '../CardBase'
import styled from 'styled-components'
import SocialMediaLogo from '../SocialMediaLogo'
import upArrow from '../../../assets/images/icon-up.svg'
import downArrow from '../../../assets/images/icon-down.svg'

const Card = styled(CardBase)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
`
const Column = styled.div`
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const RightColumn = styled(Column)`
    float: right;
    text-align: right;
`
const LeftColumn = styled(Column)`
    float: left;
    text-align: left;
`
const Number = styled(CardNumber)`
    font-size: 2rem;
    letter-spacing: -0.05em;
`

export default function DailyOverviewCard({ name, visibility, likes }) {

    function renderGrowth(aspect) {
        if (aspect.isGrowthPositive) {
            return (
                <div>
                    <Arrow as="img" src={upArrow} />
                    <PositiveGrowthPercentage>{aspect.growth}%</PositiveGrowthPercentage>
                </div>
            )
        } else {
            return (
                <div>
                    <Arrow as="img" src={downArrow} />
                    <NegativeGrowthPercentage>{aspect.growth}%</NegativeGrowthPercentage>
                </div>
            )
        }
    }

    return (
        <>
            <Card>
                <LeftColumn>
                    <h3>Page Views</h3>
                    <Number>
                        {visibility.total}
                    </Number>
                </LeftColumn>
                <RightColumn>
                    <SocialMediaLogo name={name} />
                    {renderGrowth(visibility)}
                </RightColumn>
            </Card>

            <Card>
                <LeftColumn>
                    <h3>Likes</h3>
                    <Number>
                        {likes.total}
                    </Number>
                </LeftColumn>
                <RightColumn>
                    <SocialMediaLogo name={name} />
                    {renderGrowth(likes)}
                </RightColumn>
            </Card>
        </>
    )
}

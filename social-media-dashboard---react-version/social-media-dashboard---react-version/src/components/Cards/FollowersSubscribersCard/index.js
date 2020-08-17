import React from 'react'
import { CardBase, CardNumber, Arrow, PositiveGrowthPercentage, NegativeGrowthPercentage } from '../CardBase'
import styled from 'styled-components'
import SocialMediaLogo from '../SocialMediaLogo'
import upArrow from '../../../assets/images/icon-up.svg'
import downArrow from '../../../assets/images/icon-down.svg'

const BigNumber = styled(CardNumber)`
    font-size: 3rem;
    letter-spacing: -0.05em;
`
const Title = styled.h4`
    font-size: 12px;
`
const Sub = styled.p`
    color: ${({ theme }) => theme.smallText};
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0 0 20px 0;
    font-size: 12px;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        align-self: center;
        margin-right: 5px;
    }
`

export default function FollowersSubscribersCard({ name, identifier, followers }) {
    const subtitle = (name === 'youtube') ? 'subscribers' : 'followers'
    const numberFormat = number => (number >= 10000) ? (parseInt(number / 1000) + 'k') : (number)

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
        <div>
            <CardBase socialNetwork={name}>
                <TitleWrapper>
                    <SocialMediaLogo name={name} />
                    <Title>
                        {identifier}
                    </Title>
                </TitleWrapper>

                <BigNumber>
                    {numberFormat(followers[0].total)}
                </BigNumber>
                <Sub>{subtitle}</Sub>
                {renderGrowth(followers[0])}
            </CardBase>
        </div >
    )
}

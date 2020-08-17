import React from 'react'
import { CardBase, CardNumber } from '../CardBase'
import styled from 'styled-components'
import facebook from '../../../assets/images/icon-facebook.svg'
import instagram from '../../../assets/images/icon-instagram.svg'
import twitter from '../../../assets/images/icon-twitter.svg'
import youtube from '../../../assets/images/icon-youtube.svg'

const BigNumber = styled(CardNumber)`
    font-size: 3rem;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme.bigText};
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
    let imageSource = ''

    switch (name) {
        case 'facebook':
            imageSource = facebook
            break
        case 'twitter':
            imageSource = twitter
            break
        case 'instagram':
            imageSource = instagram
            break
        case 'youtube':
            imageSource = youtube
            break
    }

    return (
        <div>
            <CardBase socialNetwork={name}>
                <TitleWrapper>
                    <img
                        src={imageSource}
                        alt={name}
                    />
                    <Title>
                        {identifier}
                    </Title>
                </TitleWrapper>

                <BigNumber>
                    {numberFormat(followers[0].total)}
                </BigNumber>

                <Sub>{subtitle}</Sub>
            </CardBase>
        </div >
    )
}

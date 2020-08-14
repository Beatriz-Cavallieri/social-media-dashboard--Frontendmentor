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

const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        align-self: center;
        margin-right: 5px;
    }
`

export default function FollowersSubscribersCard() {
    return (
        <div>
            <CardBase>
                <TopWrapper>
                    <img src={facebook} />
                    <Title>@nathanf</Title>
                </TopWrapper>
                <BigNumber>786</BigNumber>
                <Sub>followers</Sub>
            </CardBase>
        </div >
    )
}

import React from 'react'
import { CardBase } from '../CardBase'
import styled from 'styled-components'

const Card = styled(CardBase)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
`

export default function DailyOverviewCard() {
    return (
        <Card>
            <h1>card</h1>
        </Card>
    )
}

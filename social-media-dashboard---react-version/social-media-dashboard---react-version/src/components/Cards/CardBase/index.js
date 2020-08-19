import styled from 'styled-components'

export const CardBase = styled.div`
    cursor: pointer;
    &:hover {
        background-color:${({ theme }) => theme.cardHover};
    }
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
    justify-content: center;
    padding: 20px 0;
    min-height: 150px;
    background-color: ${({ theme }) => theme.card};

    &.with-upper-line::before {
        content: "";
        display: flex;
        width: 100%;
        height:4px;
        position: relative;
        top: -20px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: red;
    }
    &.facebook::before {
        background-color: var(--facebook);
    }
    &.twitter::before {
        background-color: var(--twitter);
    }
    &.youtube::before {
        background-color: var(--youtube);
    }
    &.instagram::before {
        background-image: linear-gradient(to left, var(--instagram-pink), var(--instagram-yellow));
    }

    `

export const CardWrapper = styled.div``

export const CardNumber = styled.span`
    font-weight: bold;
    margin: 0;
    color: ${({ theme }) => theme.bigText};
    `

export const Arrow = styled.div`
        width: 8px;
        height: 8px;
        margin-right:4px;
`
export const GrowthPercentage = styled.p`
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    display: inline;
`

export const PositiveGrowthPercentage = styled(GrowthPercentage)`
    color: hsl(163, 72%, 41%);
`

export const NegativeGrowthPercentage = styled(GrowthPercentage)`
    color: hsl(356, 69%, 56%);
`
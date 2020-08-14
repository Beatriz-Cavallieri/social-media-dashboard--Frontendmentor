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
    `

export const CardWrapper = styled.div``

export const CardNumber = styled.span`
    font-weight: bold;
    margin: 0;
    `
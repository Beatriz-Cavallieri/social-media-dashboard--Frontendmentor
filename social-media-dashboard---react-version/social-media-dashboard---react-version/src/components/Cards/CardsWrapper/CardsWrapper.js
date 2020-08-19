import styled from 'styled-components'

export const CardsWrapper = styled.div`

@media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}

/* Tablet  */
@media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
}

/* desktop */
@media only screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
}
`
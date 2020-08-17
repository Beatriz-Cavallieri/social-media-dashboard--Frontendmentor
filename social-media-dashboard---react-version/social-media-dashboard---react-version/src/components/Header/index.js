import React, { useState } from 'react'
import Slider from '../Slider'
import styled from 'styled-components'

const TitleWrapper = styled.div`
    border-bottom: 1px solid hsl(228, 12%, 44%);
    padding: 40px 0;
    @media only screen and (min-width: 768px) {
        border-bottom: none;
    }
    h1, h3 {
        margin: 0;
    } 
`

const ColorThemeSelectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 40px 0;
    h3 {
        float: left;
    }
    input {
        float: right;
        cursor: pointer;
    }
    @media only screen and (min-width: 768px) {
        h3 {
            margin-right: 10px;
        }
    }
`
export default function Header({ getThemeApp, totalFollowers }) {

    function numberFormat(number) {
        number = number.toString()
        let algarisms = number.length
        if (algarisms > 3) {
            let start = number.slice(0, algarisms - 3)
            let end = ',' + number.slice(algarisms - 3, algarisms + 1)
            algarisms -= 3
            number = numberFormat(start) + end
        }
        return number
    }

    return (
        <header>
            <TitleWrapper>
                <h1>Social Media Dashboard</h1>
                <h3>Total Followers: {numberFormat(totalFollowers)}</h3>
            </TitleWrapper>
            <ColorThemeSelectionWrapper>
                <h3>Dark Mode</h3>
                {/* passing this function as props allows the Header component to get from the Slider component 
                the boolean value that indicates the chosen color 
                theme for the page an allows the parent of Header to also use this value */}
                <Slider getThemeHeader={value => getThemeApp(value)} />
            </ColorThemeSelectionWrapper>
        </header>
    )
}

import React, { Component } from 'react'
import FollowersSubscribersCard from '../Cards/FollowersSubscribersCard'
import data from '../../data/data.json'
import { CardsWrapper } from '../Cards/CardsWrapper/CardsWrapper'

export default class Main extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        // this is where we should get data from the API, but for now it will be used only the static example from data.json
    }

    render() {
        return (
            <div>
                <CardsWrapper>
                    {/* Overview */}
                    {data.map(socialNetwork => <FollowersSubscribersCard
                        key={socialNetwork.name}
                        name={socialNetwork.name}
                        identifier={socialNetwork.identifier}
                        followers={socialNetwork.followers}
                    />)}
                </CardsWrapper>
                <CardsWrapper>
                    {/* This day */}
                </CardsWrapper>
            </div>
        )
    }
}

import React, { Component } from 'react'
import FollowersSubscribersCard from '../Cards/FollowersSubscribersCard'
import data from '../../data/data.json'
import DailyOverviewCard from '../Cards/DailyOverviewCard'
import { CardsWrapper } from '../Cards/CardsWrapper/CardsWrapper'

export default class Main extends Component {
    constructor() {
        super()
        this.totalFollowers = 0
    }

    componentDidMount() {
        this.loadData()
        data.map(data => this.totalFollowers += data.followers[0].total)
        this.props.setTotalFollowers(this.totalFollowers)
    }

    loadData = () => {
        // this is where we should get data from the APIs, but for now it will be used only the example from data.json
    }

    render() {
        return (
            <div>
                <CardsWrapper>
                    {data.map(socialNetwork => <FollowersSubscribersCard
                        key={socialNetwork.name}
                        name={socialNetwork.name}
                        identifier={socialNetwork.identifier}
                        followers={socialNetwork.followers}
                    />)}
                </CardsWrapper>

                <h2>Overview - Today</h2>

                <CardsWrapper>
                    {data.map(socialNetwork => <DailyOverviewCard
                        key={socialNetwork.name}
                        name={socialNetwork.name}
                        visibility={socialNetwork.visibility[0]}
                        likes={socialNetwork.likes[0]}
                    />)}
                </CardsWrapper>
            </div>
        )
    }
}

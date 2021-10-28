import React, { useState, useEffect, useCallback } from "react";
// Components
import FollowersSubscribersCard from "../Cards/FollowersSubscribersCard";
import DailyOverviewCard from "../Cards/DailyOverviewCard";
import { CardsWrapper } from "../Cards/CardsWrapper/CardsWrapper";
// Mock data
import mockData from "../../data/data.json";

function Main(props) {
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            async function loadData() {
                // this is where we should get data from the APIs, but for now it will be used only the example from data.json
                return mockData;
            }
            const loadedData = await loadData();

            const followersReducer = (previousValue, currentData) =>
                previousValue + currentData.followers[0].total;

            const totalFollowers = loadedData.reduce(followersReducer);

            props.setTotalFollowers(totalFollowers);
            setData(loadedData);
        }
        getData();
    }, []);

    const renderFollowersSubscribers = useCallback(() => {
        if (data)
            return (
                <>
                    {data.map((socialNetwork) => (
                        <FollowersSubscribersCard
                            key={socialNetwork.name}
                            name={socialNetwork.name}
                            identifier={socialNetwork.identifier}
                            followers={socialNetwork.followers}
                        />
                    ))}
                </>
            );
    }, [data]);

    const renderDailyOverview = useCallback(() => {
        if (data)
            return (
                <>
                    {data.map((socialNetwork) => (
                        <DailyOverviewCard
                            key={socialNetwork.name}
                            name={socialNetwork.name}
                            visibility={socialNetwork.visibility[0]}
                            likes={socialNetwork.likes[0]}
                        />
                    ))}
                </>
            );
    }, [data]);

    return (
        <div>
            <CardsWrapper>{renderFollowersSubscribers()}</CardsWrapper>

            <h2>Overview - Today</h2>

            <CardsWrapper>{renderDailyOverview()}</CardsWrapper>
        </div>
    );
}

export default Main;

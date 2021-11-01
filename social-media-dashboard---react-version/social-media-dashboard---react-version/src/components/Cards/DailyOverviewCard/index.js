import React from "react";
//Components
import GrowthPercentage from "../parts/GrowthPercentage";
// Utils
import { socialNetworkData } from "../utils";
// Styles
import styles from "./styles.module.scss";

// ----------------- Component -----------------------

function DailyOverviewCard({ name, visibility, likes }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__columnLeft}>
                    <h3>Page Views</h3>
                    <span className={styles.card__number}>
                        {visibility.total}
                    </span>
                </div>
                <div className={styles.card__columnRight}>
                    <img src={socialNetworkData[name].imageSource} alt={name} />
                    <GrowthPercentage
                        isPositive={visibility.isGrowthPositive}
                        growth={visibility.growth}
                    />
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card__columnLeft}>
                    <h3>Likes</h3>
                    <span className={styles.card__number}>{likes.total}</span>
                </div>
                <div className={styles.card__columnRight}>
                    <img src={socialNetworkData[name].imageSource} alt={name} />
                    <GrowthPercentage props={likes} />
                </div>
            </div>
        </>
    );
}

export default DailyOverviewCard;

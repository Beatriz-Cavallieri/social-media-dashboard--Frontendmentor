// Packages
import React from "react";
// Components
import GrowthPercentage from "../parts/GrowthPercentage";
// Utils
import { bigNumberFormat } from "../../../utils/functions";
import { socialNetworkData } from "../utils";
// Styles
import styles from "./styles.module.scss";

// ----------------- Component -----------------------

function FollowersSubscribersCard({ name, identifier, followers }) {
    const subtitle = socialNetworkData[name].subtitle;

    const { isGrowthPositive, total, growth } = followers[0];

    return (
        <div className={`with-upper-line ${name} ${styles.card}`}>
            <div className={styles.card__title}>
                <img src={socialNetworkData[name].imageSource} alt={name} />
                <h4>{identifier}</h4>
            </div>

            <span className={styles.card__mainNumber_number}>
                {bigNumberFormat(total)}
            </span>
            <p className={styles.card__mainNumber_label}>{subtitle}</p>
            <GrowthPercentage isPositive={isGrowthPositive} value={growth} />
        </div>
    );
}

export default FollowersSubscribersCard;

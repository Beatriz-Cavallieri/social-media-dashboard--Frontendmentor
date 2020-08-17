import React from 'react'
import facebook from '../../../assets/images/icon-facebook.svg'
import instagram from '../../../assets/images/icon-instagram.svg'
import twitter from '../../../assets/images/icon-twitter.svg'
import youtube from '../../../assets/images/icon-youtube.svg'

export default function SocialMediaLogo({ name }) {
    let imageSource = ''

    switch (name) {
        case 'facebook':
            imageSource = facebook
            break
        case 'twitter':
            imageSource = twitter
            break
        case 'instagram':
            imageSource = instagram
            break
        case 'youtube':
            imageSource = youtube
            break
    }
    return (
        <img
            src={imageSource}
            alt={name}
        />
    )
}

const data = [
    {
        "name": "facebook",
        "identifier": "@nathanf",
        "followers": [
            {
                "total": 1987,
                "growth": 99,
                "isGrowthPositive": true
            }
        ],
        "visibility": [
            {
                "total": 87,
                "growth": 3,
                "isGrowthPositive": true
            }
        ],
        "likes": [
            {
                "total": 52,
                "growth": 2,
                "isGrowthPositive": false
            }
        ]
    },
    {
        "name": "twitter",
        "identifier": "@nathanf",
        "followers": [
            {
                "total": 5236,
                "growth": 31,
                "isGrowthPositive": true
            }
        ],
        "visibility": [
            {
                "total": 87,
                "growth": 3,
                "isGrowthPositive": true
            }
        ],
        "likes": [
            {
                "total": 52,
                "growth": 2,
                "isGrowthPositive": false
            }
        ]
    },
    {
        "name": "instagram",
        "identifier": "@nathanf",
        "followers": [
            {
                "total": 11000,
                "growth": 45,
                "isGrowthPositive": false
            }
        ],
        "visibility": [
            {
                "total": 87,
                "growth": 3,
                "isGrowthPositive": true
            }
        ],
        "likes": [
            {
                "total": 52,
                "growth": 8,
                "isGrowthPositive": false
            }
        ]
    },
    {
        "name": "youtube",
        "identifier": "Nathan F.",
        "followers": [
            {
                "total": 1987,
                "growth": 25,
                "isGrowthPositive": true
            }
        ],
        "visibility": [
            {
                "total": 87,
                "growth": 3,
                "isGrowthPositive": true
            }
        ],
        "likes": [
            {
                "total": 52,
                "growth": 2,
                "isGrowthPositive": false
            }
        ]
    }
]

const mainCards = document.querySelector('.follow-boxes')
const dailyCards = document.querySelector('.today-overview')

// based on solution at https://www.youtube.com/watch?v=ZKXv_ZHQ654
var checkbox = document.querySelector('input[name=theme]');
var container = document.querySelector('.container');

checkbox.addEventListener('change', () => {
    setTheme(document.documentElement.getAttribute('data-theme'))
});

createCards()

function setTheme(theme) {
    switch (theme) {
        case "dark":
            document.documentElement.setAttribute('data-theme', 'dark');
            container.classList.add('dark');
            break;
        default:
            document.documentElement.setAttribute('data-theme', 'default');
            container.classList.remove('dark');
            break;
    }
}

function createCards() {
    const mainCardsHTML = createMainCardsHTML(data)
    //const dailyCardsHTML = createDailyCardsHTML(data)
    mainCards.innerHTML = mainCardsHTML
    //dailyCards.innerHTML = dailyCardsHTML
}

function followersNumberFormat(number) {
    return (number >= 10000) ? (number / 1000 + 'k') : (number)
}

function createMainCardsHTML(data) {
    let innerHTML = ''
    data.map(socialNetwork => {
        const name = socialNetwork.name
        const growthClass = socialNetwork.followers[0].isGrowthPositive ? 'pos' : 'neg'
        const subtitle = (name === 'youtube') ? 'subscribers' : 'followers'
        innerHTML += `
        <button class="box box-follow ${name}" id="${name}-followers" aria-label="Nathan's ${name} Page">
            <div class="profile">
                <img src="../images/icon-${name}.svg" alt="${name} icon">
                    <h4>${socialNetwork.identifier}</h4>
            </div>
            <p>
                <span class="number">${followersNumberFormat(socialNetwork.followers[0].total)}</span>
                </br>
                <span class="under">${subtitle}</span>
                </br>
                <span class="today ${growthClass}">${socialNetwork.followers[0].growth} Today</span>
                </br>
            </p>
        </button>
        `
    })
    return innerHTML
}


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
                "growth": 4,
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
                "growth": 1,
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
                "growth": 4,
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
                "isGrowthPositive": false
            }
        ],
        "visibility": [
            {
                "total": 87,
                "growth": 12,
                "isGrowthPositive": true
            }
        ],
        "likes": [
            {
                "total": 52,
                "growth": 2,
                "isGrowthPositive": true
            }
        ]
    }
]

const mainCards = document.querySelector('.follow-boxes')
const dailyCards = document.querySelector('.today-overview')

// based on solution at https://www.youtube.com/watch?v=ZKXv_ZHQ654
var checkbox = document.querySelector('input[name=theme]');
var container = document.querySelector('.container');

window.addEventListener('load', () => start())

function start() {
    checkbox.addEventListener('change', () => {
        setTheme(document.documentElement.getAttribute('data-theme'))
    });

    createCards()
}

function setTheme(attribute) {
    console.log(attribute)
    switch (attribute) {
        case "dark":
            document.documentElement.setAttribute('data-theme', 'default');
            container.classList.remove('dark');
            break;
        default:
            document.documentElement.setAttribute('data-theme', 'dark');
            container.classList.add('dark');
            break;
    }
}

function createCards() {
    const mainCardsHTML = createMainCardsHTML(data)
    const dailyCardsHTML = createDailyCardsHTML(data)
    mainCards.innerHTML = mainCardsHTML
    dailyCards.innerHTML = dailyCardsHTML
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

function createDailyCardsHTML() {
    let innerHTML = ''
    data.map(socialNetwork => {
        const visibilityGrowthClass = socialNetwork.visibility[0].isGrowthPositive ? 'pos' : 'neg'
        const likesGrowthClass = socialNetwork.likes[0].isGrowthPositive ? 'pos' : 'neg'
        innerHTML += `
			<button class="box box-today">
				<div class="col-left">
					<h3>Page Views</h3>
					<p class="number">${socialNetwork.visibility[0].total}</p>
				</div>
				<div class="col-right">
					<img src="../images/icon-${socialNetwork.name}.svg" alt="${socialNetwork.name} icon">
					<p class="today ${visibilityGrowthClass}">${socialNetwork.visibility[0].growth}%</p>
				</div>
            </button>
            
            <button class="box box-today">
				<div class="col-left">
					<h3>Likes</h3>
					<p class="number">${socialNetwork.likes[0].total}</p>
				</div>
				<div class="col-right">
					<img src="../images/icon-${socialNetwork.name}.svg" alt="${socialNetwork.name} icon">
					<p class="today ${likesGrowthClass}">${socialNetwork.likes[0].growth}%</p>
				</div>
			</button>
        `
    })
    return innerHTML
}

# Medium
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


An easy to use API that could fetch most data from Medium with no authentication needed


## Authors

- [@Lstsk](https://www.github.com/lstk)



## Tech used:

- Node JS / Express JS
- Javascript

## Api Link

```bash
https://medium-api-1.herokuapp.com/
```

[Demo Link](https://youtu.be/iYd3SfgwEO8)

## Running the server locally

### Clone the project

```bash
git clone https://github.com/Lstsk/Medium-API.git
cd Medium-Api
```

### Install dependencies

You would need to run this command every time a new dependency is installed.

```bash
npm install
```

### Run the app:

```bash
npm run dev
```

## Documentation

### Table of contents

- [Publication](#publications)
- [User](#user)
- [Tag](#tags)

### Publications

```bash
/api/posts/:pub_name
```

#### Response

```bash
/api/posts/towards-data-science

{
    "description": "Your home for data science. A Medium publication sharing concepts, ideas and codes.",
    "creatorId": "7e12c71dfa81",
    "followerCount": 640012,
    "tags": [
        "DATA SCIENCE",
        "MACHINE LEARNING",
        "PROGRAMMING",
        "ARTIFICIAL INTELLIGENCE",
        "EDITORS PICK"
    ],
    "twitterUsername": "TDataScience",
    "facebookPageName": "towardsdatascience",
    "instagramName": "towardsdatascience",
    "latest_posts": [
        {
            "id": "1b0ac2162c82",
            "title": "The Grammar of Graphics or how to do ggplot-style plotting in Julia",
            "subtitle": "Introduction to a comparison of Julia graphics packages for statistical plotting",
            "lang": "en",
            "wordCount": 1859,
            "readingTime": 8.415094339622641,
            "creatorId": "8ada39358e9d",
            "createdAit": 1659978176600,
            "updatedAt": 1660332957393,
            "firstPublishedAt": 1660332952367,
            "latestPublishedAt": 1660332952367
        },
        {
            "id": "478c10adc959",
            "title": "Black-box Hyperparameter Tuning in Python",
            "subtitle": "Comparing Brute Force and Black-box Optimization Methods in Python",
            "lang": "en",
            "wordCount": 2051,
            "readingTime": 9.089622641509434,
            "creatorId": "120b86134681",
            "createdAit": 1660330676815,
            "updatedAt": 1660334346019,
            "firstPublishedAt": 1660332538188,
            "latestPublishedAt": 1660334339584
        },
        {
            "id": "7f9c8018c593",
            "title": "Sign Language to Text using Deep Learning",
            "subtitle": "An End-to-End Pipeline including model building, hyperparameter tuning and the deployment",
            "lang": "en",
            "wordCount": 1649,
            "readingTime": 7.422641509433962,
            "creatorId": "bd29c3c96f9e",
            "createdAit": 1659628414189,
            "updatedAt": 1660325351647,
            "firstPublishedAt": 1660325345205,
            "latestPublishedAt": 1660325345205
        },
        {
            "id": "3fcb0b7f47d6",
            "title": "A guide to making the best ML pipeline using AutoGluon 2022 new features",
            "subtitle": "Or how to get the best open source python code without overfitting ?",
            "lang": "en",
            "wordCount": 843,
            "readingTime": 4.731132075471698,
            "creatorId": "9352c3bf4bbf",
            "createdAit": 1659957354090,
            "updatedAt": 1660325297945,
            "firstPublishedAt": 1660325289236,
            "latestPublishedAt": 1660325289236
        },
        {
            "id": "81ffb30c36b2",
            "title": "How to Speed Up Training for Large Language Models",
            "subtitle": "Explore the concept of sequence parallelism and selective activation re-computation",
            "lang": "en",
            "wordCount": 1067,
            "readingTime": 5.159748427672955,
            "creatorId": "9d91b858f6e4",
            "createdAit": 1659675495818,
            "updatedAt": 1660324761481,
            "firstPublishedAt": 1660324750673,
            "latestPublishedAt": 1660324750673
        },
        {
            "id": "274c6965e2d",
            "title": "Named Entity Recognition with Deep Learning (BERT) — The Essential Guide",
            "subtitle": "From data preparation to model training — and how to tag your own sentences!",
            "lang": "en",
            "wordCount": 1211,
            "readingTime": 4.95314465408805,
            "creatorId": "bec849d9e1d2",
            "createdAit": 1659878094879,
            "updatedAt": 1660321744530,
            "firstPublishedAt": 1660321736094,
            "latestPublishedAt": 1660321736094
        },
        {
            "id": "e2f4c9dd4a7b",
            "title": "Don’t use R in production",
            "subtitle": "But if you do, here is how!",
            "lang": "en",
            "wordCount": 1382,
            "readingTime": 5.415094339622642,
            "creatorId": "b7bf9b5093a4",
            "createdAit": 1660233845107,
            "updatedAt": 1660320974996,
            "firstPublishedAt": 1660320966065,
            "latestPublishedAt": 1660320966065
        },
        {
            "id": "9eb4cdd7a49e",
            "title": "Make Your R Code 10x Faster: Vectorization Explained in 3 Minutes",
            "subtitle": "Say goodbye to slow, messy loops",
            "lang": "en",
            "wordCount": 620,
            "readingTime": 2.722955974842767,
            "creatorId": "39501aa8ce39",
            "createdAit": 1660245436325,
            "updatedAt": 1660320119343,
            "firstPublishedAt": 1660320115473,
            "latestPublishedAt": 1660320115473
        },
        {
            "id": "af30091f5cb",
            "title": "Saga of the Lottery Ticket Hypothesis",
            "subtitle": "How winning tickets were discovered, debunked, and re-discovered",
            "lang": "en",
            "wordCount": 2639,
            "readingTime": 10.79182389937107,
            "creatorId": "28aa6026c553",
            "createdAit": 1658875220472,
            "updatedAt": 1660333370486,
            "firstPublishedAt": 1660316833797,
            "latestPublishedAt": 1660333363226
        },
        {
            "id": "210821761aa",
            "title": "Metrics for uncertainty evaluation in regression problems",
            "subtitle": "How to evaluate uncertainty with Validity, Sharpness, Negative Log-Likelihood, and Continuous Ranked Probability Score (CRPS) metrics",
            "lang": "en",
            "wordCount": 2208,
            "readingTime": 9.532075471698112,
            "creatorId": "ba0d56f8b910",
            "createdAit": 1660158742105,
            "updatedAt": 1660314271857,
            "firstPublishedAt": 1660314268680,
            "latestPublishedAt": 1660314268680
        }
    ],
    "trend_posts": [],
    "writers": [
        "elisabeth.wittmann",
        "duncan.grubbs",
        "egx21",
        "kavinash366",
        "neilp666",
        "martin.decombarieu",
        "parvathykrishnank",
        "julius-giron",
        "obedsims",
        "thorsten.hoser"
    ]
}
```

### Publication with parameters

```bash
api/posts/towards-data-science?post_num=1&trend_num=2

{
    "description": "Your home for data science. A Medium publication sharing concepts, ideas and codes.",
    "creatorId": "7e12c71dfa81",
    "followerCount": 640012,
    "tags": [
        "DATA SCIENCE",
        "MACHINE LEARNING",
        "PROGRAMMING",
        "ARTIFICIAL INTELLIGENCE",
        "EDITORS PICK"
    ],
    "twitterUsername": "TDataScience",
    "facebookPageName": "towardsdatascience",
    "instagramName": "towardsdatascience",
    "latest_posts": [
        {
            "id": "1b0ac2162c82",
            "title": "The Grammar of Graphics or how to do ggplot-style plotting in Julia",
            "subtitle": "Introduction to a comparison of Julia graphics packages for statistical plotting",
            "lang": "en",
            "wordCount": 1859,
            "readingTime": 8.415094339622641,
            "creatorId": "8ada39358e9d",
            "createdAit": 1659978176600,
            "updatedAt": 1660332957393,
            "firstPublishedAt": 1660332952367,
            "latestPublishedAt": 1660332952367
        }
    ],
    "trend_posts": [
        {
            "id": "1046b4d045ae",
            "title": "How does science work? It’s all about clones!",
            "subtitle": "Every good scientific experiment that seeks to establish how something works — and not just that it does work — is about making clones.",
            "lang": "en",
            "wordCount": 1446,
            "readingTime": 5.8399371069182395,
            "creatorId": "2fccb851bb5e",
            "createdAit": 1594378469654,
            "updatedAt": 1658462043454,
            "firstPublishedAt": 1658410491299,
            "latestPublishedAt": 1658462040944
        },
        {
            "id": "1059aeab90d",
            "title": "Poisson Distribution Intuition (and derivation)",
            "subtitle": "When to use a Poisson Distribution?",
            "lang": "en",
            "wordCount": 1519,
            "readingTime": 6.682075471698114,
            "creatorId": "1d8994ad0efc",
            "createdAit": 1558295722762,
            "updatedAt": 1639126453609,
            "firstPublishedAt": 1559409576487,
            "latestPublishedAt": 1576096147701
        }
    ],
    "writers": [
        "elisabeth.wittmann"
    ]
}
```

## User

```bash
/api/user/:user
```

### Response

```bash
/api/user/jeff_hilles
{
    "name": "JEFF HILLES",
    "id": "User:d907eed0145d",
    "bio": "Biblical Christian Worldview challenging a deteriorating culture. Follower of Jesus Christ. More at BCWorldview.org. I respond to every comment on my posts.",
    "followerCount": 609,
    "followingCount": 656,
    "posts": [
        {
            "id": "Post:5c505b9d3f99",
            "title": "Calling all Born-Again, Evangelical, Traditional Christians",
            "subtite": "This brief post is intended to FIND the remnant of those who still hold traditional Christian values and viewpoints to support each other.",
            "firstPublishedAt": 1644866408348,
            "latestPublishedAt": 1655132546756,
            "uniqueSlug": "calling-all-born-again-evangelical-traditional-christians-5c505b9d3f99",
            "voterCount": 68,
            "clapCount": 1250
        },
        {
            "id": "Post:6dbcf94433bb",
            "title": "The Death of my Parents",
            "subtite": "The second most impactful event in my spiritual walk.",
            "firstPublishedAt": 1642533642000,
            "latestPublishedAt": 1646932787858,
            "uniqueSlug": "the-death-of-my-parents-6dbcf94433bb",
            "voterCount": 22,
            "clapCount": 342
        },
        {
            "id": "Post:2cc23cf0424",
            "title": "God has no grandchildren. We each need to accept Him personally.",
            "subtite": "Quick Quote — Source — Unknown",
            "firstPublishedAt": 1660283582672,
            "latestPublishedAt": 1660283582672,
            "uniqueSlug": "god-has-no-grandchildren-we-each-need-to-accept-him-personally-2cc23cf0424",
            "voterCount": 2,
            "clapCount": 65
        },
        {
            "id": "Post:caea75ab58be",
            "title": "Christianity vs. christianity — Who’s who in Eternity",
            "subtite": "I have received a number of comments surrounding what it means to be a Christian today. Not only is there a wide range of theological…",
            "firstPublishedAt": 1660256495540,
            "latestPublishedAt": 1660332881021,
            "uniqueSlug": "christianity-vs-christianity-whos-who-in-eternity-caea75ab58be",
            "voterCount": 6,
            "clapCount": 104
        },
        {
            "id": "Post:7e10f3c9e9c8",
            "title": "Evangelism — a focus on the joy of Heaven rather than the fear of Hell.",
            "subtite": "Quick Quote — Source — Jeff Hilles",
            "firstPublishedAt": 1660110799712,
            "latestPublishedAt": 1660110799712,
            "uniqueSlug": "evangelism-a-focus-on-the-joy-of-heaven-rather-than-the-fear-of-hell-7e10f3c9e9c8",
            "voterCount": 1,
            "clapCount": 50
        },
        {
            "id": "Post:373fe52aae22",
            "title": "One cannot truly understand the concept of “Faith”, unless they already have it.",
            "subtite": "Quick Quote — Source — Jeff Hilles",
            "firstPublishedAt": 1660078026318,
            "latestPublishedAt": 1660078026318,
            "uniqueSlug": "one-cannot-truly-understand-the-concept-of-faith-unless-they-already-have-it-373fe52aae22",
            "voterCount": 1,
            "clapCount": 50
        },
        {
            "id": "Post:ede227bbe624",
            "title": "Coercion in Group Evangelism",
            "subtite": "Jeff Hilles 07/22/2022",
            "firstPublishedAt": 1658482695693,
            "latestPublishedAt": 1658840005288,
            "uniqueSlug": "coercion-in-group-evangelism-ede227bbe624",
            "voterCount": 8,
            "clapCount": 116
        },
        {
            "id": "Post:718a16fe0c6b",
            "title": "Artificial Intelligence and the Biblical Christian",
            "subtite": "In my view, as a Biblical Christian, God will close out our world at some point (2 Pet. 3:10). In the past, I have written about many of…",
            "firstPublishedAt": 1658353376111,
            "latestPublishedAt": 1658353376111,
            "uniqueSlug": "artificial-intelligence-and-the-biblical-christian-718a16fe0c6b",
            "voterCount": 5,
            "clapCount": 30
        },
        {
            "id": "Post:911c7156f6fd",
            "title": "Should Christians Trust the Holy Spirit",
            "subtite": "On the surface the obvious answer to this question should be, “yes”. The Holy Spirit is just as much a part of the Trinity as the Father…",
            "firstPublishedAt": 1658137690755,
            "latestPublishedAt": 1658156131366,
            "uniqueSlug": "should-christians-trust-the-holy-spirit-911c7156f6fd",
            "voterCount": 4,
            "clapCount": 80
        },
        {
            "id": "Post:feedd2d1cd2d",
            "title": "Jesus Christ as “Lord & Savior” ?",
            "subtite": "I received a comment from a recent post on the subject of Sanctification. In summary, the commentor asked the question….",
            "firstPublishedAt": 1657877765215,
            "latestPublishedAt": 1657877765215,
            "uniqueSlug": "jesus-christ-as-lord-savior-feedd2d1cd2d",
            "voterCount": 11,
            "clapCount": 104
        }
    ]
}
```

#### With parameter

```bash
/api/user/jeff_hilles?post_num=2
{
    "name": "JEFF HILLES",
    "id": "User:d907eed0145d",
    "bio": "Biblical Christian Worldview challenging a deteriorating culture. Follower of Jesus Christ. More at BCWorldview.org. I respond to every comment on my posts.",
    "followerCount": 609,
    "followingCount": 656,
    "posts": [
        {
            "id": "Post:5c505b9d3f99",
            "title": "Calling all Born-Again, Evangelical, Traditional Christians",
            "subtite": "This brief post is intended to FIND the remnant of those who still hold traditional Christian values and viewpoints to support each other.",
            "firstPublishedAt": 1644866408348,
            "latestPublishedAt": 1655132546756,
            "uniqueSlug": "calling-all-born-again-evangelical-traditional-christians-5c505b9d3f99",
            "voterCount": 68,
            "clapCount": 1250
        },
        {
            "id": "Post:6dbcf94433bb",
            "title": "The Death of my Parents",
            "subtite": "The second most impactful event in my spiritual walk.",
            "firstPublishedAt": 1642533642000,
            "latestPublishedAt": 1646932787858,
            "uniqueSlug": "the-death-of-my-parents-6dbcf94433bb",
            "voterCount": 22,
            "clapCount": 342
        }
    ]
}
```

## Tags

```bash
/api/trend/:tag_name
```

### Response

```bash
/api/trend/programming
{
    "writerCount": 87828,
    "postCountLatest": 497,
    "topWriter": [
        {
            "name": "javinpaul",
            "bio": "I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tips on http://javarevisited.blogspot.com and http://java67.com",
            "customDomain": "javinpaul.medium.com"
        },
        {
            "name": "Bhargav Bachina",
            "bio": "Entrepreneur | 500+ Tech Articles | Subscribe to upcoming Videos https://www.youtube.com/channel/UCWLSuUulkLIQvbMHRUfKM-g | https://www.linkedin.com/in/bachina",
            "customDomain": ""
        },
        {
            "name": "Frank Andrade",
            "bio": "4M+ Views on Medium || Code Less, Earn More: Make money using your Data Science and Programming skills (FREE ebook) 👉 https://frankandrade.ck.page/3b520320ac",
            "customDomain": "frank-andrade.medium.com"
        },
        {
            "name": "Giorgos Myrianthous",
            "bio": "Machine Learning Engineer — I talk about Python, Data and MLOps",
            "customDomain": "gmyrianthous.medium.com"
        },
        {
            "name": "John Au-Yeung",
            "bio": "Web developer. Subscribe to my email list now at https://thewebdev.info/subscribe/. Email me at hohanga@gmail.com",
            "customDomain": "hohanga.medium.com"
        },
        {
            "name": "Soner Yıldırım",
            "bio": "Data Scientist at Wander | linkedin.com/in/soneryildirim/ | twitter.com/snr14",
            "customDomain": "sonery.medium.com"
        }
    ],
    "trendPosts": [
        {
            "title": "Writing Snake in 12 Lines of PyTorch",
            "firstPublishedAt": 1660210535691,
            "latestPublishedAt": 1660224299798,
            "readingTime": 7.323584905660377,
            "uniqueSlug": "writing-snake-in-12-lines-of-pytorch-f7b21ce42a66",
            "clapCount": 91,
            "voterCount": 10,
            "tags": [
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:python"
                },
                {
                    "__ref": "Tag:pytorch"
                },
                {
                    "__ref": "Tag:snaketronics"
                },
                {
                    "__ref": "Tag:tutorial"
                }
            ]
        },
        {
            "title": "11 Python Tricks To Show Off Your Advanced Skills",
            "firstPublishedAt": 1660252123095,
            "latestPublishedAt": 1660252146894,
            "readingTime": 2.686792452830189,
            "uniqueSlug": "11-python-tricks-to-show-off-your-advanced-skills-4ea2d53a9f7c",
            "clapCount": 2,
            "voterCount": 2,
            "tags": [
                {
                    "__ref": "Tag:python"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:coding"
                },
                {
                    "__ref": "Tag:technology"
                },
                {
                    "__ref": "Tag:engineering"
                }
            ]
        },
        {
            "title": "5 Pandas Group By Tricks You Should Know in Python",
            "firstPublishedAt": 1660157287210,
            "latestPublishedAt": 1660157287210,
            "readingTime": 9.904716981132076,
            "uniqueSlug": "5-pandas-group-by-tricks-you-should-know-in-python-f53246c92c94",
            "clapCount": 34,
            "voterCount": 26,
            "tags": [
                {
                    "__ref": "Tag:machine-learning"
                },
                {
                    "__ref": "Tag:data-science"
                },
                {
                    "__ref": "Tag:artificial-intelligence"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:tips-and-tricks"
                }
            ]
        },
        {
            "title": "Kotlin Retry To Make Your Code More Resilient",
            "firstPublishedAt": 1660232562898,
            "latestPublishedAt": 1660232562898,
            "readingTime": 2.7094339622641512,
            "uniqueSlug": "kotlin-retry-to-make-your-code-more-resilient-5b8cc4fac4e4",
            "clapCount": 50,
            "voterCount": 1,
            "tags": [
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:kotlin"
                },
                {
                    "__ref": "Tag:java"
                },
                {
                    "__ref": "Tag:software-development"
                },
                {
                    "__ref": "Tag:android"
                }
            ]
        },
        {
            "title": "Python for Data Scientists: Choose Your Own Adventure",
            "firstPublishedAt": 1660224781486,
            "latestPublishedAt": 1660224781486,
            "readingTime": 2.1433962264150943,
            "uniqueSlug": "python-for-data-scientists-choose-your-own-adventure-7280cc892c9c",
            "clapCount": 93,
            "voterCount": 14,
            "tags": [
                {
                    "__ref": "Tag:towards-data-science"
                },
                {
                    "__ref": "Tag:data-science"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:the-variable"
                },
                {
                    "__ref": "Tag:tds-features"
                }
            ]
        },
        {
            "title": "How to use Go Workspace",
            "firstPublishedAt": 1660169184922,
            "latestPublishedAt": 1660169184922,
            "readingTime": 1.9132075471698113,
            "uniqueSlug": "how-to-use-go-workspace-edf3c3e73974",
            "clapCount": 25,
            "voterCount": 6,
            "tags": [
                {
                    "__ref": "Tag:golang"
                },
                {
                    "__ref": "Tag:development"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:tutorial"
                },
                {
                    "__ref": "Tag:workspace"
                }
            ]
        },
        {
            "title": "So the journey begins",
            "firstPublishedAt": 1660135272885,
            "latestPublishedAt": 1660135272885,
            "readingTime": 3.377358490566038,
            "uniqueSlug": "so-the-journey-begins-7b8ce57ccc22",
            "clapCount": 101,
            "voterCount": 3,
            "tags": [
                {
                    "__ref": "Tag:journey"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:learning"
                },
                {
                    "__ref": "Tag:storytelling"
                }
            ]
        },
        {
            "title": "I tested the Node.js test runner, so you don’t have to.",
            "firstPublishedAt": 1660140180604,
            "latestPublishedAt": 1660140180604,
            "readingTime": 4.021698113207547,
            "uniqueSlug": "i-tested-the-node-js-test-runner-so-you-dont-have-to-958b11db46ef",
            "clapCount": 10,
            "voterCount": 2,
            "tags": [
                {
                    "__ref": "Tag:javascript"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:testing"
                },
                {
                    "__ref": "Tag:nodejs"
                },
                {
                    "__ref": "Tag:testing-tools"
                }
            ]
        },
        {
            "title": "Advanced Python: Achieving High Performance with Code Generation",
            "firstPublishedAt": 1660232572381,
            "latestPublishedAt": 1660232572381,
            "readingTime": 11.415094339622641,
            "uniqueSlug": "advanced-python-achieving-high-performance-with-code-generation-796b177ec79",
            "clapCount": 15,
            "voterCount": 3,
            "tags": [
                {
                    "__ref": "Tag:python"
                },
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:high-performance"
                }
            ]
        },
        {
            "title": "7 JetBrains IDE Themes to Make Your Life Beautiful",
            "firstPublishedAt": 1660154576506,
            "latestPublishedAt": 1660154576506,
            "readingTime": 3.661635220125786,
            "uniqueSlug": "7-jetbrains-ide-themes-to-make-your-life-beautiful-8b66294cd038",
            "clapCount": 12,
            "voterCount": 4,
            "tags": [
                {
                    "__ref": "Tag:programming"
                },
                {
                    "__ref": "Tag:software-development"
                },
                {
                    "__ref": "Tag:software-engineering"
                },
                {
                    "__ref": "Tag:technology"
                },
                {
                    "__ref": "Tag:intellij"
                }
            ]
        }
    ]
}
```

const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
const users = [
    {
        "name": {
            "title": "Miss",
            "first": "Gökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "tinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Mr",
            "first": "AGökçe",
            "last": "AVan Kleij"
        },
        "login": {
            "username": "Atinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "BGökçe",
            "last": "BVan Kleij"
        },
        "login": {
            "username": "Ctinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "DGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "Rtinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "eGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "gtinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "tGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "itinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "eGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "rtinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "kGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "ctinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "cGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "ntinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "mGökçe",
            "last": "mVan Kleij"
        },
        "login": {
            "username": "gtinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "jGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "ltinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "pGökçe",
            "last": "wVan Kleij"
        },
        "login": {
            "username": "wtinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "xGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "ptinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "lGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "rtinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "wGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "htinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
    {
        "name": {
            "title": "Miss",
            "first": "fGökçe",
            "last": "Van Kleij"
        },
        "login": {
            "username": "ytinypeacock140",
        },
        "picture": {
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
        },
    },
]
app.get(`/api`, (req, res) => {
    const results = parseInt(req.query.results);
    let requestedUsers = [];    
    for (let i =0; i < results; i++) {
        requestedUsers.push(users[(Math.floor(Math.random() * users.length))])
    }
    res.status(200).send({results: requestedUsers});
});


app.listen(2222, () => {
    console.log("Connected to server.")
})
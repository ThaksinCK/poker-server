const express = require('express');
const app = express()

const port = 5000;

const test_data = {
    _gameId : '01',
    playerAmout : '3',
    currentBB : '10',
    currentphase : 'flop',
    currentPlayerId : '051fa',
    currentPot : '20',
    bet : "40",
    previousAction : 'call',
    player : [
        {
            _id : "051fa",
            username : 'player01',
            chip : '140',
            currentRole : 'UTG'
        },
        {
            _id : "021ba",
            username : 'player02',
            chip : '140',
            currentRole : 'BB'
        },
        {
            _id : "220fa",
            username : 'player03',
            chip : '140',
            currentRole : 'SB'
        }

    ]
}

app.get('/test' ,(req, res)=>{
    res.json(test_data)
})

app.listen(port, ()=>{console.log(`server started at port:${port}`)})
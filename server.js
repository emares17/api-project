const express = require('express');
const app = express();
const PORT = 3000;

const rappers = {
    '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },
    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    'unknown': {
        'birthName': 'Unknow',
        'birthLocation': 'Unknown',
        'age': 0
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:rapperName', (req, res) => {
    const rapperName = req.params.rapperName.toLowerCase();
    
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers['unknown'])
    }

});

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`);
});
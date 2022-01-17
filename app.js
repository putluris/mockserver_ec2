import express from "express"
import bodyParser from 'body-parser'
import fetch from 'node-fetch'

const app = express();
const PORT = 3000;

app.get('/data', weather)

function weather(request,response){
    response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":278.16,"feels_like":278.16,"temp_min":275.73,"temp_max":281,"pressure":1025,"humidity":78},"visibility":402,"wind":{"speed":0,"deg":0},"clouds":{"all":100},"dt":1642227125,"sys":{"type":2,"id":2012991,"country":"US","sunrise":1642175199,"sunset":1642208235},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}


app.listen(PORT, () => console.log("Hello World"));

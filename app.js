const http = require('http');
const cheerio  = require('cheerio');
const rq = require('request-promise');
const fs = require('fs');
const axios = require('axios')

const request = require('request');
const extractDomain = require('extract-domain');

function checkRedirect() {
        var url = "https://www.houzz.com/products/sofas?ls=2";
        var options = {
            url: url,
            headers: {
                'User-Agent': 'request'
            }
        };
        request(options, function (error, response, body) {
            console.log(response);
            if(response !== undefined){
                let redirectedDomain = extractDomain(response.request.uri.href);
                console.log(redirectedDomain);
                // let writeStream = fs.createWriteStream(redirectedDomain + '.html');
                // writeStream.write(response.body)
                // writeStream.end();
            }
        });
}

module.exports.checkRedirect = checkRedirect;


const options = {
    url: `https://www.houzz.com/products/sofas?ls=2`
}
axios.get('https://www.houzz.com/products/sofas?ls=2').then((response) => {
  // Load the web page source code into a cheerio instance

  fs.writeFile('helloworld.txt', response.data, function (err) {
                if (err) return console.log(err);
                console.log('Data written to file');
              });
  const $ = cheerio.load(response.data);
  checkRedirect();
  
  const products = $('.hz-product-card--small');
// console.log(products);
  for(let i = 0; i < products.length; i++){
     console.log($(products[i]).text());
  }
  
});


// rq(options)
//     .then((data) => {
//         fs.writeFile('helloworld.txt', data, function (err) {
//             if (err) return console.log(err);
//             console.log('Data written to file');
//           });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

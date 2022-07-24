const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const url = 'https://www.theguardian.com/uk'
const url1 = 'https://www.bbc.com/news'
const url2 = 'https://inews.co.uk/category/news/uk'
const url3 = 'https://www.independent.co.uk/'
const url4 = 'https://www.washingtonpost.com/'
const url5 = 'https://www.nbcnews.com/'
const url6 = 'https://www.nationalreview.com/'
const url7 = 'https://www.foxnews.com/'
const url8 = 'https://www.1688.com/'
app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.fc-item__container', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('h3').text()
                const img  =$(this).find('img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url,
                    img
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))
     
})
app.get('/results1', (req, res) => {
    axios(url1)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.gs-c-promo', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('h3').text()
                const desc = $(this).find('p').text()
                const img  =$(this).find('img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    desc,
                    url,
                    img
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))
     
})
app.get('/results2', (req, res) => {
    axios(url2)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.sc-lcoedz', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('h2').text()
                const desc = $(this).find('p').text()
                const img  =$(this).find('amp-img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    desc,
                    url,
                    img
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

        
     
})
app.get('/results3', (req, res) => {
    axios(url3)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.sc-lcoedz', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('h2').text()
                const desc = $(this).find('p').text()
                const img  =$(this).find('amp-img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    desc,
                    url,
                    img
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))




     
})
// END OF UK

// AMERICA BEGINS
    app.get('/results4', (req, res) => {
        axios(url4)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.card', html).each(function () { //<-- cannot be a function expression
                    const title = $(this).find('h2').text()
                    const desc = $(this).find('h3').text()
                    const img  =$(this).find('img').attr('srcset')
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        desc,
                        url,
                        img
                    })
                })
                res.json(articles)
            }).catch(err => console.log(err))




        
    })

    app.get('/results5', (req, res) => {
        axios(url5)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.styles_content__rYCGg', html).each(function () { //<-- cannot be a function expression
                    const title = $(this).find('h2').text()
                    const desc = $(this).find('p').text()
                    const img  =$(this).find('img').attr('src')
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        desc,
                        url,
                        img
                    })
                })
                res.json(articles)
            }).catch(err => console.log(err))




        
    })
    app.get('/results6', (req, res) => {
        axios(url6)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.post-list', html).each(function () { //<-- cannot be a function expression
                    const title = $(this).find('h4').text()
                    const desc = $(this).find('').text()
                    const img  =$(this).find('img').attr('src')
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        desc,
                        url,
                        img
                    })
                })
                res.json(articles)
            }).catch(err => console.log(err))




        
    })
    app.get('/results7', (req, res) => {
        axios(url7)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.content', html).each(function () { //<-- cannot be a function expression
                    const title = $(this).find('h2').text()
                    const desc = $(this).find('').text()
                    const img  =$('picture').find('img').attr('src')
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        desc,
                        url,
                        img
                    })
                })
                res.json(articles)
            }).catch(err => console.log(err))




        
    })
    // SENEGAL
    app.get('/results7', (req, res) => {
        axios(url7)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.content', html).each(function () { //<-- cannot be a function expression
                    const title = $(this).find('h2').text()
                    const desc = $(this).find('').text()
                    const img  =$('picture').find('img').attr('src')
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        desc,
                        url,
                        img
                    })
                })
                res.json(articles)
            }).catch(err => console.log(err))




        
    })
  // 1688
  app.get('/results8', (req, res) => {
    axios(url8)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.grid', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('a').text()
                const desc = $(this).find('a').text()
                const img  =$(this).find('img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    desc,
                    url,
                    img
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))




    
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
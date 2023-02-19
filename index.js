const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
const { json } = require('express/lib/response')
app.use(cors())

const ghanaweb = 'https://www.ghanaweb.com/GhanaHomePage/NewsArchive/'
const yen = 'https://yen.com.gh/latest/'
const graphic = 'https://www.graphic.com.gh/'
const joy = 'https://www.myjoyonline.com/'
const entertainment = 'https://www.ghanaweb.com/GhanaHomePage/entertainment/'
const sports = 'https://www.ghanaweb.com/GhanaHomePage/SportsArchive/'
const thequardian = 'https://www.theguardian.com/uk'
const bbc = 'https://www.bbc.com/news'
const inews = 'https://inews.co.uk/category/news/uk'
const independent = 'https://www.independent.co.uk/'
const washinton = 'https://www.washingtonpost.com/'
const nbc = 'https://www.nbcnews.com/'
const dw = 'https://www.dw.com/en/top-stories/s-9097'
const fox = 'https://www.foxnews.com/'
const france = 'https://www.france24.com/en/'
app.get('/', function (req, res) {
    res.json('This is my webscraper')
})
//  Ghana web
app.get('/results', (req, res) => {
    axios(ghanaweb)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []
console.log(articles.length,"length")
            $('.left_artl_list', html).find('li').each(function () { //<-- cannot be a function expression
                const title = $(this).find('a').attr('title')
                const desc  =$(this).find('a').find('.info').find('p').text()
                const img  =$(this).find('img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url,
                    img,
                  desc
                })
            })
            res.json(articles)
    
        }).catch(err => console.log(err))
     
})

// yen Ghana
app.get('/results1', (req, res) => {
  axios(yen)
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      const articles = []

      $('.l-taxonomy-page-hero__list', html).find('article').each(function() {
        const title = $(this).find('span').text()
        const desc = $(this).find('img').attr("alt")
        const img = $(this).find('img').attr('src')
        const url = $(this).find('a').attr('href')
        articles.push({
          title,
          url,
          img,
          desc
        })
      })

      res.json(articles)

    }).catch(err => console.log(err))
})


// graphic Ghana
app.get('/results2', (req, res) => {
    axios(graphic)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
  
        $('.bd-blockcontent', html).find('li').each(function() {
          const title = $(this).find('h3').text()
          const desc = $(this).find('img').attr("alt")
          const img = $(this).find('img').attr('src')
          const url = $(this).find('a').attr('href')
          articles.push({
            title,
            url,
            img,
            desc
          })
        })
  
        res.json(articles)
  
      }).catch(err => console.log(err))
  })


  // joy Ghana
  app.get('/results3', (req, res) => {
    axios(joy)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
  
        $('.row', html).each(function() {
          const title = $(this).find('a').find('h4').text()
          const desc = $(this).find('img').attr("alt")
          const img = $(this).find('.img-holder').find('a').find('img').attr('dat-src')
          const url = $(this).find('a').attr('href')
          articles.push({
            title,
            url,
            img,
            desc
          })
        })
  
        res.json(articles)
  
      }).catch(err => console.log(err))
  })
  
   // joy Ghana
   app.get('/', function (req, res) {
    res.json('This is my webscraper')
})
//  Ghana web
app.get('/results4', (req, res) => {
    axios(entertainment)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []
console.log(articles.length,"length")
            $('.left_artl_list', html).find('li').each(function () { //<-- cannot be a function expression
                const title = $(this).find('a').attr('title')
                const desc  =$(this).find('a').find('.info').find('p').text()
                const img  =$(this).find('img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url,
                    img,
                  desc
                })
            })
            res.json(articles)
    
        }).catch(err => console.log(err))
     
})

  //  Ghana web
app.get('/results5', (req, res) => {
    axios(sports)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []
console.log(articles.length,"length")
            $('.left_artl_list', html).find('li').each(function () { //<-- cannot be a function expression
                const title = $(this).find('a').attr('title')
                const desc  =$(this).find('a').find('.info').find('p').text()
                const img  =$(this).find('img').attr('src')
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url,
                    img,
                  desc
                })
            })
            res.json(articles)
    
        }).catch(err => console.log(err))
     
})

app.get('/results6', (req, res) => {
    axios(thequardian)
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
app.get('/results7', (req, res) => {
    axios(bbc)
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
app.get('/results8', (req, res) => {
    axios(inews)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.inews__post-section__body', html).each(function () { //<-- cannot be a function expression
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
app.get('/results9', (req, res) => {
    axios(independent)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.sc-7ax485-2', html).each(function () { //<-- cannot be a function expression
                const title = $(this).find('h2').text()
                const desc = $(this).find('h2').text()
                const img  =$(this).find('a').find('amp-img').attr('src')
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
    app.get('/results10', (req, res) => {
        axios(washinton)
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

    app.get('/results11', (req, res) => {
        axios(nbc)
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
    app.get('/results12', (req, res) => {
        axios.get(dw)
          .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []
      
            $('.sc-eXBvqI', html).each(function() {
              const title = $(this).find('a').attr('title')
              const desc = $(this).find('a').text()
              const img = $(this).find('img').attr('src')
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
      
    app.get('/results13', (req, res) => {
        axios(fox)
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
    // France 24
    app.get('/results14', (req, res) => {
        axios(france)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.o-layout-list', html).find('div').each(function () { //<-- cannot be a function expression
                    const title = $(this).find('p').text()
                    const desc = $(this).find('p').text()
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


app.listen(PORT, () => console.log(`server running on PORT http://localhost:${PORT}`))
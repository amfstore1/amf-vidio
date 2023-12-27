import express from 'express'

const app = express()

export const endpoint = app.get('/', (req,res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to Vidio.com API 👋',
        documentation: 'COMING SOON',
        donate: 'https://saweria.co/arimaulana',
        author: '@amfcode_'
    })
})

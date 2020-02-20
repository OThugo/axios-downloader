'use strict'

const Fs= require('fs')
const Path = require('path')
const Axios = require('axios')

 async function download(){
    const url = 'https://unsplash.com/photos/qiMmrWdYZfg/download?force=true'
    const pathh =Path.resolve
    const path = Path.resolve(__dirname, 'files','landscape.jpg')
    const response = await Axios({
        method:"GET",
        url:url,
        responseType:'stream'
    })

    response.data.pipe(Fs.createWriteStream(path))
    return new Promise((resovle,reject)=>{
        response.data.on('end',()=>{
            resolve()   
        })
        response.data.on('error',err =>{
            reject(err)
        })
    })
}

 download()
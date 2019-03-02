#!/usr/bin/env node

const {get}    = require('http')

const target = process.argv[2]

function createRequest(){

        let request = get( target , onResponse )
        request.on('error' , () => {})

        return request
}

function onResponse(response){

    if(response.statusCode == 200 )
    {
        process.exit(1)
    }
  
}


setInterval( createRequest , 100)
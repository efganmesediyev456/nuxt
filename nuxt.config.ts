// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss'],
    app:{
        head:{
            title:'Efgan Mesediyev',
            meta:[
                {
                    name:'sss',
                    content:'salam necesizz'
                }
            ],
            link:[
                {
                    rel:'stylesheet',
                    href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'
                }
            ]
        }
    },
    runtimeConfig:{
        currencyKey:process.env.CURRENCY_API_KEY
    }
})

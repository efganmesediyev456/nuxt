export default defineEventHandler(async (event)=>{
    // const {name} = getQuery(event)
    //
    // const {age}=await readBody(event)
    //


    const {data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=afsNrBa44Igs7uX64H4JvBEM6uReiDFRAVKc7003')
    console.log(data)
    return data
})

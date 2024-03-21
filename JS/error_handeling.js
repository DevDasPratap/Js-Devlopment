// try {
// } catch (error) {
// }finally{
// }

// try {
//     const a = undefined
//     console.log(a[0])
// } catch(error) {
//     console.log(`Catch error handaling get executed: ${error}`)
// }finally{
//     console.log(`Finally alaways get executed`)
// }


try {
    console.log('Srart try')
    console.log(a)
    console.log('End try')
} catch (error) {
    console.log('error: ',error.message)
}finally{
    console.log(`Finally`)
}
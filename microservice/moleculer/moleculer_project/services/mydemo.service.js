module.exports = {
    // service name
    name:"mydemo",
    settings:{},
    dependencies: [], //service dependency 
    actions:{
        // route define
        hello:{
            // rest api
            rest: {
                method: "GET",
                path: "/hello"
            },
            async handler(ctx){ // http://localhost:3000/api/mydemo/hello?name=pratapdas
                return `We have created our route ${ctx.params.name}`
                // return 'My demo function route'
            }
        }
    },
    events:{},
    // life cycle method of service
    created(){},
    stoped(){}
}
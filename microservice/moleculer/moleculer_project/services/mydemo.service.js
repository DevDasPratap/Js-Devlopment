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
            async handler(){
                return 'My demo function route'
            }
        }
    },
    events:{},
    // life cycle method of service
    created(){},
    stoped(){}
}
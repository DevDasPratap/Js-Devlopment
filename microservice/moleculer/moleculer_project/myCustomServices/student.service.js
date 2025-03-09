module.exports ={
    name: 'studentService',
    setting:{},
    dependencies:['techerService'],
    actions:{
        testing:{ // http://localhost:3000/api/studentService/testing?name=pratapdas
            rest:{},
            async handler(ctx){
                let nodeId = this.broker.nodeID
                return `We have created our route ${ctx.params.name} ${nodeId}`
            }
        }
    },
    methods:{},
    events:{
        "student.assign":{
            group: "student",
            handler(ctx){
                console.log('Student assigned event recived: '+ ctx.params.payload) // emit "student.assign" --payload "pratapdas"
            }
        }
    },
    created(){}
}
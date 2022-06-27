export default function EmpAction(){
    return ({
        type: 'EmpAction',
        payload: [
             {
             id:1,
             name:'javeed',
             email:'javeed@gmail.com'
            },
            {
                id:2,
                name:'ruby',
                email:'ruby@gmail.com'
               },
               {
                id:3,
                name:'sam',
                email:'sam@gmail.com'
               }
        ]
    })
}
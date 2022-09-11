import dato from './dato'
let isOk = true;

const getItem=(id)=>{
return new Promise((resolve,rejet)=>{
    setTimeout(()=>{
       if(isOk){
       console.log(dato.find(item => item.id === parseInt(id)))
        resolve(dato.find(item => item.id === parseInt(id)))
        }else rejet('error')
    },2000)
})
}



export default getItem
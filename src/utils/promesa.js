import datos from './dato'
let isOk = true;
const promesa = () =>{
    return new Promise((resolve,rejet)=>{
        setTimeout(() => {
            
            if (isOk) {
                resolve(datos)
            }else{
                rejet('error en la ejecucion')
            }
        }, 1000);
    })
}

export default promesa
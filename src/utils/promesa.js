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
        }, 500);
    })
}

export default promesa
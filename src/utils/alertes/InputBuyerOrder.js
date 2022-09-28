
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const InputBuyerOrder =async()=>{
  const { value: formValues } = await MySwal.fire({
    title: 'Ingrese sus datos para el envio',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Email">'+
      '<input id="swal-input3" class="swal2-input" placeholder="Telefono">',
    focusConfirm: false,
    
    preConfirm: () => {
      let buyer= [{
       "name" : document.getElementById('swal-input1').value,
        "email" :document.getElementById('swal-input2').value,
       "cel": document.getElementById('swal-input3').value
      }]

      // console.log('buyer en ------>',buyer);
      // if(buyer.nombre === " "){
      //   MySwal.fire(`Entered nombre: ${buyer[0].nombre}`)
      // }else if(buyer.emial === " "){
      //   MySwal.fire(`Entered email: ${buyer[0].emial}`)
      // }else if(buyer.cel === " "){
      //   MySwal.fire(`Entered cel: ${buyer[0].cel}`)
      // }else {
        return buyer
      // }
      // return undefined
    }
  })
  
  // if (formValues) {
  //   Swal.fire(JSON.stringify(formValues))
  // }
  
    return formValues
   }


export default InputBuyerOrder
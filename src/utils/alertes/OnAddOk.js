import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

async function  OnAddOk() {
    console.log('entre en OnAddOh');
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Producto Agregado'
      })
  
    //   MySwal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title:`producto agregado`,
    //     showConfirmButton: false,
    //     timer: 1500,
    //   })


}

export default OnAddOk;


import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


 function  OnAddOk(error) {

  if (error.error) {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title:`${error.message}`,
        showConfirmButton: false,
        timer: 5000,
      })
    
  }else{
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
        title: `${error.message}`
      })

  }
  


}

export default OnAddOk;


import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
function OrderOk(msg) {
  MySwal.fire({
    title: 'Se a generado su Orden',
    text: `nro ${msg}`,
    imageUrl: '/img/card/TOYOTA_ISO_940x720.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

export default OrderOk
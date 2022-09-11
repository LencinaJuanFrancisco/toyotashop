const datos = [
  {
      id:1,
    bran:'Toyota Corolla',
    type:'sedan',
    imge:'/img/card/autoCorolla.png',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price:100000,
    stock:50,
    detailTrans:'Manual',
    detailPuerta: 5,
    detailMotor:'Híbrida 2,5 litros de 4 cilindros y 16 válvulas con Regulación Variable de Válvulas con Inteligencia 14,0 con 218 CV de potencia máxima',
    detailPax:5,
    versionTitle1:"2.0 XLI MT",
    versionDescription1:"Llantas de aleación de 16pulgadas; Audio con pantalla táctil de 8 pulgadas; Conectividad Apple Car Play® & Android Auto®; Faros antiniebla LED; Caja manual de 6 velocidades",
    versionTitle2:"2.0 XLI CVT",
    versionDescription2:"Llantas de aleación de 16 pulgadas; Audio con pantalla táctil de 8 pulgadas; Conectividad Apple Car Play® & Android Auto®; Faros antiniebla LED; Caja CVT de 10 velocidades",
    versionTitle3:"2.0 SEG CVT",
    versionDescription3:"Llantas de aleación de 17 pulgadas; Ópticas traseras Full LED; Tapizado de cuero natural y ecológico; Cargador inalámbrico para celulares; Sensor de lluvia; Toyota Safety Sense",

  },
  {
    id:2,
    bran:'Corolla CROSS',
    type:'suv',
    imge:'/img/card/autoCorollaCross.png',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price:120000,
    stock:25,
    detailTrans:'Automático de 10 velocidades',
    detailPuerta: 5,
    detailMotor:'Dynamic Force 2.0L Dual VVT-i, 4 cilindros en línea con 16 válvulas DOHC con 170 CV de potencia máxima',
    detailPax:5,
    versionTitle1:"2.0 XLI CVT",
    versionDescription1:"Llantas de aleación de 17 pulgadas; Audio con pantalla táctil de 8 pulgadas; Conectividad Apple Car Play® & Android Auto®; Cámara de estacionamiento; Caja CVT de 10 velocidades",
    versionTitle2:"2.0 XEI CVT",
    versionDescription2:"Llantas de aleación de 18 pulgadas; Faros delanteros Bi-LED; Techo solar eléctrico; Volante revestido en cuero; Sensores de estacionamiento; Control de velocidad crucero",
    versionTitle3:"2.0 SEG CVT",
    versionDescription3:"Tapizado de cuero natural y ecológico; Display de información múltiple de 7 pulgadas; Cargador inalámbrico para celulares; Sensor de lluvia; Toyota Safety Sense",

  },
  {
      id:3,
    bran:'Hilux Cabina Doble DX 4x2',
    type:'pickup',
    imge:'/img/card/autoHilluk.png',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price:1250000,
    stock:15,
    detailTrans:'Manual de 6 velocidades',
    detailPuerta: 4,
    detailMotor:'Motor 2,4 litros de 4 cilindros y 16 válvulas con 150 CV de potencia máxima',
    detailPax:5,
    versionTitle1:"DX 4x2",
    versionDescription1:"Audio con pantalla táctil de 8”; 7 airbags; Levantacristales eléctricos y espejos exteriores con regulación eléctrica; Motor 2,4l de 150 CV",
    versionTitle2:"SR 4x2",
    versionDescription2:"Llantas de aleación 17”; Guardabarros extendidos; Display de información múltiple con pantalla a color de 4,2” (TFT) ; Volante forrado en cuero natural",
    versionTitle3:"SRV 4x2",
    versionDescription3:"Faros delanteros Bi-LED; Faros traseros de LED; Navegador satelital (GPS) y TV digital; Estribos laterales; Climatizador automático digital Bizona",

  },
  {
    id:4,
    bran:'Prius HV 1.8 CVT',
    type:'hibrido',
    imge:'/img/card/autoPRIUS.png',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price:2500000,
    stock:10,
    detailTrans:'Automático',
    detailPuerta: 5,
    detailMotor:'Motorización Híbrida 1,8 litros de 4 cilindros y 16 válvulas con Regulación Variable de Válvulas con Inteligencia 13,0 con 122 CV de potencia máxima',
    detailPax:5,
    versionTitle1:"HV 1.8 CVT",
    versionDescription1:"Audio con pantalla táctil de 8”; 7 airbags; Levantacristales eléctricos y espejos exteriores con regulación eléctrica; Motor 2,4l de 150 CV",
    versionTitle2:"SR 4x2",
    versionDescription2:"Llantas de aleación 17”; Guardabarros extendidos; Display de información múltiple con pantalla a color de 4,2” (TFT) ; Volante forrado en cuero natural",
    versionTitle3:"SRV 4x2",
    versionDescription3:"Faros delanteros Bi-LED; Faros traseros de LED; Navegador satelital (GPS) y TV digital; Estribos laterales; Climatizador automático digital Bizona",

  },
  {
      id:5,
      bran:'Corolla Hybrid HEV 1.8 XEI eCVT',
      type:'hibrido',
      imge:'/img/card/corola-hibrid.png',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price:200000,
    stock:5,
    detailTrans:'Automático eCVT',
    detailPuerta: 4,
    detailMotor:'Motorización Híbrida 1,8 litros de 4 cilindros y 16 válvulas con Regulación Variable de Válvulas con Inteligencia 13,0 con 122 CV de potencia máxim',
    detailPax:5,

    versionTitle1:"HEV 1.8 XEI eCVT",
    versionDescription1:"Sistema de encendido por botón y Sistema de ingreso inteligente; Modos de conducción normal, ECO, SPORT y EV; Caja automática controlada electrónicamente",

    versionTitle2:"HEV 1.8 SEG eCVT",
    versionDescription2:"Ópticas traseras Full LED; Tapizado de cuero natural y ecológico; Cargador inalámbrico para celulares; Toyota Safety Sense; Caja automática controlada electrónicamente",

    versionTitle3:"Porta tablet",
    versionDescription3:'Soporte para colocar el dispositivo de entretenimiento, hacia las plazas traseras. Incluye Soporte Porta Tablet y Bolso.',
    }
]
export default datos;
import React ,{useContext}from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {CartConext} from '../context/CartContex'

function ItemDetail({ item }) {

  const {addItem} = useContext(CartConext)

  const [hayProduct,setHayProduct]= useState(false)




  const onAdd=(count)=>{
   
    //console.log(`agregaste al ${count} carrito`);
    addItem(item,count)
    if (count > 0) setHayProduct(true)
    
  }
 
  return (
    <>
      <div className="container my-5">
        <h1 className="">{item.bran}</h1>
        <div className="row ">
          <div className="col">
            <div className="row">
              <img
                src={item.imge}
                className="rounded mx-auto d-block"
                width={300}
                alt="..."
              ></img>
            </div>
            <div className="row">
              <p>caracteristicas</p>
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">transmisión - {item.detailTrans}</li>
                  <li className="list-group-item">puertas - {item.detailPuerta} </li>
                  <li className="list-group-item">motor - {item.detailMotor} </li>
                  <li className="list-group-item">pasajeros - {item.detailPax}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <p> Versiones </p>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item bg-danger.bg-gradient">
                <h2 class="accordion-header " id="headingOne">
                  <button
                    class="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {item.versionTitle1}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>{item.versionDescription1}</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >s
                   { item.versionTitle2}
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                   {item.versionDescription2}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                   {item.versionTitle3}
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                  {item.versionDescription3}
                  </div>
                </div>
              </div>
            </div>
            {
              hayProduct ? <Link to='/cart'><button className="btn btn-success mt-5"> ir al carrito</button></Link> :
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} ></ItemCount>
             
            }
          </div>
        </div>
        <div className="row">
          <h4 className="my-5 text-decoration-underline ">Terminos y condiciones</h4>
          <p className="lh-1 fs-6 fw-lighter"> Precio sugerido en los concesionarios oficiales Toyota de la República Argentina, de contado, válido del 01/09/2022 al 30/09/2022. Vehículos, Modelos y/o Versiones sujetos a Stock. El precio incluye IVA. No incluye gastos de flete, formularios de inscripción, de patentamiento, transferencia ni seguro del vehículo ni la incidencia de los impuestos sobre dichos conceptos. Tampoco incluye el costo de mano de obra para la instalación de accesorios. Si un precio se informase incorrectamente (por ejemplo, por error de transcripción), el concesionario lo modificará al tomar conocimiento del error, de modo tal de informar el correcto. El concesionario podrá rechazar o cancelar cualquier pedido de compra del vehículo cuyo precio, por error, sea incorrecto. El simulador de préstamos es una herramienta orientativa y no constituye una oferta por parte de TOYOTA COMPAÑÍA FINANCIERA DE ARGENTINA S.A. (“TCFA”) Los valores informados son meramente estimativos y podrían existir variaciones al momento de concretar la operación. El otorgamiento del crédito se encuentra sujeto a aprobación crediticia del solicitante por parte de TCFA. Imagen no contractual. Consultar precios vigentes, según equipamiento y versión y demás condiciones en un concesionario oficial Toyota o en TCFA al teléfono 011 6090-7900 o en el sitio www.toyota.com.ar. TCFA es una Sociedad Anónima constituida bajo las leyes de la República Argentina, cuyos accionistas limitan su responsabilidad a la integración de las acciones suscriptas de acuerdo a la Ley 19.550. Ningún accionista extranjero responde en exceso de la citada integración accionaria por las operaciones concertadas por TCFA (ley 25.738). CUIT: 30-70900042-6. Domicilio de TCFA: Olga Cossettini 363, 3er. Piso, (C1107CCG), Ciudad Autónoma de Buenos Aires. TCFA actúa como Agente Institorio conforme inscripción en el Registro de Agentes Institorios N°188, de conformidad con la Resolución de la Superintendencia de Seguros de la Nación (SSN) N°40.913 de fecha 13/10/2017. Los seguros son emitidos por: ACE SEGUROS S.A., ALLIANZ ARGENTINA COMPAÑIA DE SEGUROS S.A., CAJA DE SEGUROS S.A., ORBIS COMPAÑÍA ARGENTINA DE SEGUROS S.A., QBE SEGUROS LA BUENOS AIRES SOCIEDAD ANONIMA, SAN CRISTÓBAL SOCIEDAD MUTUAL DE SEGUROS GENERALES, SANCOR COOPERATIVA DE SEGUROS LIMITADA, SEGUROS SURA S.A. El precio y el esquema de financiación publicitados constituyen un mero ejemplo estimado sobre el capital a financiar ingresado por el usuario y en función del plazo de financiación escogido y de las tasas de interés vigentes. El importe de cada cuota/canon proyectada incluye: amortización de capital, interés, I.V.A. sobre los intereses, seguro de vida y seguro del automotor. No incluye el impuesto establecido por ley 25.413. Las cuotas/cánones de los ejemplos están calculadas de acuerdo con el sistema francés de amortización progresiva de capital. TASA FIJA. Plazo 24: TASA NOMINAL ANUAL (TNA): 42,90%. TASA EFECTIVA ANUAL (TEA): 52,43%. COSTO FINANCIERO TOTAL (CFT): 66,23%. CFT sin impuestos: 52,43% Plazo 36: TASA NOMINAL ANUAL (TNA): 39,90%. TASA EFECTIVA ANUAL (TEA): 48,07%. COSTO FINANCIERO TOTAL (CFT): 60,53%. CFT sin impuestos: 48,07%. Plazo 48: TASA NOMINAL ANUAL (TNA): 39,90%. TASA EFECTIVA ANUAL (TEA): 48,07%. COSTO FINANCIERO TOTAL (CFT): 60,53%. CFT sin impuestos: 48,07%. Aquellos sujetos no comprendidos en la circular “A” 5460 del BCRA deberán abonar un costo mensual equivalente a $1.290 por cada cuota más IVA. Valores estimados para una persona física, entre los 21 y los 65 años, consumidor final. Crédito integrante de la cartera de consumo/comercial. Financiación otorgada por TOYOTA COMPAÑÍA FINANCIERA DE ARGENTINA S.A. El valor del seguro podrá registrar variaciones. No incluye el Impuesto a las Transacciones Financieras (ITF) que equivale al 1.2% del capital a financiar. Este impuesto se cobra por única vez en la primera cuota del préstamo prendario (Ley 25.413 y sus modificatorias). El valor del seguro podrá registrar variaciones. Solo puede solicitarse la entrega en parte de pago de vehículos usados de las marcas, modelos y años previstos en e-toyota.com.ar. El valor informado para el vehículo usado ofrecido en parte de pago es una mera estimación hecha en base a la cotización promedio en base a los valores del mercado, asume que el vehículo no registra deudas (por ejemplo, de patentes, multas ni créditos) y está sujeto a ajustes luego de la inspección técnica del vehículo y de su documentación. El concesionario podrá rechazar la solicitud de entrega del vehículo usado como parte de pago. El precio de los accesorios no incluye el costo de la mano de obra para su instalación. La descripción de los vehículos, sus especificaciones técnicas y el equipamiento indicado en cada publicación son informados por el concesionario. Toyota Argentina S.A. no asume responsabilidad alguna respecto de la veracidad o exactitud de los datos indicados ni interviene en la determinación de los precios ni en la operación de compraventa, que será concretada entre el cliente comprador y el concesionario vendedor. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP </p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

const botonSalas = document.getElementById ("botonSalas")
const botonComedores = document.getElementById ("botonComedores")
const botonCamas = document.getElementById ("botonCamas")
const botonEstanterias = document.getElementById ("botonEstanterias")
const botonVarios = document.getElementById ("botonVarios")
const botonCocina = document.getElementById("botonCocina")
const botonSalas1 = document.getElementById("boton-salas1")
const botonRecarga = document.getElementById("botonRecarga")
const menuBarras = document.getElementById("boton-barras")

const paginaPrincipal = document.getElementById("principal")
const paginaSalas = document.getElementById("salas")
const paginaComedores = document.getElementById("comedores")
const paginaCamas = document.getElementById("camas")
const paginaEstanterias = document.getElementById("estanterias")
const paginaVarios = document.getElementById("varios")
const paginaCocina = document.getElementById("cocina")

const cuadroSalas = document.getElementById("boton-cuadro-salas")
const cuadroComedor = document.getElementById("boton-cuadro-comedores")
const cuadroCamas = document.getElementById("boton-cuadro-camas")
const cuadroEstanterias = document.getElementById("boton-cuadro-estanteria")
const cuadroVarios = document.getElementById("boton-cuadro-varios")
const cuadroCocina = document.getElementById("boton-cuadro-cocina")

const salasProducto1 = document.getElementById("salas-producto1")
const salasProducto2 = document.getElementById("salas-producto2")
const salasProducto3 = document.getElementById("salas-producto3")
const salasProducto4 = document.getElementById("salas-producto4")
const comedoresProducto1 = document.getElementById("comedores-producto1")
const comedoresProducto2 = document.getElementById("comedores-producto2")
const comedoresProducto3 = document.getElementById("comedores-producto3")
const comedoresProducto4 = document.getElementById("comedores-producto4")
const camasProducto1 = document.getElementById("camas-producto1")
const camasProducto2 = document.getElementById("camas-producto2")
const camasProducto3 = document.getElementById("camas-producto3")
const camasProducto4 = document.getElementById("camas-producto4")
const estanteriasProducto1 = document.getElementById("estanterias-producto1")
const estanteriasProducto2 = document.getElementById("estanterias-producto2")
const estanteriasProducto3 = document.getElementById("estanterias-producto3")
const estanteriasProducto4 = document.getElementById("estanterias-producto4")
const variosProducto1 = document.getElementById("varios-producto1")
const variosProducto2 = document.getElementById("varios-producto2")
const variosProducto3 = document.getElementById("varios-producto3")
const variosProducto4 = document.getElementById("varios-producto4")
const cocinaProducto1 = document.getElementById("cocina-producto1")
const cocinaProducto2 = document.getElementById("cocina-producto2")
const cocinaProducto3 = document.getElementById("cocina-producto3")
const cocinaProducto4 = document.getElementById("cocina-producto4")

const botonSalasProducto1 = document.getElementById("boton-salas1")
const botonSalasProducto2 = document.getElementById("boton-salas2")
const botonSalasProducto3 = document.getElementById("boton-salas3")
const botonSalasProducto4 = document.getElementById("boton-salas4")
const botonComedoresProducto1 = document.getElementById("boton-comedores1")
const botonComedoresProducto2 = document.getElementById("boton-comedores2")
const botonComedoresProducto3 = document.getElementById("boton-comedores3")
const botonComedoresProducto4 = document.getElementById("boton-comedores4")
const botonCamasProducto1 = document.getElementById("boton-camas1")
const botonCamasProducto2 = document.getElementById("boton-camas2")
const botonCamasProducto3 = document.getElementById("boton-camas3")
const botonCamasProducto4 = document.getElementById("boton-camas4")
const botonEstanteriasProducto1 = document.getElementById("boton-estanterias1")
const botonEstanteriasProducto2 = document.getElementById("boton-estanterias2")
const botonEstanteriasProducto3 = document.getElementById("boton-estanterias3")
const botonEstanteriasProducto4 = document.getElementById("boton-estanterias4")
const botonVariosProducto1 = document.getElementById("boton-varios1")
const botonVariosProducto2 = document.getElementById("boton-varios2")
const botonVariosProducto3 = document.getElementById("boton-varios3")
const botonVariosProducto4 = document.getElementById("boton-varios4")
const botonCocinaProducto1 = document.getElementById("boton-cocina1")
const botonCocinaProducto2 = document.getElementById("boton-cocina2")
const botonCocinaProducto3 = document.getElementById("boton-cocina3")
const botonCocinaProducto4 = document.getElementById("boton-cocina4")

//paginaPrincipal.style.display = "none"
paginaSalas.style.display = "none"
paginaComedores.style.display = "none"
paginaCamas.style.display = "none"
paginaEstanterias.style.display = "none"
paginaVarios.style.display = "none"
paginaCocina.style.display = "none"

salasProducto1.style.display = "none"
salasProducto2.style.display = "none"
salasProducto3.style.display = "none"
salasProducto4.style.display = "none"
comedoresProducto1.style.display = "none"
comedoresProducto2.style.display = "none"
comedoresProducto3.style.display = "none"
comedoresProducto4.style.display = "none"
camasProducto1.style.display = "none"
camasProducto2.style.display = "none"
camasProducto3.style.display = "none"
camasProducto4.style.display = "none"
estanteriasProducto1.style.display = "none"
estanteriasProducto2.style.display = "none"
estanteriasProducto3.style.display = "none"
estanteriasProducto4.style.display = "none"
variosProducto1.style.display = "none"
variosProducto2.style.display = "none"
variosProducto3.style.display = "none"
variosProducto4.style.display = "none"
cocinaProducto1.style.display = "none"
cocinaProducto2.style.display = "none"
cocinaProducto3.style.display = "none"
cocinaProducto4.style.display = "none"

botonSalas.addEventListener("click", salas)
botonComedores.addEventListener("click", comedores)
botonCamas.addEventListener("click", camas)
botonEstanterias.addEventListener("click", estanterias)
botonVarios.addEventListener("click", varios)
botonCocina.addEventListener("click", cocina)
botonRecarga.addEventListener("click", reiniciar)

botonSalasProducto1.addEventListener("click", salasP1)
botonSalasProducto2.addEventListener("click", salasP2)
botonSalasProducto3.addEventListener("click", salasP3)
botonSalasProducto4.addEventListener("click", salasP4)
botonComedoresProducto1.addEventListener("click", comedoresP1)
botonComedoresProducto2.addEventListener("click", comedoresP2)
botonComedoresProducto3.addEventListener("click", comedoresP3)
botonComedoresProducto4.addEventListener("click", comedoresP4)
botonCamasProducto1.addEventListener("click", camasP1)
botonCamasProducto2.addEventListener("click", camasP2)
botonCamasProducto3.addEventListener("click", camasP3)
botonCamasProducto4.addEventListener("click", camasP4)
botonEstanteriasProducto1.addEventListener("click", estanteriasP1)
botonEstanteriasProducto2.addEventListener("click", estanteriasP2)
botonEstanteriasProducto3.addEventListener("click", estanteriasP3)
botonEstanteriasProducto4.addEventListener("click", estanteriasP4)
botonVariosProducto1.addEventListener("click", variosP1)
botonVariosProducto2.addEventListener("click", variosP2)
botonVariosProducto3.addEventListener("click", variosP3)
botonVariosProducto4.addEventListener("click", variosP4)
botonCocinaProducto1.addEventListener("click", cocinaP1)
botonCocinaProducto2.addEventListener("click", cocinaP2)
botonCocinaProducto3.addEventListener("click", cocinaP3)
botonCocinaProducto4.addEventListener("click", cocinaP4)

cuadroSalas.addEventListener("click", salas)
cuadroComedor.addEventListener("click", comedores)
cuadroCamas.addEventListener("click", camas)
cuadroEstanterias.addEventListener("click", estanterias)
cuadroVarios.addEventListener("click", varios)
cuadroCocina.addEventListener("click", cocina)

function salas () {
    paginaPrincipal.style.display = "none"
    paginaSalas.style.display = "flex"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function comedores() {
    paginaPrincipal.style.display = "none"
    paginaComedores.style.display = "flex"
    paginaSalas.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function camas () {
    paginaPrincipal.style.display = "none"
    paginaCamas.style.display = "flex"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function estanterias () {
    paginaPrincipal.style.display = "none"
    paginaEstanterias.style.display = "flex"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function varios () {
    paginaPrincipal.style.display = "none"
    paginaVarios.style.display = "flex"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function cocina () {
    paginaPrincipal.style.display = "none"
    paginaCocina.style.display = "flex"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function reiniciar () {
    location.reload()
}

function salasP1 () {
    paginaPrincipal.style.display = "none"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    salasProducto1.style.display = "flex"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function salasP2 () {
    paginaPrincipal.style.display = "none"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "flex"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function salasP3 () {
    paginaPrincipal.style.display = "none"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto4.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "flex"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function salasP4 () {
    paginaPrincipal.style.display = "none"
    paginaSalas.style.display = "none"
    paginaComedores.style.display = "none"
    paginaCamas.style.display = "none"
    paginaEstanterias.style.display = "none"
    paginaVarios.style.display = "none"
    paginaCocina.style.display = "none"
    salasProducto1.style.display = "none"
    salasProducto2.style.display = "none"
    salasProducto3.style.display = "none"
    salasProducto4.style.display = "flex"
    comedoresProducto1.style.display = "none"
    comedoresProducto2.style.display = "none"
    comedoresProducto3.style.display = "none"
    comedoresProducto4.style.display = "none"
    camasProducto1.style.display = "none"
    camasProducto2.style.display = "none"
    camasProducto3.style.display = "none"
    camasProducto4.style.display = "none"
    estanteriasProducto1.style.display = "none"
    estanteriasProducto2.style.display = "none"
    estanteriasProducto3.style.display = "none"
    estanteriasProducto4.style.display = "none"
    variosProducto1.style.display = "none"
    variosProducto2.style.display = "none"
    variosProducto3.style.display = "none"
    variosProducto4.style.display = "none"
    cocinaProducto1.style.display = "none"
    cocinaProducto2.style.display = "none"
    cocinaProducto3.style.display = "none"
    cocinaProducto4.style.display = "none"
}

function comedoresP1 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "flex"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function comedoresP2 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "flex"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function comedoresP3 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "flex"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function comedoresP4 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "flex"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function camasP1 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "flex"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function camasP2 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "flex"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function camasP3 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "flex"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function camasP4 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "flex"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function estanteriasP1 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "flex"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function estanteriasP2 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "flex"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function estanteriasP3 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "flex"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function estanteriasP4 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "flex"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function variosP1 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "flex"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function variosP2 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "flex"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function variosP3 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "flex"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function variosP4 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "flex"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function cocinaP1 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "flex"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function cocinaP2 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "flex"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "none"
}

function cocinaP3 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "flex"
  cocinaProducto4.style.display = "none"
}

function cocinaP4 () {
  paginaPrincipal.style.display = "none"
  paginaSalas.style.display = "none"
  paginaComedores.style.display = "none"
  paginaCamas.style.display = "none"
  paginaEstanterias.style.display = "none"
  paginaVarios.style.display = "none"
  paginaCocina.style.display = "none"
  salasProducto1.style.display = "none"
  salasProducto2.style.display = "none"
  salasProducto3.style.display = "none"
  salasProducto4.style.display = "none"
  comedoresProducto1.style.display = "none"
  comedoresProducto2.style.display = "none"
  comedoresProducto3.style.display = "none"
  comedoresProducto4.style.display = "none"
  camasProducto1.style.display = "none"
  camasProducto2.style.display = "none"
  camasProducto3.style.display = "none"
  camasProducto4.style.display = "none"
  estanteriasProducto1.style.display = "none"
  estanteriasProducto2.style.display = "none"
  estanteriasProducto3.style.display = "none"
  estanteriasProducto4.style.display = "none"
  variosProducto1.style.display = "none"
  variosProducto2.style.display = "none"
  variosProducto3.style.display = "none"
  variosProducto4.style.display = "none"
  cocinaProducto1.style.display = "none"
  cocinaProducto2.style.display = "none"
  cocinaProducto3.style.display = "none"
  cocinaProducto4.style.display = "flex"
}

//Galeria de imagenes del producto 1 de salas
const imagenesSalas1 = ["./imagenesmuebles/sala1.png", "./imagenesmuebles/sala1.2.png", "./imagenesmuebles/sala1.2.3.png"];
let indiceImagen = 0;

const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");
const imagenActual = document.querySelector("#imagenActual");

botonAnterior.addEventListener("click", () => {
  indiceImagen--;
  if (indiceImagen < 0) {
    indiceImagen = imagenesSalas1.length - 1;
  }
  imagenActual.src = imagenesSalas1[indiceImagen];
});

botonSiguiente.addEventListener("click", () => {
  indiceImagen++;
  if (indiceImagen >= imagenesSalas1.length) {
    indiceImagen = 0;
  }
  imagenActual.src = imagenesSalas1[indiceImagen];
});

//Galeria de imagenes del producto 2 de salas
const imagenesSalas2 = ["./imagenesmuebles/sala2.png", "./imagenesmuebles/sala2.1.png", "./imagenesmuebles/sala2.1.2.png"];
let indiceImagen2 = 0;

const botonAnterior2 = document.querySelector("#anterior2");
const botonSiguiente2 = document.querySelector("#siguiente2");
const imagenActual2 = document.querySelector("#imagenActual2");

botonAnterior2.addEventListener("click", () => {
  indiceImagen2--;
  if (indiceImagen2 < 0) {
    indiceImagen2 = imagenesSalas2.length - 1;
  }
  imagenActual2.src = imagenesSalas2[indiceImagen2];
});

botonSiguiente2.addEventListener("click", () => {
  indiceImagen2++;
  if (indiceImagen2 >= imagenesSalas2.length) {
    indiceImagen2 = 0;
  }
  imagenActual2.src = imagenesSalas2[indiceImagen2];
});

//Galeria de imagenes del producto 3 de salas
const imagenesSalas3 = ["./imagenesmuebles/sala3.png", "./imagenesmuebles/sala3.1.png", "./imagenesmuebles/sala3.1.2.png"];
let indiceImagen3 = 0;

const botonAnterior3 = document.querySelector("#anterior3");
const botonSiguiente3 = document.querySelector("#siguiente3");
const imagenActual3 = document.querySelector("#imagenActual3");

botonAnterior3.addEventListener("click", () => {
  indiceImagen3--;
  if (indiceImagen3 < 0) {
    indiceImagen3 = imagenesSalas3.length - 1;
  }
  imagenActual3.src = imagenesSalas3[indiceImagen3];
});

botonSiguiente3.addEventListener("click", () => {
  indiceImagen3++;
  if (indiceImagen3 >= imagenesSalas3.length) {
    indiceImagen3 = 0;
  }
  imagenActual3.src = imagenesSalas3[indiceImagen3];
});

//Galeria de imagenes del producto 4 de salas
const imagenesSalas4 = ["./imagenesmuebles/sala4.png", "./imagenesmuebles/sala4.1.png"];
let indiceImagen4 = 0;

const botonAnterior4 = document.querySelector("#anterior4");
const botonSiguiente4 = document.querySelector("#siguiente4");
const imagenActual4 = document.querySelector("#imagenActual4");

botonAnterior4.addEventListener("click", () => {
  indiceImagen4--;
  if (indiceImagen4 < 0) {
    indiceImagen4 = imagenesSalas4.length - 1;
  }
  imagenActual4.src = imagenesSalas4[indiceImagen4];
});

botonSiguiente4.addEventListener("click", () => {
  indiceImagen4++;
  if (indiceImagen4 >= imagenesSalas4.length) {
    indiceImagen4 = 0;
  }
  imagenActual4.src = imagenesSalas4[indiceImagen4];
});



//Galeria de imagenes del producto 1 de comedores
const imagenesComedores1 = ["./imagenesmuebles/comedor1.png", "./imagenesmuebles/comedor1.1.png", "./imagenesmuebles/comedor1.2.png"];
let indiceImagenc1 = 0;

const botonAnteriorc1 = document.querySelector("#anteriorc1");
const botonSiguientec1 = document.querySelector("#siguientec1");
const imagenActualc1 = document.querySelector("#imagenActualc1");

botonAnteriorc1.addEventListener("click", () => {
  indiceImagenc1--;
  if (indiceImagenc1 < 0) {
    indiceImagenc1 = imagenesComedores1.length - 1;
  }
  imagenActualc1.src = imagenesComedores1[indiceImagenc1];
});

botonSiguientec1.addEventListener("click", () => {
  indiceImagenc1++;
  if (indiceImagenc1 >= imagenesComedores1.length) {
    indiceImagenc1 = 0;
  }
  imagenActualc1.src = imagenesComedores1[indiceImagenc1];
});

//Galeria de imagenes del producto 2 de comedores
const imagenesComedores2 = ["./imagenesmuebles/comedor2.png", "./imagenesmuebles/comedor2.1.png"];
let indiceImagenc2 = 0;

const botonAnteriorc2 = document.querySelector("#anteriorc2");
const botonSiguientec2 = document.querySelector("#siguientec2");
const imagenActualc2 = document.querySelector("#imagenActualc2");

botonAnteriorc2.addEventListener("click", () => {
  indiceImagenc2--;
  if (indiceImagenc2 < 0) {
    indiceImagenc2 = imagenesComedores2.length - 1;
  }
  imagenActualc2.src = imagenesComedores2[indiceImagenc2];
});

botonSiguientec2.addEventListener("click", () => {
  indiceImagenc2++;
  if (indiceImagenc2 >= imagenesComedores2.length) {
    indiceImagenc2 = 0;
  }
  imagenActualc2.src = imagenesComedores2[indiceImagenc2];
});

//Galeria de imagenes del producto 3 de comedores
const imagenesComedores3 = ["./imagenesmuebles/comedor3.png"];
let indiceImagenc3 = 0;

const botonAnteriorc3 = document.querySelector("#anteriorc3");
const botonSiguientec3 = document.querySelector("#siguientec3");
const imagenActualc3 = document.querySelector("#imagenActualc3");

botonAnteriorc3.addEventListener("click", () => {
  indiceImagenc3--;
  if (indiceImagenc3 < 0) {
    indiceImagenc3 = imagenesComedores3.length - 1;
  }
  imagenActualc3.src = imagenesComedores3[indiceImagenc3];
});

botonSiguientec3.addEventListener("click", () => {
  indiceImagenc3++;
  if (indiceImagenc3 >= imagenesComedores3.length) {
    indiceImagenc3 = 0;
  }
  imagenActualc3.src = imagenesComedores3[indiceImagenc3];
});

//Galeria de imagenes del producto 4 de comedores
const imagenesComedores4 = ["./imagenesmuebles/comedor4.png", "./imagenesmuebles/comedor4.1.png", "./imagenesmuebles/comedor4.2.png"];
let indiceImagenc4 = 0;

const botonAnteriorc4 = document.querySelector("#anteriorc4");
const botonSiguientec4 = document.querySelector("#siguientec4");
const imagenActualc4 = document.querySelector("#imagenActualc4");

botonAnteriorc4.addEventListener("click", () => {
  indiceImagenc4--;
  if (indiceImagenc4 < 0) {
    indiceImagenc4 = imagenesComedores4.length - 1;
  }
  imagenActualc4.src = imagenesComedores4[indiceImagenc4];
});

botonSiguientec4.addEventListener("click", () => {
  indiceImagenc4++;
  if (indiceImagenc4 >= imagenesComedores4.length) {
    indiceImagenc4 = 0;
  }
  imagenActualc4.src = imagenesComedores4[indiceImagenc4];
});

//Galeria de imagenes del producto 1 de camas
const imagenesCamas1 = ["./imagenesmuebles/cama1.png", "./imagenesmuebles/cama1.1.png"];
let indiceImagenca1 = 0;

const botonAnteriorca1 = document.querySelector("#anteriorca1");
const botonSiguienteca1 = document.querySelector("#siguienteca1");
const imagenActualca1 = document.querySelector("#imagenActualca1");

botonAnteriorca1.addEventListener("click", () => {
  indiceImagenca1--;
  if (indiceImagenca1 < 0) {
    indiceImagenca1 = imagenesCamas1.length - 1;
  }
  imagenActualca1.src = imagenesCamas1[indiceImagenca1];
});

botonSiguienteca1.addEventListener("click", () => {
  indiceImagenca1++;
  if (indiceImagenca1 >= imagenesCamas1.length) {
    indiceImagenca1 = 0;
  }
  imagenActualca1.src = imagenesCamas1[indiceImagenca1];
});

//Galeria de imagenes del producto 2 de camas
const imagenesCamas2 = ["./imagenesmuebles/cama2.png", "./imagenesmuebles/cama2.1.png"];
let indiceImagenca2 = 0;

const botonAnteriorca2 = document.querySelector("#anteriorca2");
const botonSiguienteca2 = document.querySelector("#siguienteca2");
const imagenActualca2 = document.querySelector("#imagenActualca2");

botonAnteriorca2.addEventListener("click", () => {
  indiceImagenca2--;
  if (indiceImagenca2 < 0) {
    indiceImagenca2 = imagenesCamas2.length - 1;
  }
  imagenActualca2.src = imagenesCamas2[indiceImagenca2];
});

botonSiguienteca2.addEventListener("click", () => {
  indiceImagenca2++;
  if (indiceImagenca2 >= imagenesCamas2.length) {
    indiceImagenca2 = 0;
  }
  imagenActualca2.src = imagenesCamas2[indiceImagenca2];
});

//Galeria de imagenes del producto 3 de camas
const imagenesCamas3 = ["./imagenesmuebles/cama3.png", "./imagenesmuebles/cama3.1.png"];
let indiceImagenca3 = 0;

const botonAnteriorca3 = document.querySelector("#anteriorca3");
const botonSiguienteca3 = document.querySelector("#siguienteca3");
const imagenActualca3 = document.querySelector("#imagenActualca3");

botonAnteriorca3.addEventListener("click", () => {
  indiceImagenca3--;
  if (indiceImagenca3 < 0) {
    indiceImagenca3 = imagenesCamas3.length - 1;
  }
  imagenActualca3.src = imagenesCamas3[indiceImagenca3];
});

botonSiguienteca3.addEventListener("click", () => {
  indiceImagenca3++;
  if (indiceImagenca3 >= imagenesCamas3.length) {
    indiceImagenca3 = 0;
  }
  imagenActualca3.src = imagenesCamas3[indiceImagenca3];
});

//Galeria de imagenes del producto 4 de camas
const imagenesCamas4 = ["./imagenesmuebles/cama4.png", "./imagenesmuebles/cama4.1.png"];
let indiceImagenca4 = 0;

const botonAnteriorca4 = document.querySelector("#anteriorca4");
const botonSiguienteca4 = document.querySelector("#siguienteca4");
const imagenActualca4 = document.querySelector("#imagenActualca4");

botonAnteriorca4.addEventListener("click", () => {
  indiceImagenca4--;
  if (indiceImagenca4 < 0) {
    indiceImagenca4 = imagenesCamas4.length - 1;
  }
  imagenActualca4.src = imagenesCamas4[indiceImagenca4];
});

botonSiguienteca4.addEventListener("click", () => {
  indiceImagenca4++;
  if (indiceImagenca4 >= imagenesCamas4.length) {
    indiceImagenca4 = 0;
  }
  imagenActualca4.src = imagenesCamas4[indiceImagenca4];
});

//Galeria de imagenes del producto 1 de estanterias
const imagenesEstanterias1 = ["./imagenesmuebles/estanteria1.png", "./imagenesmuebles/estanteria1.1.png"];
let indiceImagene1 = 0;

const botonAnteriore1 = document.querySelector("#anteriore1");
const botonSiguientee1 = document.querySelector("#siguientee1");
const imagenActuale1 = document.querySelector("#imagenActuale1");

botonAnteriore1.addEventListener("click", () => {
  indiceImagene1--;
  if (indiceImagene1 < 0) {
    indiceImagene1 = imagenesEstanterias1.length - 1;
  }
  imagenActuale1.src = imagenesEstanterias1[indiceImagene1];
});

botonSiguientee1.addEventListener("click", () => {
  indiceImagene1++;
  if (indiceImagene1 >= imagenesEstanterias1.length) {
    indiceImagene1 = 0;
  }
  imagenActuale1.src = imagenesEstanterias1[indiceImagene1];
});

//Galeria de imagenes del producto 2 de estanterias
const imagenesEstanterias2 = ["./imagenesmuebles/estanteria2.png", "./imagenesmuebles/estanteria2.1.png"];
let indiceImagene2 = 0;

const botonAnteriore2 = document.querySelector("#anteriore2");
const botonSiguientee2 = document.querySelector("#siguientee2");
const imagenActuale2 = document.querySelector("#imagenActuale2");

botonAnteriore2.addEventListener("click", () => {
  indiceImagene2--;
  if (indiceImagene2 < 0) {
    indiceImagene2 = imagenesEstanterias2.length - 2;
  }
  imagenActuale2.src = imagenesEstanterias2[indiceImagene2];
});

botonSiguientee2.addEventListener("click", () => {
  indiceImagene2++;
  if (indiceImagene2 >= imagenesEstanterias2.length) {
    indiceImagene2 = 0;
  }
  imagenActuale2.src = imagenesEstanterias2[indiceImagene2];
});

//Galeria de imagenes del producto 3 de estanterias
const imagenesEstanterias3 = ["./imagenesmuebles/estanteria3.png", "./imagenesmuebles/estanteria3.1.png"];
let indiceImagene3 = 0;

const botonAnteriore3 = document.querySelector("#anteriore3");
const botonSiguientee3 = document.querySelector("#siguientee3");
const imagenActuale3 = document.querySelector("#imagenActuale3");

botonAnteriore3.addEventListener("click", () => {
  indiceImagene3--;
  if (indiceImagene3 < 0) {
    indiceImagene3 = imagenesEstanterias3.length - 3;
  }
  imagenActuale3.src = imagenesEstanterias3[indiceImagene3];
});

botonSiguientee3.addEventListener("click", () => {
  indiceImagene3++;
  if (indiceImagene3 >= imagenesEstanterias3.length) {
    indiceImagene3 = 0;
  }
  imagenActuale3.src = imagenesEstanterias3[indiceImagene3];
});

//Galeria de imagenes del producto 4 de estanterias
const imagenesEstanterias4 = ["./imagenesmuebles/estanteria4.png", "./imagenesmuebles/estanteria4.1.png"];
let indiceImagene4 = 0;

const botonAnteriore4 = document.querySelector("#anteriore4");
const botonSiguientee4 = document.querySelector("#siguientee4");
const imagenActuale4 = document.querySelector("#imagenActuale4");

botonAnteriore4.addEventListener("click", () => {
  indiceImagene4--;
  if (indiceImagene4 < 0) {
    indiceImagene4 = imagenesEstanterias4.length - 4;
  }
  imagenActuale4.src = imagenesEstanterias4[indiceImagene4];
});

botonSiguientee4.addEventListener("click", () => {
  indiceImagene4++;
  if (indiceImagene4 >= imagenesEstanterias4.length) {
    indiceImagene4 = 0;
  }
  imagenActuale4.src = imagenesEstanterias4[indiceImagene4];
});

//Galeria de imagenes del producto 1 de varios
const imagenesVarios1 = ["./imagenesmuebles/varios1.png", "./imagenesmuebles/varios1.1.png"];
let indiceImagenv1 = 0;

const botonAnteriorv1 = document.querySelector("#anteriorv1");
const botonSiguientev1 = document.querySelector("#siguientev1");
const imagenActualv1 = document.querySelector("#imagenActualv1");

botonAnteriorv1.addEventListener("click", () => {
  indiceImagenv1--;
  if (indiceImagenv1 < 0) {
    indiceImagenv1 = imagenesVarios1.length - 4;
  }
  imagenActualv1.src = imagenesVarios1[indiceImagenv1];
});

botonSiguientev1.addEventListener("click", () => {
  indiceImagenv1++;
  if (indiceImagenv1 >= imagenesVarios1.length) {
    indiceImagenv1 = 0;
  }
  imagenActualv1.src = imagenesVarios1[indiceImagenv1];
});

//Galeria de imagenes del producto 2 de varios
const imagenesVarios2 = ["./imagenesmuebles/varios2.png", "./imagenesmuebles/varios2.1.png"];
let indiceImagenv2 = 0;

const botonAnteriorv2 = document.querySelector("#anteriorv2");
const botonSiguientev2 = document.querySelector("#siguientev2");
const imagenActualv2 = document.querySelector("#imagenActualv2");

botonAnteriorv2.addEventListener("click", () => {
  indiceImagenv2--;
  if (indiceImagenv2 < 0) {
    indiceImagenv2 = imagenesVarios2.length - 4;
  }
  imagenActualv2.src = imagenesVarios2[indiceImagenv2];
});

botonSiguientev2.addEventListener("click", () => {
  indiceImagenv2++;
  if (indiceImagenv2 >= imagenesVarios2.length) {
    indiceImagenv2 = 0;
  }
  imagenActualv2.src = imagenesVarios2[indiceImagenv2];
});

//Galeria de imagenes del producto 3 de varios
const imagenesVarios3 = ["./imagenesmuebles/varios3.png", "./imagenesmuebles/varios3.1.png"];
let indiceImagenv3 = 0;

const botonAnteriorv3 = document.querySelector("#anteriorv3");
const botonSiguientev3 = document.querySelector("#siguientev3");
const imagenActualv3 = document.querySelector("#imagenActualv3");

botonAnteriorv3.addEventListener("click", () => {
  indiceImagenv3--;
  if (indiceImagenv3 < 0) {
    indiceImagenv3 = imagenesVarios3.length - 4;
  }
  imagenActualv3.src = imagenesVarios3[indiceImagenv3];
});

botonSiguientev3.addEventListener("click", () => {
  indiceImagenv3++;
  if (indiceImagenv3 >= imagenesVarios3.length) {
    indiceImagenv3 = 0;
  }
  imagenActualv3.src = imagenesVarios3[indiceImagenv3];
});

//Galeria de imagenes del producto 4 de varios
const imagenesVarios4 = ["./imagenesmuebles/varios4.png", "./imagenesmuebles/varios4.1.png"];
let indiceImagenv4 = 0;

const botonAnteriorv4 = document.querySelector("#anteriorv4");
const botonSiguientev4 = document.querySelector("#siguientev4");
const imagenActualv4 = document.querySelector("#imagenActualv4");

botonAnteriorv4.addEventListener("click", () => {
  indiceImagenv4--;
  if (indiceImagenv4 < 0) {
    indiceImagenv4 = imagenesVarios4.length - 4;
  }
  imagenActualv4.src = imagenesVarios4[indiceImagenv4];
});

botonSiguientev4.addEventListener("click", () => {
  indiceImagenv4++;
  if (indiceImagenv4 >= imagenesVarios4.length) {
    indiceImagenv4 = 0;
  }
  imagenActualv4.src = imagenesVarios4[indiceImagenv4];
});

//Galeria de imagenes del producto 1 de cocina
const imagenesCocina1 = ["./imagenesmuebles/cocina1.png", "./imagenesmuebles/cocina1.1.png", "./imagenesmuebles/cocina1.2.jpg"];
let indiceImagenco1 = 0;

const botonAnteriorco1 = document.querySelector("#anteriorco1");
const botonSiguienteco1 = document.querySelector("#siguienteco1");
const imagenActualco1 = document.querySelector("#imagenActualco1");

botonAnteriorco1.addEventListener("click", () => {
  indiceImagenco1--;
  if (indiceImagenco1 < 0) {
    indiceImagenco1 = imagenesCocina1.length - 4;
  }
  imagenActualco1.src = imagenesCocina1[indiceImagenco1];
});

botonSiguienteco1.addEventListener("click", () => {
  indiceImagenco1++;
  if (indiceImagenco1 >= imagenesCocina1.length) {
    indiceImagenco1 = 0;
  }
  imagenActualco1.src = imagenesCocina1[indiceImagenco1];
});

//Galeria de imagenes del producto 2 de cocina
const imagenesCocina2 = ["./imagenesmuebles/cocina2.png", "./imagenesmuebles/cocina2.1.png", "./imagenesmuebles/cocina2.2.jpg"];
let indiceImagenco2 = 0;

const botonAnteriorco2 = document.querySelector("#anteriorco2");
const botonSiguienteco2 = document.querySelector("#siguienteco2");
const imagenActualco2 = document.querySelector("#imagenActualco2");

botonAnteriorco2.addEventListener("click", () => {
  indiceImagenco2--;
  if (indiceImagenco2 < 0) {
    indiceImagenco2 = imagenesCocina2.length - 4;
  }
  imagenActualco2.src = imagenesCocina2[indiceImagenco2];
});

botonSiguienteco2.addEventListener("click", () => {
  indiceImagenco2++;
  if (indiceImagenco2 >= imagenesCocina2.length) {
    indiceImagenco2 = 0;
  }
  imagenActualco2.src = imagenesCocina2[indiceImagenco2];
});

//Galeria de imagenes del producto 3 de cocina
const imagenesCocina3 = ["./imagenesmuebles/cocina3.png", "./imagenesmuebles/cocina3.1.png", "./imagenesmuebles/cocina3.2.jpg"];
let indiceImagenco3 = 0;

const botonAnteriorco3 = document.querySelector("#anteriorco3");
const botonSiguienteco3 = document.querySelector("#siguienteco3");
const imagenActualco3 = document.querySelector("#imagenActualco3");

botonAnteriorco3.addEventListener("click", () => {
  indiceImagenco3--;
  if (indiceImagenco3 < 0) {
    indiceImagenco3 = imagenesCocina3.length - 4;
  }
  imagenActualco3.src = imagenesCocina3[indiceImagenco3];
});

botonSiguienteco3.addEventListener("click", () => {
  indiceImagenco3++;
  if (indiceImagenco3 >= imagenesCocina3.length) {
    indiceImagenco3 = 0;
  }
  imagenActualco3.src = imagenesCocina3[indiceImagenco3];
});

//Galeria de imagenes del producto 4 de cocina
const imagenesCocina4 = ["./imagenesmuebles/cocina4.png", "./imagenesmuebles/cocina4.1.png", "./imagenesmuebles/cocina4.2.jpg"];
let indiceImagenco4 = 0;

const botonAnteriorco4 = document.querySelector("#anteriorco4");
const botonSiguienteco4 = document.querySelector("#siguienteco4");
const imagenActualco4 = document.querySelector("#imagenActualco4");

botonAnteriorco4.addEventListener("click", () => {
  indiceImagenco4--;
  if (indiceImagenco4 < 0) {
    indiceImagenco4 = imagenesCocina4.length - 4;
  }
  imagenActualco4.src = imagenesCocina4[indiceImagenco4];
});

botonSiguienteco4.addEventListener("click", () => {
  indiceImagenco4++;
  if (indiceImagenco4 >= imagenesCocina4.length) {
    indiceImagenco4 = 0;
  }
  imagenActualco4.src = imagenesCocina4[indiceImagenco4];
});
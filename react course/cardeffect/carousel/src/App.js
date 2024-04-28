import React from "react";
import './App.css';



function App() {

/*--------------------Vars--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------Contants--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------Get Z--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------Items--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------Animate--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------Click on Items--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*--------------------Handlers--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------Listeners--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

  return (
     <>    
<div className="carousel">

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Paris</div>

			<img src="https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Warsaw</div>
			<img src="https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Madrid</div>
			<img src="https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Sydney</div>
			<img src="https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Istanbul</div>
			<img src="https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Prague</div>
			<img src="https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Munich</div>
			<img src="https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Venice</div>
			<img src="https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=" alt="card-effect" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Oslo</div>
			<img src="https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=" alt="card-effect" />
		</div>
	</div>
	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">London</div>
			<img src="https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=" alt="card-effect" />
		</div>
	</div>
</div>

<div className="layout">
	<div className="box">High-end, full-service<br />visual content creation</div>
</div>

<div className="cursor"></div>
<div className="cursor cursor2"></div>
     </>
  );
}

export default App;

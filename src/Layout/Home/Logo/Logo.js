import React, { useEffect, useRef } from 'react'
import './Logo.scss'
import ME4 from '../../../assets/me images/me1.jpg'
import gsap from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {

	const bgRef = useRef()
	const outLineLogoRef = useRef()
	const solidLogoRef = useRef()

	useEffect(() => {
		gsap.registerPlugin(DrawSVGPlugin)

		gsap.timeline()
			.to(bgRef.current, {
				duration: 1,
				opacity:1,
			})
			.from(outLineLogoRef.current, {
				drawSVG:0,
				duration: 20,
			})
		gsap.fromTo(solidLogoRef.current, {
			opacity:0,
		}, {
			opacity: 1,
			delay: 4,
			duration:4,
		})
	},[])

  return (
	<div className='logo-container' ref={bgRef}>
		  <img ref={solidLogoRef} className='solid-logo' src={ ME4 } alt='S' />
		  <svg
			  width='559pt'
			  height='897pt'
			  version='1.0'
			  viewBox='0 0 559 897'
			  xmlns='http://www.w3.org/2000/svg'
		  >
			  <g
				  className='svg-container'
				  transform='translate(0 457) scale(.1 -.1)'
				  fill='none'
			  >
				  <path ref={outLineLogoRef} d='m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-61-60-145-137-'/>
			  </g>
			  
		  </svg>
	</div>
  )
}

export default Logo

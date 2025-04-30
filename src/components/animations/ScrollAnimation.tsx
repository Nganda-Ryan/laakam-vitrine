"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AOSAnimationSide } from '@/types';

interface ScrollAnimationProps {
    children: React.ReactNode; // Contenu du composant
    animation: AOSAnimationSide; // Animation stricte
  }

  const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, animation }) => {
    useEffect(() => {
      AOS.init({
        offset: 20, // Décalage par rapport au viewport (en pixels)
        duration: 500, // Durée des animations (en millisecondes)
        easing: "ease-in-out-quad", // Courbe d'accélération des animations
        delay: 10, // Délai avant le démarrage des animations (en ms)
        once: false, // Si true, l'animation ne se déclenche qu'une fois
        mirror: false, // Si true, l'animation s'applique aussi lors du scroll vers le haut
        anchorPlacement: "top-bottom", // Déclenche l'animation quand le haut de l'élément atteint le bas du viewport
      });
    }, []);
  
    return (
      <div  data-aos={animation} className='transition-all duration-300'>
        {children}
      </div >
    );
  };
  
  export default ScrollAnimation;
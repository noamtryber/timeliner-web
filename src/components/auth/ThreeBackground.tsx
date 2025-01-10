import { useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    const container = document.getElementById('three-container');
    if (container) {
      container.appendChild(renderer.domElement);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#9b87f5',
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 3;
    
    let mouseX = 0;
    let mouseY = 0;
    
    const animateParticles = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    
    document.addEventListener('mousemove', animateParticles);
    
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y = mouseX * 0.0001;
      particlesMesh.rotation.x = mouseY * 0.0001;
      particlesMesh.rotation.z += 0.001;
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', animateParticles);
      window.removeEventListener('resize', handleResize);
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="three-container" className="absolute inset-0 pointer-events-none" />;
};

export default ThreeBackground;
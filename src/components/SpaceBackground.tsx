import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    
    // Style the canvas element
    const canvas = rendererRef.current.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    
    containerRef.current.appendChild(canvas);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
      velocities[i / 3] = Math.random() * 0.1;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.3,
      transparent: true,
      opacity: 1.0,
      sizeAttenuation: true,
    });

    starsRef.current = new THREE.Points(starsGeometry, starsMaterial);
    sceneRef.current.add(starsRef.current);

    // Animation
    const animate = () => {
      if (!starsRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      requestAnimationFrame(animate);

      // Rotate stars
      starsRef.current.rotation.y += 0.001;
      starsRef.current.rotation.x += 0.0005;

      // Update star positions
      const positions = starsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += velocities[i / 3] * 0.5;
        if (positions[i + 2] > 50) {
          positions[i + 2] = -50;
        }
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        const canvas = rendererRef.current.domElement;
        if (containerRef.current && canvas && containerRef.current.contains(canvas)) {
          containerRef.current.removeChild(canvas);
        }
      }
      if (starsRef.current) {
        starsRef.current.geometry.dispose();
        (starsRef.current.material as THREE.Material).dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #000000 0%, #0a0f1e 50%, #0f172a 100%)'
      }}
    />
  );
};

export default SpaceBackground;

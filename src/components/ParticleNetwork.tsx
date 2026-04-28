import { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  count: number;
  clickPos: { x: number; y: number } | null;
}

const ParticleSystem = ({ count, clickPos }: ParticleSystemProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  // Generate initial particle positions and velocities
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
      
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities };
  }, [count]);

  // Animation loop
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    // Color transition (cycles through gradient)
    if (materialRef.current) {
      const hue = (time * 0.05) % 1; // Slow color cycle
      const color = new THREE.Color();
      color.setHSL(0.68 + hue * 0.1, 0.75, 0.59); // Purple to pink gradient
      materialRef.current.color = color;
    }
    
    // Update particle positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Click explosion effect
      if (clickPos) {
        const dx = positions[i3] - clickPos.x;
        const dy = positions[i3 + 1] - clickPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 3) {
          const force = (3 - distance) / 3;
          particlesData.velocities[i3] += (dx / distance) * force * 0.1;
          particlesData.velocities[i3 + 1] += (dy / distance) * force * 0.1;
        }
      }
      
      // Gentle floating motion
      positions[i3] += particlesData.velocities[i3];
      positions[i3 + 1] += particlesData.velocities[i3 + 1] + Math.sin(time * 0.5 + i) * 0.0005;
      positions[i3 + 2] += particlesData.velocities[i3 + 2];
      
      // Boundary check - wrap around
      if (positions[i3] > 7.5) particlesData.velocities[i3] = -Math.abs(particlesData.velocities[i3]);
      if (positions[i3] < -7.5) particlesData.velocities[i3] = Math.abs(particlesData.velocities[i3]);
      if (positions[i3 + 1] > 7.5) particlesData.velocities[i3 + 1] = -Math.abs(particlesData.velocities[i3 + 1]);
      if (positions[i3 + 1] < -7.5) particlesData.velocities[i3 + 1] = Math.abs(particlesData.velocities[i3 + 1]);
      if (positions[i3 + 2] > 4) particlesData.velocities[i3 + 2] = -Math.abs(particlesData.velocities[i3 + 2]);
      if (positions[i3 + 2] < -4) particlesData.velocities[i3 + 2] = Math.abs(particlesData.velocities[i3 + 2]);
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Update connection lines
    if (linesRef.current) {
      const linePositions: number[] = [];
      const maxDistance = 2.0;
      
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < maxDistance) {
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }
      
      if (linePositions.length > 0) {
        linesRef.current.geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
      }
    }
    
    // Very gentle rotation
    pointsRef.current.rotation.y = time * 0.02;
  });

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particlesData.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={materialRef}
          size={0.08}
          color="#7c6fe0"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#7c6fe0"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

const ParticleNetwork = () => {
  // Detect if mobile (simple version)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 50 : 120;
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setClickPosition({ x: x * 8, y: y * 8 });
    
    // Reset after explosion
    setTimeout(() => setClickPosition(null), 1000);
  }, []);

  return (
    <div 
      className="absolute inset-0 cursor-pointer" 
      style={{ zIndex: 0 }}
      onClick={handleClick}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={isMobile ? 1 : 1.5}
      >
        <ParticleSystem count={particleCount} clickPos={clickPosition} />
      </Canvas>
    </div>
  );
};

export default ParticleNetwork;
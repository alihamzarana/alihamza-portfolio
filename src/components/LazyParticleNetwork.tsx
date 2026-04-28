import { lazy, Suspense } from 'react';

// Lazy load the ParticleNetwork component
const ParticleNetwork = lazy(() => import('./ParticleNetwork'));

// Loading fallback component
const ParticleNetworkFallback = () => (
  <div className="absolute inset-0" style={{ zIndex: 0 }}>
    <div className="absolute inset-0 gradient-hero animate-gradient opacity-50"></div>
  </div>
);

const LazyParticleNetwork = () => {
  return (
    <Suspense fallback={<ParticleNetworkFallback />}>
      <ParticleNetwork />
    </Suspense>
  );
};

export default LazyParticleNetwork;

'use client';
import { useRive } from '@rive-app/react-canvas';
import { useEffect } from 'react';

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: '/cat.riv',
    stateMachines: 'bumpy', // must match exactly
    autoplay: false,
  });

  useEffect(() => {
    if (rive) {
      console.log("Rive loaded ✅", rive);
    }
  }, [rive]);

  return (
    <div style={{ width: 300, height: 300 }}>
      <RiveComponent
        style={{ width: "100%", height: "100%" }}
        onMouseEnter={() => rive && rive.play("bumpy")}
        onMouseLeave={() => rive && rive.pause("bumpy")}
      />
    </div>
  );
}

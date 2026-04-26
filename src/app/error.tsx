'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: any, reset: () => void }) {
  useEffect(() => {
    console.error("Critical Runtime Error:", error);
  }, [error]);

  return (
    <div className="section-padding flex min-h-[70vh] items-center justify-center text-center">
      <div className="container-max">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Something Went Wrong</h2>
        <p className="section-subtitle mb-12">An unexpected error occurred. Our engineers have been notified.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
           <button onClick={reset} className="btn-primary">Try Again Refresh</button>
           <Link href="/" className="btn-secondary">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

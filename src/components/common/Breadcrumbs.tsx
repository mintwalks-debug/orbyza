'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path !== '');

  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-medium text-brand-primary/60">
      <Link href="/" className="hover:text-brand-dark">Home</Link>

      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;
        const label = path.replace(/-/g, ' ');

        return (
          <React.Fragment key={href}>
            <ChevronRight size={14} className="text-brand-primary/30" />
            {isLast ? (
              <span className="text-brand-dark font-bold">
                {label}
              </span>
            ) : (
              <Link href={href} className="hover:text-brand-dark">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

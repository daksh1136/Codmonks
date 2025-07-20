import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ children, href, activeClassName, className, ...props }: any) => {
  const router = useRouter();
  const isActive = router.pathname === href; // Or router.asPath === href for full URL match

  // Combine default className with activeClassName if active
  const combinedClassName = `${className || ''} ${isActive ? activeClassName : ''}`.trim();

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
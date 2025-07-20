import { useRouter } from 'next/router';
import Link from 'next/link';

interface ActiveLinkProps {
  children: React.ReactNode; // 'children' can be any valid React element, string, array, etc.
  href: string; // The link destination
  activeClassName?: string; // Optional class for active state
  className?: string; // Optional default/inactive class
  // You can add other standard <a> tag props or Link component props here if needed,
  // or use React.ComponentProps for a more comprehensive type.
}

const ActiveLink = ({ children, href, activeClassName, className, ...props } : ActiveLinkProps) => {
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
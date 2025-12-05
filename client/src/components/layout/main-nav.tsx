import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Activity, AlertTriangle, Upload, Settings, User } from 'lucide-react';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const navItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: Home,
    },
    {
      href: '/telemetry',
      label: 'Telemetry',
      icon: Activity,
    },
    {
      href: '/anomalies',
      label: 'Anomalies',
      icon: AlertTriangle,
    },
    {
      href: '/upload',
      label: 'Upload',
      icon: Upload,
    },
  ];

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

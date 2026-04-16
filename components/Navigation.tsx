// Navigation component - renders top navigation bar
'use client';

import { NavigationItem } from '@/lib/types';

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav className="bg-volvo-blue text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">VOLVO</div>
        <ul className="flex gap-8">
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white hover:text-gray-200 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

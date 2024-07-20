'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import type {pathnames} from '@/config';
import {Link} from '@/navigation';

export default function NavigationLink<
  Pathname extends keyof typeof pathnames
>({href, ...rest}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors rounded-xl uppercase bg-slate-700',
        isActive ? 'text-white' : 'text-yellow-500 hover:text-gray-200 hover:bg-red-800 hover:border-2'
      )}
      href={href}
      {...rest}
    />
  );
}

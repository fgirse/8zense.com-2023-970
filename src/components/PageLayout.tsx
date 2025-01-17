import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';
import ExternalLink from './ExternalLink';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
  const t = useTranslations('PageLayout');

  return (
    <div className="relative flex grow flex-col items-center bg-slate-850 py-0">
    
      <div className="container relative flex grow flex-col items-center px-4">
        
        <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
      
      </div>
    </div>
  );
}

import { useSearchParams } from 'next/navigation';
import React, { ReactNode } from 'react';

type ProtectedSectionProps = {
  children: ReactNode;
  type: 'professional' | 'enterprise' | '' | null;
};

const ProtectedSection: React.FC<ProtectedSectionProps> = ({
  children,
  type,
}) => {
  const searchParams = useSearchParams();

  const urlType = searchParams.get('type') as
    | 'professional'
    | 'enterprise'
    | ''
    | null;

  const parsedType =
    urlType === '' || urlType === null ? 'professional' : 'enterprise';

  if (type === 'enterprise') {
    console.log({ type, parsedType, urlType, children });
    console.log(parsedType === type);
  }

  if (parsedType === type) return <>{children}</>;
  else return null;
};

export default ProtectedSection;

import LogoDarkImage from '@documenso/assets/logo_dark.png';
import LogoLightImage from '@documenso/assets/logo.png';
import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ alt = 'BringSpark Logo', className, ...props }: LogoProps) => {
  const lightClassName = ['dark:hidden', className].filter(Boolean).join(' ');
  const darkClassName = ['hidden dark:block', className].filter(Boolean).join(' ');

  return (
    <>
      <img src={LogoLightImage} alt={alt} className={lightClassName} {...props} />
      <img src={LogoDarkImage} alt={alt} className={darkClassName} {...props} />
    </>
  );
};

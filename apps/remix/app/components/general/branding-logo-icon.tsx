import LogoIconImage from '@documenso/assets/logo_icon.png';
import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ alt = 'BringSpark Logo', ...props }: LogoProps) => {
  return <img src={LogoIconImage} alt={alt} {...props} />;
};

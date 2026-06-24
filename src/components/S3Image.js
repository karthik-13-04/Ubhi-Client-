import Image from 'next/image';
import { getImageUrl } from '../lib/s3';

export default function S3Image({ src, alt, width, height, className, fill, unoptimized = true, ...props }) {
  const imageUrl = src ? getImageUrl(src) : '/assets/favicon.svg';
  
  if (fill) {
    return (
      <Image 
        src={imageUrl} 
        alt={alt || ''} 
        fill 
        className={className} 
        unoptimized={unoptimized}
        {...props} 
      />
    );
  }
  
  return (
    <Image 
      src={imageUrl} 
      alt={alt || ''} 
      width={width || 500} 
      height={height || 500} 
      className={className} 
      unoptimized={unoptimized}
      {...props} 
    />
  );
}

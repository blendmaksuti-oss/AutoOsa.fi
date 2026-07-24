import Image, { type ImageProps, type StaticImageData } from 'next/image';

type AppImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src?: string | null | StaticImageData;
  alt?: string;
  fallbackSrc?: string;
};

export function AppImage({ src, alt, className, fallbackSrc = '/images/placeholders/part-placeholder.svg', ...rest }: AppImageProps) {
  const imageSrc = src ?? fallbackSrc;

  return (
    <Image
      src={imageSrc}
      alt={alt ?? 'Image'}
      className={className}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      {...rest}
    />
  );
}

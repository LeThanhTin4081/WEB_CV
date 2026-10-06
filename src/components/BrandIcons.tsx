type IconProps = { size?: number; className?: string };

const CdnIcon = ({
  src,
  size = 18,
  className,
}: IconProps & { src: string }) => (
  <img
    src={src}
    width={size}
    height={size}
    alt=""
    className={['shrink-0 object-contain', className].filter(Boolean).join(' ')}
    loading="lazy"
    decoding="async"
    aria-hidden="true"
  />
);

const iconify = (path: string, color: string, size: number) =>
  `https://api.iconify.design/${path}.svg?color=${encodeURIComponent(color)}&width=${size * 2}&height=${size * 2}`;

/** Official icons from Iconify CDN (Simple Icons / MDI) */
export const MailGlyph = ({ size = 18, className }: IconProps) => (
  <CdnIcon src={iconify('mdi/email', '#0f172a', size)} size={size} className={className} />
);

export const PhoneGlyph = ({ size = 18, className }: IconProps) => (
  <CdnIcon src={iconify('mdi/phone', '#0f172a', size)} size={size} className={className} />
);

export const GithubGlyph = ({ size = 18, className }: IconProps) => (
  <CdnIcon src={iconify('simple-icons/github', '#181717', size)} size={size} className={className} />
);

export const LinkedinGlyph = ({ size = 18, className }: IconProps) => (
  <CdnIcon src={iconify('simple-icons/linkedin', '#0A66C2', size)} size={size} className={className} />
);

export const OrcidGlyph = ({ size = 18, className }: IconProps) => (
  <CdnIcon src={iconify('simple-icons/orcid', '#A6CE39', size)} size={size} className={className} />
);

export const MapPinGlyph = ({ size = 18, className }: IconProps) => (
  <CdnIcon src={iconify('mdi/map-marker', '#0f172a', size)} size={size} className={className} />
);

import {useState} from 'react';
import {UtensilsCrossed} from 'lucide-react';

interface FoodImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

export function FoodImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  eager = false,
}: FoodImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#570B13] via-[#320609] to-[#570B13] text-[#FFF5E5] p-6 text-center"
        role="img"
        aria-label={alt}
      >
        <UtensilsCrossed className="w-8 h-8 text-[#F5BE36]" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-[#FFF5E5]/90 max-w-[18ch]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

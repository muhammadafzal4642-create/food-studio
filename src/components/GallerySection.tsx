import {useState, useEffect, useCallback} from 'react';
import {X, ChevronLeft, ChevronRight, Expand} from 'lucide-react';
import {GALLERY_PHOTOS} from '../data/menuData';
import {buildDishWhatsAppUrl} from '../data/restaurantConfig';
import {FoodImage} from './FoodImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setActiveIndex(null), []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, handleClose, handlePrev, handleNext]);

  const activePhoto = activeIndex !== null ? GALLERY_PHOTOS[activeIndex] : null;

  return (
    <section id="gallery" className="bg-[#F7F0E7] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide text-[#570B13]">
            Food Gallery
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#320609] leading-tight [text-wrap:balance]">
            A Closer Look at Our Dishes
          </h2>
          <p className="mt-3 text-base text-[#5E282D]">
            Tap any photograph to view full size or order directly on WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger photograph of ${photo.title}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#320609] border border-[#320609]/10 shadow-sm text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#570B13]"
            >
              <FoodImage
                src={photo.image}
                alt={photo.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#320609]/85 via-[#320609]/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
              <span
                className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#320609]/75 text-[#FFF5E5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                <Expand className="w-4 h-4" />
              </span>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-xs font-medium text-[#F5BE36]">
                  {photo.categoryLabel}
                </p>
                <p className="font-serif text-base font-bold text-white leading-snug mt-0.5">
                  {photo.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a0305]/90 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-[#320609] border border-[#F5BE36]/30 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#F5BE36]/15">
              <div>
                <p className="text-xs font-medium text-[#F5BE36]">
                  {activePhoto.categoryLabel}
                </p>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {activePhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close gallery lightbox"
                className="w-10 h-10 rounded-lg bg-[#570B13] text-[#FFF5E5] hover:bg-[#F5BE36] hover:text-[#320609] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#F5BE36]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-[#1a0305]">
              <FoodImage
                src={activePhoto.image}
                alt={activePhoto.imageAlt}
                className="w-full h-full object-cover"
                eager
              />

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous dish photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#320609]/85 text-[#FFF5E5] hover:bg-[#F5BE36] hover:text-[#320609] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#F5BE36]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next dish photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#320609]/85 text-[#FFF5E5] hover:bg-[#F5BE36] hover:text-[#320609] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#F5BE36]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#320609]">
              <p className="text-xs sm:text-sm text-[#FFF5E5]/75 tabular-nums">
                Photo {(activeIndex ?? 0) + 1} of {GALLERY_PHOTOS.length}
              </p>
              <a
                href={buildDishWhatsAppUrl(activePhoto.orderLabel)}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5BE36] text-[#320609] text-sm font-bold hover:bg-[#ffd05b] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

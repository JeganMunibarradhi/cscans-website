import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, ImageIcon, Upload } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY DATA — Add your photos here. Place image files in public/gallery/
//  Example: { id: 'g1', src: '/gallery/reception.jpg', alt: 'Reception Area', category: 'Centre', caption: 'Salem Branch Reception' }
// ─────────────────────────────────────────────────────────────────────────────
const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'c1',
    src: '/gallery/c1.jpeg',
    alt: 'Dental imaging centre',
    category: 'Centre',
    caption: 'Our Imaging Centre',
  },
  {
    id: 'm1',
    src: '/gallery/m1.jpeg',
    alt: 'Dental imaging equipment',
    category: 'Equipment',
    caption: 'Advanced Imaging Equipment',
  },
  
];

const CATEGORIES = ['All', 'Centre', 'Equipment', 'CBCT Scans', 'OPG Scans', 'Team'];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filtered.length);
  };

  const isEmpty = filtered.length === 0;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
            Our Centres & Equipment
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Centre Gallery
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            A glimpse inside our modern, AERB-compliant dental imaging centres and state-of-the-art equipment.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        {!isEmpty ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-orange-300 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label={`View ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
                {/* Category badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/90 text-slate-700 shadow-sm">
                    {photo.category}
                  </span>
                </div>
                {/* Caption */}
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-white text-xs font-semibold line-clamp-1">{photo.caption}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        ) : (
          /* Empty State — shown until photos are added */
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 py-16 sm:py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-700 mb-2">Photos Coming Soon</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed mb-6">
              Our centre and equipment photos are being prepared. Check back shortly for a visual tour of all our branches.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 text-xs font-medium border border-slate-200">
              <Upload className="w-3.5 h-3.5" />
              <span>Tip: Drop photos in <code className="font-mono bg-slate-200 px-1 py-0.5 rounded">public/gallery/</code> and update the data in GallerySection.tsx</span>
            </div>
          </div>
        )}

        {/* Branch Photo Labels — shown only when photos exist */}
        {!isEmpty && (
          <p className="text-center text-xs text-slate-400 mt-6">
            Showing {filtered.length} photo{filtered.length !== 1 ? 's' : ''} · Click any image to enlarge
          </p>
        )}

      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && filtered[lightboxIdx] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(2,6,23,0.92)', backdropFilter: 'blur(6px)' }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-4xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-white/10"
            />
            <div className="text-center">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                {filtered[lightboxIdx].category}
              </span>
              {filtered[lightboxIdx].caption && (
                <p className="text-sm text-white font-semibold mt-1">{filtered[lightboxIdx].caption}</p>
              )}
              <p className="text-xs text-slate-400 mt-0.5">
                {lightboxIdx + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

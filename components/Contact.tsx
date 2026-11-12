export const WHATSAPP_NUMBER = '8801715266172';
export const WHATSAPP_DISPLAY = '+880 1715-266172';
export const WHATSAPP_URL =
  'https://wa.me/8801715266172?text=Hi%20Metro%20Flex%20Gym%2C%20I%20want%20to%20join';
/** Pre-filled WhatsApp link for the Ladies page. */
export const LADIES_WHATSAPP_URL =
  'https://wa.me/8801715266172?text=Hi%20Metro%20Flex%20Gym%2C%20I%20have%20a%20question%20about%20the%20ladies-only%20hours';
export const CALL_NUMBER = '01819630154';
export const CALL_DISPLAY = '01819-630154';
export const FACEBOOK_URL = 'https://facebook.com/M.flexgym';
export const MAPS_URL = 'https://maps.app.goo.gl/3e4QB8Xzyi5P57Nd6';
export const ADDRESS =
  'Rafiq Ullah Bari, Bepari Para, Amin Tower (Lift 7), Agrabad Access Rd, Chattogram 4100';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Floating WhatsApp button — visible on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Metro Flex Gym on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/50 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export function WhatsAppButton({
  className = '',
  label = 'WhatsApp — Join Now',
  href = WHATSAPP_URL,
}: {
  className?: string;
  label?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-bright focus:outline-none focus:ring-2 focus:ring-gold-bright focus:ring-offset-2 focus:ring-offset-ink ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

export function CallButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={`tel:+${CALL_NUMBER}`}
      className={`inline-flex items-center justify-center gap-2 border border-bone/40 px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-bone transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink ${className}`}
    >
      Call {CALL_DISPLAY}
    </a>
  );
}

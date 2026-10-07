import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { contact, whatsappLink } from '../../lib/contact';

// Phone-only bottom bar: most enquiries arrive by call or WhatsApp.
const MobileActions = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/40 bg-wine-deep pb-[env(safe-area-inset-bottom)] text-ivory lg:hidden">
    <a href={`tel:${contact.mobiles[0].tel}`} className="flex items-center justify-center gap-2 py-3.5 text-[.9rem] font-medium">
      <Phone className="h-4 w-4 text-gold-light" />
      Call us
    </a>
    <a
      href={whatsappLink("Hello Amar Caterers, I'd like to enquire about catering.")}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 border-l border-gold/40 py-3.5 text-[.9rem] font-medium"
    >
      <MessageCircle className="h-4 w-4 text-gold-light" />
      WhatsApp
    </a>
  </div>
);

export default MobileActions;

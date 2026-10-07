import React from 'react';
import Logo from '../ui/Logo';
import { contact, whatsappLink } from '../../lib/contact';

const explore = [
  { name: 'Our story', href: '#story' },
  { name: 'Occasions', href: '#occasions' },
  { name: 'Food', href: '#food' },
  { name: 'Live counters', href: '#counters' },
  { name: 'Our menus', href: '#menus' },
  { name: 'Gallery', href: '#gallery' },
];

const Footer = () => (
  <footer className="bg-wine-deep text-[#E6D8C0]">
    <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
      <div>
        <Logo tone="light" className="text-[1.7rem]" />
        <p className="mt-4 max-w-[34ch] text-[.95rem] leading-[1.7]">
          Exclusively vegetarian wedding and event catering from Jodhpur, serving across India since
          1986. Owned by Mr. Jairaj Sabnani.
        </p>
        <a href="#enquire" className="btn btn-light mt-7">Enquire now</a>
      </div>

      <div>
        <h2 className="text-[.85rem] font-medium text-gold-light">Explore</h2>
        <ul className="mt-4 space-y-2.5 text-[.95rem]">
          {explore.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-ivory">{l.name}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-[.85rem] font-medium text-gold-light">Contact</h2>
        <ul className="mt-4 space-y-2.5 text-[.95rem]">
          {contact.mobiles.slice(0, 2).map((m) => (
            <li key={m.tel}><a href={`tel:${m.tel}`} className="hover:text-ivory">{m.display}</a></li>
          ))}
          <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">WhatsApp</a></li>
          <li><a href={`mailto:${contact.email}`} className="break-all hover:text-ivory">{contact.email}</a></li>
          <li>
            <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
              {contact.address.join(', ')}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gold-light/20">
      <div className="wrap flex flex-col justify-between gap-2 py-6 text-[.82rem] text-[#C9B89C] sm:flex-row">
        <span suppressHydrationWarning>© {new Date().getFullYear()} Amar Caterers</span>
        <span>Cooking since 1986</span>
      </div>
    </div>
  </footer>
);

export default Footer;

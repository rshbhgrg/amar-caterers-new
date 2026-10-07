import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { contact, whatsappLink } from '../../lib/contact';

const occasions = [
  'Wedding',
  'Mehndi / haldi',
  'Sangeet',
  'Reception',
  'Corporate event',
  'Birthday or anniversary',
  'Religious ceremony',
  'Other',
];

const emptyForm = { name: '', phone: '', date: '', guests: '', occasion: occasions[0], city: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: the enquiry goes out as a pre-filled WhatsApp message.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hello Amar Caterers, I'd like to enquire about catering.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Occasion: ${form.occasion}`,
      form.date && `Date: ${form.date}`,
      form.guests && `Guests: ${form.guests}`,
      form.city && `City: ${form.city}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="enquire" className="bg-cream py-20 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Enquire</p>
          <h2 className="h2 mt-5">Planning an occasion? Let's talk.</h2>
          <p className="mt-6 max-w-[44ch] leading-[1.75] text-body">
            Tell us the occasion, the city and roughly how many guests. We'll get back to you with
            availability and next steps.
          </p>

          <dl className="mt-10 space-y-5 text-[.95rem]">
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-gold-ink">Mobile</dt>
              <dd className="space-y-1">
                {contact.mobiles.map((m) => (
                  <a key={m.tel} href={`tel:${m.tel}`} className="block text-ink hover:text-wine">{m.display}</a>
                ))}
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-gold-ink">Office</dt>
              <dd className="space-y-1">
                {contact.landlines.map((m) => (
                  <a key={m.tel} href={`tel:${m.tel}`} className="block text-ink hover:text-wine">{m.display}</a>
                ))}
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-gold-ink">Email</dt>
              <dd><a href={`mailto:${contact.email}`} className="break-all text-ink hover:text-wine">{contact.email}</a></dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-gold-ink">Kitchen</dt>
              <dd>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-wine">
                  {contact.address.map((l) => <span key={l} className="block">{l}</span>)}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-4">
              <dt className="text-gold-ink">Service area</dt>
              <dd className="text-ink">Across India</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 border border-line bg-ivory p-6 md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Your name</label>
              <input id="name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} className="field" />
            </div>
            <div>
              <label htmlFor="phone" className="label">Phone</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={handleChange} className="field" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="occasion" className="label">Occasion</label>
              <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange} className="field">
                {occasions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="label">Event date</label>
              <input id="date" name="date" type="date" value={form.date} onChange={handleChange} className="field" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="guests" className="label">Number of guests</label>
              <input id="guests" name="guests" type="number" min="1" inputMode="numeric" placeholder="e.g. 300" value={form.guests} onChange={handleChange} className="field" />
            </div>
            <div>
              <label htmlFor="city" className="label">City</label>
              <input id="city" name="city" placeholder="e.g. Jodhpur" value={form.city} onChange={handleChange} className="field" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="label">Anything else we should know</label>
            <textarea id="message" name="message" rows="4" placeholder="Cuisines, dietary needs, number of functions" value={form.message} onChange={handleChange} className="field resize-y" />
          </div>

          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </button>
          <p className="text-[.82rem] text-muted" aria-live="polite">
            {sent
              ? 'WhatsApp opened with your details. Press send there to reach us.'
              : 'This opens WhatsApp with your details filled in. Nothing is sent until you press send.'}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// Single source for the business's contact details (used by Header, Contact, Footer).
export const contact = {
  whatsapp: '919414132868',
  mobiles: [
    { display: '94141 32868', tel: '+919414132868' },
    { display: '98280 32868', tel: '+919828032868' },
    { display: '96807 38777', tel: '+919680738777' },
  ],
  landlines: [
    { display: '0291 263 3860', tel: '+912912633860' },
    { display: '0291 262 9068', tel: '+912912629068' },
  ],
  email: 'amar_caterers@yahoo.com',
  address: ["1st 'B' Road, Sardarpura", 'Jodhpur, Rajasthan'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Amar+Caterers+1st+B+Road+Sardarpura+Jodhpur',
};

export const whatsappLink = (text) =>
  `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

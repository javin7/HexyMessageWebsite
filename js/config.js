/**
 * HEXY Wellness Clinic 和熙元 - Professional Therapy & Traditional Chinese Medicine
 * Central Configuration
 * 
 * Set booking.url to the clinic’s online booking portal.
 */

const SITE_CONFIG = {
  businessName: "HEXY Wellness Clinic 和熙元",
  tagline: "Professional Therapy & Traditional Chinese Medicine",
  phone: "437 255 7897",
  phoneRaw: "14372557897",
  directPhone: "437 255 7897",
  directPhoneRaw: "14372557897",
  email: "lifegotbetter@evergreenheath.com",
  address: {
    street: "530 Yonge St, Unit 2",
    city: "Toronto",
    province: "ON",
    postalCode: "M4Y 1X9",
    landmark: "Downtown Toronto (Yonge & Wellesley)"
  },
  hours: [
    { days: "Weekdays (Mon – Fri)", time: "10:00 AM – 9:00 PM" },
    { days: "Weekends (Sat – Sun)", time: "9:00 AM – 9:00 PM" },
    { days: "Holidays", time: "Open by Appointment" }
  ],
  // Juvonno patient booking portal
  booking: {
    url: "https://hexylife.juvonno.com/"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleMaps: "https://maps.google.com/?q=530+Yonge+St+Unit+2+Toronto+ON"
  },
  insuranceProviders: [
    "Sun Life Financial",
    "Manulife",
    "Canada Life (Great-West Life)",
    "Green Shield Canada",
    "Blue Cross",
    "Desjardins Insurance",
    "Industrial Alliance (iA)",
    "Chambers of Commerce",
    "Standard Life",
    "Johnson Inc.",
    "ClaimSecure",
    "CINUP"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}

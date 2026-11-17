/**
 * HEXY Wellness Clinic 和熙元 - Professional Therapy & Traditional Chinese Medicine
 * Central Configuration
 * 
 * To connect your live Acuity Scheduling account:
 * Set acuity.schedulingUrl and acuity.directBookingUrl to your full scheduling URL.
 * Example: 'https://bestlifemassage.as.me/' or 'https://app.acuityscheduling.com/schedule.php?owner=40451853'
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
  // Acuity Scheduling URLs
  acuity: {
    schedulingUrl: "https://app.acuityscheduling.com/schedule.php?owner=40451853",
    directBookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=40451853",
    embeddedType: "iframe",
    // The current menu uses the main booking page for prices and availability.
    // Old appointment IDs are intentionally removed: they refer to the previous menu.
    categories: {},
    serviceAliases: {},
    appointmentTypes: {}
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

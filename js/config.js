/**
 * BEST LIFE 和熙元 - Massage Therapy & Holistic Wellness Clinic
 * Central Configuration
 * 
 * To connect your live Acuity Scheduling account:
 * Simply replace 'acuityUrl' with your actual Acuity Scheduling URL or owner ID.
 * Example: 'https://bestlifemassage.as.me/' or 'https://app.acuityscheduling.com/schedule.php?owner=12345678'
 */

const SITE_CONFIG = {
  businessName: "BEST LIFE 和熙元",
  tagline: "Registered Massage Therapy & Eastern Holistic Healing",
  phone: "(416) 878-9887",
  phoneRaw: "14168789887",
  email: "info@bestlifemassage.com",
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
  // Acuity Scheduling URL (Replace with your actual link when ready)
  acuity: {
    schedulingUrl: "https://app.acuityscheduling.com/schedule.php?owner=24589132",
    directBookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=24589132",
    embeddedType: "iframe"
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

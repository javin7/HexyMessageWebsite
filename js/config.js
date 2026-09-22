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
  // Acuity Scheduling URLs
  acuity: {
    schedulingUrl: "https://app.acuityscheduling.com/schedule.php?owner=40451853",
    directBookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=40451853",
    embeddedType: "iframe",
    categories: {
      "Acupuncture": "category:Acupuncture",
      "Massage Therapy": "category:Massage Therapy"
    },
    serviceAliases: {
      "Acupuncture Therapy": "Acupuncture",
      "Energy Heat & Herbal Pack Therapy": "Massage Therapy",
      "Insurance RMT Session": "Registered Massage Therapy (RMT)"
    },
    appointmentTypes: {
      "Consultation": [
        {
          "duration": null,
          "id": "98557173"
        }
      ],
      "Traditional Acupuncture": [
        {
          "duration": 30,
          "id": "98571142"
        },
        {
          "duration": 45,
          "id": "98571202"
        }
      ],
      "Registered Massage Therapy (RMT)": [
        {
          "duration": 30,
          "id": "98570951"
        },
        {
          "duration": 45,
          "id": "98570983"
        },
        {
          "duration": 60,
          "id": "98571051"
        },
        {
          "duration": 90,
          "id": "98571052"
        },
        {
          "duration": 120,
          "id": "98571053"
        }
      ],
      "RMT Combination Therapy": [
        {
          "duration": 60,
          "id": "98571056"
        }
      ],
      "Energy Heat Massage Therapy": [
        {
          "duration": 45,
          "id": "98571057"
        },
        {
          "duration": 60,
          "id": "98571060"
        }
      ],
      "Energy Heat Combination Therapy": [
        {
          "duration": 60,
          "id": "98571061"
        }
      ],
      "Energy Pack Massage Therapy": [
        {
          "duration": 45,
          "id": "98571062"
        },
        {
          "duration": 60,
          "id": "98571063"
        }
      ],
      "Energy Pack Combination Therapy": [
        {
          "duration": 60,
          "id": "98571066"
        }
      ],
      "Chinese Herbal Pack Massage Therapy": [
        {
          "duration": 60,
          "id": "98571069"
        }
      ],
      "Chinese Herbal Pack Combination Therapy": [
        {
          "duration": 60,
          "id": "98571070"
        }
      ],
      "Lymphatic Relaxation Massage": [
        {
          "duration": 60,
          "id": "98571074"
        },
        {
          "duration": 90,
          "id": "98571075"
        },
        {
          "duration": 120,
          "id": "98571076"
        }
      ],
      "Thai Massage Therapy": [
        {
          "duration": 60,
          "id": "98571078"
        },
        {
          "duration": 90,
          "id": "98571079"
        },
        {
          "duration": 120,
          "id": "98571080"
        }
      ]
    }
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

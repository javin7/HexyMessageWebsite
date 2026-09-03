/**
 * HEXY Wellness Clinic 和熙元 - Multilingual i18n Translation Dictionary
 * Professional Therapy & Traditional Chinese Medicine
 * English & Mandarin (中文)
 */

const TRANSLATIONS = {
  en: {
    // Header & Announcement
    "announcement_address": "530 Yonge St, Unit 2<span class=\"hide-on-mobile\">, Toronto, ON</span>",
    "announcement_billing": "Direct Insurance Billing Available",
    "nav_treatments": "Treatments",
    "nav_billing": "Direct Billing",
    "nav_pricing": "Services & Rates",
    "nav_philosophy": "Philosophy",
    "nav_reviews": "Reviews",
    "nav_contact": "Contact",
    "btn_book_appointment": "Book Appointment",
    "lang_toggle_text": "中文",

    // Hero
    "hero_badge": "Professional Therapy & Traditional Chinese Medicine",
    "hero_title_1": "Restorative Bodywork,",
    "hero_title_2": "Deep Inner Harmony.",
    "hero_lead": "Professional Registered Massage Therapy (RMT), Acupuncture, Moxibustion, Cupping, Osteopathic Manual Therapy, and Traditional Chinese Medicine in downtown Toronto.",
    "hero_btn_book": "Book Appointment",
    "hero_btn_services": "Explore Services",
    "hero_feature_1_title": "Licensed Clinicians",
    "hero_feature_1_desc": "Qualified & registered practitioners.",
    "hero_feature_2_title": "Direct Billing",
    "hero_feature_2_desc": "All major Canadian providers.",
    "hero_feature_3_title": "7 Days a Week",
    "hero_feature_3_desc": "530 Yonge St, Unit 2.",
    "hero_rating_badge": "2,100+ Client Reviews",

    // Services Section
    "services_badge": "Curated Clinical Services",
    "services_title": "Treatments & Services",
    "services_subtitle": "Customized care to relieve muscle tension, improve mobility, and support overall balance.",
    "filter_all": "All Treatments",
    "filter_rmt": "RMT Massage",
    "filter_acu": "Acupuncture & TCM",
    "filter_moxa": "Moxa & Cupping",
    "filter_osteo": "Osteopathy",
    "filter_herbal": "Herbal & Teas",

    // Service Cards (Featured Overview)
    "s1_badge": "RMT Insured",
    "s1_tag": "Therapeutic",
    "s1_duration": "30 / 45 / 60 / 90 / 120 Min",
    "s1_title": "Registered Massage Therapy (RMT)",
    "s1_cn": "注册按摩 / 普通推拿",
    "s1_desc": "Professional hands-on massage therapy designed to relieve muscle tension, reduce discomfort, promote relaxation, and support overall well-being.",
    "s1_b1": "Full insurance receipt provided",
    "s1_b2": "Combines Swedish, deep tissue & trigger point",
    "s1_price_label": "From",
    "s1_price": "$95 / 30m",

    "s2_badge": "Warming Therapy",
    "s2_tag": "Combination",
    "s2_duration": "45 / 60 Min",
    "s2_title": "Energy Heat & Herbal Pack Therapy",
    "s2_cn": "能量热推拿与中药包综合调理",
    "s2_desc": "Combines professional hands-on massage with customized herbal warming packs or energy heat to relieve deep muscular and joint tension.",
    "s2_b1": "Targeted herbal heat penetration",
    "s2_b2": "Optional moxa/cupping combination",
    "s2_price_label": "From",
    "s2_price": "$150 / 45m",

    "s3_badge": "TCM Meridian",
    "s3_tag": "Holistic Care",
    "s3_duration": "30 / 45 / 60 Min",
    "s3_title": "Traditional & Specialized Acupuncture",
    "s3_cn": "普通针灸与特色针灸调理",
    "s3_desc": "Individualized acupuncture based on constitution and presenting concerns, promoting natural healing, circulation, and pain relief.",
    "s3_b1": "Precise meridian acupoint stimulation",
    "s3_b2": "Available with moxibustion or cupping combo",
    "s3_price_label": "From",
    "s3_price": "$95 / 30m",

    "s4_badge": "Ancient Wisdom",
    "s4_tag": "Decompression",
    "s4_duration": "30 / 45 / 60 Min",
    "s4_title": "Moxibustion, Cupping & Gua Sha",
    "s4_cn": "艾灸、拔罐与刮痧调理",
    "s4_desc": "Time-honored warming moxibustion, negative-pressure fire cupping, and jade scraping to relieve muscular tension and support vital energy flow.",
    "s4_b1": "Dispels deep chill and muscle stiffness",
    "s4_b2": "Supports micro-circulation & detoxification",
    "s4_price_label": "From",
    "s4_price": "$95 / 30m",

    "s5_badge": "Structural Balance",
    "s5_tag": "Manual Therapy",
    "s5_duration": "30 / 45 / 60 / 90 / 120 Min",
    "s5_title": "Osteopathic Manual Therapy",
    "s5_cn": "正骨调理",
    "s5_desc": "Hands-on treatment focused on the relationship between muscles, joints, fascia, and pelvic balance to improve mobility and body function.",
    "s5_b1": "Fascial release & joint mobilization",
    "s5_b2": "Postural and alignment optimization",
    "s5_price_label": "From",
    "s5_price": "$100 / 30m",

    "s6_badge": "Herbal Care",
    "s6_tag": "Wellness & Teas",
    "s6_duration": "Consultation & Products",
    "s6_title": "TCM Consultation, Herbal Teas & Products",
    "s6_cn": "中医问诊、中药茶饮与养生产品",
    "s6_desc": "Comprehensive TCM assessment, custom herbal prescriptions, seasonal energy wellness teas, herbal eye compresses, and therapeutic pillows.",
    "s6_b1": "Customized herbal prescriptions",
    "s6_b2": "Handcrafted external wellness remedies",
    "s6_price_label": "From",
    "s6_price": "$8 / day",

    "btn_book_service": "Book Service",

    // Pricing & Menu Section
    "pricing_badge": "Complete Menu & Pricing",
    "pricing_title": "Professional Services & Pricing",
    "pricing_desc": "All treatments are provided by appropriately qualified and registered practitioners within their professional scope of practice.",
    "pricing_scope_text": "<strong>Professional Scope Notice:</strong> Treatments are customized according to each client's individual needs. Treatment combinations and modalities are selected by the practitioner based on professional assessment and suitability.",
    
    // Pricing Tabs
    "ptab_1": "1. Registered Massage (RMT)",
    "ptab_2": "2. Acupuncture",
    "ptab_3": "3. Moxa, Cupping & Gua Sha",
    "ptab_4": "4. Osteopathic Manual",
    "ptab_5": "5. TCM & External Therapies",
    "ptab_6": "6. Herbal Wellness Products",
    "ptab_7": "7. Herbal Teas & Seasonal",

    // Pricing Items - RMT
    "p_rmt_standard_title": "Registered Massage Therapy (RMT)",
    "p_rmt_standard_cn": "注册按摩 / 普通推拿",
    "p_rmt_standard_desc": "Professional hands-on massage therapy to relieve muscle tension, reduce discomfort, promote relaxation and support overall well-being.",

    "p_rmt_combo_title": "RMT Combination Therapy",
    "p_rmt_combo_cn": "注册按摩综合调理",
    "p_rmt_combo_desc": "RMT combined with selected traditional therapies such as moxibustion, cupping or Gua Sha according to individual needs.",

    "p_rmt_energy_heat_title": "Energy Heat Massage Therapy",
    "p_rmt_energy_heat_cn": "能量热推拿",
    "p_rmt_energy_heat_desc": "Combines professional massage techniques with therapeutic warming treatment to provide deeper relaxation and relieve tension.",

    "p_rmt_energy_heat_combo_title": "Energy Heat Combination Therapy",
    "p_rmt_energy_heat_combo_cn": "能量热综合调理",
    "p_rmt_energy_heat_combo_desc": "Energy Heat Massage Therapy combined with selected traditional therapies according to individual needs.",

    "p_rmt_energy_pack_title": "Energy Pack Massage Therapy",
    "p_rmt_energy_pack_cn": "能量包推拿",
    "p_rmt_energy_pack_desc": "Combines specialized warming energy packs with hands-on therapy to relieve muscle and soft-tissue tension.",

    "p_rmt_energy_pack_combo_title": "Energy Pack Combination Therapy",
    "p_rmt_energy_pack_combo_cn": "能量包综合调理",
    "p_rmt_energy_pack_combo_desc": "Energy Pack Massage Therapy combined with selected traditional therapies.",

    "p_rmt_herbal_pack_title": "Chinese Herbal Pack Massage Therapy",
    "p_rmt_herbal_pack_cn": "中药包推拿",
    "p_rmt_herbal_pack_desc": "Customized Chinese herbal warming packs selected according to individual constitution and combined with professional massage.",

    "p_rmt_herbal_pack_combo_title": "Chinese Herbal Pack Combination Therapy",
    "p_rmt_herbal_pack_combo_cn": "中药包综合调理",
    "p_rmt_herbal_pack_combo_desc": "Chinese Herbal Pack Massage Therapy combined with selected traditional therapies according to individual needs.",

    "p_rmt_lymphatic_title": "Lymphatic Relaxation Massage",
    "p_rmt_lymphatic_cn": "淋巴舒缓推拿",
    "p_rmt_lymphatic_desc": "Gentle, specialized massage techniques designed to support lymphatic flow and circulation while promoting full-body relaxation.",

    "p_rmt_thai_title": "Thai Massage Therapy",
    "p_rmt_thai_cn": "泰式推拿",
    "p_rmt_thai_desc": "Full-body treatment incorporating traditional pressure techniques and assisted body movements to improve flexibility and relieve tension.",

    // Pricing Items - Acupuncture
    "p_acu_trad_title": "Traditional Acupuncture",
    "p_acu_trad_cn": "普通针灸",
    "p_acu_trad_desc": "Individualized acupuncture treatment designed to address physical discomfort, promote relaxation and support overall health.",

    "p_acu_trad_combo_title": "Traditional Acupuncture Combination Therapy",
    "p_acu_trad_combo_cn": "普通针灸综合调理",
    "p_acu_trad_combo_desc": "Traditional Acupuncture combined with moxibustion, Gua Sha, cupping or therapeutic massage according to individual needs.",

    "p_acu_spec_title": "Specialized Acupuncture",
    "p_acu_spec_cn": "特色针灸",
    "p_acu_spec_desc": "An advanced individualized acupuncture treatment based on the client's constitution, presenting concerns and overall condition.",

    "p_acu_spec_combo_title": "Specialized Acupuncture Combination Therapy",
    "p_acu_spec_combo_cn": "特色针灸综合调理",
    "p_acu_spec_combo_desc": "Specialized Acupuncture combined with one or more traditional therapies such as moxibustion, Gua Sha, cupping or therapeutic massage.",

    // Pricing Items - Moxa & Cupping
    "p_moxa_title": "Moxibustion Therapy",
    "p_moxa_cn": "艾灸调理",
    "p_moxa_desc": "Traditional warming therapy using moxibustion techniques to promote relaxation, improve comfort and support overall balance.",

    "p_moxa_combo_title": "Moxibustion Combination Therapy",
    "p_moxa_combo_cn": "艾灸综合调理",
    "p_moxa_combo_desc": "Moxibustion combined with selected traditional therapies according to individual needs.",

    "p_cup_title": "Cupping Therapy",
    "p_cup_cn": "拔罐调理",
    "p_cup_desc": "Traditional cupping therapy designed to relieve muscular tension, promote relaxation and support circulation.",

    "p_cup_combo_title": "Cupping Combination Therapy",
    "p_cup_combo_cn": "拔罐综合调理",
    "p_cup_combo_desc": "Cupping combined with selected traditional therapies according to individual needs.",

    "p_guasha_title": "Gua Sha Therapy",
    "p_guasha_cn": "刮痧调理",
    "p_guasha_desc": "Traditional Gua Sha treatment designed to relieve muscular tension, promote circulation and support physical relaxation.",

    "p_guasha_combo_title": "Gua Sha Combination Therapy",
    "p_guasha_combo_cn": "刮痧综合调理",
    "p_guasha_combo_desc": "Gua Sha combined with selected traditional therapies according to individual needs.",

    // Pricing Items - Osteopathy
    "p_osteo_title": "Osteopathic Manual Therapy",
    "p_osteo_cn": "正骨调理",
    "p_osteo_desc": "Professional hands-on treatment focused on the relationship between muscles, joints, fascia, pelvic balance and body structure.",

    "p_osteo_combo_title": "Osteopathic Manual Therapy Combination",
    "p_osteo_combo_cn": "正骨综合调理",
    "p_osteo_combo_desc": "Osteopathic Manual Therapy combined with selected traditional therapies such as moxibustion, cupping, Gua Sha or massage.",

    // Pricing Items - TCM & External
    "p_tcm_init_title": "Initial TCM Consultation",
    "p_tcm_init_cn": "中医首诊",
    "p_tcm_init_desc": "Comprehensive Traditional Chinese Medicine consultation including individualized assessment and wellness recommendations.",

    "p_tcm_follow_title": "TCM Follow-Up & Herbal Prescription",
    "p_tcm_follow_cn": "中医复诊及开方",
    "p_tcm_follow_desc": "Follow-up consultation and adjustment of the individualized treatment or herbal plan.",

    "p_tcm_herb_formula_title": "Customized Chinese Herbal Formula",
    "p_tcm_herb_formula_cn": "中药配方",
    "p_tcm_herb_formula_desc": "Individualized Chinese herbal formulas selected according to the client's TCM consultation and personal needs.",

    "p_tcm_ear_seed_title": "Ear Seed Therapy",
    "p_tcm_ear_seed_cn": "耳穴贴",
    "p_tcm_ear_seed_desc": "Traditional auricular acupressure using specialized ear seeds applied to selected points.",

    "p_tcm_patch_title": "Chinese Herbal Patch Therapy",
    "p_tcm_patch_cn": "中药贴",
    "p_tcm_patch_desc": "Traditional external herbal therapy applied according to individual needs.",

    "p_tcm_sanfu_title": "San Fu Herbal Patch Therapy",
    "p_tcm_sanfu_cn": "三伏贴",
    "p_tcm_sanfu_desc": "Seasonal Traditional Chinese Medicine herbal patch therapy.",

    "p_tcm_note": "* First-time clients receiving applicable TCM treatments may require an Initial TCM Consultation prior to treatment.",

    // Products
    "prod_eye_title": "Chinese Herbal Eye Compress",
    "prod_eye_cn": "中药眼敷",
    "prod_eye_desc": "Approximately 2 months of use per box. Includes an additional 2-month supply of complementary herbal patches (4 months total combined use).",

    "prod_pills_title": "Chinese Herbal Wellness Pills",
    "prod_pills_cn": "中药调理丸",
    "prod_pills_desc": "A typical wellness program includes approximately 3–4 bottles over one month, depending on individual recommendations.",

    "prod_foot_title": "Chinese Herbal Foot Bath Packs",
    "prod_foot_cn": "中药足浴包",
    "prod_foot_desc": "Premium herbal blend for warming foot soak rituals to promote restorative sleep and energy circulation.",

    "prod_neck_title": "Herbal Neck Pillow",
    "prod_neck_cn": "中药颈枕",
    "prod_neck_desc": "Ergonomic herbal-filled neck support for soothing cervical stiffness and improving comfort.",

    "prod_pillow_title": "Traditional Herbal Wellness Pillow",
    "prod_pillow_cn": "中药养生枕",
    "prod_pillow_desc": "Available with different herbal formulations intended to support relaxation, restful sleep and stress management.",

    "prod_sachet_title": "Traditional Herbal Sachet",
    "prod_sachet_cn": "中药香囊",
    "prod_sachet_desc": "Aromatic herbal sachet crafted with traditional botanicals for calming ambient fragrance and wellness.",

    // Teas
    "tea_seasonal_title": "Seasonal Energy Wellness Tea",
    "tea_seasonal_cn": "时空节气能量茶",
    "tea_seasonal_desc": "Individualized herbal tea program selected according to seasonal solar terms and personal constitution. 15-day wellness cycle.",

    "tea_collection_title": "Herbal Wellness Tea Collection",
    "tea_collection_cn": "日常养生茶系列",
    "tea_collection_desc": "Box of 30 specialized tea bags. Selections include: Beauty & Radiance Tea (美容养颜茶), Weight Management Tea (轻体调理茶), and Late-Night Recovery Tea (熬夜调理茶).",

    // Acuity Section
    "acuity_badge": "Online Scheduling",
    "acuity_title": "Book Online Instantly",
    "acuity_desc": "Choose your treatment, duration, and practitioner with real-time confirmation.",
    "acuity_btn_fullscreen": "Open Fullscreen",
    "acuity_step1_title": "Select Treatment",
    "acuity_step1_desc": "Choose your preferred massage or wellness service and duration.",
    "acuity_step2_title": "Pick Date & Therapist",
    "acuity_step2_desc": "View open schedule slots and pick your dedicated practitioner.",
    "acuity_step3_title": "Instant Confirmation",
    "acuity_step3_desc": "Receive instant email and SMS confirmations with calendar sync.",

    // Direct Billing Section
    "billing_badge": "Direct Billing Accepted",
    "billing_title": "Direct Insurance Billing",
    "billing_desc": "We bill directly to over 20+ major Canadian private insurance providers on the spot for all eligible Registered Massage Therapy (RMT) and Acupuncture sessions.",
    "billing_check1": "<strong>Zero Paperwork:</strong> Electronic submission at checkout.",
    "billing_check2": "<strong>Pay Only The Co-Pay:</strong> Only pay remaining balance if any.",
    "billing_check3": "<strong>Official Receipts:</strong> Issued instantly for your records.",
    "billing_btn": "Book RMT Treatment",
    "billing_providers_title": "Accepted Insurance Providers",
    "billing_providers_desc": "Direct electronic billing via Telus Health, Provider Connect, and eClaims:",

    // About Section
    "about_badge": "The Philosophy of 和熙元",
    "about_title": "Ancient Wisdom. Certified Modern Therapy.",
    "about_p1": "At <strong>HEXY Wellness Clinic 和熙元</strong>, we combine Ontario Registered Massage Therapy and Osteopathy with time-tested Eastern meridian bodywork and Traditional Chinese Medicine. <strong>和 (Harmony)</strong>, <strong>熙 (Radiance)</strong>, and <strong>元 (Vitality)</strong> represent our dedication to restoring your body's natural balance.",
    "about_point1_title": "Holistic Approach",
    "about_point1_desc": "Targeting root imbalances for lasting wellness.",
    "about_point2_title": "Registered Excellence",
    "about_point2_desc": "Certified clinicians adhering to highest professional standards.",
    "about_seal_meaning": "Harmony • Radiance • Vitality",

    // Reviews
    "reviews_badge": "Client Reviews",
    "reviews_title": "Trusted By 2,000+ Clients",
    "reviews_subtitle": "Real stories of pain relief and rejuvenating care.",
    "reviews_verified_client": "Verified Client",

    // FAQ
    "faq_badge": "FAQ",
    "faq_title": "Frequently Asked Questions",
    "faq_subtitle": "Quick answers about treatments, billing, and appointments.",
    "faq_q1": "How does Direct Insurance Billing work?",
    "faq_a1": "Bring your insurance card and government ID. We submit your claim electronically at checkout. If fully covered, you pay $0 out of pocket.",
    "faq_q2": "What is the difference between RMT, Tuina, and Osteopathy?",
    "faq_a2": "RMT focuses on muscular trigger points and soft-tissue relief. Tuina uses TCM meridian acupressure to clear energy flow. Osteopathy evaluates the whole body structure, joints, and fascia to restore mobility.",
    "faq_q3": "How do I book or reschedule?",
    "faq_a3": "Click any 'Book Appointment' button to choose your time slot. Your confirmation email contains a direct link to reschedule up to 24 hours in advance.",
    "faq_q4": "Do I need a doctor's referral?",
    "faq_a4": "A doctor's referral is not required to receive treatment, though some specific insurance plans may require one for reimbursement.",

    // Location & Contact
    "contact_badge": "Visit Us",
    "contact_title": "Location & Hours",
    "contact_addr_title": "Address",
    "contact_addr_val": "530 Yonge St, Unit 2<br>Toronto, ON M4Y 1X9",
    "contact_parking_tip": "Street parking & Green P lot nearby",
    "contact_phone_title": "Direct Phone",
    "contact_email_title": "Email",
    "contact_hours_title": "Operating Hours",
    "hours_mf": "Weekdays (Mon – Fri)",
    "hours_ss": "Weekends (Sat – Sun)",
    "hours_holidays": "Holidays",
    "hours_holidays_val": "By Appointment",
    "contact_form_title": "Send an Inquiry",
    "contact_form_subtitle": "Have a question or custom wellness request? Send us a message.",
    "form_name_label": "Full Name *",
    "form_name_ph": "e.g. Eleanor Vance",
    "form_phone_label": "Phone Number *",
    "form_phone_ph": "(416) 878-9887",
    "form_email_label": "Email Address *",
    "form_email_ph": "eleanor@example.com",
    "form_service_label": "Desired Service",
    "form_message_label": "Your Message",
    "form_message_ph": "Tell us about any symptoms or appointment questions...",
    "form_btn_send": "Send Message",

    // Footer
    "footer_desc": "Toronto professional clinic combining Registered Massage Therapy (RMT), Acupuncture, Moxibustion, Cupping, Osteopathy, and Traditional Chinese Medicine. Direct billing available.",
    "footer_col_treatments": "Services & Menu",
    "footer_col_info": "Information",
    "footer_col_booking": "Online Booking",
    "footer_booking_title": "Schedule with Acuity",
    "footer_booking_desc": "Select your therapist and duration with real-time confirmation.",
    "footer_rights": "All Rights Reserved.",
    "mobile_call": "Call Clinic"
  },

  zh: {
    // Header & Announcement
    "announcement_address": "530 Yonge St, Unit 2",
    "announcement_billing": "支持各大保险公司直接结算 (Direct Billing)",
    "nav_treatments": "疗程服务",
    "nav_billing": "保险直赔",
    "nav_pricing": "项目价目表",
    "nav_philosophy": "和熙元理念",
    "nav_reviews": "客户评价",
    "nav_contact": "联系我们",
    "btn_book_appointment": "立即预约",
    "lang_toggle_text": "EN",

    // Hero
    "hero_badge": "专业理疗与传统中医调理",
    "hero_title_1": "调和身心气血，",
    "hero_title_2": "焕发内在元气。",
    "hero_lead": "多伦多市中心专业安省注册理疗按摩（RMT）、针灸、艾灸、古法火罐、正骨调理及传统中医药综合调理。",
    "hero_btn_book": "立即预约",
    "hero_btn_services": "浏览疗程",
    "hero_feature_1_title": "持牌专业团队",
    "hero_feature_1_desc": "由具备正规执业资格的持牌技师操作",
    "hero_feature_2_title": "保险直接结算",
    "hero_feature_2_desc": "支持加拿大各大主流商业医疗保险",
    "hero_feature_3_title": "每周 7 天营业",
    "hero_feature_3_desc": "530 Yonge St, Unit 2",
    "hero_rating_badge": "2,100+ 位客户好评",

    // Services Section
    "services_badge": "专业疗程体系",
    "services_title": "调理项目与服务",
    "services_subtitle": "由持牌专业技师根据个体体质与需求，定制化提供针对性调理与身心放松。",
    "filter_all": "全部项目",
    "filter_rmt": "注册按摩 (RMT)",
    "filter_acu": "针灸与中医",
    "filter_moxa": "艾灸与拔罐",
    "filter_osteo": "正骨调理",
    "filter_herbal": "中药产品与茶饮",

    // Service Cards (Featured Overview)
    "s1_badge": "RMT 可报销",
    "s1_tag": "临床理疗",
    "s1_duration": "30 / 45 / 60 / 90 / 120 分钟",
    "s1_title": "注册按摩治疗 (RMT) / 普通推拿",
    "s1_cn": "Registered Massage Therapy",
    "s1_desc": "专业手法按摩治疗，旨在缓解肌肉紧张与身体不适，促进身心放松，恢复身体整体平衡状态。",
    "s1_b1": "出具正规 RMT 保险报销发票",
    "s1_b2": "涵盖普通推拿、深层肌筋膜与综合调理",
    "s1_price_label": "起价",
    "s1_price": "$95 / 30分",

    "s2_badge": "温热疗愈",
    "s2_tag": "综合调理",
    "s2_duration": "45 / 60 分钟",
    "s2_title": "能量热推拿与中药包综合调理",
    "s2_cn": "Energy Heat & Herbal Pack Massage",
    "s2_desc": "结合专业推拿手法与定制温热中药包或能量热透技术，温热舒缓直达深层紧绷肌群与关节。",
    "s2_b1": "定制温经散寒中药温热包渗透",
    "s2_b2": "可搭配艾灸、拔罐或刮痧组合调理",
    "s2_price_label": "起价",
    "s2_price": "$150 / 45分",

    "s3_badge": "中医经络",
    "s3_tag": "针灸调理",
    "s3_duration": "30 / 45 / 60 分钟",
    "s3_title": "普通针灸与特色针灸治疗",
    "s3_cn": "Traditional & Specialized Acupuncture",
    "s3_desc": "根据个人体质与身体状况量身定制针灸方案，循经取穴，通调气血，缓解疼痛与内在失衡。",
    "s3_b1": "精准循经取穴通调经络气血",
    "s3_b2": "支持针灸结合艾灸、拔罐等综合调理",
    "s3_price_label": "起价",
    "s3_price": "$95 / 30分",

    "s4_badge": "排湿通络",
    "s4_tag": "传统古法",
    "s4_duration": "30 / 45 / 60 分钟",
    "s4_title": "艾灸、古法拔罐与刮痧调理",
    "s4_cn": "Moxibustion, Cupping & Gua Sha",
    "s4_desc": "运用温热艾灸、负压火罐及天然玉石刮痧透达肌肤，驱除体内风寒湿气，缓解肌肉僵硬。",
    "s4_b1": "驱除体内陈年寒湿与肌肉酸痛",
    "s4_b2": "促进局部微循环与筋膜减压",
    "s4_price_label": "起价",
    "s4_price": "$95 / 30分",

    "s5_badge": "骨骼平衡",
    "s5_tag": "正骨理疗",
    "s5_duration": "30 / 45 / 60 / 90 / 120 分钟",
    "s5_title": "专业正骨调理 (Osteopathy)",
    "s5_cn": "Osteopathic Manual Therapy",
    "s5_desc": "针对肌肉、关节、筋膜、骨盆平衡及整体身体结构关系的专业手法调理，改善活动度与身体机能。",
    "s5_b1": "改善关节受限与骨盆体态对齐",
    "s5_b2": "可选配艾灸、拔罐等综合正骨方案",
    "s5_price_label": "起价",
    "s5_price": "$100 / 30分",

    "s6_badge": "本草养生",
    "s6_tag": "问诊与茶饮",
    "s6_duration": "问诊及产品",
    "s6_title": "中医问诊、中药茶饮与养生产品",
    "s6_cn": "TCM Consultation & Herbal Products",
    "s6_desc": "全面中医体质评估、定制中药方剂、时空节气能量茶饮、中药眼敷及养生药枕等外调内养产品。",
    "s6_b1": "中医辨证开方与耳穴、中药贴",
    "s6_b2": "养颜茶、轻体茶、熬夜调理茶系列",
    "s6_price_label": "起价",
    "s6_price": "$8 / 天",

    "btn_book_service": "预约此项目",

    // Pricing & Menu Section
    "pricing_badge": "官方完整价目表",
    "pricing_title": "服务项目与价格一览",
    "pricing_desc": "所有调理项目均由具备相应资质的持牌专业技师在其专业执业范围内提供。",
    "pricing_scope_text": "<strong>专业执业声明：</strong> 调理方案均根据客人体质与具体需求量身定制。调理组合及手法由技师根据专业评估与适用性确定。",

    // Pricing Tabs
    "ptab_1": "1. 注册按摩治疗 (RMT)",
    "ptab_2": "2. 针灸治疗",
    "ptab_3": "3. 艾灸及传统调理",
    "ptab_4": "4. 正骨调理",
    "ptab_5": "5. 中医问诊与调理",
    "ptab_6": "6. 中药养生产品",
    "ptab_7": "7. 中药茶饮及节气养生",

    // Pricing Items - RMT
    "p_rmt_standard_title": "注册按摩 / 普通推拿",
    "p_rmt_standard_cn": "Registered Massage Therapy (RMT)",
    "p_rmt_standard_desc": "专业手法按摩治疗，旨在缓解肌肉紧张，减少身体不适，促进身心放松与整体健康。",

    "p_rmt_combo_title": "注册按摩综合调理",
    "p_rmt_combo_cn": "RMT Combination Therapy",
    "p_rmt_combo_desc": "注册按摩结合艾灸、拔罐或刮痧等传统疗法进行个性化综合调理。",

    "p_rmt_energy_heat_title": "能量热推拿",
    "p_rmt_energy_heat_cn": "Energy Heat Massage Therapy",
    "p_rmt_energy_heat_desc": "结合专业推拿手法与温热疗法，达到深层放松，舒缓肌肉紧绷与不适感。",

    "p_rmt_energy_heat_combo_title": "能量热综合调理",
    "p_rmt_energy_heat_combo_cn": "Energy Heat Combination Therapy",
    "p_rmt_energy_heat_combo_desc": "能量热推拿结合传统调理疗法，提供更深层次的身心调和体验。",

    "p_rmt_energy_pack_title": "能量包推拿",
    "p_rmt_energy_pack_cn": "Energy Pack Massage Therapy",
    "p_rmt_energy_pack_desc": "结合特制温热能量包与专业手法，提供深层放松，缓解肌肉及软组织紧绷。",

    "p_rmt_energy_pack_combo_title": "能量包综合调理",
    "p_rmt_energy_pack_combo_cn": "Energy Pack Combination Therapy",
    "p_rmt_energy_pack_combo_desc": "能量包推拿结合精选传统调理项目，定制化全面调理。",

    "p_rmt_herbal_pack_title": "中药包推拿",
    "p_rmt_herbal_pack_cn": "Chinese Herbal Pack Massage Therapy",
    "p_rmt_herbal_pack_desc": "根据体质与养生需求选用定制中草药温热包，配合专业推拿手法，缓解肌肉与关节酸痛。",

    "p_rmt_herbal_pack_combo_title": "中药包综合调理",
    "p_rmt_herbal_pack_combo_cn": "Chinese Herbal Pack Combination Therapy",
    "p_rmt_herbal_pack_combo_desc": "中药包推拿结合传统艾灸、拔罐或刮痧，全面温通经络。",

    "p_rmt_lymphatic_title": "淋巴舒缓推拿",
    "p_rmt_lymphatic_cn": "Lymphatic Relaxation Massage",
    "p_rmt_lymphatic_desc": "温和柔顺的专业手法，促进淋巴循环与体液代谢，带来全身舒缓与轻盈体验。",

    "p_rmt_thai_title": "泰式推拿",
    "p_rmt_thai_cn": "Thai Massage Therapy",
    "p_rmt_thai_desc": "全身性调理，融合传统按压手法与被动拉伸，舒缓深层紧绷，提升身体柔韧度与活力。",

    // Pricing Items - Acupuncture
    "p_acu_trad_title": "普通针灸",
    "p_acu_trad_cn": "Traditional Acupuncture",
    "p_acu_trad_desc": "个体化针灸方案，针对身体不适进行调理，促进气血流通与全身健康。",

    "p_acu_trad_combo_title": "普通针灸综合调理",
    "p_acu_trad_combo_cn": "Traditional Acupuncture Combination Therapy",
    "p_acu_trad_combo_desc": "针灸结合艾灸、刮痧、拔罐或治疗性推拿等综合施治。",

    "p_acu_spec_title": "特色针灸",
    "p_acu_spec_cn": "Specialized Acupuncture",
    "p_acu_spec_desc": "根据个人体质、主要症状及整体健康状况制定的进阶针灸调理方案。",

    "p_acu_spec_combo_title": "特色针灸综合调理",
    "p_acu_spec_combo_cn": "Specialized Acupuncture Combination Therapy",
    "p_acu_spec_combo_desc": "特色针灸结合一种或多种传统疗法（艾灸、刮痧、拔罐或推拿）。",

    // Pricing Items - Moxa & Cupping
    "p_moxa_title": "艾灸调理",
    "p_moxa_cn": "Moxibustion Therapy",
    "p_moxa_desc": "传统温热艾灸疗法，温阳散寒，促进气血运行，恢复身体本源活力。",

    "p_moxa_combo_title": "艾灸综合调理",
    "p_moxa_combo_cn": "Moxibustion Combination Therapy",
    "p_moxa_combo_desc": "艾灸结合选定的传统调理疗法，强化散寒除湿与调理效果。",

    "p_cup_title": "拔罐调理",
    "p_cup_cn": "Cupping Therapy",
    "p_cup_desc": "传统负压拔罐疗法，缓解背部肌肉紧绷，促进血液循环与组织代谢。",

    "p_cup_combo_title": "拔罐综合调理",
    "p_cup_combo_cn": "Cupping Combination Therapy",
    "p_cup_combo_desc": "拔罐结合艾灸、刮痧或推拿等传统调理手法。",

    "p_guasha_title": "刮痧调理",
    "p_guasha_cn": "Gua Sha Therapy",
    "p_guasha_desc": "传统天然玉石刮痧疗法，疏通经络筋膜，改善微循环，舒缓肌体疲劳。",

    "p_guasha_combo_title": "刮痧综合调理",
    "p_guasha_combo_cn": "Gua Sha Combination Therapy",
    "p_guasha_combo_desc": "刮痧结合艾灸、拔罐或推拿等个性化传统调理项目。",

    // Pricing Items - Osteopathy
    "p_osteo_title": "正骨调理",
    "p_osteo_cn": "Osteopathic Manual Therapy",
    "p_osteo_desc": "针对肌肉、关节、筋膜、骨盆平衡及整体骨骼结构的专业手法调理，改善活动度与身体功能。",

    "p_osteo_combo_title": "正骨综合调理",
    "p_osteo_combo_cn": "Osteopathic Manual Therapy Combination",
    "p_osteo_combo_desc": "正骨调理结合艾灸、拔罐、刮痧或治疗性推拿等选定疗法。",

    // Pricing Items - TCM & External
    "p_tcm_init_title": "中医首诊",
    "p_tcm_init_cn": "Initial TCM Consultation",
    "p_tcm_init_desc": "全面中医望闻问切体质评估与个性化健康调理建议。",

    "p_tcm_follow_title": "中医复诊及开方",
    "p_tcm_follow_cn": "TCM Follow-Up & Prescription",
    "p_tcm_follow_desc": "复诊跟进并根据身体恢复进展调整调理或中药处方方案。",

    "p_tcm_herb_formula_title": "定制中药配方",
    "p_tcm_herb_formula_cn": "Customized Herbal Formula",
    "p_tcm_herb_formula_desc": "根据中医问诊及体质辨证定制的中草药配方颗粒/包。",

    "p_tcm_ear_seed_title": "耳穴贴",
    "p_tcm_ear_seed_cn": "Ear Seed Therapy",
    "p_tcm_ear_seed_desc": "精选天然王不留行籽贴压耳廓对应腧穴，持续良性刺激调理内脏气血。",

    "p_tcm_patch_title": "中药贴",
    "p_tcm_patch_cn": "Chinese Herbal Patch Therapy",
    "p_tcm_patch_desc": "传统外敷中药贴膏，根据个人局部酸痛及经络需求配伍贴敷。",

    "p_tcm_sanfu_title": "三伏贴",
    "p_tcm_sanfu_cn": "San Fu Herbal Patch Therapy",
    "p_tcm_sanfu_desc": "传统季节性冬病夏治中药敷贴疗法，温阳补气，提升免疫力。",

    "p_tcm_note": "* 首次接受相关中医调理项目的客户，可能需要在调理前进行中医首诊评估。",

    // Products
    "prod_eye_title": "中药眼敷",
    "prod_eye_cn": "Chinese Herbal Eye Compress",
    "prod_eye_desc": "每盒约可使用两个月。随盒赠送两个月补充草本贴片，共计约可使用四个月。",

    "prod_pills_title": "中药调理丸",
    "prod_pills_cn": "Chinese Herbal Wellness Pills",
    "prod_pills_desc": "根据个人体质建议，典型调理周期通常一个月约需 3–4 瓶。",

    "prod_foot_title": "中药足浴包",
    "prod_foot_cn": "Chinese Herbal Foot Bath Packs",
    "prod_foot_desc": "每袋含 15 包精选中草药足浴包，温通足底经络，祛湿驱寒，改善睡眠。",

    "prod_neck_title": "中药颈枕",
    "prod_neck_cn": "Herbal Neck Pillow",
    "prod_neck_desc": "贴合人体工学的中草药填装颈枕，舒缓颈椎压力，改善肩颈僵硬。",

    "prod_pillow_title": "中药养生枕",
    "prod_pillow_cn": "Herbal Wellness Pillow",
    "prod_pillow_desc": "提供不同配方草本填芯，有助安神助眠、缓解身心压力及改善睡眠质量。",

    "prod_sachet_title": "中药香囊",
    "prod_sachet_cn": "Traditional Herbal Sachet",
    "prod_sachet_desc": "精选传统芳香中草药手工制作，芳香辟秽，宁心安神。",

    // Teas
    "tea_seasonal_title": "时空节气能量茶",
    "tea_seasonal_cn": "Seasonal Energy Wellness Tea",
    "tea_seasonal_desc": "根据时令节气与个人体质辨证定制的草本养生茶疗方案。每周期约为 15 天，需提前预订。",

    "tea_collection_title": "日常养生茶系列",
    "tea_collection_cn": "Herbal Wellness Tea Collection",
    "tea_collection_desc": "每盒 30 包独立茶包。可选配方：美容养颜茶、轻体调理茶、熬夜调理茶。",

    // Acuity Section
    "acuity_badge": "在线预约",
    "acuity_title": "实时自主预约",
    "acuity_desc": "直接挑选心仪的理疗项目、时长及推拿师，即刻生效。",
    "acuity_btn_fullscreen": "全屏打开",
    "acuity_step1_title": "选择理疗项目",
    "acuity_step1_desc": "选择 RMT、针灸、艾灸、正骨或中医调理及所需时长。",
    "acuity_step2_title": "挑选日期与技师",
    "acuity_step2_desc": "查看实时排班，自由挑选专属推拿师。",
    "acuity_step3_title": "即时确认与提醒",
    "acuity_step3_desc": "短信与邮件即刻收到确认函，并可一键同步日历。",

    // Direct Billing Section
    "billing_badge": "支持各大保险现场直赔",
    "billing_title": "商业保险直接结算 (Direct Billing)",
    "billing_desc": "结账现场直接电子对接加拿大 20 多家主流商业医疗保险公司（RMT 及针灸项目）。",
    "billing_check1": "<strong>零纸质表格：</strong> 离店时电子系统即刻提交理赔。",
    "billing_check2": "<strong>仅付差额：</strong> 仅需支付自付额部分（如有）或 $0 离店。",
    "billing_check3": "<strong>官方发票：</strong> 发票即时发送至您的电子邮箱。",
    "billing_btn": "预约 RMT 疗程",
    "billing_providers_title": "支持直赔的主要保险公司",
    "billing_providers_desc": "直连 Telus Health、Provider Connect 与 eClaims 结算系统：",

    // About Section
    "about_badge": "和熙元理念",
    "about_title": "古法东方智慧 • 现代注册理疗",
    "about_p1": "<strong>HEXY Wellness Clinic 和熙元</strong> 将现代严谨的安省注册推拿理疗、正骨与千年东方经络推拿及传统中医药相融汇。<strong>「和」</strong>平衡、<strong>「熙」</strong>光明、<strong>「元」</strong>本源，代表我们致力于调和身心平衡的承诺。",
    "about_point1_title": "整体调理哲学",
    "about_point1_desc": "从根本调理身体失衡，恢复元气。",
    "about_point2_title": "注册持牌保障",
    "about_point2_desc": "持牌技师严格遵循安省专业标准。",
    "about_seal_meaning": "调和 • 熙盛 • 元气",

    // Reviews
    "reviews_badge": "客户评价",
    "reviews_title": "深受 2,000+ 位客人信赖",
    "reviews_subtitle": "来自多伦多本地客人的真实调理体验与反馈。",
    "reviews_verified_client": "已认证客户",

    // FAQ
    "faq_badge": "常见问题",
    "faq_title": "常见问题解答",
    "faq_subtitle": "关于理疗项目、保险直赔与预约流程的解答。",
    "faq_q1": "如何办理保险直接结算 (Direct Billing)？",
    "faq_a1": "就诊当天携带保险卡和身份证件即可。前台结账时一键电子结算，如全额报销则无需垫付任何费用。",
    "faq_q2": "RMT、推拿与正骨调理有何区别？",
    "faq_a2": "RMT 侧重肌肉结节松解与软组织劳损修复；推拿注重经络腧穴点按以通气血；正骨调理从骨盆、关节与筋膜结构出发改善整体体态与活动度。",
    "faq_q3": "如何预约或改期？",
    "faq_a3": "点击网站任意预约按钮即可选择时间与技师。确认邮件内含有一键改期链接（提前 24 小时即可）。",
    "faq_q4": "需要家庭医生转介信吗？",
    "faq_a4": "直接就诊无需医生处方。但极个别特殊保险福利计划可能在报销时需要，建议提前查阅保单细则。",

    // Location & Contact
    "contact_badge": "亲临诊所",
    "contact_title": "诊所地址与时间",
    "contact_addr_title": "地址",
    "contact_addr_val": "530 Yonge St, Unit 2<br>Toronto, ON M4Y 1X9",
    "contact_parking_tip": "周边设有路边车位及 Green P 停车场",
    "contact_phone_title": "电话",
    "contact_email_title": "邮箱",
    "contact_hours_title": "营业时间",
    "hours_mf": "工作日 (周一至周五)",
    "hours_ss": "周末 (周六至周日)",
    "hours_holidays": "法定节假日",
    "hours_holidays_val": "接受提前预约",
    "contact_form_title": "留言咨询",
    "contact_form_subtitle": "有身体疑问或调理需求？欢迎随时给我们留言。",
    "form_name_label": "姓名 *",
    "form_name_ph": "张先生 / 李女士",
    "form_phone_label": "电话 *",
    "form_phone_ph": "(416) 878-9887",
    "form_email_label": "邮箱 *",
    "form_email_ph": "yourname@example.com",
    "form_service_label": "咨询项目",
    "form_message_label": "留言内容",
    "form_message_ph": "请描述您的身体状况或就诊疑问...",
    "form_btn_send": "提交留言",

    // Footer
    "footer_desc": "多伦多市中心专业注册按摩 (RMT)、针灸、艾灸拔罐、正骨及传统中医综合调理门诊。支持各大商业保险现场直赔。",
    "footer_col_treatments": "调理项目与价目",
    "footer_col_info": "快捷导航",
    "footer_col_booking": "在线预约",
    "footer_booking_title": "Acuity 预约系统",
    "footer_booking_desc": "24/7 全天候在线选择推拿师、调理时长并即时确认。",
    "footer_rights": "版权所有 盗用必究",
    "mobile_call": "拨打热线"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('hexi_lang') || 'en';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
      this.currentLang = lang;
      localStorage.setItem('hexi_lang', lang);
      this.applyLanguage(lang);
    }
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'zh' : 'en';
    this.setLanguage(nextLang);
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update language toggle button text
    document.querySelectorAll('.js-lang-toggle').forEach(btn => {
      const toggleLabel = btn.querySelector('.lang-label') || btn;
      toggleLabel.textContent = lang === 'en' ? '中文' : 'EN';
    });
  }

  bindEvents() {
    document.querySelectorAll('.js-lang-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });
  }
}

window.I18n = new I18nManager();

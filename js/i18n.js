/**
 * BEST LIFE 和熙元 - Multilingual i18n Translation Dictionary
 * Streamlined & Minimalist: English & Mandarin (中文)
 */

const TRANSLATIONS = {
  en: {
    // Header & Announcement
    "announcement_address": "530 Yonge St, Unit 2<span class=\"hide-on-mobile\">, Toronto, ON</span>",
    "announcement_billing": "Direct Insurance Billing Available",
    "nav_treatments": "Treatments",
    "nav_billing": "Direct Billing",
    "nav_pricing": "Pricing",
    "nav_philosophy": "Philosophy",
    "nav_reviews": "Reviews",
    "nav_contact": "Contact",
    "btn_book_appointment": "Book Appointment",
    "lang_toggle_text": "中文",

    // Hero
    "hero_badge": "Registered RMT & Eastern Healing",
    "hero_title_1": "Restorative Bodywork,",
    "hero_title_2": "Deep Inner Harmony.",
    "hero_lead": "Clinical Registered Massage Therapy (RMT), traditional Tuina acupressure, fire cupping, and restorative head spa in downtown Toronto.",
    "hero_btn_book": "Book Appointment",
    "hero_btn_services": "Explore Services",
    "hero_feature_1_title": "Licensed RMTs",
    "hero_feature_1_desc": "Insurance receipts provided.",
    "hero_feature_2_title": "Direct Billing",
    "hero_feature_2_desc": "All major Canadian providers.",
    "hero_feature_3_title": "7 Days a Week",
    "hero_feature_3_desc": "530 Yonge St, Unit 2.",
    "hero_rating_badge": "2,100+ Client Reviews",

    // Services
    "services_badge": "Curated Therapies",
    "services_title": "Treatments & Services",
    "services_subtitle": "Personalized care to relieve pain, release muscle tension, and restore internal balance.",
    "filter_all": "All Treatments",
    "filter_rmt": "RMT Massage",
    "filter_eastern": "Tuina & TCM",
    "filter_wellness": "Spa & Wellness",

    // Service 1
    "s1_badge": "RMT Insured",
    "s1_tag": "Therapeutic",
    "s1_duration": "60 / 90 / 120 Min",
    "s1_title": "Deep Tissue & Myofascial RMT",
    "s1_desc": "Targeted deep muscle release for chronic knots, neck stiffness, and lower back strain.",
    "s1_b1": "Releases deep trigger points",
    "s1_b2": "Full insurance receipt provided",
    "s1_price_label": "From",
    "s1_price": "$120 / hr",

    // Service 2
    "s2_badge": "Ancient Eastern",
    "s2_tag": "TCM Meridian",
    "s2_duration": "45 / 60 / 90 Min",
    "s2_title": "Traditional Chinese Tuina (推拿)",
    "s2_desc": "Rhythmic meridian acupressure to clear energy channels and relieve stubborn joint and muscle stiffness.",
    "s2_b1": "Unblocks Qi and meridian flow",
    "s2_b2": "Relieves sciatica & shoulder tension",
    "s2_price_label": "From",
    "s2_price": "$110 / hr",

    // Service 3
    "s3_badge": "Detox",
    "s3_tag": "Decompression",
    "s3_duration": "45 / 60 Min",
    "s3_title": "Therapeutic Fire Cupping & Gua Sha",
    "s3_desc": "Negative-pressure fire cupping and jade scraping to reduce inflammation and boost micro-circulation.",
    "s3_b1": "Expels dampness & muscle chills",
    "s3_b2": "Immediate upper back tension relief",
    "s3_price_label": "From",
    "s3_price": "$95 / session",

    // Service 4
    "s4_badge": "Zen Ritual",
    "s4_tag": "Head Spa",
    "s4_duration": "60 / 90 Min",
    "s4_title": "Japanese Head Spa & Scalp Relief",
    "s4_desc": "Warm water halo cascade, herbal scalp cleanse, and cranial acupressure for deep relaxation.",
    "s4_b1": "Relieves mental fatigue & insomnia",
    "s4_b2": "Warm water halo hydrotherapy",
    "s4_price_label": "From",
    "s4_price": "$135 / session",

    // Service 5
    "s5_badge": "Thermal",
    "s5_tag": "Restorative",
    "s5_duration": "60 / 90 Min",
    "s5_title": "Volcanic Hot Stone & Aromatherapy",
    "s5_desc": "Heated mineral basalt stones and organic essential oils to soothe tense muscles and calm the nervous system.",
    "s5_b1": "Deep soothing heat penetration",
    "s5_b2": "Organic botanical essential oils",
    "s5_price_label": "From",
    "s5_price": "$130 / hr",

    // Service 6
    "s6_badge": "RMT Insured",
    "s6_tag": "Specialized RMT",
    "s6_duration": "60 / 90 Min",
    "s6_title": "Swedish Relaxation & Prenatal RMT",
    "s6_desc": "Flowing relaxation strokes and specialized prenatal cushioning to reduce stress and body fatigue.",
    "s6_b1": "Alleviates pregnancy back strain",
    "s6_b2": "Full insurance receipt provided",
    "s6_price_label": "From",
    "s6_price": "$120 / hr",

    "btn_book_service": "Book Service",

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
    "billing_desc": "We bill directly to over 20+ major Canadian private insurance providers on the spot for all Registered Massage Therapy (RMT) sessions.",
    "billing_check1": "<strong>Zero Paperwork:</strong> Electronic submission at checkout.",
    "billing_check2": "<strong>Pay Only The Co-Pay:</strong> Only pay remaining balance if any.",
    "billing_check3": "<strong>Official Receipts:</strong> Issued instantly for your records.",
    "billing_btn": "Book RMT Treatment",
    "billing_providers_title": "Accepted Insurance Providers",
    "billing_providers_desc": "Direct electronic billing via Telus Health, Provider Connect, and eClaims:",

    // Pricing Section
    "pricing_badge": "Pricing",
    "pricing_title": "Session Rates & Duration",
    "pricing_desc": "Straightforward pricing with no hidden charges.",
    "th_service": "Service",
    "th_action": "Action",
    "pricing_btn_book": "Book",
    "addons_heading": "Therapeutic Add-Ons",
    "addon1_title": "Glass Fire Cupping",
    "addon1_desc": "Localized fire suction for back or shoulders.",
    "addon2_title": "Jade Gua Sha Scraping",
    "addon2_desc": "Fascial release with natural jade tools.",
    "addon3_title": "Moxibustion (艾灸)",
    "addon3_desc": "Warming mugwort herb therapy to dispel chills.",
    "addon4_title": "Herbal Essential Oil",
    "addon4_desc": "Custom botanical oil blend for muscle relief.",

    // About Section
    "about_badge": "The Philosophy of 和熙元",
    "about_title": "Ancient Wisdom. Certified Modern Therapy.",
    "about_p1": "At <strong>BEST LIFE 和熙元</strong>, we combine Ontario Registered Massage Therapy with time-tested Eastern meridian bodywork. <strong>和 (Harmony)</strong>, <strong>熙 (Radiance)</strong>, and <strong>元 (Vitality)</strong> represent our dedication to restoring your body's natural balance.",
    "about_point1_title": "Holistic Approach",
    "about_point1_desc": "Targeting root imbalances for lasting wellness.",
    "about_point2_title": "Registered Excellence",
    "about_point2_desc": "Certified clinicians adhering to highest standards.",
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
    "faq_q2": "What is the difference between Swedish Massage and Chinese Tuina?",
    "faq_a2": "Swedish Massage uses long flowing strokes for muscle relaxation. Chinese Tuina focuses on meridian acupressure points to release deep joint and energy blockages.",
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
    "contact_form_subtitle": "Have a question or group request? Send us a message.",
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
    "footer_desc": "Toronto Registered Massage Therapy (RMT), Chinese meridian Tuina, and restorative holistic care. Direct billing accepted.",
    "footer_col_treatments": "Treatments",
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
    "nav_pricing": "价目表",
    "nav_philosophy": "和熙元理念",
    "nav_reviews": "客户评价",
    "nav_contact": "联系我们",
    "btn_book_appointment": "立即预约",
    "lang_toggle_text": "EN",

    // Hero
    "hero_badge": "安省注册 RMT 按摩师 • 传统中医经络调理",
    "hero_title_1": "调和身心气血，",
    "hero_title_2": "焕发内在元气。",
    "hero_lead": "多伦多市中心专业安省注册理疗按摩（RMT）、传统中医推拿点穴、古法拔火罐及日式疗愈水疗头疗。",
    "hero_btn_book": "立即预约",
    "hero_btn_services": "浏览疗程",
    "hero_feature_1_title": "持牌 RMT 推拿师",
    "hero_feature_1_desc": "出具正规医疗保险收据",
    "hero_feature_2_title": "保险直接结算",
    "hero_feature_2_desc": "支持加拿大主流保险公司",
    "hero_feature_3_title": "每周 7 天营业",
    "hero_feature_3_desc": "530 Yonge St, Unit 2",
    "hero_rating_badge": "2,100+ 位客户好评",

    // Services
    "services_badge": "精选疗程",
    "services_title": "调理项目与服务",
    "services_subtitle": "针对性手法缓解酸痛、释放深层劳损结节、恢复身体元气平衡。",
    "filter_all": "全部项目",
    "filter_rmt": "RMT 注册按摩",
    "filter_eastern": "中医推拿",
    "filter_wellness": "水疗养生",

    // Service 1
    "s1_badge": "RMT 可报销",
    "s1_tag": "临床疗愈",
    "s1_duration": "60 / 90 / 120 分钟",
    "s1_title": "深层肌筋膜 RMT 理疗按摩",
    "s1_desc": "针对深层肌肉劳损结节、肩颈僵硬及腰背酸痛进行精准筋膜松解。",
    "s1_b1": "精准松解深层肌筋膜触发点",
    "s1_b2": "出具正规 RMT 保险报销发票",
    "s1_price_label": "起价",
    "s1_price": "$120 / 小时",

    // Service 2
    "s2_badge": "东方古法",
    "s2_tag": "中医经络",
    "s2_duration": "45 / 60 / 90 分钟",
    "s2_title": "传统中医推拿点穴 (Tuina)",
    "s2_desc": "循经取穴通调经络气血，有效缓解坐骨神经痛及肩颈关节紧绷。",
    "s2_b1": "疏通经络气血与气滞血瘀",
    "s2_b2": "有效缓解坐骨神经及肩颈酸胀",
    "s2_price_label": "起价",
    "s2_price": "$110 / 小时",

    // Service 3
    "s3_badge": "排湿通络",
    "s3_tag": "负压理疗",
    "s3_duration": "45 / 60 分钟",
    "s3_title": "古法玻璃火罐与玉石刮痧",
    "s3_desc": "利用温热负压与天然玉石刮痧透达肌肤，拔出体内陈年寒湿与酸痛。",
    "s3_b1": "驱除体内深层风寒湿气",
    "s3_b2": "迅速缓解斜方肌与背部酸痛",
    "s3_price_label": "起价",
    "s3_price": "$95 / 次",

    // Service 4
    "s4_badge": "和熙特色",
    "s4_tag": "日式头疗",
    "s4_duration": "60 / 90 分钟",
    "s4_title": "日式禅意水光环水疗头疗",
    "s4_desc": "温热循环水光环洗礼搭配草本头皮净化与头部穴位点按，深度放松紧绷大脑。",
    "s4_b1": "深度缓解偏头痛、失眠与焦虑",
    "s4_b2": "草本温热喷雾与循环水光环",
    "s4_price_label": "起价",
    "s4_price": "$135 / 次",

    // Service 5
    "s5_badge": "温热疗愈",
    "s5_tag": "芳香身心",
    "s5_duration": "60 / 90 分钟",
    "s5_title": "天然火山热石与芳香精油疗法",
    "s5_desc": "温热天然玄武岩结合天然复方精油，温热能量直达深层紧绷肌肉。",
    "s5_b1": "温热舒缓直达深层紧绷肌群",
    "s5_b2": "天然高品质有机芳香精油",
    "s5_price_label": "起价",
    "s5_price": "$130 / 小时",

    // Service 6
    "s6_badge": "RMT 可报销",
    "s6_tag": "专项 RMT",
    "s6_duration": "60 / 90 分钟",
    "s6_title": "瑞典舒缓放松与孕期产前 RMT",
    "s6_desc": "柔和经典长推抚法降低身体压力；配备专业侧卧支撑体位垫呵护孕妇。",
    "s6_b1": "显著缓解孕期腰骶及盆骨负担",
    "s6_b2": "出具正规 RMT 保险报销发票",
    "s6_price_label": "起价",
    "s6_price": "$120 / 小时",

    "btn_book_service": "预约此项目",

    // Acuity Section
    "acuity_badge": "在线预约",
    "acuity_title": "实时自主预约",
    "acuity_desc": "直接挑选心仪的理疗项目、时长及推拿师，即刻生效。",
    "acuity_btn_fullscreen": "全屏打开",
    "acuity_step1_title": "选择理疗项目",
    "acuity_step1_desc": "选择 RMT、推拿、火罐或日式头疗及所需时长。",
    "acuity_step2_title": "挑选日期与技师",
    "acuity_step2_desc": "查看实时排班，自由挑选专属推拿师。",
    "acuity_step3_title": "即时确认与提醒",
    "acuity_step3_desc": "短信与邮件即刻收到确认函，并可一键同步日历。",

    // Direct Billing Section
    "billing_badge": "支持各大保险现场直赔",
    "billing_title": "商业保险直接结算 (Direct Billing)",
    "billing_desc": "结账现场直接电子对接加拿大 20 多家主流商业医疗保险公司（RMT 项目）。",
    "billing_check1": "<strong>零纸质表格：</strong> 离店时电子系统即刻提交理赔。",
    "billing_check2": "<strong>仅付差额：</strong> 仅需支付自付额部分（如有）或 $0 离店。",
    "billing_check3": "<strong>官方发票：</strong> 发票即时发送至您的电子邮箱。",
    "billing_btn": "预约 RMT 疗程",
    "billing_providers_title": "支持直赔的主要保险公司",
    "billing_providers_desc": "直连 Telus Health、Provider Connect 与 eClaims 结算系统：",

    // Pricing Section
    "pricing_badge": "价目明细",
    "pricing_title": "疗程时长与价格表",
    "pricing_desc": "价格透明清晰，无隐藏收费。",
    "th_service": "理疗项目",
    "th_action": "预约",
    "pricing_btn_book": "预约",
    "addons_heading": "特色附加调理",
    "addon1_title": "传统玻璃火罐",
    "addon1_desc": "在按摩疗程中加做背部或肩颈火罐。",
    "addon2_title": "天然玉石刮痧",
    "addon2_desc": "使用天然玉石板松解深层筋膜。",
    "addon3_title": "温阳艾灸 (Moxa)",
    "addon3_desc": "精选陈年艾绒温灸穴位，散寒除湿。",
    "addon4_title": "草本芳香精油",
    "addon4_desc": "定制复方精油强化肌肉放松与安神。",

    // About Section
    "about_badge": "和熙元理念",
    "about_title": "古法东方智慧 • 现代注册理疗",
    "about_p1": "<strong>BEST LIFE 和熙元</strong> 将现代严谨的安省注册推拿理疗与千年东方经络推拿相融汇。<strong>「和」</strong>平衡、<strong>「熙」</strong>光明、<strong>「元」</strong>本源，代表我们致力于调和身心平衡的承诺。",
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
    "faq_q2": "瑞典式按摩与中医推拿有何区别？",
    "faq_a2": "瑞典式按摩运用精油长推手法放松肌肉；中医推拿注重经络腧穴点按，松解深层结节与关节酸痛。",
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
    "contact_form_subtitle": "有身体疑问或包场需求？欢迎随时给我们留言。",
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
    "footer_desc": "多伦多市中心专业 Registered Massage Therapy (RMT) 注册按摩推拿、中医经络调理与日式头疗会馆。支持保险直接结算。",
    "footer_col_treatments": "调理项目",
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

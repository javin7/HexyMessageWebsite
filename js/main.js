/**
 * BEST LIFE 和熙元 - Main Application Script
 * Juvonno Booking Integration, Interactive Service Filters & UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Central Configuration Initializer
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {
    businessName: "BEST LIFE 和熙元",
    phone: "437 255 7897",
    booking: {
      url: "https://hexylife.juvonno.com/portal/publicbook.php"
    }
  };

  // 2. Mobile Navigation Drawer Controls
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileDrawer?.classList.add('active');
    drawerBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileDrawer?.classList.remove('active');
    drawerBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', openMobileMenu);
  drawerClose?.addEventListener('click', closeMobileMenu);
  drawerBackdrop?.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 3. Sticky Header Scroll Effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('is-scrolled');
    } else {
      siteHeader?.classList.remove('is-scrolled');
    }
  });

  // 4. Treatment Services Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from other buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 4b. Pricing Section Category Tab Switcher
  const pricingCatBtns = document.querySelectorAll('.pricing-cat-btn');
  const pricingPanels = document.querySelectorAll('.pricing-panel');

  pricingCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pricingCatBtns.forEach(b => b.classList.remove('active'));
      pricingPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetCat = btn.getAttribute('data-pricing-target');
      const targetPanel = document.getElementById(targetCat);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all other accordions
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 6. Preserve service-specific links; use the configured portal for general booking.
  document.querySelectorAll('.js-book-trigger, a[data-service]').forEach(element => {
    if (element.classList.contains('js-book-trigger')) {
      element.href = config.booking.url;
    }
    element.target = '_blank';
    element.rel = 'noopener noreferrer';
  });

  // 7. Toast Notification Utility
  const showToast = (message, icon = 'fa-circle-check') => {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotification';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  };

  // 8. Prepare an inquiry in the visitor's email app.
  const contactForm = document.getElementById('clinicContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const subject = `Clinic inquiry: ${formData.get('treatment')}`;
      const body = [
        `Name: ${formData.get('name')}`,
        `Phone: ${formData.get('phone')}`,
        `Email: ${formData.get('email')}`,
        `Service: ${formData.get('treatment')}`,
        '',
        formData.get('message') || ''
      ].join('\r\n');
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // 9. Scroll-Triggered Fade-In Observer
  const fadeElements = document.querySelectorAll('.fade-in-section, .fade-in-stagger');
  
  if ('IntersectionObserver' in window) {
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    fadeElements.forEach(el => {
      appearOnScroll.observe(el);
    });
  } else {
    fadeElements.forEach(el => el.classList.add('is-visible'));
  }
});


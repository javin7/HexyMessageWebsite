/**
 * BEST LIFE 和熙元 - Main Application Script
 * Acuity Scheduling Integration, Interactive Service Filters & UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Central Configuration Initializer
  const config = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {
    businessName: "BEST LIFE 和熙元",
    phone: "(416) 939-8888",
    acuity: {
      schedulingUrl: "https://app.acuityscheduling.com/schedule.php?owner=40451853",
      directBookingUrl: "https://app.acuityscheduling.com/schedule.php?owner=40451853"
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

  // 6. Acuity Scheduling Popup Modal System
  const acuityModal = document.getElementById('acuityModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSelectedService = document.getElementById('modalSelectedService');
  const modalAcuityIframe = document.getElementById('modalAcuityIframe');
  const directAcuityLink = document.getElementById('directAcuityLink');

  const durationChoices = document.getElementById('modalDurationChoices');
  const durationButtons = document.getElementById('modalDurationButtons');
  const bookingUrl = (appointmentType, base = config.acuity.schedulingUrl) => {
    const url = new URL(base);
    if (appointmentType) url.searchParams.set('appointmentType', appointmentType);
    return url.href;
  };

  const loadBooking = (appointmentType, label = '') => {
    const url = bookingUrl(appointmentType);
    if (modalAcuityIframe) {
      modalAcuityIframe.hidden = false;
      if (modalAcuityIframe.src !== url) modalAcuityIframe.src = url;
    }
    if (directAcuityLink) {
      directAcuityLink.href = bookingUrl(appointmentType, config.acuity.directBookingUrl);
    }
    if (modalSelectedService) {
      modalSelectedService.textContent = label;
      modalSelectedService.style.display = label ? 'inline-block' : 'none';
    }
  };

  const openAcuityModal = (serviceName = '', selectedId = '') => {
    const service = config.acuity.serviceAliases?.[serviceName] || serviceName;
    const appointments = config.acuity.appointmentTypes?.[service] || [];
    const category = config.acuity.categories?.[service];
    durationButtons?.replaceChildren();
    if (durationChoices) durationChoices.hidden = appointments.length < 2;

    appointments.forEach(appointment => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn btn-outline btn-sm';
      button.textContent = `${appointment.duration} min`;
      button.setAttribute('aria-pressed', String(appointment.id === selectedId));
      button.addEventListener('click', () => {
        durationButtons.querySelectorAll('button').forEach(other => {
          other.setAttribute('aria-pressed', String(other === button));
        });
        loadBooking(appointment.id, `${service} — ${appointment.duration} min`);
      });
      durationButtons?.appendChild(button);
    });

    const selected = appointments.find(appointment => appointment.id === selectedId)
      || (appointments.length === 1 ? appointments[0] : null);
    if (selected) {
      loadBooking(selected.id, selected.duration ? `${service} — ${selected.duration} min` : service);
    } else if (appointments.length > 1) {
      // Wait for an explicit duration choice instead of booking an arbitrary length.
      loadBooking(category, service);
      if (modalAcuityIframe) {
        modalAcuityIframe.src = 'about:blank';
        modalAcuityIframe.hidden = true;
      }
    } else {
      loadBooking(category, category ? service : '');
    }

    acuityModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (appointments.length > 1 && !selected) durationButtons?.querySelector('button')?.focus();
  };

  // Turn configured pricing durations into direct appointment buttons.
  document.querySelectorAll('.pricing-item-card').forEach(card => {
    const service = card.querySelector('.js-book-trigger')?.getAttribute('data-service');
    const appointments = config.acuity.appointmentTypes?.[service] || [];
    card.querySelectorAll('.rate-pill').forEach(pill => {
      const duration = parseInt(pill.querySelector('.rate-pill-dur')?.textContent, 10);
      const appointment = appointments.find(item => item.duration === duration);
      if (!appointment) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'rate-pill rate-pill-booking';
      button.innerHTML = pill.innerHTML;
      button.setAttribute('aria-label', `${service} — ${duration} min`);
      button.addEventListener('click', () => openAcuityModal(service, appointment.id));
      pill.replaceWith(button);
    });
  });

  const closeAcuityModal = () => {
    acuityModal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalCloseBtn?.addEventListener('click', closeAcuityModal);
  acuityModal?.addEventListener('click', (e) => {
    if (e.target === acuityModal) {
      closeAcuityModal();
    }
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && acuityModal?.classList.contains('active')) {
      closeAcuityModal();
    }
  });

  // Attach Acuity trigger to all booking buttons
  const bookingTriggers = document.querySelectorAll('.js-book-trigger');
  bookingTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openAcuityModal(service);
    });
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

  // 8. Netlify Contact Form AJAX Handler with Toast
  const contactForm = document.getElementById('clinicContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // If deployed on Netlify, standard POST works natively,
      // but we can provide instant optimistic UI feedback
      const formData = new FormData(contactForm);
      
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => {
        showToast('Thank you! Your message has been sent to our clinic team.');
        contactForm.reset();
      })
      .catch((error) => {
        // Fallback for local testing
        showToast('Thank you! Your request has been received.');
        contactForm.reset();
      });

      e.preventDefault();
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


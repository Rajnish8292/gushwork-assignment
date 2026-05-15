const heroImages = [
  'assets/images/hero_first_image.png',
  'assets/images/hero_second_image.jpg',
  'assets/images/hero_third_image.jpg',
  'assets/images/hero_fourth_image.jpg',
  'assets/images/hero_fifth_image.jpg'
];

const heroImageAlts = [
  'HDPE Pipes - View 1',
  'Pipeline Infrastructure - View 2',
  'Industrial Piping - View 3',
  'Pipeline System - View 4',
  'Modern Pipes - View 5'
];

const hdpeSteps = [
  {
    title: 'Raw Material',
    heading: 'High-Grade Raw Material Selection',
    description: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
    features: ['PE100 grade material', 'Optimal molecular weight distribution'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Extrusion',
    heading: 'Advanced Extrusion Process',
    description: 'State-of-the-art extrusion technology ensures consistent quality and optimal material properties.',
    features: ['Precision temperature control', 'Uniform material flow'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Cooling',
    heading: 'Controlled Cooling System',
    description: 'Advanced cooling technology maintains structural integrity and dimensional accuracy.',
    features: ['Water bath cooling', 'Temperature monitoring'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Sizing',
    heading: 'Precision Sizing Process',
    description: 'Vacuum sizing ensures exact diameter specifications and wall thickness.',
    features: ['Automated sizing control', 'Quality verification'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Quality Control',
    heading: 'Comprehensive Quality Testing',
    description: 'Multiple quality checkpoints ensure every pipe meets international standards.',
    features: ['Pressure testing', 'Dimensional inspection'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Marking',
    heading: 'Product Identification',
    description: 'Clear marking system for traceability and compliance verification.',
    features: ['Standard markings', 'Batch tracking codes'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Cutting',
    heading: 'Precision Cutting Process',
    description: 'Automated cutting ensures accurate lengths and clean edges.',
    features: ['Length precision', 'Clean cut edges'],
    image: 'assets/images/high-grade.svg'
  },
  {
    title: 'Packaging',
    heading: 'Protective Packaging',
    description: 'Careful packaging ensures safe transportation and storage.',
    features: ['Protective wrapping', 'Secure bundling'],
    image: 'assets/images/high-grade.svg'
  }
];

let heroIndex = 0;
let lastScrollY = 0;
let hdpeIndex = 0;

function initHeader() {
  const header = document.getElementById('siteHeader');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const mobileClose = document.querySelector('.mobile-close');

  function setMenuState(open) {
    mobileMenu.classList.toggle('active', open);
    menuBackdrop.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', open.toString());
    document.body.style.overflow = open ? 'hidden' : '';
  }


  menuBackdrop.addEventListener('click', () => setMenuState(false));
  mobileClose.addEventListener('click', () => setMenuState(false));


  let lastScrollY = window.scrollY;


  function handleScroll() {
    const currentY = window.scrollY;
    const firstFold = window.innerHeight; 
    const isScrollingUp = currentY < lastScrollY;

    const shouldShow = currentY > firstFold && isScrollingUp;

    header.classList.toggle("visible", shouldShow);

    lastScrollY = currentY;
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });
}


function updateHero() {
  const mainImage = document.getElementById('heroMainImage');
  const thumbnails = document.querySelectorAll('.thumbnail-button');
  mainImage.src = heroImages[heroIndex];
  mainImage.alt = heroImageAlts[heroIndex];
  thumbnails.forEach((thumb) => {
    thumb.classList.toggle('active', Number(thumb.dataset.index) === heroIndex);
  });
}

function initHero() {
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const thumbnails = document.querySelectorAll('.thumbnail-button');
  const heroImage = document.getElementById('heroMainImage');
  const zoomPreview = document.getElementById('zoomPreview');
  const magnifier = document.getElementById('heroMagnifier');

  prevBtn.addEventListener('click', () => {
    heroIndex = heroIndex === 0 ? heroImages.length - 1 : heroIndex - 1;
    updateHero();
  });
  nextBtn.addEventListener('click', () => {
    heroIndex = heroIndex === heroImages.length - 1 ? 0 : heroIndex + 1;
    updateHero();
  });

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      heroIndex = Number(thumb.dataset.index);
      updateHero();
    });
  });

  heroImage.addEventListener('mouseenter', () => {
    zoomPreview.style.display = 'block';
    magnifier.style.display = 'flex';
    zoomPreview.style.backgroundImage = `url(${heroImages[heroIndex]})`;
  });

  heroImage.addEventListener('mousemove', (event) => {
    const rect = heroImage.getBoundingClientRect();
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
    zoomPreview.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    magnifier.style.top = `${event.clientY - 50}px`;
    magnifier.style.left = `${event.clientX - 50}px`;
  });

  heroImage.addEventListener('mouseleave', () => {
    zoomPreview.style.display = 'none';
    magnifier.style.display = 'none';
  });
}

function initFaq() {
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach((card) => {
    const button = card.querySelector('.faq-question');
    const answer = card.querySelector('.faq-answer');
    button.addEventListener('click', () => {
      const isOpen = card.classList.toggle('open');
      answer.style.display = isOpen ? 'block' : 'none';
      const icon = button.querySelector('img');
      icon.src = isOpen ? 'assets/images/accordian-open.svg' : 'assets/images/accordian-close.svg';
    });
  });
}

function initVersatile() {
  const container = document.getElementById('versatileCarousel');
  document.getElementById('versatilePrev').addEventListener('click', () => {
    container.scrollBy({ left: -340, behavior: 'smooth' });
  });
  document.getElementById('versatileNext').addEventListener('click', () => {
    container.scrollBy({ left: 340, behavior: 'smooth' });
  });
}

function setHdpeState(index) {
  hdpeIndex = index;
  const stepButtons = document.querySelectorAll('.hdpe-tab');
  stepButtons.forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.step) === index);
  });
  const current = hdpeSteps[index];
  document.getElementById('hdpeHeading').textContent = current.heading;
  document.getElementById('hdpeDescription').textContent = current.description;
  document.getElementById('hdpeImage').src = current.image;
  const featureList = document.getElementById('hdpeFeatures');
  featureList.innerHTML = current.features.map((feature) => `<li><img src="assets/images/check.png" height="14px" width="14px"/>${feature}</li>`).join('');
}

function initHdpe() {
  document.querySelectorAll('.hdpe-tab').forEach((button) => {
    button.addEventListener('click', () => setHdpeState(Number(button.dataset.step)));
  });

  document.getElementById("hdpeLeftArrow").addEventListener('click', () => {
    const next = hdpeIndex === 0 ? hdpeSteps.length - 1 : hdpeIndex - 1;
    setHdpeState(next);
  })

  document.getElementById("hdpeRightArrow").addEventListener('click', () => {
    const next = hdpeIndex === hdpeSteps.length - 1 ? 0 : hdpeIndex + 1;
    setHdpeState(next);
  })


  document.getElementById('hdpePrev').addEventListener('click', () => {
    const next = hdpeIndex === 0 ? hdpeSteps.length - 1 : hdpeIndex - 1;
    setHdpeState(next);
  });

  document.getElementById('hdpeNext').addEventListener('click', () => {
    const next = hdpeIndex === hdpeSteps.length - 1 ? 0 : hdpeIndex + 1;
    setHdpeState(next);
  });
}

function initForms() {
  document.getElementById('contactSubmit').addEventListener('click', () => {
    const name = document.getElementById('contactName').value;
    const company = document.getElementById('contactCompany').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    console.log('Form submitted:', { name, company, email, phone });
    alert('Request submitted successfully. We will contact you soon.');
  });
}



function initCatalogueForm() {
    const modal = document.getElementById("catalogueOverlay");

    const downloadButton = document.getElementById("catalogueDownloadBtn");
    const closeBtn = document.getElementById("catalogueClose")

    const openBtn = document.getElementById("SpecsDownload")

    const closeModal = () => {
      modal.style.display = "none";
    }

    const openModal = () => {
      modal.style.display = "flex";
    }

    openBtn.addEventListener("click", () => {
      openModal()
    })

    downloadButton.addEventListener("click", () => {
      closeModal()
    })

    closeBtn.addEventListener("click", () => {
      closeModal()
    })
}



function initCallbackForm() {
    const modal = document.getElementById("callbackModalOverlay");

    const submitButton = document.getElementById("callbackSubmitBtn");
    const closeBtn = document.getElementById("callbackClose")

    const openBtn = document.getElementById("requestQuoteBtn")

    const closeModal = () => {
      modal.style.display = "none";
    }

    const openModal = () => {
      modal.style.display = "flex";
    }

    openBtn.addEventListener("click", () => {
      openModal()
    })

    submitButton.addEventListener("click", () => {
      closeModal()
    })

    closeBtn.addEventListener("click", () => {
      closeModal()
    })
}


function init() {
  initHeader();
  initHero();
  updateHero();
  initFaq();
  initVersatile();
  initHdpe();
  initForms();
  initCatalogueForm();
  initCallbackForm()
}

window.addEventListener('DOMContentLoaded', init);

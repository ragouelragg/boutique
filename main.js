// ===================================================
//  AutoParts Pro - Main JavaScript
// ===================================================

// ===== DATA =====
const CATEGORIES = [
  { id: "moteur", name: "Moteur", icon: "🔧", count: 42 },
  { id: "freinage", name: "Freinage", icon: "🛑", count: 28 },
  { id: "electricite", name: "Électricité", icon: "⚡", count: 35 },
  { id: "suspension", name: "Suspension", icon: "🔩", count: 24 },
  { id: "pneumatiques", name: "Pneumatiques", icon: "🔄", count: 18 },
  { id: "eclairage", name: "Éclairage", icon: "💡", count: 22 },
  { id: "transmission", name: "Transmission", icon: "⚙️", count: 19 },
  { id: "carrosserie", name: "Carrosserie", icon: "🚗", count: 31 },
  { id: "lubrifiants", name: "Lubrifiants", icon: "🛢️", count: 15 },
  { id: "accessoires", name: "Accessoires", icon: "🎛️", count: 47 },
];

const SUBCATEGORIES = {
  moteur: [
    "Filtres à huile",
    "Filtres à air",
    "Bougies d'allumage",
    "Courroies de distribution",
    "Pompes à eau",
    "Joints moteur",
    "Segments piston",
    "Soupapes",
  ],
  freinage: [
    "Plaquettes de frein",
    "Disques de frein",
    "Tambours de frein",
    "Liquide de frein",
    "Étriers de frein",
    "Flexibles de frein",
    "Maître-cylindre",
  ],
  electricite: [
    "Batteries",
    "Alternateurs",
    "Démarreurs",
    "Fusibles",
    "Ampoules",
    "Bougies de préchauffage",
    "Capteurs",
    "Câblage",
  ],
  suspension: [
    "Amortisseurs",
    "Ressorts",
    "Rotules",
    "Biellettes de direction",
    "Crémaillère de direction",
    "Barre anti-roulis",
    "Roulements de roue",
    "Cardans",
  ],
  pneumatiques: [
    "Pneus été",
    "Pneus hiver",
    "Pneus 4 saisons",
    "Jantes aluminium",
    "Jantes acier",
    "Valves",
    "Capteurs TPMS",
  ],
  eclairage: [
    "Phares avant",
    "Feux arrière",
    "Clignotants",
    "Antibrouillards",
    "Ampoules H4",
    "Ampoules LED",
    "Feux de recul",
  ],
  transmission: [
    "Embrayages",
    "Boîtes de vitesses",
    "Cardans",
    "Joints homocinétiques",
    "Huile de transmission",
    "Différentiels",
    "Convertisseurs",
  ],
  carrosserie: [
    "Pare-chocs avant",
    "Pare-chocs arrière",
    "Capots",
    "Rétroviseurs",
    "Ailes",
    "Calandres",
    "Bas de caisse",
    "Vitres",
  ],
  lubrifiants: [
    "Huile moteur 5W40",
    "Huile moteur 5W30",
    "Huile de boîte",
    "Liquide de refroidissement",
    "Liquide de direction assistée",
    "Graisse multi-usages",
  ],
  accessoires: [
    "Tapis de sol",
    "Housses de siège",
    "Autoradios",
    "Chargeurs USB",
    "Caméras de recul",
    "Support téléphone",
    "Balais d'essuie-glace",
    "Coffre de toit",
  ],
};

const BRANDS = [
  "Toyota",
  "Nissan",
  "Honda",
  "Hyundai",
  "Kia",
  "Mercedes-Benz",
  "BMW",
  "Volkswagen",
  "Ford",
  "Peugeot",
];

const PRODUCTS = [
  {
    id: 1,
    name: "Kit Plaquettes Brembo",
    cat: "freinage",
    subcat: "Plaquettes de frein",
    price: 45.99,
    oldPrice: 62.0,
    ref: "BR-3421",
    stock: 12,
    rating: 4.8,
    reviews: 124,
    emoji: "🛑",
    badge: "Promo",
    compat: ["Toyota", "Nissan", "Honda"],
    desc: "Plaquettes de frein haute performance Brembo pour une efficacité maximale. Résistance à la chaleur exceptionnelle, longévité accrue, bruit minimal.",
  },
  {
    id: 2,
    name: "Filtre Huile Bosch",
    cat: "moteur",
    subcat: "Filtres à huile",
    price: 12.99,
    oldPrice: null,
    ref: "BO-1122",
    stock: 48,
    rating: 4.7,
    reviews: 89,
    emoji: "🔧",
    badge: "Top vente",
    compat: ["BMW", "Mercedes-Benz", "Volkswagen"],
    desc: "Filtre à huile Bosch original, haute filtration, compatible avec de nombreux modèles allemands.",
  },
  {
    id: 3,
    name: "Batterie Varta 70Ah",
    cat: "electricite",
    subcat: "Batteries",
    price: 89.99,
    oldPrice: 110.0,
    ref: "VT-7000",
    stock: 7,
    rating: 4.9,
    reviews: 203,
    emoji: "⚡",
    badge: "Promo",
    compat: ["Peugeot", "Ford", "Kia"],
    desc: "Batterie Varta Silver Dynamic 70Ah, 760A. Démarrage puissant même par temps froid. Garantie 2 ans.",
  },
  {
    id: 4,
    name: "Amortisseur Monroe",
    cat: "suspension",
    subcat: "Amortisseurs",
    price: 79.5,
    oldPrice: 95.0,
    ref: "MN-5533",
    stock: 5,
    rating: 4.6,
    reviews: 67,
    emoji: "🔩",
    badge: "Promo",
    compat: ["Hyundai", "Kia", "Toyota"],
    desc: "Amortisseur gaz Monroe Oespectrum. Confort et tenue de route optimaux. Installation rapide.",
  },
  {
    id: 5,
    name: "Courroie Distribution Gates",
    cat: "moteur",
    subcat: "Courroies de distribution",
    price: 34.9,
    oldPrice: null,
    ref: "GT-2211",
    stock: 20,
    rating: 4.7,
    reviews: 156,
    emoji: "⚙️",
    badge: "",
    compat: ["Honda", "Nissan", "Toyota"],
    desc: "Courroie de distribution Gates PowerGrip. Résistance à la chaleur et aux huiles. OEM qualité.",
  },
  {
    id: 6,
    name: "Disque Frein Zimmermann",
    cat: "freinage",
    subcat: "Disques de frein",
    price: 58.0,
    oldPrice: 72.0,
    ref: "ZM-9087",
    stock: 14,
    rating: 4.8,
    reviews: 91,
    emoji: "🛑",
    badge: "Promo",
    compat: ["BMW", "Mercedes-Benz"],
    desc: "Disque de frein Zimmermann ventilé, percé. Dissipation thermique améliorée pour performances optimales.",
  },
  {
    id: 7,
    name: "Phare LED Osram H4",
    cat: "eclairage",
    subcat: "Ampoules H4",
    price: 29.99,
    oldPrice: 38.0,
    ref: "OS-4422",
    stock: 30,
    rating: 4.5,
    reviews: 178,
    emoji: "💡",
    badge: "Nouveau",
    compat: ["Peugeot", "Renault", "Ford"],
    desc: "Kit ampoules LED Osram Night Breaker. +300% de luminosité vs ampoules standards. Durée de vie 10x plus longue.",
  },
  {
    id: 8,
    name: "Huile Moteur Castrol 5W40",
    cat: "lubrifiants",
    subcat: "Huile moteur 5W40",
    price: 42.0,
    oldPrice: null,
    ref: "CS-5040",
    stock: 60,
    rating: 4.9,
    reviews: 412,
    emoji: "🛢️",
    badge: "Top vente",
    compat: ["Tous modèles"],
    desc: "Huile moteur Castrol EDGE 5W40. Protection maximale, performance à froid et à chaud. 5 litres.",
  },
  {
    id: 9,
    name: "Pneu Michelin 205/55 R16",
    cat: "pneumatiques",
    subcat: "Pneus été",
    price: 95.0,
    oldPrice: 115.0,
    ref: "MC-2055",
    stock: 8,
    rating: 4.9,
    reviews: 267,
    emoji: "🔄",
    badge: "Promo",
    compat: ["Tous modèles"],
    desc: "Pneu Michelin Primacy 4+. Excellent en freinage mouillé et sec. Longévité record. Label A/A.",
  },
  {
    id: 10,
    name: "Embrayage LuK Kit",
    cat: "transmission",
    subcat: "Embrayages",
    price: 189.0,
    oldPrice: 230.0,
    ref: "LK-8810",
    stock: 4,
    rating: 4.7,
    reviews: 43,
    emoji: "⚙️",
    badge: "Promo",
    compat: ["Volkswagen", "Peugeot", "Ford"],
    desc: "Kit embrayage LuK complet (disque + plateau + butée). Installation professionnelle recommandée.",
  },
  {
    id: 11,
    name: "Pare-chocs Toyota Corolla",
    cat: "carrosserie",
    subcat: "Pare-chocs avant",
    price: 145.0,
    oldPrice: null,
    ref: "TC-1234",
    stock: 3,
    rating: 4.5,
    reviews: 22,
    emoji: "🚗",
    badge: "",
    compat: ["Toyota Corolla 2019-2023"],
    desc: "Pare-chocs avant d'origine Toyota Corolla. Livré sans peinture. Compatible avec capteurs de stationnement.",
  },
  {
    id: 12,
    name: "Alternateur Valeo 90A",
    cat: "electricite",
    subcat: "Alternateurs",
    price: 149.99,
    oldPrice: 185.0,
    ref: "VL-9012",
    stock: 6,
    rating: 4.6,
    reviews: 55,
    emoji: "⚡",
    badge: "Promo",
    compat: ["Peugeot", "Citroën"],
    desc: "Alternateur Valeo remanufacturé 90A. Testé en usine. Garantie 1 an. Livré avec poulie.",
  },
  {
    id: 13,
    name: "Bougie NGK Iridium",
    cat: "moteur",
    subcat: "Bougies d'allumage",
    price: 18.99,
    oldPrice: null,
    ref: "NG-5547",
    stock: 100,
    rating: 4.8,
    reviews: 321,
    emoji: "🔥",
    badge: "Top vente",
    compat: ["Tous modèles"],
    desc: "Bougie NGK Iridium IX. Durée de vie x4 vs bougies standard. Démarrage fiable par temps froid.",
  },
  {
    id: 14,
    name: "Tapis de Sol Premium",
    cat: "accessoires",
    subcat: "Tapis de sol",
    price: 49.99,
    oldPrice: 65.0,
    ref: "AP-0011",
    stock: 25,
    rating: 4.4,
    reviews: 88,
    emoji: "🎛️",
    badge: "Promo",
    compat: ["Universel"],
    desc: "Jeu de 4 tapis sur mesure en caoutchouc premium. Antidérapants, lavables, résistants. Logo AutoParts Pro.",
  },
  {
    id: 15,
    name: "Rotule Lemförder",
    cat: "suspension",
    subcat: "Rotules",
    price: 24.5,
    oldPrice: null,
    ref: "LF-6634",
    stock: 18,
    rating: 4.7,
    reviews: 76,
    emoji: "🔩",
    badge: "",
    compat: ["BMW", "Mercedes-Benz", "Volkswagen"],
    desc: "Rotule de suspension Lemförder OEM. Qualité identique aux pièces d'origine. Durabilité maximale.",
  },
  {
    id: 16,
    name: "Caméra Recul HD 170°",
    cat: "accessoires",
    subcat: "Caméras de recul",
    price: 35.0,
    oldPrice: 50.0,
    ref: "CA-1780",
    stock: 40,
    rating: 4.3,
    reviews: 134,
    emoji: "📷",
    badge: "Nouveau",
    compat: ["Universel"],
    desc: "Caméra de recul HD 1080P, angle 170°, vision nocturne, étanche IP68. Installation facile.",
  },
];

const MODELS = {
  Toyota: [
    "Corolla",
    "Yaris",
    "Camry",
    "RAV4",
    "Land Cruiser",
    "Hilux",
    "Prius",
    "Avensis",
  ],
  Nissan: [
    "Qashqai",
    "Juke",
    "Micra",
    "Note",
    "X-Trail",
    "Navara",
    "Leaf",
    "370Z",
  ],
  Honda: ["Civic", "Jazz", "CR-V", "HR-V", "Accord", "NSX", "City", "Element"],
  Hyundai: [
    "Tucson",
    "Kona",
    "i20",
    "i30",
    "Santa Fe",
    "Elantra",
    "Ioniq",
    "Creta",
  ],
  Kia: [
    "Sportage",
    "Ceed",
    "Picanto",
    "Stonic",
    "Sorento",
    "Rio",
    "EV6",
    "Carnival",
  ],
  "Mercedes-Benz": [
    "Classe A",
    "Classe C",
    "Classe E",
    "GLA",
    "GLC",
    "Sprinter",
    "Vito",
    "CLA",
  ],
  BMW: ["Série 1", "Série 3", "Série 5", "X1", "X3", "X5", "M3", "116i"],
  Volkswagen: [
    "Golf",
    "Polo",
    "Passat",
    "Tiguan",
    "T-Roc",
    "ID.4",
    "Caddy",
    "Transporter",
  ],
  Ford: [
    "Fiesta",
    "Focus",
    "Puma",
    "Kuga",
    "Mustang",
    "Transit",
    "Ranger",
    "Explorer",
  ],
  Peugeot: ["208", "308", "2008", "3008", "5008", "Partner", "Expert", "508"],
};

const YEARS = Array.from({ length: 25 }, (_, i) => 2024 - i);

// ===== CART =====
const Cart = {
  items: [],

  init() {
    const saved = localStorage.getItem("autoparts_cart");
    if (saved) this.items = JSON.parse(saved);
    this.updateBadge();
  },

  save() {
    localStorage.setItem("autoparts_cart", JSON.stringify(this.items));
    this.updateBadge();
  },

  add(productId, qty = 1) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;
    const existing = this.items.find((i) => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ ...product, qty });
    }
    this.save();
    showNotification(`✅ ${product.name}`, "Ajouté au panier !", "success");
  },

  remove(productId) {
    this.items = this.items.filter((i) => i.id !== productId);
    this.save();
    if (typeof renderCart === "function") renderCart();
  },

  updateQty(productId, qty) {
    const item = this.items.find((i) => i.id === productId);
    if (!item) return;
    if (qty <= 0) {
      this.remove(productId);
      return;
    }
    item.qty = qty;
    this.save();
    if (typeof renderCart === "function") renderCart();
  },

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const badge = document.querySelector(".cart-count");
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  },
};

// ===== NOTIFICATIONS =====
function showNotification(title, message, type = "default") {
  let notif = document.querySelector(".notification");
  if (!notif) {
    notif = document.createElement("div");
    notif.className = "notification";
    document.body.appendChild(notif);
  }
  notif.className = `notification ${type}`;
  notif.innerHTML = `
    <span class="notification-icon">${type === "success" ? "✅" : "🔔"}</span>
    <div class="notification-text">
      <strong>${title}</strong>
      ${message}
    </div>
  `;
  notif.classList.add("show");
  clearTimeout(notif._timeout);
  notif._timeout = setTimeout(() => notif.classList.remove("show"), 3500);
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });
  }

  // Highlight active page
  const links = document.querySelectorAll(".nav-links a, .mobile-menu a");
  links.forEach((link) => {
    if (link.href === window.location.href) link.classList.add("active");
  });
}

// ===== VEHICLE FINDER =====
function initVehicleFinder() {
  const brandSelect = document.getElementById("finder-brand");
  const modelSelect = document.getElementById("finder-model");
  const yearSelect = document.getElementById("finder-year");

  if (!brandSelect) return;

  // Populate brands
  BRANDS.forEach((b) => {
    brandSelect.innerHTML += `<option value="${b}">${b}</option>`;
  });

  // Populate years
  if (yearSelect) {
    YEARS.forEach((y) => {
      yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
    });
  }

  brandSelect.addEventListener("change", () => {
    const brand = brandSelect.value;
    if (modelSelect) {
      modelSelect.innerHTML = '<option value="">Modèle</option>';
      if (brand && MODELS[brand]) {
        MODELS[brand].forEach((m) => {
          modelSelect.innerHTML += `<option value="${m}">${m}</option>`;
        });
      }
    }
  });
}

// ===== PRODUCT CARDS =====
function renderProductCard(product) {
  const stockClass =
    product.stock === 0 ? "out" : product.stock < 5 ? "low" : "";
  const stockText =
    product.stock === 0
      ? "❌ Rupture de stock"
      : product.stock < 5
        ? `⚠️ Plus que ${product.stock}`
        : "✅ En stock";
  const stars =
    "★".repeat(Math.floor(product.rating)) +
    (product.rating % 1 >= 0.5 ? "½" : "") +
    "☆".repeat(5 - Math.ceil(product.rating));
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return `
    <div class="product-card" data-id="${product.id}" data-cat="${product.cat}">
      <div class="product-image-wrap">
        <div class="product-emoji">${product.emoji}</div>
        <div class="product-badges">
          ${product.badge ? `<span class="badge badge-red">${product.badge}</span>` : ""}
          ${discount > 0 ? `<span class="badge badge-orange">-${discount}%</span>` : ""}
        </div>
        <button class="product-wishlist" onclick="toggleWishlist(${product.id}, this)" title="Favoris">♡</button>
      </div>
      <div class="product-body">
        <div class="product-category">${product.subcat}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-ref">Réf: ${product.ref}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <div class="product-price">${product.price.toFixed(2)} €</div>
            ${product.oldPrice ? `<div class="product-price-old">${product.oldPrice.toFixed(2)} €</div>` : ""}
          </div>
          <div class="product-stock ${stockClass}">${stockText}</div>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="Cart.add(${product.id})" ${product.stock === 0 ? "disabled" : ""}>
            🛒 Panier
          </button>
          <a href="product.html?id=${product.id}" class="btn btn-dark btn-sm">
            👁 Détails
          </a>
        </div>
      </div>
    </div>
  `;
}

function toggleWishlist(id, btn) {
  const isActive = btn.classList.toggle("active");
  btn.textContent = isActive ? "♥" : "♡";
  btn.style.background = isActive ? "var(--red)" : "";
  btn.style.color = isActive ? "white" : "";
}

// ===== RENDER PRODUCTS GRID =====
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">Aucun produit trouvé</div>
        <div class="empty-desc">Essayez d'autres filtres ou termes de recherche</div>
      </div>`;
    return;
  }
  container.innerHTML = products.map(renderProductCard).join("");
}

// ===== SEARCH =====
function filterProducts(query, category, sortBy, products = PRODUCTS) {
  let filtered = [...products];

  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.cat === category);
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subcat.toLowerCase().includes(q) ||
        p.ref.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q),
    );
  }

  switch (sortBy) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      filtered.sort((a, b) => b.reviews - a.reviews);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filtered.reverse();
      break;
  }

  return filtered;
}

// ===== RENDER CATEGORY CARDS =====
function renderCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = CATEGORIES.map(
    (cat) => `
    <a href="shop.html?cat=${cat.id}" class="category-card">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
      <div class="category-count">${cat.count} produits</div>
    </a>
  `,
  ).join("");
}

// ===== RENDER BRANDS =====
function renderBrands(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = BRANDS.map(
    (b) => `
    <div class="brand-item" onclick="window.location='shop.html?brand=${b}'">
      <span>${b}</span>
    </div>
  `,
  ).join("");
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(
      ".product-card, .category-card, .whyus-card, .testimonial-card",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, suffix = "") {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.count), el.dataset.suffix || "");
        observer.unobserve(el);
      }
    });
  });
  counters.forEach((c) => observer.observe(c));
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  Cart.init();
  initNavbar();
  initVehicleFinder();
  initCounters();
  setTimeout(initScrollAnimations, 100);
});

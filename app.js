/* === DATA === */
const FEATURES = [
  // AFFILIATE DASHBOARD
  {
    category: "Affiliate Dashboard",
    feature: "Self-Service Affiliate Portal",
    desc: "Affiliates can log in, view stats, and manage their account",
    mautic: 3, raider: 9, weferral: 8, refearnapp: 9, refref: 7,
    notes: "<em>Raider</em> and <em>RefearnApp</em> are purpose-built for this. <em>RefRef</em> has both a referrer and partner portal. <em>Mautic</em> requires plugins.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Affiliate Dashboard",
    feature: "Real-Time Stats",
    desc: "Live view of clicks, conversions, and balance",
    mautic: 4, raider: 7, weferral: 8, refearnapp: 8, refref: 7,
    notes: "<em>RefearnApp</em> and <em>Weferral</em> track visitors, leads, and sales in real-time. <em>RefRef</em> has engagement analytics. <em>Mautic</em> is campaign-centric, not affiliate-centric.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Affiliate Dashboard",
    feature: "Payout Request UI",
    desc: "Affiliates can request payouts from within the dashboard",
    mautic: 2, raider: 9, weferral: 6, refearnapp: 8, refref: 6,
    notes: "<em>Raider</em>: native payout requests with admin email + minimum threshold. <em>RefearnApp</em>: PayPal mass payout export. <em>RefRef</em>: manual and automatic dispersal. <em>Mautic</em>: no native payout flow.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Affiliate Dashboard",
    feature: "Custom Branding / White-label",
    desc: "Logo, colors, and domain customization",
    mautic: 8, raider: 8, weferral: 7, refearnapp: 6, refref: 5,
    notes: "<em>Mautic</em> and <em>Raider</em> offer full branding. <em>RefearnApp</em> requires a paid license for custom domain/branding. <em>RefRef</em> has personalized pages but branding is limited in alpha.",
    teamFit: ["small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  // TRACKING CODE
  {
    category: "Tracking Code",
    feature: "Affiliate Tracking Link Generation",
    desc: "Affiliates can generate unique tracking URLs",
    mautic: 3, raider: 10, weferral: 8, refearnapp: 9, refref: 8,
    notes: "<em>Raider</em>: core feature with configurable URL parameter. <em>RefearnApp</em>: cookie attribution with configurable duration. <em>RefRef</em>: JS snippet attribution. <em>Mautic</em>: not affiliate-specific.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "JavaScript Snippet / Pixel",
    desc: "JS tracker to embed on advertiser's website",
    mautic: 7, raider: 4, weferral: 7, refearnapp: 8, refref: 9,
    notes: "<em>RefRef</em> and <em>RefearnApp</em> both ship first-class JS snippets. <em>Mautic</em> has a mature tracking pixel. <em>Weferral</em> has a separate tracker repo. <em>Raider</em>: API-only, no JS pixel.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "Conversion / Payment Tracking",
    desc: "Backend reporting of confirmed conversions",
    mautic: 5, raider: 9, weferral: 7, refearnapp: 9, refref: 6,
    notes: "<em>RefearnApp</em> integrates natively with Stripe + Paddle webhooks. <em>Raider</em> has a dedicated Track API. <em>RefRef</em>: automatic reward dispersal. <em>Mautic</em>: campaign-based events only.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "Coupon Code Tracking",
    desc: "Track conversions via affiliate promo codes",
    mautic: 4, raider: 2, weferral: 3, refearnapp: 7, refref: 4,
    notes: "<em>RefearnApp</em> supports coupon code tracking (Pro tier). <em>Mautic</em> handles promo codes in campaigns. <em>Raider</em> and <em>Weferral</em>: link-based only. <em>RefRef</em>: not documented in alpha.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "Banner / Creative Asset Hosting",
    desc: "Host affiliate banners and creatives",
    mautic: 5, raider: 7, weferral: 3, refearnapp: 3, refref: 3,
    notes: "<em>Raider</em> supports multiple banner sizes via config. <em>Mautic</em> supports asset management. None of the Node.js tools have native banner hosting.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  // COMMISSION MANAGEMENT
  {
    category: "Commission Management",
    feature: "Percentage-Based Commission",
    desc: "Pay affiliates a % of referred revenue",
    mautic: 2, raider: 9, weferral: 9, refearnapp: 9, refref: 7,
    notes: "All purpose-built tools support percentage commissions. <em>RefearnApp</em> also supports customizable duration (2, 3+ months). <em>Mautic</em>: no native commission tracking.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Fixed / One-Time Commission",
    desc: "Flat fee per referred conversion",
    mautic: 2, raider: 6, weferral: 9, refearnapp: 8, refref: 7,
    notes: "<em>Weferral</em> and <em>RefearnApp</em> explicitly support one-time commissions. <em>RefRef</em> has customizable rewards. <em>Raider</em>: amount-based. <em>Mautic</em>: not applicable natively.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Recurring / Lifetime Commissions",
    desc: "Commission on repeat/subscription payments",
    mautic: 2, raider: 8, weferral: 9, refearnapp: 9, refref: 6,
    notes: "<em>RefearnApp</em>: customizable commission duration per affiliate. <em>Weferral</em>: lifetime commissions are a featured differentiator. <em>Raider</em>: report each payment event. <em>RefRef</em>: flexible but alpha.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Two-Sided Incentives",
    desc: "Reward both referrer and the referred user",
    mautic: 3, raider: 1, weferral: 4, refearnapp: 7, refref: 6,
    notes: "<em>RefearnApp</em> supports two-sided incentives (Pro+). <em>RefRef</em>: customizable rewards per role. <em>Raider</em>: affiliate-side only. <em>Mautic</em>: possible via campaign logic but complex.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Multi-Currency Support",
    desc: "Commissions in different currencies with conversion",
    mautic: 4, raider: 8, weferral: 3, refearnapp: 6, refref: 3,
    notes: "<em>Raider</em>: Fixer API integration for live exchange rates. <em>RefearnApp</em>: Stripe/Paddle handle currency natively. <em>Weferral</em> and <em>RefRef</em>: single currency assumed.",
    teamFit: ["enterprise"],
    skillFit: ["advanced"]
  },
  {
    category: "Commission Management",
    feature: "Fraud Monitoring",
    desc: "Detection and prevention of fraudulent referrals",
    mautic: 3, raider: 2, weferral: 2, refearnapp: 3, refref: 7,
    notes: "<em>RefRef</em> has dedicated fraud monitoring as a listed feature. Others rely on manual review or payment processor protections. <em>Mautic</em>: some campaign-level guard rails.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  // CONTACT IMPORTS
  {
    category: "Contact Imports",
    feature: "CSV Contact Import",
    desc: "Bulk import affiliates or contacts from CSV",
    mautic: 10, raider: 1, weferral: 7, refearnapp: 5, refref: 3,
    notes: "<em>Mautic</em>: best-in-class CSV import with field mapping and deduplication. <em>Weferral</em>: import CSV to invite customers. <em>RefearnApp</em>: CSV payout export (not import). <em>Raider</em>/<em>RefRef</em>: API only.",
    teamFit: ["small", "enterprise"],
    skillFit: ["beginner", "intermediate"]
  },
  {
    category: "Contact Imports",
    feature: "Affiliate Invite by Email",
    desc: "Send bulk email invitations to join the affiliate program",
    mautic: 7, raider: 3, weferral: 8, refearnapp: 7, refref: 5,
    notes: "<em>Weferral</em>: invite customers via UI with automated invite email. <em>RefearnApp</em>: affiliate sign-up flow with email. <em>Mautic</em>: campaign-driven invites. <em>Raider</em>: self-registration only.",
    teamFit: ["small", "enterprise"],
    skillFit: ["beginner", "intermediate"]
  },
  {
    category: "Contact Imports",
    feature: "CRM Contact Sync",
    desc: "Sync contacts from CRM platforms",
    mautic: 9, raider: 1, weferral: 3, refearnapp: 2, refref: 2,
    notes: "<em>Mautic</em>: native Salesforce, HubSpot, Zoho integrations. All others: REST API only — no native CRM connectors.",
    teamFit: ["enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Contact Imports",
    feature: "Self-Registration by Affiliates",
    desc: "Affiliates sign up themselves without admin action",
    mautic: 3, raider: 9, weferral: 7, refearnapp: 9, refref: 7,
    notes: "<em>Raider</em> and <em>RefearnApp</em>: full self-service signup. <em>RefRef</em>: referrer portal with sign-up. <em>Mautic</em>: forms-based, requires workflow setup.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  // INTEGRATIONS
  {
    category: "Integrations",
    feature: "Stripe / Paddle Integration",
    desc: "Native payment processor integration for conversion tracking",
    mautic: 4, raider: 3, weferral: 3, refearnapp: 10, refref: 4,
    notes: "<em>RefearnApp</em> is the clear winner — native Stripe and Paddle webhook integration is a core feature. Others require custom backend code to report payments.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "REST API",
    desc: "Programmable API for custom integrations",
    mautic: 9, raider: 8, weferral: 8, refearnapp: 7, refref: 6,
    notes: "All tools expose REST APIs. <em>Mautic</em> has the most comprehensive documented API. <em>RefRef</em>: API docs are sparse in alpha.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "Webhooks",
    desc: "Push events to external systems on triggers",
    mautic: 9, raider: 3, weferral: 8, refearnapp: 6, refref: 5,
    notes: "<em>Mautic</em>: mature webhook support. <em>Weferral</em>: webhooks for workflow automation. <em>RefearnApp</em>: relies on Stripe/Paddle webhooks inbound. <em>Raider</em>: no outbound webhooks.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "Plugin / Extension Marketplace",
    desc: "Install community-built plugins from a marketplace",
    mautic: 9, raider: 2, weferral: 2, refearnapp: 2, refref: 2,
    notes: "<em>Mautic</em>: in-app Composer-managed Marketplace. All others: extend via API/fork only — no plugin ecosystems.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "Email / SMTP Integration",
    desc: "Transactional email for affiliate notifications",
    mautic: 10, raider: 7, weferral: 6, refearnapp: 7, refref: 6,
    notes: "<em>Mautic</em> is an email platform at its core. <em>Raider</em>/<em>RefearnApp</em>: SMTP for notifications. <em>RefRef</em>: Fumadocs-based email — alpha maturity.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  // SELF-HOSTING
  {
    category: "Self-Hosting",
    feature: "Docker Support",
    desc: "Official Docker image or Compose setup available",
    mautic: 8, raider: 9, weferral: 4, refearnapp: 9, refref: 7,
    notes: "<em>Raider</em> and <em>RefearnApp</em> have official Docker support. <em>Mautic</em>: community Docker Compose. <em>RefRef</em>: Docker available in monorepo. <em>Weferral</em>: community only.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Resource Requirements",
    desc: "Minimum server resources needed",
    mautic: 4, raider: 10, weferral: 7, refearnapp: 7, refref: 5,
    notes: "<em>Raider</em> (Rust binary): ~256 MB RAM. <em>RefearnApp</em>/<em>Weferral</em> (Node.js): ~512 MB. <em>RefRef</em> (Next.js + Redis + BullMQ): ~1 GB. <em>Mautic</em> (PHP): 2+ GB recommended.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Setup Complexity",
    desc: "Time and skill required to get running",
    mautic: 3, raider: 7, weferral: 7, refearnapp: 8, refref: 5,
    notes: "<em>RefearnApp</em>: easiest — Docker Compose or Coolify one-click. <em>Raider</em>: config file + MySQL. <em>RefRef</em>: Turborepo monorepo with Redis dependency. <em>Mautic</em>: most complex by far.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Production Readiness",
    desc: "Stability and maturity for production workloads",
    mautic: 9, raider: 7, weferral: 3, refearnapp: 6, refref: 2,
    notes: "<em>Mautic</em>: battle-tested since 2014. <em>Raider</em>: stable, used in production at Crisp. <em>RefearnApp</em>: early-stage, launched 2026. <em>Weferral</em> and <em>RefRef</em>: both explicitly alpha/not-production-ready.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Documentation Quality",
    desc: "Quality and completeness of self-hosting docs",
    mautic: 9, raider: 8, weferral: 4, refearnapp: 6, refref: 4,
    notes: "<em>Mautic</em>: extensive official docs + community. <em>Raider</em>: thorough README, all config options documented. <em>RefearnApp</em>: growing docs site. <em>Weferral</em>/<em>RefRef</em>: sparse — split across repos.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  }
];

/* === RECOMMENDATION ENGINE === */
const RECOMMENDATIONS = {
  "solo-beginner":      { tool: "RefearnApp", reason: "RefearnApp's Docker Compose setup and native Stripe/Paddle integration means the fewest moving parts for a solo founder — no backend payment wiring required." },
  "solo-intermediate":  { tool: "Raider",     reason: "Raider gives you a complete affiliate dashboard with minimal infrastructure. Single binary, Docker-ready, and well-documented for a solo dev who wants to ship fast." },
  "solo-advanced":      { tool: "Raider",     reason: "Raider's Rust binary, Track API, and config-file setup are ideal for advanced solo developers who value performance and operational simplicity." },
  "small-beginner":     { tool: "RefearnApp", reason: "RefearnApp's one-click Coolify deploy and native Stripe/Paddle integration removes most infrastructure burden for small teams without deep DevOps experience." },
  "small-intermediate": { tool: "RefearnApp", reason: "RefearnApp hits the sweet spot for small SaaS teams: native payment processor hooks, self-hosted, Docker support, and a real affiliate portal — all without a monthly fee." },
  "small-advanced":     { tool: "Mautic",     reason: "Mautic's plugin ecosystem and marketing automation depth are powerful for technical small teams who need affiliate tracking within a broader marketing stack." },
  "enterprise-beginner":{ tool: "Mautic",     reason: "Mautic has managed hosting options, extensive docs, and community support — reducing the barrier for enterprise teams without deep DevOps skills." },
  "enterprise-intermediate": { tool: "Mautic", reason: "Mautic's CRM integrations, Marketplace, and campaign automation make it the strongest enterprise choice for marketing-mature organizations." },
  "enterprise-advanced":{ tool: "Mautic",     reason: "Mautic with custom plugins, REST API, and CRM integrations is the most extensible FOSS option for enterprise-grade affiliate and marketing automation at scale." },
};

/* === STATE === */
let activeTeam = "all";
let activeSkill = "all";
let sortCol = "category";
let sortDir = "asc";

/* === INIT === */
document.addEventListener("DOMContentLoaded", () => {
  renderTable();
  bindFilters();
});

/* === RENDER TABLE === */
function renderTable() {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  let data = [...FEATURES];

  // Sort
  if (sortCol === "category") {
    data.sort((a, b) => {
      const catCmp = a.category.localeCompare(b.category);
      return sortDir === "asc" ? catCmp : -catCmp;
    });
  } else if (["mautic","raider","weferral","refearnapp","refref"].includes(sortCol)) {
    data.sort((a, b) => {
      const diff = b[sortCol] - a[sortCol];
      return sortDir === "asc" ? -diff : diff;
    });
  }

  let lastCat = "";

  data.forEach(row => {
    const tr = document.createElement("tr");

    const teamMatch = activeTeam === "all" || row.teamFit.includes(activeTeam);
    const skillMatch = activeSkill === "all" || row.skillFit.includes(activeSkill);
    if (!teamMatch || !skillMatch) tr.classList.add("hidden");

    const catChanged = row.category !== lastCat;
    lastCat = row.category;

    tr.innerHTML = `
      <td>${catChanged ? `<span class="cat-badge">${row.category}</span>` : ""}</td>
      <td><div class="feature-name">${row.feature}</div><div class="feature-desc">${row.desc}</div></td>
      <td class="score-cell">${scoreChip(row.mautic)}</td>
      <td class="score-cell">${scoreChip(row.raider)}</td>
      <td class="score-cell">${scoreChip(row.weferral)}</td>
      <td class="score-cell">${scoreChip(row.refearnapp)}</td>
      <td class="score-cell">${scoreChip(row.refref)}</td>
      <td class="notes-cell">${row.notes}</td>
    `;
    tbody.appendChild(tr);
  });
}

function scoreChip(val) {
  if (val === 0 || val === null) return `<span class="score-chip score-0">N/A</span>`;
  return `<span class="score-chip score-${val}">${val}</span>`;
}

/* === SORT === */
function sortTable(col) {
  if (sortCol === col) {
    sortDir = sortDir === "asc" ? "desc" : "asc";
  } else {
    sortCol = col;
    sortDir = col === "category" ? "asc" : "desc";
  }

  document.querySelectorAll(".comparison-table th").forEach(th => {
    th.classList.remove("sort-asc", "sort-desc");
  });

  const colMap = ["category", null, "mautic", "raider", "weferral", "refearnapp", "refref", null];
  const headers = document.querySelectorAll(".comparison-table th");
  colMap.forEach((c, i) => {
    if (c === col && headers[i]) {
      headers[i].classList.add(sortDir === "asc" ? "sort-asc" : "sort-desc");
    }
  });

  document.querySelectorAll("[data-sort]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sort === col);
  });

  renderTable();
}

/* === FILTERS === */
function bindFilters() {
  document.querySelectorAll("[data-group='team']").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTeam = btn.dataset.filter;
      document.querySelectorAll("[data-group='team']").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTable();
      updateRecommendation();
    });
  });
  document.querySelectorAll("[data-group='skill']").forEach(btn => {
    btn.addEventListener("click", () => {
      activeSkill = btn.dataset.filter;
      document.querySelectorAll("[data-group='skill']").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTable();
      updateRecommendation();
    });
  });
  document.querySelectorAll("[data-sort]").forEach(btn => {
    btn.addEventListener("click", () => sortTable(btn.dataset.sort));
  });
}

function updateRecommendation() {
  const box = document.getElementById("rec-box");
  const text = document.getElementById("rec-text");
  if (activeTeam === "all" || activeSkill === "all") {
    text.innerHTML = "Select both a <strong>team size</strong> and <strong>skill level</strong> above to get a personalized recommendation.";
    box.style.borderColor = "rgba(92,107,192,0.3)";
    box.style.background = "rgba(92,107,192,0.1)";
    return;
  }
  const key = `${activeTeam}-${activeSkill}`;
  const rec = RECOMMENDATIONS[key];
  if (!rec) return;

  const colors = {
    Mautic:     { border: "rgba(129,140,248,0.4)", bg: "rgba(129,140,248,0.08)", label: "#818cf8" },
    Raider:     { border: "rgba(251,146,60,0.4)",  bg: "rgba(251,146,60,0.08)",  label: "#fb923c" },
    Weferral:   { border: "rgba(52,211,153,0.4)",  bg: "rgba(52,211,153,0.08)",  label: "#34d399" },
    RefearnApp: { border: "rgba(167,139,250,0.4)", bg: "rgba(167,139,250,0.08)", label: "#a78bfa" },
    RefRef:     { border: "rgba(56,189,248,0.4)",  bg: "rgba(56,189,248,0.08)",  label: "#38bdf8" },
  };
  const c = colors[rec.tool];
  box.style.borderColor = c.border;
  box.style.background = c.bg;
  text.innerHTML = `<strong style="color:${c.label}">Recommended: ${rec.tool}</strong> — ${rec.reason}`;
}

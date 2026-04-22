/* === DATA === */
const FEATURES = [
  // AFFILIATE DASHBOARD
  {
    category: "Affiliate Dashboard",
    feature: "Self-Service Affiliate Portal",
    desc: "Affiliates can log in, view stats, and manage their account",
    mautic: 3, raider: 9, weferral: 8,
    notes: "<em>Raider</em> is purpose-built for this. <em>Weferral</em> has a solid React portal. <em>Mautic</em> requires plugins — not native.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Affiliate Dashboard",
    feature: "Real-Time Stats",
    desc: "Live view of clicks, conversions, and balance",
    mautic: 4, raider: 7, weferral: 8,
    notes: "<em>Weferral</em> tracks visitors, leads, and sales in real-time. <em>Raider</em> shows balance and referral stats. <em>Mautic</em> is campaign-centric, not affiliate-centric.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Affiliate Dashboard",
    feature: "Payout Request UI",
    desc: "Affiliates can request payouts from within the dashboard",
    mautic: 2, raider: 9, weferral: 6,
    notes: "<em>Raider</em> has native payout requests with admin email notifications and minimum threshold config. <em>Weferral</em> tracks balances. <em>Mautic</em> has no native payout flow.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Affiliate Dashboard",
    feature: "Custom Branding / White-label",
    desc: "Logo, colors, and domain customization",
    mautic: 8, raider: 8, weferral: 7,
    notes: "All three support branding. <em>Raider</em> uses config-file branding (logo URL, color, custom HTML). <em>Mautic</em> and <em>Weferral</em> have UI-driven customization.",
    teamFit: ["small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  // TRACKING CODE GENERATION
  {
    category: "Tracking Code",
    feature: "Affiliate Tracking Link Generation",
    desc: "Affiliates can generate unique tracking URLs",
    mautic: 3, raider: 10, weferral: 8,
    notes: "<em>Raider</em>: core feature — affiliates self-generate tracking links with configurable URL parameter. <em>Weferral</em>: built-in tracker. <em>Mautic</em>: URL tracking exists but not affiliate-specific.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "JavaScript Snippet / Pixel",
    desc: "JS tracker to embed on advertiser's website",
    mautic: 7, raider: 4, weferral: 7,
    notes: "<em>Mautic</em> has a mature JS tracking pixel for lead capture. <em>Weferral</em> has a separate tracker repo. <em>Raider</em> relies on backend API calls — no JS pixel included.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "Conversion / Payment Tracking",
    desc: "Backend reporting of confirmed conversions",
    mautic: 5, raider: 9, weferral: 7,
    notes: "<em>Raider</em> has a dedicated Track API (HTTP POST) your backend calls on payment. Currency conversion via Fixer API. <em>Weferral</em> uses webhooks. <em>Mautic</em> uses campaign-based conversion events.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "Signup Tracking",
    desc: "Track when a referred user signs up (pre-purchase)",
    mautic: 6, raider: 9, weferral: 7,
    notes: "<em>Raider</em> has a dedicated Signup Track API endpoint. <em>Weferral</em> tracks leads. <em>Mautic</em> handles lead capture well but not affiliate-attributed signup specifically.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Tracking Code",
    feature: "Banner / Creative Asset Hosting",
    desc: "Host affiliate banners and creatives",
    mautic: 5, raider: 7, weferral: 3,
    notes: "<em>Raider</em> supports multiple banner sizes via config (width/height + URL). <em>Mautic</em> supports asset management. <em>Weferral</em> has no native banner management.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  // COMMISSION MANAGEMENT
  {
    category: "Commission Management",
    feature: "Percentage-Based Commission",
    desc: "Pay affiliates a % of referred revenue",
    mautic: 2, raider: 9, weferral: 9,
    notes: "<em>Raider</em>: configurable default commission %; per-account overrides possible. <em>Weferral</em>: fixed or percentage-based. <em>Mautic</em>: no native commission tracking.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Fixed / One-Time Commission",
    desc: "Flat fee per referred conversion",
    mautic: 2, raider: 6, weferral: 9,
    notes: "<em>Weferral</em> explicitly supports one-time (e-commerce) commissions. <em>Raider</em> uses amount-based reporting (configurable). <em>Mautic</em> not applicable natively.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Recurring / Lifetime Commissions",
    desc: "Commission on repeat/subscription payments",
    mautic: 2, raider: 8, weferral: 9,
    notes: "<em>Weferral</em>: lifetime commissions are a featured differentiator. <em>Raider</em>: supports recurring by having backend report each payment event. <em>Mautic</em>: no native support.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Commission Management",
    feature: "Multi-Currency Support",
    desc: "Commissions in different currencies with conversion",
    mautic: 4, raider: 8, weferral: 3,
    notes: "<em>Raider</em>: integrates with Fixer API (APILayer) for live exchange rates. <em>Mautic</em>: supports multi-currency in campaigns. <em>Weferral</em>: single currency assumed.",
    teamFit: ["enterprise"],
    skillFit: ["advanced"]
  },
  {
    category: "Commission Management",
    feature: "Admin Commission Override",
    desc: "Admin can adjust commission rates per affiliate",
    mautic: 2, raider: 7, weferral: 5,
    notes: "<em>Raider</em> supports per-account commission via Management API. <em>Weferral</em>: RBAC is listed as 'coming soon'. <em>Mautic</em>: not applicable.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  // CONTACT IMPORTS
  {
    category: "Contact Imports",
    feature: "CSV Contact Import",
    desc: "Bulk import affiliates or contacts from CSV",
    mautic: 10, raider: 1, weferral: 7,
    notes: "<em>Mautic</em> has best-in-class CSV import with field mapping, deduplication, and segment assignment. <em>Weferral</em>: import CSV of customers to invite as affiliates. <em>Raider</em>: no import UI — API only.",
    teamFit: ["small", "enterprise"],
    skillFit: ["beginner", "intermediate"]
  },
  {
    category: "Contact Imports",
    feature: "Affiliate Invite by Email",
    desc: "Send bulk email invitations to join affiliate program",
    mautic: 7, raider: 3, weferral: 8,
    notes: "<em>Weferral</em>: invite customers via UI, sends automated invite email. <em>Mautic</em>: campaign-driven invites possible. <em>Raider</em>: no bulk invite — affiliates self-register.",
    teamFit: ["small", "enterprise"],
    skillFit: ["beginner", "intermediate"]
  },
  {
    category: "Contact Imports",
    feature: "CRM Contact Sync",
    desc: "Sync contacts from CRM platforms",
    mautic: 9, raider: 1, weferral: 3,
    notes: "<em>Mautic</em> integrates with Salesforce, HubSpot, and others natively. <em>Raider</em> and <em>Weferral</em>: no CRM integrations — REST API only.",
    teamFit: ["enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Contact Imports",
    feature: "Self-Registration by Affiliates",
    desc: "Affiliates sign up themselves without admin action",
    mautic: 3, raider: 9, weferral: 7,
    notes: "<em>Raider</em>: full self-service signup with configurable toggle (account_create_allow). <em>Weferral</em>: affiliates can register. <em>Mautic</em>: forms-based only, requires workflow setup.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  // INTEGRATIONS
  {
    category: "Integrations",
    feature: "REST API",
    desc: "Programmable API for custom integrations",
    mautic: 9, raider: 8, weferral: 8,
    notes: "All three offer REST APIs. <em>Mautic</em> has a comprehensive documented REST API. <em>Raider</em> has Track API + Management API. <em>Weferral</em> has a full REST API.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "Webhooks",
    desc: "Push events to external systems on triggers",
    mautic: 9, raider: 3, weferral: 8,
    notes: "<em>Mautic</em>: mature webhook support for campaign events. <em>Weferral</em>: webhooks for workflow automation. <em>Raider</em>: no native webhook — relies on your backend calling its API.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "Email / SMTP Integration",
    desc: "Transactional email for affiliate notifications",
    mautic: 10, raider: 7, weferral: 6,
    notes: "<em>Mautic</em> is an email platform at its core — multi-provider support. <em>Raider</em>: SMTP config for payout notifications. <em>Weferral</em>: email automation for affiliates.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "Plugin / Extension Marketplace",
    desc: "Install community-built plugins from a marketplace",
    mautic: 9, raider: 2, weferral: 2,
    notes: "<em>Mautic</em> has an in-app Marketplace (Composer-managed). <em>Raider</em> and <em>Weferral</em>: no plugin ecosystem — extend via API only.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Integrations",
    feature: "CRM / Marketing Platform Integrations",
    desc: "Native connectors to Salesforce, HubSpot, etc.",
    mautic: 9, raider: 1, weferral: 2,
    notes: "<em>Mautic</em>: native integrations with Salesforce, HubSpot, Zoho, and more. <em>Raider</em> and <em>Weferral</em>: API-only integration — no native connectors.",
    teamFit: ["enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  // SELF-HOSTING
  {
    category: "Self-Hosting",
    feature: "Docker Support",
    desc: "Official Docker image available",
    mautic: 8, raider: 9, weferral: 4,
    notes: "<em>Raider</em> has an official Docker Hub image. <em>Mautic</em> has community Docker Compose setups. <em>Weferral</em>: community-only, no official image.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Resource Requirements",
    desc: "Minimum server resources needed",
    mautic: 4, raider: 10, weferral: 7,
    notes: "<em>Raider</em> (Rust binary): extremely lightweight — runs on 256 MB RAM. <em>Weferral</em> (Node.js): ~512 MB. <em>Mautic</em> (PHP): needs 2+ GB RAM for production.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Setup Complexity",
    desc: "Time and skill required to get running",
    mautic: 3, raider: 7, weferral: 7,
    notes: "<em>Mautic</em>: complex — PHP extensions, Composer, cron jobs, full web server config. <em>Raider</em> + <em>Weferral</em>: moderate — a few commands or Docker run.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Production Readiness",
    desc: "Stability and maturity for production workloads",
    mautic: 9, raider: 7, weferral: 3,
    notes: "<em>Mautic</em>: mature, battle-tested since 2014. <em>Raider</em>: stable, used in production at Crisp. <em>Weferral</em>: explicitly marked 'not production ready' in its own README.",
    teamFit: ["small", "enterprise"],
    skillFit: ["intermediate", "advanced"]
  },
  {
    category: "Self-Hosting",
    feature: "Documentation Quality",
    desc: "Quality and completeness of self-hosting docs",
    mautic: 9, raider: 8, weferral: 4,
    notes: "<em>Mautic</em>: extensive official docs, community guides, video tutorials. <em>Raider</em>: thorough README with all config options documented. <em>Weferral</em>: sparse — split across two repos.",
    teamFit: ["solo", "small", "enterprise"],
    skillFit: ["beginner", "intermediate", "advanced"]
  }
];

/* === RECOMMENDATION ENGINE === */
const RECOMMENDATIONS = {
  "solo-beginner":      { tool: "Raider", reason: "Raider's single binary with Docker setup is the fastest path to a working affiliate system for a solo founder. Minimal infra, zero framework overhead." },
  "solo-intermediate":  { tool: "Raider", reason: "Raider gives you a complete affiliate dashboard with minimal moving parts. Great for solo devs who want to ship quickly and own their infra." },
  "solo-advanced":      { tool: "Raider", reason: "Raider's Rust binary, Track API, and config-file driven setup are ideal for advanced solo developers who value performance and simplicity." },
  "small-beginner":     { tool: "Weferral", reason: "Weferral's Node.js/React stack and simple npm setup is the easiest entry point for small teams with limited DevOps experience — though note it's still alpha." },
  "small-intermediate": { tool: "Raider", reason: "Raider hits the sweet spot for small teams: purpose-built affiliate tracking, Docker support, real payout flows, and low resource needs." },
  "small-advanced":     { tool: "Mautic", reason: "Mautic's plugin ecosystem and marketing automation depth make it powerful for technical small teams who need affiliate tracking as part of a broader marketing stack." },
  "enterprise-beginner":{ tool: "Mautic", reason: "Mautic has managed hosting options, extensive docs, and community support — lowering the barrier for enterprise teams without deep DevOps skills." },
  "enterprise-intermediate": { tool: "Mautic", reason: "Mautic's CRM integrations, marketplace, and campaign automation make it the strongest enterprise choice for marketing-mature organizations." },
  "enterprise-advanced":{ tool: "Mautic", reason: "Mautic with custom plugins, REST API, and CRM integrations is the most extensible FOSS option for enterprise-grade affiliate and marketing automation at scale." },
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
  } else if (["mautic","raider","weferral"].includes(sortCol)) {
    data.sort((a, b) => {
      const diff = b[sortCol] - a[sortCol];
      return sortDir === "asc" ? -diff : diff;
    });
  }

  // Last category tracker (for visual grouping)
  let lastCat = "";

  data.forEach(row => {
    const tr = document.createElement("tr");

    // Filter visibility
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
  // Update header indicators
  document.querySelectorAll(".comparison-table th").forEach(th => {
    th.classList.remove("sort-asc", "sort-desc");
  });
  const cols = ["category", null, "mautic", "raider", "weferral", null];
  const headers = document.querySelectorAll(".comparison-table th");
  cols.forEach((c, i) => {
    if (c === col) {
      headers[i].classList.add(sortDir === "asc" ? "sort-asc" : "sort-desc");
    }
  });

  // Update sort filter buttons
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
    Mautic: { border: "rgba(129,140,248,0.4)", bg: "rgba(129,140,248,0.08)", label: "#818cf8" },
    Raider:  { border: "rgba(251,146,60,0.4)",  bg: "rgba(251,146,60,0.08)",  label: "#fb923c" },
    Weferral:{ border: "rgba(52,211,153,0.4)",  bg: "rgba(52,211,153,0.08)", label: "#34d399" },
  };
  const c = colors[rec.tool];
  box.style.borderColor = c.border;
  box.style.background = c.bg;
  text.innerHTML = `<strong style="color:${c.label}">Recommended: ${rec.tool}</strong> — ${rec.reason}`;
}

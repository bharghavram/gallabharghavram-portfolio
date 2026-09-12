// ============================================================
// script.js — Portfolio Rendering & Interactive Behaviors
// Reads structured content from portfolioData (data.js) and
// populates the HTML section containers dynamically.
// ============================================================

(function initPortfolioApp() {
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof portfolioData === 'undefined') {
      console.error('portfolioData is undefined. Make sure data.js is loaded before script.js.');
      return;
    }

    renderHero();
    renderTechStrip();
    renderServices();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    initInteractiveEffects();
  });

  // ── 1. Hero Renderer ────────────────────────────────────────
  function renderHero() {
    const container = document.getElementById('hero-content-container');
    if (!container || !portfolioData.hero) return;
    const h = portfolioData.hero;
    const p = portfolioData.personal;

    container.innerHTML = `
      <!-- Eyebrow -->
      <p class="hero-eyebrow hero-anim" style="--delay:0s">
        ${h.eyebrow}
      </p>

      <!-- Headline -->
      <h1 class="hero-title hero-anim" style="--delay:0.10s">
        ${h.titlePart1} <span class="hero-accent">${h.titleAccent}</span><br>
        ${h.titlePart2}
      </h1>

      <!-- Description -->
      <p class="hero-description hero-anim" style="--delay:0.20s">
        ${h.description}
      </p>

      <!-- CTAs -->
      <div class="hero-actions hero-anim" style="--delay:0.30s">
        <a href="${h.primaryCta.href}" class="btn btn-primary btn-hero">
          ${h.primaryCta.label}
        </a>
        <a href="${h.secondaryCta.href}" class="btn btn-glass btn-hero">
          ${h.secondaryCta.label}
          <i class="fa-solid fa-arrow-right" style="font-size:0.8em;"></i>
        </a>
      </div>

      <!-- Expertise pills -->
      <div class="hero-capabilities hero-anim" style="--delay:0.40s">
        ${h.capabilities.map((cap, idx) => `
          <span class="hero-cap">${cap}</span>
          ${idx < h.capabilities.length - 1 ? '<span class="hero-cap-sep"></span>' : ''}
        `).join('')}
      </div>

      <!-- Availability / location -->
      <div class="hero-meta hero-anim" style="--delay:0.48s">
        <span class="hero-available">
          <span class="hero-dot"></span>
          ${p.availability}
        </span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-location">
          <i class="fa-solid fa-location-dot"></i>
          ${p.location}
        </span>
      </div>
    `;
  }

  // ── 2. Tech Strip Renderer ──────────────────────────────────
  function renderTechStrip() {
    const container = document.getElementById('tech-strip-container');
    if (!container || !portfolioData.techStrip) return;
    const ts = portfolioData.techStrip;

    container.innerHTML = `
      <p style="text-align:center; font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin-bottom:1.5rem;">${ts.title}</p>
      <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:2.5rem 3rem;">
        ${ts.items.map(item => `
          <span style="display:flex; align-items:center; gap:0.5rem; color:var(--muted); font-weight:600; font-size:1.05rem; transition:var(--transition);" onmouseover="this.style.color='var(--accent-2)'" onmouseout="this.style.color='var(--muted)'">
            <i class="${item.icon}"></i> ${item.name}
          </span>
        `).join('')}
      </div>
    `;
  }

  // ── 3. Services Renderer ────────────────────────────────────
  function renderServices() {
    const headerContainer = document.getElementById('services-header-container');
    const listContainer = document.getElementById('services-list-container');
    const footerContainer = document.getElementById('services-footer-container');
    if (!portfolioData.services) return;
    const s = portfolioData.services;

    if (headerContainer) {
      headerContainer.innerHTML = `
        <p class="services-eyebrow">${s.eyebrow}</p>
        <h2 class="services-title">${s.titleLine1}<br>${s.titleLine2}</h2>
        <p class="services-sub">${s.description}</p>
      `;
    }

    if (listContainer) {
      listContainer.innerHTML = s.items.map((item, idx) => `
        <article class="service-card fade-up" style="transition-delay: ${0.1 + idx * 0.1}s;">
          <div class="service-card-inner">
            <div class="service-meta">
              <span class="service-num">${item.num}</span>
              <div class="service-icon-wrap"><i class="${item.icon} service-icon"></i></div>
            </div>
            <div class="service-body">
              <h3 class="service-name">${item.title}</h3>
              <p class="service-desc">${item.description}</p>
              <div class="service-caps">
                ${item.capabilities.map((cap, cIdx) => `
                  <span class="service-cap">${cap}</span>
                  ${cIdx < item.capabilities.length - 1 ? '<span class="service-cap-sep">•</span>' : ''}
                `).join('')}
              </div>
            </div>
            <div class="service-action">
              <span class="service-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>
        </article>
      `).join('');
    }

    if (footerContainer) {
      footerContainer.innerHTML = `
        <p class="services-footer-text">${s.footerText}</p>
        <a href="${s.footerCta.href}" class="services-footer-cta">
          ${s.footerCta.label} <i class="fa-solid fa-arrow-right"></i>
        </a>
      `;
    }
  }

  // ── 4. About Renderer ───────────────────────────────────────
  function renderAbout() {
    const headerContainer = document.getElementById('about-header-container');
    const profileContainer = document.getElementById('about-profile-container');
    const contentContainer = document.getElementById('about-content-container');
    if (!portfolioData.about) return;
    const a = portfolioData.about;

    if (headerContainer) {
      headerContainer.innerHTML = `
        <p class="about-eyebrow">${a.eyebrow}</p>
        <h2 class="about-title">${a.titleLine1}<br>${a.titleLine2}</h2>
        <p class="about-intro">${a.intro}</p>
      `;
    }

    if (profileContainer) {
      profileContainer.innerHTML = `
        <div class="about-image-card">
          <div class="about-image-frame">
            <img class="about-img" src="${a.profileImage}" alt="${portfolioData.personal.name} — ${a.role}" loading="lazy" decoding="async" onerror="this.style.display='none'" />
          </div>
          <div class="about-identity-badge">
            <span class="about-identity-role">${a.role}</span>
            <span class="about-identity-sub">${a.roleSub}</span>
          </div>
        </div>
      `;
    }

    if (contentContainer) {
      contentContainer.innerHTML = `
        <!-- Narrative Paragraphs -->
        <div class="about-text-block">
          ${a.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>

        <!-- Credibility Metrics -->
        <div class="about-metrics-grid fade-up" style="transition-delay: 0.25s;">
          ${a.metrics.map(m => `
            <div class="about-metric-card">
              <div class="about-metric-num">${m.num}</div>
              <div class="about-metric-label">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <!-- How I Approach Technology -->
        <div class="about-approach-block fade-up" style="transition-delay: 0.35s;">
          <h3 class="about-approach-title">${a.approachTitle}</h3>
          <p class="about-approach-desc">${a.approachDesc}</p>

          <!-- 3 Editorial Principles -->
          <div class="about-principles-grid">
            ${a.principles.map(p => `
              <div class="about-principle-card">
                <span class="about-principle-num">${p.num}</span>
                <div class="about-principle-content">
                  <strong class="about-principle-name">${p.name}</strong>
                  <p class="about-principle-text">${p.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // ── 5. Experience Renderer ──────────────────────────────────
  function renderExperience() {
    const headerContainer = document.getElementById('exp-header-container');
    const timelineContainer = document.getElementById('project-exp-timeline');
    const trainingContainer = document.getElementById('trainee-exp-grid');
    if (!portfolioData.experience) return;
    const exp = portfolioData.experience;

    if (headerContainer) {
      headerContainer.innerHTML = `
        <p class="exp-eyebrow">${exp.eyebrow}</p>
        <h2 class="exp-title">${exp.titleLine1}<br>${exp.titleLine2}</h2>
        <p class="exp-sub">${exp.sub}</p>
      `;
    }

    // Enriched metadata mapping for tags
    const projectTagsMap = [
      ["Python", "Web Frameworks", "REST APIs", "AI Integration", "Full-Stack"],
      ["Python", "React", "LLMs", "RAG", "Vector DB", "Machine Learning", "Deep Learning", "Generative AI", "Automation"],
      ["React", "JavaScript", "REST APIs", "Authentication", "Dashboards"]
    ];

    const trainingTagsMap = [
      ["Python", "Machine Learning", "Deep Learning", "Generative AI", "Prompt Engineering", "LLM APIs", "Curriculum Design"],
      ["LangChain", "LangFlow", "Vector DBs", "RAG Pipelines", "Agent Architecture", "Capstone Mentorship"]
    ];

    if (timelineContainer) {
      timelineContainer.innerHTML = exp.projectExperience.map((item, idx) => {
        const isFeatured = idx === 1;
        const tags = projectTagsMap[idx] || ["Python", "Software Engineering"];
        return `
          <div class="exp-timeline-item fade-up" style="transition-delay: ${0.1 + idx * 0.15}s;">
            <div class="exp-timeline-date">
              <span class="exp-date-text">${item.period}</span>
              ${isFeatured ? '<span class="exp-featured-badge">CLIENT SOLUTIONS</span>' : ''}
            </div>
            <div class="exp-timeline-marker">
              <div class="exp-timeline-node"></div>
              ${idx < exp.projectExperience.length - 1 ? '<div class="exp-timeline-line"></div>' : ''}
            </div>
            <div class="exp-timeline-card ${isFeatured ? 'exp-card-featured' : ''}">
              <div class="exp-card-header">
                <h4 class="exp-role">${item.title}</h4>
                <span class="exp-company">${item.company}</span>
              </div>
              <ul class="exp-bullets">
                ${item.bullets.map(b => `<li class="exp-bullet">${b}</li>`).join('')}
              </ul>
              <div class="exp-tags">
                ${tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
              </div>
            </div>
          </div>`;
      }).join('');
    }

    if (trainingContainer) {
      trainingContainer.innerHTML = exp.traineeExperience.map((item, idx) => {
        const tags = trainingTagsMap[idx] || ["Generative AI", "Mentorship"];
        return `
          <div class="exp-training-card fade-up" style="transition-delay: ${0.3 + idx * 0.1}s;">
            <div class="exp-training-top">
              <span class="exp-training-badge">${item.period}</span>
              <h4 class="exp-training-title">${item.title}</h4>
              <p class="exp-training-company">${item.company}</p>
            </div>
            <ul class="exp-bullets">
              ${item.bullets.map(b => `<li class="exp-bullet">${b}</li>`).join('')}
            </ul>
            <div class="exp-tags">
              ${tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
            </div>
          </div>`;
      }).join('');
    }
  }

  // ── 6. Projects Renderer ────────────────────────────────────
  function renderProjects() {
    const featuredContainer = document.getElementById('featured-projects-container');
    const compactContainer = document.getElementById('compact-projects-container');
    if (!featuredContainer || !compactContainer || !portfolioData.projects) return;

    const featuredItems = portfolioData.projects.filter(p => p.featured);
    const compactItems = portfolioData.projects.filter(p => !p.featured);

    // Render Featured Cards (01, 02, 03)
    featuredContainer.innerHTML = featuredItems.map((p, idx) => `
      <article class="work-featured-card fade-up" style="transition-delay: ${0.1 + idx * 0.1}s;">
        <div class="work-card-inner">
          <div class="work-card-header">
            <div class="work-card-meta">
              <span class="work-category">${p.category}</span>
              <span class="work-num">${p.num}</span>
            </div>
            <h3 class="work-card-title">${p.title}</h3>
            <p class="work-card-concept">${p.concept}</p>
          </div>

          <div class="work-story-grid">
            <div class="work-story-item">
              <span class="work-story-label">PROBLEM</span>
              <p class="work-story-text">${p.problem}</p>
            </div>
            <div class="work-story-item">
              <span class="work-story-label">SOLUTION</span>
              <p class="work-story-text">${p.solution}</p>
            </div>
          </div>

          <div class="work-achievements">
            <span class="work-story-label">KEY DELIVERABLES</span>
            <ul class="work-bullets">
              ${p.achievements.map(a => `<li class="work-bullet">${a}</li>`).join('')}
            </ul>
          </div>

          <div class="work-card-footer">
            <div class="work-tags">
              ${p.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
            </div>
            ${(p.links && (p.links.live || p.links.github)) ? `
              <a href="${p.links.live || p.links.github}" target="_blank" rel="noopener noreferrer" class="work-cta-btn">
                ${p.ctaText || 'View Project'} <i class="fa-solid fa-arrow-right"></i>
              </a>` : ''}
          </div>
        </div>
      </article>
    `).join('');

    // Render Compact Cards (04, 05, 06)
    compactContainer.innerHTML = compactItems.map((p, idx) => `
      <article class="work-compact-card fade-up" style="transition-delay: ${0.3 + idx * 0.1}s;">
        <div class="work-compact-inner">
          <div class="work-compact-header">
            <span class="work-category">${p.category}</span>
            <span class="work-num">${p.num}</span>
          </div>
          <h4 class="work-compact-title">${p.title}</h4>
          <p class="work-compact-desc">${p.description}</p>
          <div class="work-tags" style="margin-top:auto;">
            ${p.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
          </div>
          ${(p.links && (p.links.live || p.links.github)) ? `
            <div class="work-compact-action" style="margin-top:0.75rem;">
              <a href="${p.links.live || p.links.github}" target="_blank" rel="noopener noreferrer" class="work-cta-link">
                ${p.ctaText || 'Visit Website'} <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>` : ''}
        </div>
      </article>
    `).join('');
  }

  // ── 7. Skills Renderer ──────────────────────────────────────
  function renderSkills() {
    const headerContainer = document.getElementById('stack-header-container');
    const flowContainer = document.getElementById('stack-flow-container');
    const container = document.getElementById('stack-capabilities-grid');
    const collabContainer = document.getElementById('stack-collaboration-block');
    if (!portfolioData.skills) return;
    const s = portfolioData.skills;

    if (headerContainer) {
      headerContainer.innerHTML = `
        <p class="stack-eyebrow">${s.eyebrow}</p>
        <h2 class="stack-title">${s.titleLine1}<br>${s.titleLine2}</h2>
        <p class="stack-sub">${s.sub}</p>
      `;
    }

    if (flowContainer) {
      flowContainer.innerHTML = s.flowSteps.map((step, idx) => `
        <div class="stack-flow-step">
          <span class="stack-flow-num">${step.num}</span>
          <span class="stack-flow-text">${step.text}</span>
        </div>
        ${idx < s.flowSteps.length - 1 ? '<div class="stack-flow-arrow" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></div>' : ''}
      `).join('');
    }

    if (container) {
      container.innerHTML = s.categories.map((cat, idx) => `
        <article class="stack-card ${cat.isCore ? 'stack-card-core' : ''} fade-up" style="transition-delay: ${0.1 + idx * 0.1}s;">
          <div class="stack-card-inner">
            <div class="stack-card-header">
              <div class="stack-card-meta">
                <span class="stack-category">${cat.category}</span>
                <div class="stack-meta-right">
                  ${cat.badge ? `<span class="stack-core-badge">${cat.badge}</span>` : ''}
                  <span class="stack-num">${cat.num}</span>
                </div>
              </div>
              <p class="stack-card-desc">${cat.description}</p>
            </div>

            <div class="stack-groups">
              ${cat.groups.map(g => `
                <div class="stack-group">
                  <h4 class="stack-group-label">${g.label}</h4>
                  <div class="stack-tags">
                    ${g.tags.map(t => `<span class="stack-tag ${cat.isCore ? 'stack-tag-core' : ''}">${t}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </article>
      `).join('');
    }

    if (collabContainer) {
      collabContainer.innerHTML = `
        <div class="stack-collab-inner">
          <div class="stack-collab-header">
            <span class="stack-collab-eyebrow">COLLABORATION</span>
            <h3 class="stack-collab-title">Execution &amp; Leadership Capabilities</h3>
            <p class="stack-collab-desc">Technical delivery also depends on clear communication, mentoring, documentation, and collaborative execution.</p>
          </div>
          <div class="stack-collab-grid">
            ${s.softSkills.map(sk => `
              <div class="stack-collab-pill">
                <i class="fa-solid fa-check stack-collab-icon"></i>
                <span>${sk}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // ── 8. Education Renderer ───────────────────────────────────
  function renderEducation() {
    const container = document.getElementById('edu-content-container');
    if (!container || !portfolioData.education) return;

    const btech = portfolioData.education.find(e => e.isPrimary) || portfolioData.education[0];
    const secondaryList = portfolioData.education.filter(e => e !== btech);

    // Extract score value
    const cgpaMatch = btech.result ? btech.result.match(/[\d\.]+/) : null;
    const cgpaValue = cgpaMatch ? cgpaMatch[0] : "8.9";
    const cgpaLabel = btech.result ? btech.result.replace(/[\d\.\:]/g, '').trim() || "CGPA" : "CGPA";

    container.innerHTML = `
      <!-- Primary Academic Card -->
      <article class="edu-primary-card fade-up">
        <div class="edu-card-inner">
          <div class="edu-card-main">
            <span class="edu-degree-badge">DEGREE &amp; SPECIALIZATION</span>
            <h3 class="edu-degree-title">${btech.degree}</h3>
            <div class="edu-meta-row">
              <span class="edu-institution"><i class="fa-solid fa-building-columns"></i> ${btech.institution}</span>
              <span class="edu-period"><i class="fa-solid fa-calendar-days"></i> ${btech.period}</span>
            </div>
            <div class="edu-tags">
              <span class="edu-tag">Artificial Intelligence</span>
              <span class="edu-tag">Machine Learning</span>
              <span class="edu-tag">Software Engineering</span>
            </div>
          </div>
          <div class="edu-stat-box">
            <span class="edu-stat-val">${cgpaValue}</span>
            <span class="edu-stat-label">${cgpaLabel}</span>
          </div>
        </div>
      </article>

      <!-- Secondary Academic Credentials -->
      ${secondaryList.length > 0 ? `
        <div class="edu-secondary-grid">
          ${secondaryList.map((sec, idx) => {
            const valMatch = sec.result ? sec.result.match(/[\d\.\%]+/) : null;
            const val = valMatch ? valMatch[0] : sec.result;
            const label = sec.result ? sec.result.replace(/[\d\.\%\:]/g, '').trim() || "Score" : "Score";
            return `
              <div class="edu-secondary-card fade-up" style="transition-delay: ${0.2 + idx * 0.1}s;">
                <div class="edu-secondary-header">
                  <h4 class="edu-secondary-title">${sec.degree}</h4>
                  <span class="edu-secondary-score">${val} ${label}</span>
                </div>
                <p class="edu-secondary-inst">${sec.institution}</p>
                <span class="edu-secondary-period">${sec.period}</span>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
    `;
  }

  // ── 9. Contact Renderer ─────────────────────────────────────
  function renderContact() {
    const container = document.getElementById('contact-container');
    if (!container || !portfolioData.contact) return;
    const c = portfolioData.contact;

    container.innerHTML = `
      <!-- Hero Project CTA Box -->
      <div class="contact-cta-box fade-up">
        <p class="contact-eyebrow">${c.eyebrow}</p>
        <h2 class="contact-title">${c.title}</h2>
        <p class="contact-sub">${c.sub}</p>
        
        <div class="contact-action-row">
          <a href="${c.primaryCta.href}" class="contact-primary-btn">
            <span>${c.primaryCta.label}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div class="contact-service-strip">
          ${c.services.map((srv, idx) => `
            <span class="contact-service-tag">${srv}</span>
            ${idx < c.services.length - 1 ? '<span class="contact-service-dot" aria-hidden="true">•</span>' : ''}
          `).join('')}
        </div>
      </div>

      <!-- Direct Contact Row & Availability Footer -->
      <div class="contact-details-block fade-up" style="transition-delay: 0.2s;">
        <div class="contact-links-grid">
          ${c.links.map(link => `
            <a href="${link.href}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="contact-card">
              <div class="contact-card-icon">
                <i class="${link.icon}"></i>
              </div>
              <div class="contact-card-info">
                <span class="contact-card-label">${link.label}</span>
                <span class="contact-card-val">${link.val}</span>
              </div>
              <div class="contact-card-arrow">
                <i class="${link.arrowIcon}"></i>
              </div>
            </a>
          `).join('')}
        </div>

        <!-- Status Footer -->
        <div class="contact-status-row">
          <div class="contact-avail-badge">
            <span class="contact-pulse-dot"></span>
            <span>${c.availability}</span>
          </div>
          <span class="contact-location">
            <i class="fa-solid fa-location-dot"></i> ${c.location}
          </span>
        </div>
      </div>
    `;
  }

  // ── 10. Interactive Effects (Canvas, Menu, Scroll, Observer) 
  function initInteractiveEffects() {
    // Smoke Canvas background particle effect
    const canvas = document.getElementById('smoke-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      let resizeTimeout;
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', () => {
        if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
        resizeTimeout = requestAnimationFrame(resizeCanvas);
      }, { passive: true });

      if (!prefersReducedMotion) {
        let mouse = { x: -200, y: -200 };
        let particles = [];
        window.addEventListener('mousemove', e => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          for (let i = 0; i < 2; i++) {
            if (particles.length < 40) {
              particles.push(new SmokeParticle(mouse.x, mouse.y));
            }
          }
        }, { passive: true });

        class SmokeParticle {
          constructor(x, y) {
            this.x = x + (Math.random() - 0.5) * 10;
            this.y = y + (Math.random() - 0.5) * 10;
            this.size = Math.random() * 16 + 6;
            this.speedX = (Math.random() - 0.5) * 1.2;
            this.speedY = -(Math.random() * 1.4 + 0.4);
            this.life = 1.0;
            this.decay = Math.random() * 0.02 + 0.015;
            const r = Math.floor(139 + Math.random() * 50);
            const g = Math.floor(80 + Math.random() * 50);
            const b = Math.floor(230 + Math.random() * 25);
            this.color = `${r},${g},${b}`;
          }
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedX *= 0.98;
            this.speedY *= 0.97;
            this.size += 0.3;
            this.life -= this.decay;
          }
          draw() {
            ctx.save();
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0,   `rgba(${this.color},${this.life * 0.2})`);
            gradient.addColorStop(0.5, `rgba(${this.color},${this.life * 0.08})`);
            gradient.addColorStop(1,   `rgba(${this.color},0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }

        function animateSmoke() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles = particles.filter(p => p.life > 0);
          particles.forEach(p => { p.update(); p.draw(); });
          requestAnimationFrame(animateSmoke);
        }
        animateSmoke();
      }
    }

    // Navigation & Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }

    // Enhanced Smooth Scroll for in-page anchor links
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });
        }
      });
    });

    // Intersection Observer for .fade-up elements
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
})();

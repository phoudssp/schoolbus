// SafeRide v2 — shared UI helpers
// Sidebar templates, modal, toast, confirm, icon setup, charts.

(function () {
  // ---------- Lucide icon helpers ----------
  window.srIcons = function () {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  };

  // ---------- Toast ----------
  window.srToast = function (msg) {
    const el = document.createElement('div');
    el.className = 'sr-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  };

  // ---------- Modal ----------
  // srModal({ title, fields, values, onSave, saveLabel, size?: 'md'|'lg' })
  // Field types: text | number | email | tel | date | time | textarea | select | checkboxes | color | hidden
  window.srModal = function ({ title, fields, values = {}, onSave, saveLabel, size = 'md' }) {
    const overlay = document.createElement('div');
    overlay.className = 'sr-modal-bg';
    const modal = document.createElement('div');
    modal.className = 'sr-modal';
    if (size === 'lg') modal.style.maxWidth = '720px';
    if (size === 'xl') modal.style.maxWidth = '900px';

    const formId = 'mf-' + Math.random().toString(36).slice(2, 7);

    let bodyHtml = `<form id="${formId}" class="sr-form" autocomplete="off">`;
    fields.forEach((f) => {
      const v = values[f.key] != null ? values[f.key] : (f.default != null ? f.default : '');
      if (f.type === 'hidden') {
        bodyHtml += `<input type="hidden" name="${f.key}" value="${escapeHtml(String(v))}">`;
        return;
      }
      bodyHtml += `<div class="sr-field">`;
      if (f.label) bodyHtml += `<label class="sr-label">${escapeHtml(f.label)}${f.required ? ' <span style="color:#EF4444">*</span>' : ''}</label>`;
      const ro = f.readonly ? 'readonly' : '';
      const req = f.required ? 'required' : '';
      const ph = f.placeholder ? `placeholder="${escapeHtml(f.placeholder)}"` : '';

      if (f.type === 'textarea') {
        bodyHtml += `<textarea class="sr-textarea" name="${f.key}" rows="${f.rows || 3}" ${req} ${ro} ${ph}>${escapeHtml(String(v))}</textarea>`;
      } else if (f.type === 'select') {
        bodyHtml += `<select class="sr-select" name="${f.key}" ${req}>`;
        if (f.placeholder) bodyHtml += `<option value="">${escapeHtml(f.placeholder)}</option>`;
        (f.options || []).forEach((o) => {
          const val = typeof o === 'object' ? o.value : o;
          const lbl = typeof o === 'object' ? o.label : o;
          const sel = String(val) === String(v) ? 'selected' : '';
          bodyHtml += `<option value="${escapeHtml(String(val))}" ${sel}>${escapeHtml(String(lbl))}</option>`;
        });
        bodyHtml += `</select>`;
      } else if (f.type === 'checkboxes') {
        const set = new Set(Array.isArray(v) ? v : []);
        bodyHtml += `<div style="display:flex; flex-direction:column; gap:6px;">`;
        (f.options || []).forEach((o) => {
          const val = typeof o === 'object' ? o.value : o;
          const lbl = typeof o === 'object' ? o.label : o;
          const checked = set.has(val) ? 'checked' : '';
          bodyHtml += `<label style="display:flex; align-items:center; gap:8px; font-size:13px;"><input type="checkbox" name="${f.key}" value="${escapeHtml(String(val))}" ${checked}> ${escapeHtml(String(lbl))}</label>`;
        });
        bodyHtml += `</div>`;
      } else if (f.type === 'color') {
        bodyHtml += `<input type="color" class="sr-input" name="${f.key}" value="${escapeHtml(String(v || '#0F1E3D'))}" style="height:38px; width:80px;">`;
      } else {
        const t = ['number','email','tel','date','time','password','url'].includes(f.type) ? f.type : 'text';
        bodyHtml += `<input type="${t}" class="sr-input" name="${f.key}" value="${escapeHtml(String(v))}" ${req} ${ro} ${ph}>`;
      }
      if (f.hint) bodyHtml += `<div class="sr-hint">${f.hint}</div>`;
      bodyHtml += `</div>`;
    });
    bodyHtml += `</form>`;

    modal.innerHTML = `
      <div class="sr-modal-head">
        <h3 class="sr-modal-title">${escapeHtml(title)}</h3>
        <button type="button" class="sr-icon-btn" data-close><i data-lucide="x"></i></button>
      </div>
      <div class="sr-modal-body">${bodyHtml}</div>
      <div class="sr-modal-foot">
        <button type="button" class="sr-btn sr-btn-ghost" data-close>ຍົກເລີກ</button>
        <button type="submit" form="${formId}" class="sr-btn sr-btn-primary">${escapeHtml(saveLabel || 'ບັນທຶກ')}</button>
      </div>
    `;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    srIcons();

    function close() { overlay.remove(); }
    modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', close));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

    document.getElementById(formId).addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {};
      fields.forEach((f) => {
        if (f.type === 'checkboxes') {
          data[f.key] = Array.from(modal.querySelectorAll(`input[name="${f.key}"]:checked`)).map((el) => el.value);
        } else if (f.type === 'number') {
          const el = modal.querySelector(`[name="${f.key}"]`);
          data[f.key] = el && el.value !== '' ? Number(el.value) : null;
        } else {
          const el = modal.querySelector(`[name="${f.key}"]`);
          data[f.key] = el ? el.value : '';
        }
      });
      const result = onSave ? onSave(data, modal, close) : true;
      if (result !== false) close();
    });
    return { close, modalEl: modal };
  };

  // ---------- Confirm ----------
  window.srConfirm = function ({ title, message, onYes, danger = false, yesLabel = 'ຢືນຢັນ', noLabel = 'ຍົກເລີກ' }) {
    const overlay = document.createElement('div');
    overlay.className = 'sr-modal-bg';
    overlay.innerHTML = `
      <div class="sr-modal" style="max-width: 400px;">
        ${title ? `<div class="sr-modal-head"><h3 class="sr-modal-title">${escapeHtml(title)}</h3></div>` : ''}
        <div class="sr-modal-body" style="font-size: 13px; color: var(--sr-text-2);">${escapeHtml(message)}</div>
        <div class="sr-modal-foot">
          <button class="sr-btn sr-btn-ghost" data-close>${escapeHtml(noLabel)}</button>
          <button class="sr-btn ${danger ? 'sr-btn-danger' : 'sr-btn-primary'}" data-yes>${escapeHtml(yesLabel)}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    srIcons();
    const close = () => overlay.remove();
    overlay.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    overlay.querySelector('[data-yes]').addEventListener('click', () => { close(); if (onYes) onYes(); });
  };

  // ---------- ID generator ----------
  window.srNewId = function (prefix, existing) {
    const used = new Set(existing.map((x) => x.id));
    let n = 1;
    while (used.has(`${prefix}-${String(n).padStart(3, '0')}`)) n++;
    return `${prefix}-${String(n).padStart(3, '0')}`;
  };

  // ---------- HTML escape ----------
  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  }
  window.srEscape = escapeHtml;

  // ---------- Sidebar template ----------
  // role: 'operator' | 'school'
  // active: id of the current page
  window.srSidebar = function (role, active) {
    const groups = role === 'school' ? schoolGroups() : operatorGroups();
    const brandSub = role === 'school' ? 'ຜູ້ດູແລໂຮງຮຽນ' : 'ຜູ້ດູແລລະບົບສູງສຸດ';
    let html = `
      <div class="sr-side-brand">
        <div class="sr-side-brand-logo">
          <img src="../shared/phetaloun-logo.svg" alt="Phetaloun SchoolBus" onerror="this.style.display='none'; this.parentNode.innerHTML='<span style=&quot;font-weight:900; font-size:22px; color:#0E4D92;&quot;>Phetaloun</span>';">
        </div>
        <div class="sr-side-brand-role">${brandSub}</div>
      </div>
    `;
    groups.forEach(g => {
      if (g.section) html += `<div class="sr-side-section">${g.section}</div>`;
      html += `<nav class="sr-side-nav">`;
      g.links.forEach(l => {
        const cls = l.id === active ? 'sr-side-link active' : 'sr-side-link';
        const badge = l.badge ? `<span class="badge">${l.badge}</span>` : '';
        html += `<a href="${l.href}" class="${cls}"><i data-lucide="${l.icon}"></i>${l.label}${badge}</a>`;
      });
      html += `</nav>`;
    });
    const userInfo = role === 'school'
      ? { initials: 'BS', name: 'Bounnyong S.', role: 'Principal · HIS' }
      : { initials: 'SP', name: 'Souvanh P.',  role: 'Super Admin' };
    html += `
      <div class="sr-side-foot">
        <div class="sr-side-foot-avatar">${userInfo.initials}</div>
        <div style="line-height:1.2; font-size:12px;">
          <div style="font-weight:700; color:white;">${userInfo.name}</div>
          <div style="color:rgba(255,255,255,0.5);">${userInfo.role}</div>
        </div>
      </div>
    `;
    return html;
  };

  function operatorGroups() {
    return [
      { links: [
        { id: 'dashboard',  href: 'index.html',      icon: 'layout-dashboard', label: 'ໜ້າຄວບຄຸມ' },
        { id: 'monitoring', href: 'monitoring.html', icon: 'radar',            label: 'ຕິດຕາມສົດ', badge: 'LIVE' }
      ]},
      { section: 'ການດຳເນີນງານ', links: [
        { id: 'routes',   href: 'routes.html',   icon: 'route',     label: 'ເສັ້ນທາງ' },
        { id: 'schools',  href: 'schools.html',  icon: 'school',    label: 'ໂຮງຮຽນ' },
        { id: 'students', href: 'students.html', icon: 'users',     label: 'ນັກຮຽນ' },
        { id: 'parents',  href: 'parents.html',  icon: 'user-round',label: 'ຜູ້ປົກຄອງ' },
        { id: 'drivers',  href: 'drivers.html',  icon: 'id-card',   label: 'ຄົນຂັບ' },
        { id: 'buses',    href: 'buses.html',    icon: 'bus',       label: 'ລົດ' }
      ]},
      { section: 'ທຸລະກິດ', links: [
        { id: 'plans',   href: 'plans.html',   icon: 'package',     label: 'ແພັກເກັດການສະໝັກ' },
        { id: 'billing', href: 'billing.html', icon: 'wallet',      label: 'ການເງິນ' },
        { id: 'reports', href: 'reports.html', icon: 'bar-chart-3', label: 'ລາຍງານ' }
      ]},
      { section: 'ລະບົບ', links: [
        { id: 'users',    href: 'users.html',    icon: 'shield-check', label: 'ຜູ້ໃຊ້ລະບົບ' },
        { id: 'settings', href: 'settings.html', icon: 'settings',     label: 'ການຕັ້ງຄ່າ' }
      ]}
    ];
  }

  function schoolGroups() {
    return [
      { links: [
        { id: 'dashboard', href: 'index.html', icon: 'layout-dashboard', label: 'ໜ້າຄວບຄຸມ' }
      ]},
      { section: 'ນັກຮຽນ', links: [
        { id: 'students',   href: 'students.html',   icon: 'users',          label: 'ນັກຮຽນທັງໝົດ' },
        { id: 'live',       href: 'live.html',       icon: 'radio',          label: 'ສະຖານະສົດ', badge: 'LIVE' },
        { id: 'attendance', href: 'attendance.html', icon: 'calendar-check', label: 'ການເຂົ້າຮຽນ' }
      ]},
      { section: 'ການສຶກສາ', links: [
        { id: 'scores',           href: 'scores.html',           icon: 'award',          label: 'ການຈັດການຄະແນນ' },
        { id: 'subjects',         href: 'subjects.html',         icon: 'book-open',      label: 'ວິຊາຮຽນ' },
        { id: 'assessment-types', href: 'assessment-types.html', icon: 'clipboard-list', label: 'ປະເພດການປະເມີນ' },
        { id: 'teachers',         href: 'teachers.html',         icon: 'graduation-cap', label: 'ຄູອາຈານ' }
      ]},
      { section: 'ລະບົບ', links: [
        { id: 'notifications', href: 'notifications.html', icon: 'bell', label: 'ການແຈ້ງເຕືອນ' },
        { id: 'settings',      href: 'settings.html',      icon: 'settings', label: 'ການຕັ້ງຄ່າ' }
      ]}
    ];
  }

  // ---------- Topbar template ----------
  window.srTopbar = function ({ search = true, user = null, lang = true } = {}) {
    user = user || { name: 'Souvanh P.', role: 'ຜູ້ດູແລລະບົບສູງສຸດ', initials: 'SP' };
    return `
      <div class="sr-topbar-left">
        ${search ? `
          <div class="sr-search">
            <i data-lucide="search"></i>
            <input type="text" placeholder="ຄົ້ນຫາ…">
          </div>
        ` : ''}
      </div>
      <div class="sr-topbar-right">
        <button class="sr-icon-btn" title="ການແຈ້ງເຕືອນ"><i data-lucide="bell"></i><span class="ping"></span></button>
        <button class="sr-icon-btn" title="ຊ່ວຍເຫຼືອ"><i data-lucide="circle-help"></i></button>
        <div class="sr-topbar-user">
          <div class="sr-topbar-user-avatar">${escapeHtml(user.initials)}</div>
          <div class="sr-topbar-user-info">
            <div class="sr-topbar-user-name">${escapeHtml(user.name)}</div>
            <div class="sr-topbar-user-role">${escapeHtml(user.role)}</div>
          </div>
        </div>
      </div>
    `;
  };

  // ---------- Mount sidebar + topbar into a page (one call) ----------
  // Call from each page: srMount({ role, active, user })
  window.srMount = function ({ role = 'operator', active, user = null }) {
    const sb = document.querySelector('.sr-sidebar');
    if (sb) sb.innerHTML = srSidebar(role, active);
    const tb = document.querySelector('.sr-topbar');
    if (tb) tb.innerHTML = srTopbar({ user });
    srIcons();
  };

  // ---------- Format helpers ----------
  window.srFmtTime = function (t) {
    const d = (t instanceof Date) ? t : new Date(t);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  window.srFmtDate = function (iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
  };
  window.srFmtDateTime = function (iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  };
  window.srRelTime = function (iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    const diff = Math.round((Date.now() - d.getTime()) / 1000);
    if (Math.abs(diff) < 60) return diff + 's ago';
    if (Math.abs(diff) < 3600) return Math.round(diff / 60) + 'm ago';
    if (Math.abs(diff) < 86400) return Math.round(diff / 3600) + 'h ago';
    return Math.round(diff / 86400) + 'd ago';
  };

  // ---------- Initials helper ----------
  window.srInitials = function (name) {
    if (!name) return '?';
    return name.split(' ').filter(Boolean).map(p => p[0]).slice(0, 2).join('').toUpperCase();
  };
})();

// SafeRide — shared CRUD helpers (modal, confirm, toast, nav).
// Used by every Manage sub-page so they share the same look + interaction.

(function () {
  // Wait until i18n is loaded before using t()
  const tt = (k) => (window.t ? t(k) : k);

  // ---------- Toast ----------
  window.srToast = function (msg) {
    const el = document.createElement('div');
    el.className = 'sr-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  };

  // ---------- Modal (CRUD form) ----------
  // fields: [{ key, label, type, required?, options?, hint?, placeholder?, default?, readonly? }]
  // type: text | number | email | tel | date | time | textarea | select | checkboxes | color
  // values: { [key]: value }
  // onSave: function(data) { ... return false to keep modal open }
  window.srModal = function ({ title, fields, values = {}, onSave, saveLabel }) {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    overlay.setAttribute('data-modal', '');

    const modal = document.createElement('div');
    modal.className = 'bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col';

    const formId = 'mf-' + Math.random().toString(36).slice(2, 7);

    let body = `<form id="${formId}" class="px-5 py-4 space-y-3 overflow-y-auto sr-scroll" autocomplete="off">`;
    fields.forEach((f) => {
      const v = values[f.key] != null ? values[f.key] : f.default != null ? f.default : '';
      body += `<div>`;
      if (f.label) {
        body += `<label class="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-1">${f.label}${
          f.required ? ' <span class="text-red-500">*</span>' : ''
        }</label>`;
      }
      const ro = f.readonly ? 'readonly' : '';
      const req = f.required ? 'required' : '';
      const ph = f.placeholder ? `placeholder="${escapeHtml(f.placeholder)}"` : '';

      if (f.type === 'textarea') {
        body += `<textarea name="${f.key}" rows="3" ${req} ${ro} ${ph} class="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none">${escapeHtml(String(v))}</textarea>`;
      } else if (f.type === 'select') {
        body += `<select name="${f.key}" ${req} class="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white focus:border-yellow-500 focus:outline-none">`;
        if (f.placeholder) body += `<option value="">${escapeHtml(f.placeholder)}</option>`;
        (f.options || []).forEach((o) => {
          const val = typeof o === 'object' ? o.value : o;
          const lbl = typeof o === 'object' ? o.label : o;
          const sel = String(val) === String(v) ? 'selected' : '';
          body += `<option value="${escapeHtml(String(val))}" ${sel}>${escapeHtml(String(lbl))}</option>`;
        });
        body += `</select>`;
      } else if (f.type === 'checkboxes') {
        body += `<div class="space-y-1.5">`;
        const set = new Set(Array.isArray(v) ? v : []);
        (f.options || []).forEach((o) => {
          const val = typeof o === 'object' ? o.value : o;
          const lbl = typeof o === 'object' ? o.label : o;
          const checked = set.has(val) ? 'checked' : '';
          body += `<label class="flex items-center gap-2 text-sm"><input type="checkbox" name="${f.key}" value="${escapeHtml(String(val))}" ${checked} class="rounded"> ${escapeHtml(String(lbl))}</label>`;
        });
        body += `</div>`;
      } else if (f.type === 'color') {
        body += `<input type="color" name="${f.key}" value="${escapeHtml(String(v || '#0F1E3D'))}" class="border border-slate-300 rounded-md h-10 w-20">`;
      } else {
        const inputType =
          f.type === 'number' ? 'number'
          : f.type === 'date' ? 'date'
          : f.type === 'time' ? 'time'
          : f.type === 'email' ? 'email'
          : f.type === 'tel' ? 'tel'
          : 'text';
        body += `<input type="${inputType}" name="${f.key}" value="${escapeHtml(String(v))}" ${req} ${ro} ${ph} class="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none">`;
      }

      if (f.hint) body += `<div class="text-xs text-slate-400 mt-1">${f.hint}</div>`;
      body += `</div>`;
    });
    body += `</form>`;

    modal.innerHTML = `
      <div class="px-5 py-3 border-b border-slate-200 flex items-center justify-between">
        <h3 class="font-bold text-lg sr-brand-text">${escapeHtml(title)}</h3>
        <button type="button" class="text-slate-400 hover:text-slate-700 text-xl leading-none" data-close>&times;</button>
      </div>
      ${body}
      <div class="px-5 py-3 border-t border-slate-200 flex justify-end gap-2 bg-slate-50 rounded-b-2xl">
        <button type="button" class="sr-btn sr-btn-ghost" data-close>${tt('crud.cancel')}</button>
        <button type="submit" form="${formId}" class="sr-btn sr-btn-primary">${escapeHtml(saveLabel || tt('crud.save'))}</button>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    function close() {
      overlay.remove();
    }
    modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', close));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    document.getElementById(formId).addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {};
      fields.forEach((f) => {
        if (f.type === 'checkboxes') {
          data[f.key] = Array.from(modal.querySelectorAll(`input[name="${f.key}"]:checked`)).map((el) => el.value);
        } else if (f.type === 'number') {
          const el = modal.querySelector(`[name="${f.key}"]`);
          data[f.key] = el.value === '' ? null : Number(el.value);
        } else {
          const el = modal.querySelector(`[name="${f.key}"]`);
          data[f.key] = el.value;
        }
      });
      const result = onSave ? onSave(data) : true;
      if (result !== false) close();
    });
  };

  // ---------- Confirm ----------
  window.srConfirm = function ({ title, message, onYes, danger = false, yesLabel }) {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    overlay.setAttribute('data-confirm', '');
    overlay.innerHTML = `
      <div class="bg-white rounded-2xl shadow-xl max-w-sm w-full p-5">
        ${title ? `<h3 class="font-bold text-lg sr-brand-text mb-2">${escapeHtml(title)}</h3>` : ''}
        <p class="text-sm text-slate-600 mb-4">${escapeHtml(message)}</p>
        <div class="flex justify-end gap-2">
          <button class="sr-btn sr-btn-ghost" data-close>${tt('crud.cancel')}</button>
          <button class="sr-btn ${danger ? 'sr-btn-danger' : 'sr-btn-primary'}" data-yes>${escapeHtml(yesLabel || tt('crud.confirm'))}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => overlay.remove()));
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
    overlay.querySelector('[data-yes]').addEventListener('click', () => {
      overlay.remove();
      if (onYes) onYes();
    });
  };

  // ---------- ID generator ----------
  window.srNewId = function (prefix, existing) {
    const used = new Set(existing.map((x) => x.id));
    let n = 1;
    while (used.has(`${prefix}-${String(n).padStart(3, '0')}`)) n++;
    return `${prefix}-${String(n).padStart(3, '0')}`;
  };

  // ---------- Operator nav (same on every operator page) ----------
  window.srOperatorNav = function (active) {
    const cls = (name) =>
      active === name
        ? 'px-3 py-1.5 rounded-md bg-white/15 font-semibold'
        : 'px-3 py-1.5 rounded-md text-slate-200 hover:bg-white/10';
    return `
      <a href="operator.html" class="${cls('dashboard')}" data-i18n="nav.dashboard">Dashboard</a>
      <a href="manage.html"   class="${cls('manage')}"   data-i18n="nav.manage">Manage</a>
      <a href="billing.html"  class="${cls('billing')}"  data-i18n="nav.billing">Billing</a>
      <a href="reports.html"  class="${cls('reports')}"  data-i18n="nav.reports">Reports</a>
    `;
  };

  // ---------- Tiny utilities ----------
  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }
  window.srEscape = escapeHtml;
})();

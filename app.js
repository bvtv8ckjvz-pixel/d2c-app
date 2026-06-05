document.addEventListener('DOMContentLoaded', function() {

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
const MAIN_TABS = new Set(['home','notes','calendar','bible','more']);
const visited   = new Set(['home']);

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active','animate'));
  const pg = document.getElementById('page-' + id);
  if (!pg) return;
  pg.classList.add('active');
  if (!visited.has(id)) { pg.classList.add('animate'); visited.add(id); }
  const mainEl = document.getElementById('main');
  if (mainEl) mainEl.scrollTop = 0;
}

function setNav(tabId) {
  document.querySelectorAll('.ni').forEach(n => {
    const on = n.dataset.tab === tabId;
    n.classList.toggle('on', on);
    n.setAttribute('aria-selected', String(on));
  });
}

window.navigate  = function(target) { showPage(target); setNav(MAIN_TABS.has(target) ? target : 'more'); };
window.switchTab = function(tab)    { showPage(tab); setNav(tab); };

/* ═══════════════════════════════════════
   STANDINGS
═══════════════════════════════════════ */
let curLeague = 'liga', curView = 'standings';

window.showLeague = function(league) {
  curLeague = league;
  const pLiga = document.getElementById('panel-liga');
  const pRed  = document.getElementById('panel-red');
  if (pLiga) pLiga.style.display = league === 'liga' ? '' : 'none';
  if (pRed)  pRed.style.display  = league === 'red'  ? '' : 'none';
  document.querySelectorAll('.lt-btn').forEach(b => {
    const on = b.dataset.league === league;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', String(on));
  });
  window.showView(curView);
};

window.showView = function(view) {
  curView = view;
  document.querySelectorAll('.vt-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  const panel = document.getElementById(curLeague === 'liga' ? 'panel-liga' : 'panel-red');
  if (!panel) return;
  panel.querySelectorAll('.lv').forEach(el => {
    el.style.display = el.classList.contains('lv-' + view) ? '' : 'none';
  });
};

/* ═══════════════════════════════════════
   STANDINGS DATA
═══════════════════════════════════════ */
function renderTable(id, teams, isLiga) {
  const el = document.getElementById(id);
  if (!el) return;
  const sorted = [...teams].sort((a,b) => {
    const pa = isLiga ? a.w*3+a.e : a.w*3;
    const pb = isLiga ? b.w*3+b.e : b.w*3;
    return pb - pa;
  });
  el.innerHTML = sorted.map(t => `
    <div class="team-row ${isLiga?'liga-cols':'red-cols'}" style="border-left-color:${t.color};">
      <div class="tr-team"><div class="tr-dot" style="background:${t.color}"></div>
        <div><div class="tr-name">${t.name}</div>${isLiga?`<div class="tr-coach">${t.coach}</div>`:''}</div>
      </div>
      <div class="tr-stat">${t.w}</div>
      <div class="tr-stat">${t.l}</div>
      ${isLiga ? `<div class="tr-stat">${t.e}</div><div class="tr-pts">${t.w*3+t.e}</div>` : `<div class="tr-pts">${t.w*3}</div>`}
    </div>`).join('');
}

function renderMatches(id, weeks, isSchedule) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = weeks.map(w => `
    <div class="week-hdr">${w.week}</div>
    ${w.matches.map(m => {
      if (isSchedule) return `<div class="match-card"><div class="mc-teams"><span class="mc-home" style="color:${m.hc}">${m.home}</span><span class="mc-score mc-vs">vs</span><span class="mc-away" style="color:${m.ac}">${m.away}</span></div><div class="mc-badge pending">Por jugar</div></div>`;
      const tie = m.winner === null;
      const hw  = !tie && m.winner === m.home;
      const aw  = !tie && m.winner === m.away;
      return `<div class="match-card"><div class="mc-teams"><span class="mc-home" style="color:${m.hc};${hw?'font-weight:800;':''}">${m.home}</span><span class="mc-score">${m.score||'🏆'}</span><span class="mc-away" style="color:${m.ac};${aw?'font-weight:800;':''}">${m.away}</span></div><div class="mc-badge ${tie?'tie':'win'}">${tie?'Empate':m.winner}</div></div>`;
    }).join('')}`).join('');
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
renderTable('liga-table',   LIGA_TEAMS, true);
renderTable('red-table',    RED_TEAMS,  false);
renderMatches('liga-results',  LIGA_RESULTS,  false);
renderMatches('liga-schedule', LIGA_SCHEDULE, true);
renderMatches('red-results',   RED_RESULTS,   false);
renderMatches('red-schedule',  RED_SCHEDULE,  true);

/* ═══════════════════════════════════════
   COUNTDOWN
═══════════════════════════════════════ */
const CAMP_DATE = new Date('2026-06-22T06:00:00');
const CD_SETS = [
  { ids: ['cd-d','cd-h','cd-m','cd-s'],      secs: true  },
  { ids: ['cmp-d','cmp-h','cmp-m','cmp-s'],  secs: true  },
  { ids: ['cal-cd-d','cal-cd-h','cal-cd-m'], secs: false },
];

function tickAll() {
  const diff = CAMP_DATE - Date.now();
  const pad = n => String(n).padStart(2, '0');
  const d = Math.max(0, Math.floor(diff / 86400000));
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const s = Math.max(0, Math.floor((diff % 60000) / 1000));
  CD_SETS.forEach(set => {
    const vals = set.secs ? [d, h, m, s] : [d, h, m];
    set.ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = i === 0 ? String(d) : pad(vals[i]);
    });
  });
}

let cdInterval = null;
function startCD() { if (!cdInterval) { tickAll(); cdInterval = setInterval(tickAll, 1000); } }
function stopCD()  { if (cdInterval)  { clearInterval(cdInterval); cdInterval = null; } }

const homeEl = document.getElementById('page-home');
if (homeEl) {
  new IntersectionObserver(([e]) => {
    e.isIntersecting ? startCD() : stopCD();
  }, { threshold: 0.01 }).observe(homeEl);
}
['page-camp','page-calendar'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  new IntersectionObserver(([e]) => { if (e.isIntersecting) tickAll(); }, { threshold: 0.01 }).observe(el);
});

/* ═══════════════════════════════════════
   CLICK HANDLER
═══════════════════════════════════════ */
const appEl = document.getElementById('app');
if (appEl) {
  appEl.addEventListener('click', function(e) {
    const nav    = e.target.closest('[data-nav]');
    const tab    = e.target.closest('[data-tab]');
    const league = e.target.closest('[data-league]');
    const view   = e.target.closest('[data-view]');
    const toggle = e.target.closest('[data-toggle]');
    const pack   = e.target.closest('.pack-item');
    const faqQ   = e.target.closest('.faq-q');

    if (nav)    { window.navigate(nav.dataset.nav);         return; }
    if (tab)    { window.switchTab(tab.dataset.tab);         return; }
    if (league) { window.showLeague(league.dataset.league);  return; }
    if (view)   { window.showView(view.dataset.view);        return; }
    if (toggle) {
      const target = document.getElementById(toggle.dataset.toggle);
      if (target) target.classList.toggle('open');
      return;
    }
    if (pack) { pack.classList.toggle('checked'); return; }
    if (faqQ) {
      const item = faqQ.closest('.faq-item');
      if (!item) return;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
      return;
    }
  });
}

const avatarBtn = document.getElementById('avatar-btn');
if (avatarBtn) avatarBtn.addEventListener('click', () => window.navigate('profile'));

/* ── DEBUG ── */
(function() {
  const dbg = document.getElementById('dbg');
  const app = document.getElementById('app');
  if (!dbg || !app) return;
  function update() {
    const vw = window.innerWidth;
    const sw = app.offsetWidth;
    const bp = vw >= 1400 ? 'desktop-xl' : vw >= 1024 ? 'desktop' : vw >= 600 ? 'tablet' : 'phone';
    dbg.textContent = 'vp ' + vw + 'px · ' + bp + ' · shell ' + sw + 'px';
  }
  update();
  window.addEventListener('resize', update);
})();

}); // end DOMContentLoaded

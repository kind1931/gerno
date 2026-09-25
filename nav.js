const CALCULATOR_LIST = [
  { name: "💳 추석 캐쉬 할인 계산기", url: "/cash/" },
  { name: "🍾 어주(小) 계산기", url: "/uju/" }
];

(function injectNavStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .common-navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #1e1e1e;
      padding: 12px 24px;
      border-bottom: 1px solid #333333;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .common-nav-title {
      font-size: 1.1rem;
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      user-select: none;
      transition: opacity 0.2s;
    }
    .common-nav-title:hover {
      opacity: 0.8;
    }
    .common-dropdown {
      position: relative;
    }
    .common-dropdown-btn {
      background-color: #2b2b2b;
      color: #e0e0e0;
      border: 1px solid #333333;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background-color 0.2s, border-color 0.2s;
    }
    .common-dropdown-btn:hover {
      background-color: #383838;
      border-color: #4dabf7;
    }
    .common-dropdown-menu {
      display: none;
      position: absolute;
      right: 0;
      top: 100%;
      margin-top: 6px;
      background-color: #1e1e1e;
      border: 1px solid #333333;
      border-radius: 6px;
      min-width: 220px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
      z-index: 10001;
      overflow: hidden;
    }
    .common-dropdown-menu.show {
      display: block;
    }
    .common-dropdown-item {
      display: block;
      padding: 12px 16px;
      color: #e0e0e0;
      text-decoration: none;
      font-size: 0.9rem;
      transition: background-color 0.2s, color 0.2s;
      border-bottom: 1px solid #2a2a2a;
    }
    .common-dropdown-item:last-child {
      border-bottom: none;
    }
    .common-dropdown-item:hover {
      background-color: #2b2b2b;
      color: #4dabf7;
    }
    .common-dropdown-item.active {
      color: #4dabf7;
      font-weight: bold;
      background-color: #252525;
    }
  `;
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', () => {
  // 상단 네비게이션 바 높이만큼 body 상단 여백 설정
  document.body.style.paddingTop = '60px';

  // 현재 경로 판별 (예: "/cash/" 또는 "/cash/index.html" 처리)
  const currentPath = window.location.pathname;

  const navHTML = `
    <nav class="common-navbar">
      <span class="common-nav-title">🎮 거상 노예</span>
      <div class="common-dropdown">
        <button class="common-dropdown-btn" id="commonNavBtn">
          🧮 계산기 목록 ▼
        </button>
        <div class="common-dropdown-menu" id="commonNavMenu">
          ${CALCULATOR_LIST.map(item => {
            // 주소 끝자리가 / 로 끝나거나 /index.html 조합일 때 모두 active로 처리
            const isActive = currentPath.startsWith(item.url);
            return `
              <a href="${item.url}" class="common-dropdown-item ${isActive ? 'active' : ''}">
                ${item.name}
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const btn = document.getElementById('commonNavBtn');
  const menu = document.getElementById('commonNavMenu');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});
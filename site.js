(() => {
  const menu = document.querySelector("[data-nav-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const page = document.body.getAttribute("data-page");
  const navLinks = document.querySelectorAll("[data-page-link]");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    if (link.getAttribute("data-page-link") === page) {
      link.classList.add("active");
    }
  });

  const hashAlias = {
    "#qwen-generator": "#image-generate",
    "#qwen-editor": "#image-edit",
    "#wan22": "#video-frame-to-frame",
    "#digital-human": "#digital-human-video",
    "#ai-image": "#image-generate",
    "#image-edit": "#image-edit",
    "#image-generate": "#image-generate",
    "#frame-to-frame": "#video-frame-to-frame"
  };

  if (hashAlias[window.location.hash]) {
    const next = hashAlias[window.location.hash];
    window.history.replaceState(null, "", next);
  }

  const params = new URLSearchParams(window.location.search);
  const toolId = params.get("tool");
  const map = {
    "1": "image-generate",
    "2": "image-edit",
    "3": "video-frame-to-frame",
    "4": "digital-human-video"
  };

  if (toolId && map[toolId]) {
    const target = document.getElementById(map[toolId]);
    if (target) {
      target.classList.add("highlight-card");
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    }
  }
})();

function openWorkspace(toolId) {
  const value = [1, 2, 3, 4].includes(toolId) ? `?tool=${toolId}` : "";
  window.open(`http://192.168.10.86:8502${value}`, "_blank");
}

// ========== 对比图组件交互逻辑 ==========
(function () {
  const compareContainers = document.querySelectorAll('.compare-container');

  compareContainers.forEach(container => {
    const targetImage = container.querySelector('.compare-target');
    const divider = container.querySelector('.compare-divider');

    if (!targetImage || !divider) return;

    // 鼠标移动事件
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      // 更新目标图的裁剪区域（显示右侧部分）
      targetImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;

      // 更新分割线位置
      divider.style.left = `${percentage}%`;
    });

    // 鼠标离开时重置到中间
    container.addEventListener('mouseleave', () => {
      targetImage.style.clipPath = 'inset(0 50% 0 0)';
      divider.style.left = '50%';
    });

    // 触摸设备支持
    container.addEventListener('touchmove', (e) => {
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      targetImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      divider.style.left = `${percentage}%`;
    }, { passive: true });

    container.addEventListener('touchend', () => {
      targetImage.style.clipPath = 'inset(0 50% 0 0)';
      divider.style.left = '50%';
    });
  });
})();

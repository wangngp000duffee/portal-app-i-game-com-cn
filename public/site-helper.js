// public/site-helper.js
// 生成页面提示卡片、关键词徽章和访问说明，不依赖第三方库

(function() {
  'use strict';

  // 配置信息
  const CONFIG = {
    siteUrl: 'https://portal-app-i-game.com.cn',
    keyword: '爱游戏',
    version: '1.2.0'
  };

  // 提示卡片数据
  const TIPS = [
    { icon: '💡', title: '欢迎访问', content: `欢迎来到 ${CONFIG.keyword} 平台，探索更多精彩内容。` },
    { icon: '🔍', title: '使用提示', content: '使用搜索功能快速找到您感兴趣的游戏和活动。' },
    { icon: '📢', title: '最新动态', content: `关注 ${CONFIG.siteUrl} 获取最新游戏资讯与福利。` }
  ];

  // 关键词徽章数据
  const BADGES = [
    { label: '热门', color: '#e74c3c' },
    { label: '推荐', color: '#f39c12' },
    { label: '新游', color: '#2ecc71' },
    { label: '限时', color: '#3498db' },
    { label: CONFIG.keyword, color: '#9b59b6' }
  ];

  // 访问说明数据
  const INSTRUCTIONS = [
    { step: 1, text: '在浏览器地址栏输入官网地址' },
    { step: 2, text: '点击注册或登录按钮创建账号' },
    { step: 3, text: '浏览游戏列表并选择感兴趣的内容' },
    { step: 4, text: '查看详情页了解玩法与规则' }
  ];

  // 工具函数：创建带样式的元素
  function createElement(tag, attrs, children) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(key => {
        if (key === 'style') {
          Object.assign(el.style, attrs[key]);
        } else {
          el.setAttribute(key, attrs[key]);
        }
      });
    }
    if (children) {
      children.forEach(child => {
        if (typeof child === 'string') {
          el.appendChild(document.createTextNode(child));
        } else {
          el.appendChild(child);
        }
      });
    }
    return el;
  }

  // 生成提示卡片
  function createTipCard(tip) {
    const container = createElement('div', { class: 'helper-tip-card', style: {
      background: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px 16px',
      margin: '8px 0',
      display: 'flex',
      alignItems: 'flex-start',
      boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
    }});
    const iconSpan = createElement('span', { style: { fontSize: '24px', marginRight: '12px' } }, [tip.icon]);
    const textBlock = createElement('div', {});
    const titleEl = createElement('strong', { style: { display: 'block', marginBottom: '4px', color: '#333' } }, [tip.title]);
    const contentEl = createElement('p', { style: { margin: 0, color: '#666', lineHeight: '1.5' } }, [tip.content]);
    textBlock.appendChild(titleEl);
    textBlock.appendChild(contentEl);
    container.appendChild(iconSpan);
    container.appendChild(textBlock);
    return container;
  }

  // 生成关键词徽章
  function createBadge(badge) {
    const badgeEl = createElement('span', { class: 'helper-badge', style: {
      display: 'inline-block',
      background: badge.color,
      color: '#fff',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: '600',
      margin: '4px',
      letterSpacing: '0.5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
    }}, [badge.label]);
    return badgeEl;
  }

  // 生成访问说明步骤
  function createInstruction(item) {
    const row = createElement('div', { class: 'helper-instruction-step', style: {
      display: 'flex',
      alignItems: 'center',
      margin: '6px 0',
      padding: '8px 12px',
      background: '#f0f4f8',
      borderRadius: '6px'
    }});
    const stepNum = createElement('span', { style: {
      display: 'inline-flex',
      width: '28px',
      height: '28px',
      background: '#2c3e50',
      color: '#fff',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '700',
      marginRight: '12px'
    }}, [String(item.step)]);
    const textSpan = createElement('span', { style: { color: '#444', fontSize: '15px' } }, [item.text]);
    row.appendChild(stepNum);
    row.appendChild(textSpan);
    return row;
  }

  // 渲染主面板
  function renderHelperPanel() {
    // 创建主容器
    const panel = createElement('div', { id: 'site-helper-panel', style: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '320px',
      maxHeight: '80vh',
      overflowY: 'auto',
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      zIndex: '9999',
      fontFamily: 'Arial, sans-serif'
    }});

    // 标题
    const title = createElement('h3', { style: {
      margin: '0 0 16px 0',
      fontSize: '18px',
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '8px'
    }}, [CONFIG.keyword + ' 助手']);

    // 提示卡片区域
    const tipsSection = createElement('div', { style: { marginBottom: '20px' } });
    TIPS.forEach(tip => {
      tipsSection.appendChild(createTipCard(tip));
    });

    // 关键词徽章区域
    const badgesSection = createElement('div', { style: { marginBottom: '20px', textAlign: 'center' } });
    BADGES.forEach(badge => {
      badgesSection.appendChild(createBadge(badge));
    });

    // 访问说明区域
    const instSection = createElement('div', { style: { marginBottom: '12px' } });
    const instTitle = createElement('h4', { style: {
      margin: '0 0 8px 0',
      fontSize: '15px',
      color: '#555'
    }}, ['访问说明']);
    instSection.appendChild(instTitle);
    INSTRUCTIONS.forEach(item => {
      instSection.appendChild(createInstruction(item));
    });

    // 网站链接
    const linkEl = createElement('a', {
      href: CONFIG.siteUrl,
      target: '_blank',
      style: {
        display: 'block',
        textAlign: 'center',
        marginTop: '16px',
        color: '#3498db',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '14px'
      }
    }, [CONFIG.siteUrl]);

    // 关闭按钮
    const closeBtn = createElement('button', {
      style: {
        position: 'absolute',
        top: '12px',
        right: '12px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#999',
        lineHeight: '1'
      }
    }, ['✕']);
    closeBtn.addEventListener('click', function() {
      panel.style.display = 'none';
    });

    // 组合
    panel.appendChild(closeBtn);
    panel.appendChild(title);
    panel.appendChild(tipsSection);
    panel.appendChild(badgesSection);
    panel.appendChild(instSection);
    panel.appendChild(linkEl);
    document.body.appendChild(panel);
  }

  // 在 DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHelperPanel);
  } else {
    renderHelperPanel();
  }
})();
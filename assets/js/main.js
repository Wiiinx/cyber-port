const letters = "█░▒▓01_\/|<>#&%@ΔΣΞ";

const select = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function initNavigation() {
  const toggle = select('.nav-toggle');
  const nav = select('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  selectAll('a', nav).forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

function scrambleElement(el) {
  const finalText = el.dataset.text || el.textContent;
  let iteration = 0;
  const interval = setInterval(() => {
    el.textContent = finalText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iteration) {
          return finalText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    iteration += 0.4;
    if (iteration >= finalText.length) {
      el.textContent = finalText;
      clearInterval(interval);
    }
  }, 30 + Math.random() * 20);
}

function initHackText() {
  const elements = selectAll('.hack-text');
  if (!elements.length) return;

  elements.forEach((el, index) => {
    setTimeout(() => scrambleElement(el), index * 120);
  });
}

function initSplashScreen() {
  const splash = select('#splash-screen');
  if (!splash) return;

  window.addEventListener('load', () => {
    setTimeout(() => splash.classList.add('hide'), 2400);
  });
}

const galleryItems = [
  {
    title: 'Neon Alley',
    location: 'Shanghai, China',
    year: '2024',
    description: 'Chromatic reflections bathing the city in synth glow.',
    image:
      'https://images.unsplash.com/photo-1501706362039-c6e80948ceb4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Midnight Transit',
    location: 'Tokyo, Japan',
    year: '2023',
    description: 'Quiet train platforms pulsing with holographic signage.',
    image:
      'https://images.unsplash.com/photo-1526481280695-3c46973b37b6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Rain-Soaked Neon',
    location: 'New York City, USA',
    year: '2022',
    description: 'Umbrellas, puddles, and refracted light across Manhattan evenings.',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Synthwave Shoreline',
    location: 'San Diego, USA',
    year: '2024',
    description: 'Bioluminescent waves meeting the Pacific horizon.',
    image:
      'https://images.unsplash.com/photo-1547149618-8b079210d475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Skyline Signals',
    location: 'Hong Kong, China',
    year: '2023',
    description: 'Vibrant architecture framed by dusk and drone flight paths.',
    image:
      'https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Arcade Lightfield',
    location: 'Seoul, South Korea',
    year: '2022',
    description: 'Retro machines humming inside a modern neon sanctuary.',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
  },
];

const myLifeSources = {
  fun: [
    'assets/mylife/fun/6BF19B04-FEC1-4712-A6BD-2FC9087CA8D6_1_105_c.jpeg',
    'assets/mylife/fun/B2E934B4-0AE5-41C4-B412-70A59C98D802_1_105_c.jpeg',
    'assets/mylife/fun/C41F021F-16F9-49C6-8137-2B2CCEE9CD46_4_5005_c.jpeg',
    'assets/mylife/fun/birds.jpeg',
    'assets/mylife/fun/graduation.jpeg',
    'assets/mylife/fun/m.jpeg',
  ],
  life: [
    'assets/mylife/life/0BE02170-F835-4623-B45D-261D4C14CCE4_1_105_c.jpeg',
    'assets/mylife/life/5EA9472D-911E-4A9F-BB21-9C6081EB3F62_1_105_c.jpeg',
    'assets/mylife/life/6077EAD7-1C34-4956-8435-0CDE3DD8055F_4_5005_c.jpeg',
    'assets/mylife/life/805AED0A-590C-4085-B3D8-B9C3EE0AC493_1_105_c.jpeg',
    'assets/mylife/life/B35ED3F1-9221-4E0F-9C28-DD1A8F14BB2F.jpeg',
    'assets/mylife/life/B940142F-B52A-4530-AB24-2574DE58AADB.jpeg',
    'assets/mylife/life/C5D7EC9F-561D-48CB-AE57-A31AFAEC5B6E_1_105_c.jpeg',
    'assets/mylife/life/C9732588-C17F-4A85-968C-75B5E30D5663_1_105_c.jpeg',
    'assets/mylife/life/CBB40728-1303-4A49-B121-5246AF42CF7F_1_105_c.jpeg',
    'assets/mylife/life/CCBAA5A0-477B-492D-A3F2-96F4A66383CA_1_105_c.jpeg',
    'assets/mylife/life/WechatIMG1479.jpg',
  ],
  travel: [
    'assets/mylife/travel/08F23BD6-4F19-4222-96AE-CA5D6A3F5D5B_1_105_c.jpeg',
    'assets/mylife/travel/1A4EB2C6-E117-436B-9C99-0718F4F196B8_1_105_c.jpeg',
    'assets/mylife/travel/245EC0A6-8491-4259-825B-DBB9FF49D6D6_1_105_c.jpeg',
    'assets/mylife/travel/393567EC-AFD7-437E-AAA2-364531A05828_1_105_c.jpeg',
    'assets/mylife/travel/3C753261-36DF-43C7-926A-2C13D4498BCA_1_105_c.jpeg',
    'assets/mylife/travel/420D03DA-3AAB-4DA1-9264-81CF0B00FC96_1_105_c.jpeg',
    'assets/mylife/travel/47A25DAF-3E9D-4B4E-AAA7-3CC0832CFA21_1_105_c.jpeg',
    'assets/mylife/travel/491DE171-2339-4C69-B3BD-ECECB4EB1A15_1_105_c.jpeg',
    'assets/mylife/travel/54192D9B-004F-4B6E-904E-1335B37FA4C8_1_105_c.jpeg',
    'assets/mylife/travel/5DC69E35-E210-4C88-B1D8-FA0592C93D03_1_105_c.jpeg',
    'assets/mylife/travel/636AF200-447F-4DFF-8760-AE499687DA72_1_105_c.jpeg',
    'assets/mylife/travel/6B67C437-C2BB-4982-BEB9-936A184C068E_1_105_c.jpeg',
    'assets/mylife/travel/6DA39DD8-FB94-4E91-9431-8F4C8A30E109_1_105_c.jpeg',
    'assets/mylife/travel/7EC6AFD7-5426-4D9F-81B5-B460EEA48A9C_1_105_c.jpeg',
    'assets/mylife/travel/AA0BF358-CB10-47BD-A944-4F6DCAC9BB9A_1_105_c-2.jpeg',
    'assets/mylife/travel/AA0BF358-CB10-47BD-A944-4F6DCAC9BB9A_1_105_c.jpeg',
    'assets/mylife/travel/AAD0E5BB-4F92-4ED7-9733-817C990DE873_1_105_c.jpeg',
    'assets/mylife/travel/DE7EBE09-203E-458B-969A-7C3AF4296F25_1_105_c.jpeg',
    'assets/mylife/travel/DSC02575.JPG',
    'assets/mylife/travel/EE9DB97A-C027-4964-9A4C-5F6D0503F7E7_1_105_c.jpeg',
  ],
};

const defaultLifeCollections = Object.fromEntries(
  Object.entries(myLifeSources).map(([key, sources]) => [
    key,
    sources.map((src, index) => ({
      src,
      caption: `Snapshot ${index + 1}`,
      thought: `Reflection on ${key} moment ${index + 1}.`,
    })),
  ]),
);

const LIFE_STORAGE_KEY = 'yuewu-life-posts';

function buildLifeCollections(extra = {}) {
  return Object.fromEntries(
    Object.entries(defaultLifeCollections).map(([key, items]) => [
      key,
      [...items, ...((extra[key] || []).map((entry, index) => ({ ...entry, caption: entry.caption || `Snapshot ${items.length + index + 1}` })))],
    ]),
  );
}

function initGallery() {
  const container = select('[data-gallery]');
  if (!container) return;

  container.innerHTML = '';
  galleryItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.innerHTML = `
      <figure>
        <img src="${item.image}" alt="${item.title} — ${item.location}">
        <div class="gallery-card__overlay">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span>${item.location} · ${item.year}</span>
        </div>
      </figure>
    `;
    container.appendChild(card);
  });
}

const defaultBlogPosts = [
  {
    title: 'Leetcode Database',
    category: 'CS Notes',
    date: '2023-12-26',
    summary:
      'A living archive of database problems, patterns, and explanations. Track progress and share insights with peers.',
    link: 'https://wuniii.notion.site/fffa38eb91fe454eaecb4378ea96d734?v=b9fa8af97cb642d8982d8eaa437bc793',
    cover: 'assets/images/blog-Leetcode.jpg',
  },
  {
    title: 'Operating System Notes',
    category: 'CS Notes',
    date: '2022-05-14',
    summary:
      'From process scheduling to memory management: distilled OS learnings with diagrams and mental models.',
    link: 'https://wuniii.notion.site/Operating-System-59c60e6fda4a4b1daf2b79f5018cb2a0?pvs=4',
    cover: 'assets/images/blog-os.png',
  },
  {
    title: 'MERN Stack Handbook',
    category: 'Full Stack · Notes',
    date: '2023-10-06',
    summary:
      'Breaking down MongoDB, Express, React, and Node into digestible layers, deployment strategies, and gotchas.',
    link: 'https://wuniii.notion.site/1566922baad94ba681539d267d753723?v=55711b9202d440d3a904c0b9a15392d0&pvs=4',
    cover: 'assets/images/blog-Mern.png',
  },
  {
    title: 'Computer Networks',
    category: 'CS Notes',
    date: '2024-03-03',
    summary:
      'Network fundamentals, AIMD explorations, and diagnostics for resilient distributed systems.',
    link: 'https://wuniii.notion.site/2b433c20cc96493290c575641a9b548f?v=319f93c73b564cbb845d80582d58f732&pvs=4',
    cover: 'assets/images/blog-network.png',
  },
  {
    title: 'Simple Guide to C',
    category: 'CS Notes',
    date: '2021-12-23',
    summary:
      'Fundamentals, pointer magic, and debugging rituals that make C less intimidating.',
    link: 'https://wuniii.notion.site/Simple-Guide-to-C-d2cf7be506524b2ea83461d82a927fe7?pvs=4',
    cover: 'assets/images/blog-C.png',
  },
  {
    title: 'Parallel Computing',
    category: 'CS Notes',
    date: '2024-03-01',
    summary:
      'Splitting workloads, synchronizing threads, and composing algorithms for multicore environments.',
    link: 'https://wuniii.notion.site/60ee2d39563f477785ac6c1531d8220f?v=a52b89576e364781bd53c92c741bf96d&pvs=4',
    cover: 'assets/images/blog-parallel.png',
  },
];

const BLOG_STORAGE_KEY = 'yuewu-blog-posts';

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function renderBlogPosts(posts) {
  const container = select('[data-blog]');
  if (!container) return;

  container.innerHTML = '';
  posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach((post) => {
      const card = document.createElement('article');
      card.className = 'blog-card';
      card.innerHTML = `
        <figure class="blog-card__media">
          <img src="${post.cover || 'assets/images/blog-os.png'}" alt="${post.title}">
        </figure>
        <div class="blog-card__content">
          <div class="blog-meta">
            <span>${post.category}</span>
            <span>${formatDate(post.date)}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          ${
            post.link
              ? `<a class="chip-link" href="${post.link}" target="_blank" rel="noreferrer">Read More</a>`
              : ''
          }
        </div>
      `;
      container.appendChild(card);
    });
}

function initBlog() {
  const container = select('[data-blog]');
  const form = select('#blog-form');
  if (!container) return;

  let posts = [];
  const saved = localStorage.getItem(BLOG_STORAGE_KEY);
  if (saved) {
    try {
      posts = JSON.parse(saved);
    } catch (err) {
      console.warn('Unable to parse stored blog posts', err);
    }
  }

  if (!posts.length) {
    posts = [...defaultBlogPosts];
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
  }

  renderBlogPosts(posts);

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const entry = Object.fromEntries(formData.entries());
    const newPost = {
      title: entry.title,
      category: entry.category,
      date: entry.date,
      summary: entry.summary,
      link: entry.link || '',
      cover: entry.cover || '',
    };

    posts = [...posts, newPost];
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    renderBlogPosts(posts);
    form.reset();
  });

  selectAll('[data-action]', form?.parentElement).forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'clear-posts') {
        localStorage.removeItem(BLOG_STORAGE_KEY);
        posts = [...defaultBlogPosts];
        renderBlogPosts(posts);
      }
      if (action === 'restore-defaults') {
        posts = [...defaultBlogPosts];
        localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
        renderBlogPosts(posts);
      }
    });
  });
}

function initContactForm() {
  const form = select('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    const mailto = `mailto:yw4705@nyu.edu?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
  });
}

function initMyLife() {
  const root = select('[data-life]');
  if (!root) return;

  const stored = localStorage.getItem(LIFE_STORAGE_KEY);
  let customCollections = {};
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        customCollections = parsed;
      }
    } catch (error) {
      console.warn('Unable to parse stored life posts', error);
    }
  }

  let combinedCollections = buildLifeCollections(customCollections);

  const renderCollections = () => {
    Object.entries(combinedCollections).forEach(([key, items]) => {
      const grid = select(`[data-life-grid="${key}"]`, root);
      if (!grid) return;

      grid.innerHTML = '';
      items.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'life-card';
        card.innerHTML = `
          <figure>
            <img src="${item.src}" alt="${item.caption}">
          </figure>
          <footer>
            <h3>${item.caption}</h3>
            <p>${item.thought}</p>
          </footer>
        `;
        grid.appendChild(card);
      });
    });
  };

  renderCollections();

  const form = select('#life-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const collection = (formData.get('collection') || '').toString();
    const caption = (formData.get('caption') || '').toString().trim();
    const thought = (formData.get('thought') || '').toString().trim();
    const src = (formData.get('image') || '').toString().trim();

    if (!collection || !defaultLifeCollections[collection]) {
      return;
    }

    if (!src || !thought) {
      return;
    }

    const entry = {
      src,
      caption: caption || `Snapshot ${combinedCollections[collection].length + 1}`,
      thought,
    };

    customCollections = {
      ...customCollections,
      [collection]: [...(customCollections[collection] || []), entry],
    };

    localStorage.setItem(LIFE_STORAGE_KEY, JSON.stringify(customCollections));
    combinedCollections = buildLifeCollections(customCollections);
    renderCollections();
    form.reset();
  });

  selectAll('[data-life-action]', root.parentElement || document).forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.lifeAction;
      if (action === 'clear') {
        customCollections = {};
        localStorage.removeItem(LIFE_STORAGE_KEY);
        combinedCollections = buildLifeCollections(customCollections);
        renderCollections();
      }
    });
  });
}

function init() {
  initNavigation();
  initHackText();
  initSplashScreen();
  initGallery();
  initBlog();
  initContactForm();
  initMyLife();
}

document.addEventListener('DOMContentLoaded', init);

import{_ as s,o as n,c as a,S as l}from"./chunks/framework.31056c87.js";const F=JSON.parse('{"title":"Not Bundle","description":"","frontmatter":{},"headers":[],"relativePath":"guide/not-bundle.md","filePath":"guide/not-bundle.md"}'),p={name:"guide/not-bundle.md"},e=l(`<h1 id="not-bundle" tabindex="-1">Not Bundle <a class="header-anchor" href="#not-bundle" aria-label="Permalink to &quot;Not Bundle&quot;">​</a></h1><blockquote><p>Added in: v0.13.0</p></blockquote><p>During the development phase, we can exclude the <code>cjs</code> format of npm-pkg from bundle. Like Vite&#39;s <a href="https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild" target="_blank" rel="noreferrer">👉 Not Bundle</a>. <strong>It&#39;s fast</strong>!</p><details><summary>中文</summary><p>在开发阶段，我们可以排除 <code>cjs</code> 格式 npm 包的构建。就像 Vite 的 <a target="_blank" href="https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild">👉 Not Bundle</a>. <strong>它非常快</strong>！</p></details><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Applies to <strong>Main process</strong> and <strong>Preload scripts</strong>.</p></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> electron </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-electron</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">notBundle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-electron/plugin</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">command</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">electron</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron/main.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">vite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          command </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">serve</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">notBundle</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;font-style:italic;">/* NotBundleOptions */</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p><code>notBundle(/* NotBundleOptions */)</code></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NotBundleOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">filter</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="how-to-work" tabindex="-1">How to work <a class="header-anchor" href="#how-to-work" aria-label="Permalink to &quot;How to work&quot;">​</a></h2><p>Let&#39;s use the <code>electron-log</code> as an examples.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">┏—————————————————————————————————————┓</span></span>
<span class="line"><span style="color:#A6ACCD;">│ </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> log </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron-log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">      │</span></span>
<span class="line"><span style="color:#A6ACCD;">┗—————————————————————————————————————┛</span></span>
<span class="line"><span style="color:#A6ACCD;">                   ↓</span></span>
<span class="line"><span style="color:#A6ACCD;">Modules </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> are not bundled during development</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> it</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s fast!</span></span>
<span class="line"><span style="color:#A6ACCD;">                   ↓</span></span>
<span class="line"><span style="color:#A6ACCD;">┏—————————————————————————————————————┓</span></span>
<span class="line"><span style="color:#A6ACCD;">│ </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> log </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron-log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) │</span></span>
<span class="line"><span style="color:#A6ACCD;">┗—————————————————————————————————————┛</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">🚧</p><p>Not Bundle will cause the code built by <code>vite serve</code> and <code>vite build</code> to be different, You must be aware of this risk!</p></div><details><summary>中文</summary><p>🚧 Not Bundle 会导致 <code>vite serve</code> 与 <code>vite builde</code> 构建的代码不一致，你要知道这个风险！</p></details>`,14),o=[e];function t(r,c,i,D,y,C){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};

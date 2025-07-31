---
layout: default
title: Learn
permalink: /Learn/
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Home</title>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/content-switcher.min.js"></script>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/search.min.js"></script>
  <link rel="stylesheet" href="/css/learn.css">
</head>
<body>
    <div id="main">
        <!-- Search bar -->
        <div id="search">
            <cds-search id="videoSearch" size="lg" close-button-label-text="Clear search input" label-text="Search" placeholder="Search for content" type="text"></cds-search>
        </div>
        <!-- Content switchers -->
        <div>
            <cds-content-switcher value="whyMQ">
                <cds-content-switcher-item value="whyMQ">
                    Why MQ
                </cds-content-switcher-item>
                <cds-content-switcher-item value="developer">
                    I'm a developer
                </cds-content-switcher-item>
                <cds-content-switcher-item value="ecosystem">
                    MQ ecosystem
                </cds-content-switcher-item>
            </cds-content-switcher>
        </div>
        <!-- The switcher content -->
        <div class="switcher-content" data-value="whyMQ">
            <h2>Why MQ</h2>
            <p>Content explaining why MQ is important.</p>
            <div class="contentContainer">
                <div class="modulesContainer">
                    <div id="search">
                        <cds-search id="videoSearch" size="lg" close-button-label-text="Clear search input" label-text="Search" placeholder="Search for module" type="text"></cds-search>
                    </div>
                    <div class="modules">
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                    </div>
                </div>
                <div class="details"></div>
            </div>
        </div>
        <div class="switcher-content" data-value="developer" hidden>
            <h2>I'm a developer</h2>
            <p>Developer-specific content about MQ.</p>
            <div class="contentContainer">
                <div class="modulesContainer">
                    <div id="search">
                        <cds-search id="videoSearch" size="lg" close-button-label-text="Clear search input" label-text="Search" placeholder="Search for module" type="text"></cds-search>
                    </div>
                    <div class="modules">
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                    </div>
                </div>
                <div class="details"></div>
            </div>
        </div>
        <div class="switcher-content" data-value="ecosystem" hidden>
            <h2>MQ Ecosystem</h2>
            <p>Details about the MQ ecosystem.</p>
            <div class="contentContainer">
                <div class="modulesContainer">
                    <div id="search">
                        <cds-search id="videoSearch" size="lg" close-button-label-text="Clear search input" label-text="Search" placeholder="Search for module" type="text"></cds-search>
                    </div>
                    <div class="modules">
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                        <div class="module">
                            <h3>Module information</h3>
                        </div>
                    </div>
                </div>
                <div class="details"></div>
            </div>
        </div>
    </div>
    <script src="/js/switch.js"></script>
</body>
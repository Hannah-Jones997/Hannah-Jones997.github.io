---
layout: default
title: Video
permalink: /Videos/
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/css/video.css">
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/tabs.min.js"></script>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/search.min.js"></script>
  <title>Videos</title>
</head>
<body>
    <div id="main">
        <div id="title">
            <h2>Our MQ videos</h2>
            <p>On this page you can find our collection of youtube videos all about the MQ system</p>
        </div>
        <div id="search">
            <cds-search id="videoSearch" size="lg" close-button-label-text="Clear search input" label-text="Search" placeholder="Find your items" type="text"></cds-search>
        </div>
        <div id="videosContainer">
            <style>
                .cds-ce-demo-devenv--tab-panels{flex:1;align-self:stretch;padding:3rem;overflow:scroll;max-height:65vh;}
            </style>
            <div id="tabs">
                <cds-tabs value="basics">
                    <cds-tab id="basics" target="panel-basics" value="basics">
                        Basics
                    </cds-tab>
                    <cds-tab id="advaced" target="panel-advanced" value="advanced">
                        Advanced
                    </cds-tab>
                    <cds-tab id="more" target="panel-more" value="more">
                        More
                    </cds-tab>
                </cds-tabs>
            </div>
            <div class="cds-ce-demo-devenv--tab-panels">
                <div id="panel-basics" role="tabpanel" aria-labelledby="basics" hidden="">
                    <div>
                    </div>
                    <div id="mainVideo">
                        <iframe src="https://www.youtube.com/embed/ynjc5GMQeRA?list=PLzpeuWUENMK0wwvvZON-kbY7BCLk_aCwY" frameborder="0" allowfullscreen></iframe>
                        <div class="text">
                            <h3>IBM MQ: What is it, and why do developers need it?</h3>
                        </div>
                    </div>
                    <div class="videosGrid">
                        {% for video in site.data.videos.basics %}
                            <div class="video" data-title="{{ video.title | downcase }}">
                                <iframe src="{{ video.url }}" frameborder="0" allowfullscreen></iframe>
                                <h3>{{ video.title }}</h3>
                            </div>
                        {% endfor %}
                    </div>
                </div>
                <div id="panel-advanced" role="tabpanel" aria-labelledby="advanced" hidden="">
                    <div class="videosGrid">
                        {% for video in site.data.videos.advanced %}
                            <div class="video" data-title="{{ video.title | downcase }}">
                                <iframe src="{{ video.url }}" frameborder="0" allowfullscreen></iframe>
                                <h3>{{ video.title }}</h3>
                            </div>
                        {% endfor %}
                    </div>
                </div>
                <div id="panel-more" role="tabpanel" aria-labelledby="more" hidden="">
                    <div class="videosGrid">
                        {% for video in site.data.videos.more %}
                            <div class="video" data-title="{{ video.title | downcase }}">
                                <iframe src="{{ video.url }}" frameborder="0" allowfullscreen></iframe>
                                <h3>{{ video.title }}</h3>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/search.js"></script>
</body>
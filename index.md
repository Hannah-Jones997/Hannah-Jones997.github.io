---
layout: default
title: Home
permalink: /
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Home</title>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/button.min.js"></script>
  <script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/dropdown.min.js"></script>
  <link rel="stylesheet" href="/css/index.css">
</head>
<body>
  <div id="main">
  <div id="titleLogo">
    <div id="title">
        <h1 id="IBMMessaging">IBM Messaging</h1>
        <p id="welcome">Welcome to IBM Messaging on GitHub. Here we provide our collection of IBM-Messaging collateral for you to use and share. Please star repositories so we can see the collateral you find useful.</p>
    </div>
    <img src="/assets/images/ibm--mq.svg" alt="MQ logo" id="MQLogo"> 
  </div>

  <h1 id="startMessage">Get started learning about MQ systems</h1>
  <div id="startResources">
    <div id="resource">
        <div id="resourceTitle">  
          <a href="{{ '/Learn/' | relative_url }}" id="pathLink">Why MQ</a>
        </div>
        <hr id="resourceHr">
        <p id="resourceText">Find out all about MQ systems and why they could help you</p>
        <div class="pageLink">
          <a href="{{ '/Learn/' | relative_url }}">Get started</a>
        </div>
    </div>
    <div id="resource">
        <div id="resourceTitle">  
          <a href="{{ '/Learn' | relative_url }}" id="pathLink">I'm a developer</a>
        </div>
        <hr id="resourceHr">
        <p id="resourceText">Find out more about integrating MQ systems into your application</p>
        <div class="pageLink">
          <a href="{{ '/Learn/' | relative_url }}">Get started</a>
        </div>
    </div>
    <div id="resource">
        <div id="resourceTitle">  
          <a href="{{ '/Learn/' | relative_url }}" id="pathLink">MQ ecosystem</a>
        </div>
        <hr id="resourceHr">
        <p id="resourceText">Learn all about the MQ ecosystem</p>
        <div class="pageLink">
          <a href="{{ '/Learn/' | relative_url }}">Get started</a>
        </div>
    </div>
  </div>
  <div id="linkButtons">
    <cds-button>Click here to see all our learning resources</cds-button>
    <cds-button href="https://github.com/ibm-messaging" kind="tertiary">Click here to see our collateral for IBM messaging</cds-button>
  </div>
  </div>
</body>

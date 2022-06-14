---
layout: post
title: About
permalink: /about
---

testing page
 <ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
     {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

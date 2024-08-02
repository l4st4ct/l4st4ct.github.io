## “Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what’s going to happen next.”— Gilda Radner

A website to gather learnings, thoughts, code, and play.

<ul>
  {% for post in site.posts %}
     <li>
     <a href="{{ post.url }}"> {{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
---
layout: ../../layouts/BlogLayout.astro
title: 'Getting Started with Cascade Layers'
slug: getting-started-with-cascade-layers
pubDate: 2023-05-13
description: 'A basic Cascade Layers boilerplate to help anyone jumpstart their next front-end project.'
author: 'Matt DeCamp'
published: true
tags: ["casecade layers", "css", "coding"]
---
Reading [Chris Coyier’s post](https://chriscoyier.net/2023/04/10/whats-a-basic-use-case-for-cascade-layers-in-css/) on Cascade Layers reminded me that I had yet to give this concept a whirl in any of my projects. So this week, I rolled out a [basic boilerplate](https://github.com/mattdecamp/cascadeLayers) to help anyone jumpstart their next front-end project with Cascade Layers in mind. Check out the folder structure:

```markdown
|–– src
|   |–– styles
|       |–– components
|           |–– article.css
|           |–– aside.css
|           |–– card.css
|           |–– footer.css
|           |–– form.css
|           |–– header.css
|       |–– defaults
|           |–– colors.css
|           |–– fonts.css
|           |–– layout.css
|           |–– links.css
|           |–– typography.css
|       |–– layouts
|           |–– blog.css
|           |–– main.css
|           |–– page.css
|           |–– post.css
|       |–– themes
|           |–– dark.css
|           |–– light.css
|       |–– utilities
|           |–– sizes.css
|           |–– spaces.css
|           |–– sr.css
|   |–– main.css
|   |–– main-with-comments.css
```

My two goals with this:

1. Save developers time in setting up CSS layers.
2. Demonstrate the power of Cascade Layers.

<aside>
📖 If Cascade Layers is a new concept for you, I highly recommend checking out [Miriam Suzanne’s comprehensive guide to Cascade Layers](https://css-tricks.com/css-cascade-layers/).

</aside>

The styles are broken down into six “major” layers.

```css
/* main.css */

@layer reset, defaults, themes, layouts, components, utilities;
```

Where the styles defined in `reset` are the least powerful, and those defined in `utilities` are the most powerful.

After defining the layers in order of importance, I import each major stylesheet.

```css
/* main.css */

@import url("./styles/reset.css") layer(reset);
@import url("./styles/defaults.css") layer(defaults);
@import url("./styles/themes.css") layer(themes);
@import url("./styles/layouts.css") layer(layouts);
@import url("./styles/components.css") layer(components);
@import url("./styles/utilities.css") layer(utilities);
```

And, if you take a look at one of these stylesheets you’ll see…more layers!

```css
/* components.css */

@layer header, footer, card, form, aside, article;

@import url("./components/header.css") layer(header);
@import url("./components/footer.css") layer(footer);
@import url("./components/card.css") layer(card);
@import url("./components/form.css") layer(form);
@import url("./components/aside.css") layer(aside);
@import url("./components/article.css") layer(article);
```

Here I have some component types broken down into sub-layers of `components.css`. This gives the sub-layers an order of power the same as the major layers in `main.css`. Now, you may not necessarily need to order components in order of power the same way you would need to for something like `layouts.css`.

```css
/* layouts.css */

@layer main, page, blog, post;

@import url("./layouts/main.css") layer(main);
@import url("./layouts/page.css") layer(page);
@import url("./layouts/blog.css") layer(blog);
@import url("./layouts/post.css") layer(post);
```

But the ability to do so is there. And personally, I like the orderliness of it. You may find it makes sense as you build out your project styles. Or you could easily rework it to suit your needs.

Either way, I hope it can be helpful for you in your next project! ✌️
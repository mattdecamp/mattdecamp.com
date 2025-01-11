---
layout: ../../layouts/BlogLayout.astro
title: 'Scroll Snap in a Snap'
slug: scroll-snap-in-a-snap
pubDate: 2022-04-05
description: 'Scroll snap is a handy, built-in CSS feature that enhances the user experience on the page.'
author: 'Matt DeCamp'
published: true
tags: ["css", "how-to", "scroll snap", "tutorial"]
---
Scroll snap is a handy viewport navigation effect that locks focus on a page element. Elements with the scroll effect applied “snap” into view.

Scroll snap works along both the y and x axes of the viewport. Often, you will see it applied to a series of cards, or used to bring focus onto specific sections of a page.

## Getting Started

To get up and running with Scroll Snap we will need two properties: `scroll-snap-type` and `snap-scroll-align`.

[ Check out the full list of Scroll Snap properties on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap). ]

Let’s say we have a stack of slides we want to snap into place along the y-axis of the viewport.

First, we add the `scroll-snap-type` property to the container element.

```css
#container {  scroll-snap-type: y mandatory;}
```

With this property we have a required first value `y`, followed by an optional second value `mandatory`.

With `y` we are saying the container element can only snap along its y-axis. `mandatory` ensures that whenever the scroll action completes, the browser will snap to the nearest element along the axis.

Next, we need to add `scroll-snap-align` to the elements we want to snap.

```css
.slide {  scroll-snap-align: start;}
```

Here we are saying two things: 1. Snap all the child elements with the `slide` class applied. 2. Snap to the `start` of each slide element.

Let’s see this in action:

See the Pen  [Scroll Snap Slides: y mandatory | align start](https://codepen.io/mattdecamp/pen/mdrKgjP) by Matt DeCamp ([@mattdecamp](https://codepen.io/mattdecamp)) on [CodePen](https://codepen.io/).

Something to note here: We could have snapped the slides to their `center` or `end`. But, with these full viewport cards, it’s hard to see the difference.

Let’s make it easier to see with a new example which snaps cards to their `end`.

See the Pen  [Scroll Snap Slides: y mandatory | align start](https://codepen.io/mattdecamp/pen/OJzzLyp) by Matt DeCamp ([@mattdecamp](https://codepen.io/mattdecamp)) on [CodePen](https://codepen.io/).

Open up the demo yourself, substitute `start` and `center` into the `snap-scroll-align` property, and see how that affects the cards.

## Mandatory vs. Proximity

The `scroll-snap-type` property can take either `mandatory` or `proximity` as its second value. So far we’ve only touched on `mandatory`. Think of it as the stricter of the two. No matter what the snap aligns to, you will see that visually dramatic snap effect.

`proximity` on the other hand is a “softer” snap; one that won’t take effect until the scroll action is much closer to the `scroll-snap-align` point.

Let’s take a look at the difference. And be sure to scroll slowly to make sure you’re seeing the effect.

[https://codepen.io/mattdecamp/pen/gOooYKx](https://codepen.io/mattdecamp/pen/gOooYKx)

See the Pen  [Scroll Snap Slides: Small Slides | y mandatory | align end](https://codepen.io/mattdecamp/pen/gOooYKx) by Matt DeCamp ([@mattdecamp](https://codepen.io/mattdecamp)) on [CodePen](https://codepen.io/).

### Horizontal Scroll

Lastly, let’s take a quick look at what a scroll along the x-axis looks like. First let’s apply our properties.

```css
#container {  scroll-snap-type: x mandatory}.slide {  scroll-snap-align: center;}
```

[https://codepen.io/mattdecamp/pen/yLpXQdK](https://codepen.io/mattdecamp/pen/yLpXQdK)

See the Pen  [Scroll Snap Slides - Horizontal](https://codepen.io/mattdecamp/pen/yLpXQdK) by Matt DeCamp ([@mattdecamp](https://codepen.io/mattdecamp)) on [CodePen](https://codepen.io/).

Pretty much the same behavior as in our first example, only occuring along the screen’s horizontal (x) axis.

## Wrapping Up

At it’s most basic two property setting, scroll-snap is pretty easy to set up, eh?

But it *can* be more involved (and you can get much more specific with your settings). I encourage you to take look at [all the scroll-snap properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) and consider how they could useful to you in your next project.

Thanks for reading, and happy coding!
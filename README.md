### Solution for mobile overlay
**Problem**: When the menu toggle is triggered on mobile, we need to expand the menu, and apply an overlay on screen to make the menu more readable, but the logo and menu switcher need to stick on front.

I finally figured it out: the core principle here is [*local stacking context*](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). 

For this situation, we need to make the header component in front, with CSS `positon: relative;` to make it hold the space on the normal flow of the document, then set `z-index: 1;` to create a new stacking context. Within the header component, we can set overlay with `fixed` position to take the whole screen with a negative `z-index` such as `-1`.

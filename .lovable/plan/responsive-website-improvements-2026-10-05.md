# Responsive website improvements

## Goal
Make every existing page fit and remain readable on phones, tablets, laptops, and wide desktop screens without changing the site's content or visual identity.

## Changes
- Move the full header menu to larger screens so tablet widths use the existing mobile menu without overlap.
- Make shared page openings scale fluidly on narrow phones while preserving the current matching height and Architectural Prestige style.
- Prevent wide carousels and decorative elements from creating sideways page scrolling.
- Add shared safeguards for media, long text, forms, buttons, and section spacing at narrow widths.
- Fix any page-specific overflow or cramped layout found during route-by-route testing.

## Verification
- Test all 15 routes independently at representative phone, tablet, laptop, and desktop widths.
- Confirm no horizontal scrolling, clipped labels, overlapping controls, missing images, or runtime errors.
- Check the final preview and current build status.

## Technical details
- Keep responsive behavior centralized in shared CSS where possible.
- Preserve existing page copy, routes, images, colors, and calls to action.
- Use the existing desktop navigation and mobile sheet; only adjust their breakpoint and sizing.

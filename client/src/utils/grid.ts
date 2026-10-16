/*
 * Card grids that are 2 columns on tablets and 3 on desktop. With an odd number of cards, the last one would sit
 * alone in the 2-column layout and leave an empty slot, so it spans the full row there and goes back to one column
 * at 3 columns. Apply to the <ul> whose direct children are <li> cards.
 */
export const fillLastRowSm = 'sm:[&>li:last-child:nth-child(odd)]:col-span-2 lg:[&>li:last-child:nth-child(odd)]:col-span-1'

/** Same, for grids that switch to 2 columns at the md breakpoint. */
export const fillLastRowMd = 'md:[&>li:last-child:nth-child(odd)]:col-span-2 lg:[&>li:last-child:nth-child(odd)]:col-span-1'

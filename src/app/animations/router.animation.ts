import { trigger, animate, style, query, transition } from '@angular/animations';

export const routerTransition = trigger('routerAnimation', [
  transition('* <=> *', [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        width: '100%',
        transform: 'translate(-100%, 0%)',
      }),
      { optional: true }),

    // move page off screen right on leave
    query(':leave',
      animate('500ms ease',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translate(100%)',
        }),
      ),
    { optional: true }),

    // move page in screen from left to right
    query(':enter',
      animate('500ms ease',
        style({
          position: 'fixed',
          opacity: 1,
          transform: 'translate(0%, 0%)',
        }),
      ),
    { optional: true }),
  ]),
]);

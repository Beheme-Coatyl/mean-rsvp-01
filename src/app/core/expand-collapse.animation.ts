// src/app/core/expand-collapse.animation.ts
import { trigger, transition, style, animate, state } from '@angular/animations';


// State *: element is present
// State void: element is removed
// Transition void => *: element is being added (alias: :enter)
// Transition * => void: element is being removed (alias: :leave)

// compare: https://angular.io/guide/animations

// OPTION 1:
export const expandCollapse = trigger('expandCollapse', [
  state('*', style({
    'overflow-y': 'hidden',
    'height': '*'
  })),
  state('void', style({
    'height': '0',
    'overflow-y': 'hidden'
  })),
  transition('* => void', animate('250ms ease-out')),
  transition('void => *', animate('250ms ease-in'))
]);

// OPTION 2:
// export const expandCollapse = trigger('expandCollapse', [
//   state('*', style({'overflow-y': 'hidden'})),
//   state('void', style({'overflow-y': 'hidden'})),
//   transition('* => void', [
//     style({height: '*'}),
//     animate('250ms ease-out', style({height: 0}))
//   ]),
//   transition('void => *', [
//     style({height: 0}),
//     animate('250ms ease-in', style({height: '*'}))
//   ])
// ]);

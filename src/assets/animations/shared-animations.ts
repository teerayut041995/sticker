import {
	sequence,
	trigger,
	animate,
	style,
	group,
	query,
	transition,
	animateChild,
	state,
	animation,
	useAnimation,
	stagger
} from '@angular/animations';

const reusable = animation([
	style({
		opacity: '{{opacity}}',
		transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
	}),
	animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
		params: {
			duration: '200ms',
			delay: '0ms',
			opacity: '0',
			scale: '1',
			x: '0',
			y: '0',
			z: '0'
		}
	});

export const SharedAnimations = [
	trigger('animate', [transition('void => *', [useAnimation(reusable)])]),

	trigger('fadeInOut', [
		state('true', style({
				opacity: 0,
				display  : 'none'
		})),
		state('false', style({
				opacity: 1,
				display  : 'block'
		})),
		transition('0 => 1', animate('300ms')),
		transition('1 => 0', animate('300ms'))
	]),
	// trigger('isCollapsedFade', [
    //     transition(':enter', [
    //         style({ opacity: 0 }),
    //         animate('200ms', style({ opacity: 1 }))
    //     ]),
    //     transition(':leave', [
    //         style({ opacity: 1 }),
    //         animate('200ms', style({ opacity: 0 }))
    //     ])
    // ])
	// trigger('fadeInOut', [
	// 	state('void', style({
	// 	opacity: 0
	// 	})),
	// 	transition('void <=> *', animate('300ms')),
	// ]),
]

// export class Animations {
//     public static slideInOut = trigger('slideInOut', [
//         state('true', style({ height: '0px' })),
//         state('false', style({ height: '*' })),
//         transition('1 => 0', animate('500ms ease-in')),
//         transition('0 => 1', animate('500ms ease-out'))
//     ]);
// }
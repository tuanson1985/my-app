import type { PageServerLoad } from '../sverdle/$types';

export const load = (async () => {
	return {
		title: 'My data',
		text: 'Hi mom!'
	};
}) satisfies PageServerLoad;

import type { Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Hello World',
	mobile: false,
	contentType: ContentTypeEnum.Quickstart,
	audited: true,
	web: 'React.js',
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'github.com/emerald-dao/0-hello-world',
	excerpt: 'A DApp that lets users read and change a greeting field on Flow testnet.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};

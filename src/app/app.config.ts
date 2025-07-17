import { ApplicationConfig } from '@angular/core';

import { AppService } from './app.service';

export const appConfig: ApplicationConfig = {
	providers: [
		AppService,
	],
};

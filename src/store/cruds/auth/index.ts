import { config } from '@/config';

const API_URL = config.API_SERVER;

/* ------------------------ Authentication CRUD URLs ------------------------ */
export default {
	/* ------------------------------ ADMIN Urls ----------------------------- */

	loginUrl: `${API_URL}/api/v1/user/login`,
	profileUrl: `${API_URL}/api/v1/user/profile`,
	logoutUrl: `${API_URL}/api/v1/logout`,
};

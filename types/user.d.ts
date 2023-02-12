// Stack Exchange API v2.3

export interface Count {
	bronze: number;
	silver: number;
	gold: number;
}

export interface Badges {
	count: Count;
	gold: number;
	silver: number;
	bronze: number;
}

export interface Stats {
	reputation: number;
	account: string;
	account_id: number;
	account_url: string;
	badges: Badges;
}

export interface BadgeCounts {
	bronze: number;
	silver: number;
	gold: number;
}

export interface UserData {
	about_me?: string;
	accept_rate?: number;
	account_id: number;
	age?: number;
	answer_count?: number;
	badge_counts: BadgeCounts;
	creation_date: number;
	display_name: string;
	down_vote_count?: number;
	is_employee: boolean;
	last_access_date: number;
	last_modified_date?: number;
	link: string;
	location?: string;
	profile_image: string;
	question_count?: number;
	reputation: number;
	reputation_change_day: number;
	reputation_change_month: number;
	reputation_change_quarter: number;
	reputation_change_week: number;
	reputation_change_year: number;
	timed_penalty_date?: number;
	up_vote_count?: number;
	user_id: number;
	user_type: "unregistered" | "registered" | "moderator" | "team_admin" | "does_not_exist";
	view_count?: number;
	website_url?: string;
}

export interface User {
	items: UserData[];
	has_more: boolean;
	quota_max: number;
	quota_remaining: number;
}

export interface UserAccountData {
	badge_counts: BadgeCounts;
	question_count: number;
	answer_count: number;
	last_access_date: number;
	creation_date: number;
	account_id: number;
	reputation: number;
	user_id: number;
	site_url: string;
	site_name: string;
}

export interface Account {
	items: UserAccountData[];
	has_more: boolean;
	quota_max: number;
	quota_remaining: number;
}

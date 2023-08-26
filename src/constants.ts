// KhulnaSoft constants
export const KHULNASOFT_OPENSOURCE_INSIGHTS_DOMAIN = import.meta.env.VITE_KHULNASOFT_OPENSOURCE_INSIGHTS_DOMAIN;
export const KHULNASOFT_OPENSOURCE_API_ENDPOINT = import.meta.env.VITE_KHULNASOFT_OPENSOURCE_API_ENDPOINT;
export const REPO_QUERY_API_ENDPOINT = "https://khulnasoft.tools";
export const SUPABASE_LOGIN_URL = `https://${import.meta.env.VITE_KHULNASOFT_OPENSOURCE_SUPABASE_ID}.supabase.co/auth/v1/authorize`;

export const REPO_QUERY_EMBED_ENDPOINT = `${REPO_QUERY_API_ENDPOINT}/embed`;
export const REPO_QUERY_QUERY_ENDPOINT = `${REPO_QUERY_API_ENDPOINT}/query`;
export const REPO_QUERY_COLLECTION_ENDPOINT = `${REPO_QUERY_API_ENDPOINT}/collection`;

export const SUPABASE_AUTH_COOKIE_NAME = `sb-${import.meta.env.VITE_KHULNASOFT_OPENSOURCE_SUPABASE_ID}-auth-token`;
export const SUPABASE_PKCE_VERIFIER_COOKIE_NAME = `sb-${import.meta.env.VITE_KHULNASOFT_OPENSOURCE_SUPABASE_ID}-auth-token-code-verifier`;
export const KHULNASOFT_OPENSOURCE_AUTH_TOKEN_KEY = "os-access-token";
export const KHULNASOFT_OPENSOURCE_OPTED_LOG_OUT_KEY = "opted-log-out";
export const AI_PR_DESCRIPTION_CONFIG_KEY = "ai-pr-description-config";


export const KHULNASOFT_OPENSOURCE_USERS_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/users`;
export const KHULNASOFT_OPENSOURCE_REPOS_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/repos`;
export const KHULNASOFT_OPENSOURCE_SESSION_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/auth/session`;
export const KHULNASOFT_OPENSOURCE_USER_INSIGHTS_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/user/insights`;
export const KHULNASOFT_OPENSOURCE_AI_PR_DESCRIPTION_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/prs/description/generate`;
export const KHULNASOFT_OPENSOURCE_USER_HIGHLIGHTS_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/user/highlights`;
export const KHULNASOFT_OPENSOURCE_AI_CODE_REFACTOR_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/prs/suggestion/generate`;
export const KHULNASOFT_OPENSOURCE_AI_CODE_EXPLANATION_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/prs/explanation/generate`;
export const KHULNASOFT_OPENSOURCE_AI_CODE_TEST_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/prs/test/generate`;
export const KHULNASOFT_OPENSOURCE_HIGHLIGHT_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/highlights`;
export const KHULNASOFT_OPENSOURCE_HIGHLIGHTS_LIST_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/highlights/list`;
export const KHULNASOFT_OPENSOURCE_EMOJIS_ENDPOINT = `${KHULNASOFT_OPENSOURCE_API_ENDPOINT}/emojis`;

// GitHub constants/selectors
export const GITHUB_PROFILE_MENU_SELECTOR = ".p-nickname.vcard-username.d-block";
export const GITHUB_PROFILE_EDIT_MENU_SELECTOR = "button.js-profile-editable-edit-button";
export const GITHUB_PROFILE_USER_PROFILE_BIO_SELECTOR = ".p-note.user-profile-bio.mb-3.js-user-profile-bio.f4";
export const GITHUB_PROFILE_USER_PROFILE_EDITABLE_AREA_SELECTOR = "js-profile-editable-area d-flex flex-column d-md-block";
export const GITHUB_PR_COMMENT_HEADER_SELECTOR = "timeline-comment-header clearfix d-flex";
export const GITHUB_NEW_PR_COMMENT_EDITOR_SELECTOR = "flex-nowrap d-none d-md-inline-block mr-md-0 mr-3";
export const GITHUB_PR_COMMENT_EDITOR_SELECTOR = "flex-nowrap d-inline-block mr-3";
export const GITHUB_REVIEW_SUGGESTION_SELECTOR = "js-suggestion-button-placeholder";
export const GITHUB_REPO_ACTIONS_SELECTOR = ".pagehead-actions";
export const GITHUB_PR_COMMENT_TEXT_AREA_SELECTOR = "pull_request[body]";
export const GITHUB_PR_SUGGESTION_TEXT_AREA_SELECTOR = "[name='comment[body]']";
export const GITHUB_PR_BASE_BRANCH_SELECTOR = "css-truncate css-truncate-target";

// External Links
export const EXTERNAL_RESOURCES = [
    { link: "https://docs.khulnasoft.com/chrome-extension/introduction-to-the-chrome-extension/", key: "Docs" },
    { link: "https://github.com/khulnasoft-opensource/ai/issues", key: "Issues" },
    { link: "https://github.com/orgs/khulnasoft-opensource/discussions", key: "Discussions" },
];

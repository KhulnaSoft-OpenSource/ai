import {
    getGithubUsername,
    isGithubProfilePage,
    isGithubPullRequestPage,
    isGithubRepoPage,
    isPullRequestCreatePage,
    isPullRequestFilesChangedPage,
} from "../utils/urlMatchers";
import { isKhulnaSoftUser } from "../utils/fetchKhulnaSoftApiData";
import injectViewOnKhulnaSoft from "../utils/dom-utils/viewOnKhulnaSoft";
import injectInviteToKhulnaSoft from "../utils/dom-utils/inviteToKhulnaSoft";
import { prefersDarkMode } from "../utils/colorPreference";
import injectAddPRToHighlightsButton from "../utils/dom-utils/addPRToHighlights";

// import injectRepoVotingButtons from "../utils/dom-utils/repoVotingButtons";
import domUpdateWatch from "../utils/dom-utils/domUpdateWatcher";
import injectDescriptionGeneratorButton from "../utils/dom-utils/addDescriptionGenerator";
import injectChangeSuggestorButton from "../utils/dom-utils/changeSuggestorButton";
import prEditWatch, { prReviewWatch } from "../utils/dom-utils/prWatcher";
import injectChatDialog from "../utils/dom-utils/addChatDialog";
import { pageUrlWatch } from "../utils/dom-utils/pageUrlWatcher";

const processGithubPage = async () => {
    if (prefersDarkMode(document.cookie)) {
        document.documentElement.classList.add("dark");
    }
    if (isPullRequestCreatePage(window.location.href)) {
        void injectDescriptionGeneratorButton();
    } else if (isPullRequestFilesChangedPage(window.location.href)) {
        prReviewWatch(injectChangeSuggestorButton, 500);
    } else if (isGithubPullRequestPage(window.location.href)) {
        prEditWatch(injectDescriptionGeneratorButton, 500);
        void injectAddPRToHighlightsButton();
    } else if (isGithubProfilePage(window.location.href)) {
        const username = getGithubUsername(window.location.href);

        if (!username) {
            return;
        }
        if (await isKhulnaSoftUser(username)) {
            injectViewOnKhulnaSoft(username);
        } else {
            injectInviteToKhulnaSoft(username);
        }
    } else if (isGithubRepoPage(window.location.href)) {
        const ownerName = getGithubUsername(window.location.href) ?? "";
        const repoName = window.location.href.split("/").pop() ?? "";

        await injectChatDialog(ownerName, repoName);

        pageUrlWatch(() => {
            if (document.getElementById("repo-query-root")) {
                document.getElementById("repo-query-root")?.remove();
            }
        }, 50);
    }

    /*
     * commenting out repo voting because it's not ready yet // issue #106
     * } else if (isGithubRepoPage(window.location.href)) {
     * const ownerName = getGithubUsername(window.location.href) ?? "";
     * const repoName = window.location.href.split("/").pop() ?? "";
     *
     * await injectRepoVotingButtons(ownerName, repoName);
     * }
     */

    domUpdateWatch(processGithubPage, 50);
};

void processGithubPage();

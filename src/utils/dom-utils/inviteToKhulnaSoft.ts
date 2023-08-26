import { GITHUB_PROFILE_MENU_SELECTOR } from "../../constants";
import { InviteToKhulnaSoftButton } from "../../content-scripts/components/InviteToKhulnaSoft/InviteToKhulnaSoftButton";
import { InviteToKhulnaSoftModal } from "../../content-scripts/components/InviteToKhulnaSoft/InviteToKhulnaSoftModal";
import { getTwitterUsername, getLinkedInUsername } from "../urlMatchers";

const injectKhulnaSoftInviteButton = (username: string) => {
    if (document.getElementById("invite-to-khulnasoft-button")) {
        return;
    }

    const emailAddress = document
        .querySelector(`a[href^="mailto:"]`)
        ?.getAttribute("href")
        ?.replace("mailto:", "");
    const twitterUrl = document
        .querySelector(`a[href*="twitter.com"]`)
        ?.getAttribute("href");
    const linkedInUrl = document
        .querySelector(`a[href*="linkedin.com"]`)
        ?.getAttribute("href");

    if (!(emailAddress || twitterUrl || linkedInUrl)) {
        return;
    }

    const twitterUsername = twitterUrl && getTwitterUsername(twitterUrl);
    const linkedInUsername = linkedInUrl && getLinkedInUsername(linkedInUrl);
    const inviteToKhulnaSoftButton = InviteToKhulnaSoftButton();
    const inviteToKhulnaSoftModal = InviteToKhulnaSoftModal(
        username,
        {
            emailAddress,
            twitterUsername,
            linkedInUsername,
        },
        inviteToKhulnaSoftButton,
    );

    const userBio = document.querySelector(GITHUB_PROFILE_MENU_SELECTOR);

    userBio?.append(inviteToKhulnaSoftButton);
    document.body.appendChild(inviteToKhulnaSoftModal);
};

export default injectKhulnaSoftInviteButton;

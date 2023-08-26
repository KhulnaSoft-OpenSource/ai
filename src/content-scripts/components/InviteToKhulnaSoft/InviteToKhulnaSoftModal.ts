import "../../content-scripts.css";
import { createHtmlElement } from "../../../utils/createHtmlElement";
import emailSocialIcon from "../../../assets/mail-icon.svg";
import twitterSocialIcon from "../../../assets/twitter-icon.svg";
import linkedInSocailIcon from "../../../assets/linkedin-icon.svg";
import { KHULNASOFT_OPENSOURCE_INSIGHTS_DOMAIN } from "../../../constants";

interface Socials {
    emailAddress?: string | null;
    twitterUsername?: string | null;
    linkedInUsername?: string | null;
}

export const InviteToKhulnaSoftModal = (
    username: string,
    { emailAddress, twitterUsername, linkedInUsername }: Socials = {},
    modalDisplayTrigger?: HTMLElement,
) => {
    const emailBody =
    typeof emailAddress === "string" &&
    `Hey ${username}. I'm using KhulnaSoft to keep track of my contributions and discover new projects. Try connecting your GitHub to https://khulnasoft.com/`;
    const emailHref =
    typeof emailAddress === "string" &&
    `mailto:${emailAddress}?subject=${encodeURIComponent(
        "Invitation to join KhulnaSoft!",
    )}&body=${encodeURIComponent(emailBody)}`;
    const tweetHref =
    typeof twitterUsername === "string" &&
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `Check out @saucedopen. The platform for open source contributors to find their next contribution. https://khulnasoft.com/blog/social-coding-is-back. @${twitterUsername}`,
    )}&hashtags=opensource,github`;
    const linkedinHref =
    typeof linkedInUsername === "string" &&
    `https://www.linkedin.com/in/${linkedInUsername}`;

    const emailIcon = emailBody
        ? createHtmlElement("a", {
            href: emailHref,
            target: "_blank",
            rel: "noopener noreferrer",
            innerHTML: `<img src=${chrome.runtime.getURL(
                emailSocialIcon,
            )} alt="Email">`,
        })
        : "";
    const twitterIcon = tweetHref
        ? createHtmlElement("a", {
            href: tweetHref,
            target: "_blank",
            rel: "noopener noreferrer",
            innerHTML: `<img src=${chrome.runtime.getURL(
                twitterSocialIcon,
            )} alt="Twitter">`,
        })
        : "";
    const linkedInIcon = linkedinHref
        ? createHtmlElement("a", {
            href: linkedinHref,
            target: "_blank",
            rel: "noopener noreferrer",
            innerHTML: `<img src=${chrome.runtime.getURL(
                linkedInSocailIcon,
            )} alt="LinkedIn">`,
        })
        : "";

    const socialIcons = createHtmlElement("span", { className: "flex flex-nowrap space-x-3" });

    const inviteToKhulnaSoftModal = createHtmlElement("div", {
        className:
      "fixed h-full w-full z-50 bg-gray-600 bg-opacity-80 dark:bg-opacity-50 overflow-y-auto inset-0",
        style: { display: "none" },
        id: "invite-modal",
    });

    const inviteToKhulnaSoftModalContainer = createHtmlElement("div", {
        className:
      "mt-2 min-w-[33%] relative top-60 mx-auto p-4 border w-96 rounded-md shadow-button border-solid border-orange bg-slate-800",
        innerHTML: `
    <h3 class="text-2xl leading-6 font-bold text-white">Invite ${username} to <a href="https://${KHULNASOFT_OPENSOURCE_INSIGHTS_DOMAIN}/start"><span class="hover:text-orange hover:underline">KhulnaSoft!</span></a></h3>
    <div class="mt-2">
       <p class="text-md text-white">
          Use the links below to invite them.
       </p>
    </div>
`,
    });

    inviteToKhulnaSoftModal.onclick = e => {
        if (e.target === inviteToKhulnaSoftModal) {
            inviteToKhulnaSoftModal.style.display = "none";
        }
    };

    if (modalDisplayTrigger) {
        modalDisplayTrigger.onclick = () => {
            inviteToKhulnaSoftModal.style.display = "block";
        };
    }

    socialIcons.replaceChildren(emailIcon, twitterIcon, linkedInIcon);
    inviteToKhulnaSoftModalContainer.appendChild(socialIcons);
    inviteToKhulnaSoftModal.appendChild(inviteToKhulnaSoftModalContainer);

    return inviteToKhulnaSoftModal;
};

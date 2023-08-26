import logoIcon from "../../../assets/khulnasoft-icon.svg";
import "../../content-scripts.css";
import { createHtmlElement } from "../../../utils/createHtmlElement";

export const InviteToKhulnaSoftButton = () => {
    const inviteToKhulnaSoftButton = createHtmlElement("a", {
        id: "invite-to-khulnasoft-button",
        className:
      "inline-block mt-4 text-black bg-gh-white dark:bg-gh-gray dark:text-white rounded-md p-2 text-sm font-semibold text-center select-none w-full border hover:shadow-button hover:no-underline",
        innerHTML: `<img
          class="mx-2 inline-block align-top"
          src="${chrome.runtime.getURL(logoIcon)}"
          alt="KhulnaSoft Logo"
          width="20"
          height="20"
        />
        <span>Invite to KhulnaSoft</span>
        `,
    });

    return inviteToKhulnaSoftButton;
};

import logoIcon from "../../../assets/khulnasoft-icon.svg";
import "../../content-scripts.css";
import { createHtmlElement } from "../../../utils/createHtmlElement";
import { OPEN_SAUCED_INSIGHTS_DOMAIN } from "../../../constants";

export const ViewOnKhulnaSoftButton = (username: string) => {
    const viewOnKhulnaSoftButton = createHtmlElement("a", {
        id: "view-on-khulnasoft-button",
        href: `https://${OPEN_SAUCED_INSIGHTS_DOMAIN}/user/${username}/contributions`,
        className:
      "inline-block my-4 text-black bg-gh-white dark:bg-gh-gray dark:text-white rounded-md p-2 text-sm font-semibold text-center select-none w-full border hover:shadow-button hover:no-underline",
        target: "_blank",
        rel: "noopener noreferrer",
        innerHTML: `
    <img
      class="mx-2 inline-block align-top"
      src="${chrome.runtime.getURL(logoIcon)}"
      alt="KhulnaSoft Logo"
      width="20"
      height="20"
    />
    <span>View On KhulnaSoft</span>
    `,
    });

    return viewOnKhulnaSoftButton;
};

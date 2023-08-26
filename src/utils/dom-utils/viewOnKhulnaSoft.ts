import { GITHUB_PROFILE_USER_PROFILE_EDITABLE_AREA_SELECTOR } from "../../constants";
import { ViewOnKhulnaSoftButton } from "../../content-scripts/components/ViewOnKhulnaSoftButton/ViewOnKhulnaSoftButton";

const injectViewOnKhulnaSoftButton = (username: string) => {
    if (document.getElementById("view-on-khulnasoft-button")) {
        return;
    }

    const viewOnKhulnaSoftButton = ViewOnKhulnaSoftButton(username);

    const userEditableArea = document.getElementsByClassName(
        GITHUB_PROFILE_USER_PROFILE_EDITABLE_AREA_SELECTOR,
    );
    const editableAreaElement = userEditableArea[0];

    editableAreaElement.parentNode?.insertBefore(viewOnKhulnaSoftButton, editableAreaElement);
};

export default injectViewOnKhulnaSoftButton;

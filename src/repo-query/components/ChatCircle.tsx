import openSaucedLogoIcon from "../../assets/khulnasoft-opensource-orange-bg-logo.svg";

export const ChatCircle = ({ toggleDialog }: { toggleDialog: () => void }) => (
    <button
        onClick={toggleDialog}
        onKeyDown={
            e => {
                if (e.key === "Enter") {
                    toggleDialog();
                }
            }
        }
    >
        <img
            alt="KhulnaSoft OpenSource Logo"
            className="w-14 h-14 rounded-full fixed bottom-0 right-0 m-8 z-50 cursor-pointer"
            id="chat-dialog-button-logo"
            src={chrome.runtime.getURL(openSaucedLogoIcon)}
        />
    </button>
);

function getVideoTitle() {
    const titleContainer = document.getElementById("above-the-fold");
    if (titleContainer) {
        const youTubeFormattedString = titleContainer.querySelector("yt-formatted-string");
        if (youTubeFormattedString) {
            return youTubeFormattedString.textContent;
        } else {
            throw new Error("YouTube Formatted String couldn't be found.");
        }
    } else {
        throw new Error("Title Container couldn't be found.");
    }
}

function getVideoURL() {
    const urlContainer = document.getElementById("watch7-content");
    if (urlContainer) {
        const videoUrlString = urlContainer.getAttribute("itemid");
        if (videoUrlString) {
            return videoUrlString;
        } else {
            throw new Error("Video URL String couldn't be found.");
        }
    } else {
        throw new Error("URL Container couldn't be found.");
    }
}

function buildMdString(title, link) {
    return `[${title}](${link})`;
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        throw new Error(err);
    }
}

copyToClipboard(
    buildMdString(
        getVideoTitle(), getVideoURL()
    )
);

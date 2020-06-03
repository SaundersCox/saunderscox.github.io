/**
 * Displays string which can be copied and pasted into Discord
 */
function textToDiscordEmoji() {
    console.log("Hello")
    str = document.getElementById("translate-this").value;
    nums = ["zero", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine"];
    result = convertChars(str, nums);
    document.getElementById("discord-text-to-emoji").innerHTML = result
}

function convertChars(str, nums) {
    result = "";

    [...str].forEach(c => {
        if (c.match(/[a-zA-Z]/g)) {
            result += " :regional_indicator_" + c + ":";
        }
        else if (c.match(/[0-9]/g)) {
            i = parseInt(c);
            result += " :" + nums[i] + ":"
        }
        else if (c.match(/\s/g)) {
            result += "\n";
        }
    })

    return result;
}
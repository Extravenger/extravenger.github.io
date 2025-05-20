/** Hamburger menu functionality */
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

burger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

/** Copy to clipboard for main terminal */
document.addEventListener("DOMContentLoaded", function() {
    const copyBtn = document.getElementById("copyBtnTerminal");
    const copiedText = document.getElementById("copiedText");
    const outputDiv = document.getElementById("PowerShellOut");

    copyBtn.addEventListener("click", function() {
        if (outputDiv) {
            const textToCopy = outputDiv.innerText || outputDiv.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyBtn.style.display = 'none';
                copiedText.style.visibility = 'visible';
                copiedText.style.opacity = '1';
                setTimeout(() => {
                    copiedText.style.opacity = '0';
                    setTimeout(() => {
                        copiedText.style.visibility = 'hidden';
                    }, 500);
                    copyBtn.style.display = 'block';
                }, 2000);
            }).catch(err => console.error("Error copying text: ", err));
        } else {
            console.error("El div con id 'PowerShellOut' no existe.");
        }
    });

    // Initialize vote counts and vote states
    initializeVoteCounts();
    
    // Add event listeners for like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', handleLikeClick);
    });
});

/** Initialize vote counts and vote states from localStorage */
function initializeVoteCounts() {
    const edrList = ['CrowdStrike', 'Microsoft-XDR', 'SentinelOne', 'CarbonBlack', 'Cortex'];
    edrList.forEach(edr => {
        // Initialize vote count
        const voteCount = localStorage.getItem(`vote-${edr}`) || '0';
        const voteDisplay = document.getElementById(`voteCount-${edr}`);
        if (voteDisplay) {
            voteDisplay.textContent = voteCount;
        }

        // Check if user has already voted and disable button if true
        const hasVoted = localStorage.getItem(`hasVoted-${edr}`);
        const likeButton = document.getElementById(`likeBtn-${edr}`);
        if (hasVoted === 'true' && likeButton) {
            likeButton.disabled = true;
            likeButton.classList.add('disabled');
        }
    });
}

/** Handle like button clicks */
function handleLikeClick(event) {
    const edr = event.currentTarget.getAttribute('data-edr');
    const hasVoted = localStorage.getItem(`hasVoted-${edr}`);

    // Prevent voting if user has already voted
    if (hasVoted === 'true') {
        return;
    }

    const voteCountElement = document.getElementById(`voteCount-${edr}`);
    const likeButton = document.getElementById(`likeBtn-${edr}`);
    if (voteCountElement && likeButton) {
        let currentCount = parseInt(localStorage.getItem(`vote-${edr}`) || '0');
        currentCount += 1;
        localStorage.setItem(`vote-${edr}`, currentCount);
        localStorage.setItem(`hasVoted-${edr}`, 'true');
        voteCountElement.textContent = currentCount;
        likeButton.disabled = true;
        likeButton.classList.add('disabled');
    }
}

/** PowerShell command generation */
function GeneratePS(edr) {
    const command = getPayload(edr); // Calls getPayload with EDR type
    document.getElementById("PowerShellOutRaw").value = command;
    document.getElementById("PowerShellOut").innerHTML = formatPowerShell(command);
}

/** PowerShell command formatting */
function formatPowerShell(command) {
    return command
        .replace(/#(.*)$/gm, '<span class="comment">#$1</span>')
        .replace(/\b(Get|Set|Remove|Start|Stop|Restart|Enable|Disable|New|Out|Write|ForEach|Where|Select|Invoke|Measure|Format|Import|Export|Convert|Test|iex)-[A-Za-z0-9]+\b/g, '<span class="command"><b>$&</b></span>')
        .replace(/(-[A-Za-z0-9]+)/g, '<span class="parameter"><b>$1</b></span>')
        .replace(/\[\s*([A-Za-z0-9_\.]+)\s*\]/g, '<span class="datatype">[$1]</span>')
        .replace(/\b(True|False|\d+)\b/g, '<span class="value">$1</span>')
        .replace(/\b(-eq|-ne|-gt|-lt|-ge|-le|-like|-match|-notmatch|-contains|-notcontains|-in|-notin|using)\b/g, '<span class="operator">$1</span>')
        .replace(/\$(\w+)/g, '<span class="variable">$$$1</span>')
        .replace(/'([^']+)'/g, '<span class="string">\'$1\'</span>');
}

/** Terminal animation effect */
let isAnimating = false;
let isAnimationEnabled = true;

const slider = document.getElementById('animation-toggle');
const statusText = document.getElementById('animation-status');

slider.addEventListener('change', function() {
    isAnimationEnabled = slider.checked;
    statusText.textContent = isAnimationEnabled ? "Animación Activada" : "Animación Desactivada";
});

function showTerminalEffect(button) {
    if (!isAnimationEnabled || isAnimating) return;

    isAnimating = true;
    const overlay = button.nextElementSibling;
    const container = button.closest('.copy-container');
    const text = "Codigo generado con exito!";
    let index = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    overlay.style.display = "block";
    overlay.textContent = "";
    container.style.height = "auto";

    function typeWriter() {
        if (index < text.length) {
            overlay.textContent += text[index];
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(deleteWriter, 1000);
        }
    }

    function deleteWriter() {
        if (overlay.textContent.length > 0) {
            overlay.textContent = overlay.textContent.slice(0, -1);
            setTimeout(deleteWriter, 50);
        } else {
            container.style.height = "";
            overlay.style.display = "none";
            buttons.forEach(btn => btn.disabled = false);
            isAnimating = false;
        }
    }

    typeWriter();
}

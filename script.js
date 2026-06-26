const questions = [
    {
        text: "Is this the best birthday ever? 🎂",
        subtitle: "Think very carefully... 👀",
        yesLabel: "Absolutely! 🥳",
        noLabels: [
            "Not really...",
            "Wait... seriously? 🤨",
            "Come on, it's your birthday! 🥺",
            "Even the cake is crying rn... 🎂💔",
            "You're breaking the candles' hearts 🕯️😢",
            "Last chance before balloons deflate! 😭",
            "I can't believe this...",
            "The confetti is SO disappointed 😤",
            "You can't catch me anyway 😜"
        ],
        gifStages: [
            "https://media.tenor.com/cFMJdkzJIuUAAAAj/birthday-cat.gif",
            "https://media.tenor.com/O0IRUsGM3ZQAAAAC/what-confused.gif",
            "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
            "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
            "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
            "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
            "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",
            "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
        ],
        teasePokes: [
            "psst... try saying no first 👀",
            "go on, hit no... you know you want to 😏",
            "I dare you to click no 🎂",
            "something funny happens if you click no 😈"
        ]
    },
    {
        text: "Did you make a wish on the candles? 🕯️",
        subtitle: "Be honest now...",
        yesLabel: "Of course I did! ✨",
        noLabels: [
            "I forgot...",
            "You FORGOT?! 😱",
            "That's one year of bad luck bestie 💀",
            "The candles are personally offended 🕯️😤",
            "They burned for NOTHING?! 😭",
            "Please just say yes... 🥺",
            "I'm telling the birthday fairy on you 🧚",
            "She's literally sobbing rn 😭",
            "Ok fine, I give up 😔"
        ],
        gifStages: [
            "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
            "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
            "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
            "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
            "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
            "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
            "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",
            "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
        ],
        teasePokes: [
            "click no first... just once 😏",
            "go on, I dare you 👀",
            "trust me, click no 😈",
            "last chance to be chaotic 🎂"
        ]
    },
    {
        text: "Ready to party all night? 🎉",
        subtitle: "Last question, choose wisely!",
        yesLabel: "LET'S GOOO! 🎊",
        noLabels: [
            "Maybe later...",
            "MAYBE LATER?! On your birthday?! 😤",
            "The DJ is looking at you rn 🎧",
            "The dance floor is crying 💃😭",
            "Even grandma is ready to party 👵🎉",
            "I am begging you at this point 🙏",
            "The balloons are deflating from sadness 🎈😢",
            "Ok now I'm really upset 😭",
            "Fine, I'll party without you 😤"
        ],
        gifStages: [
            "https://media.tenor.com/pZNpkVGZ3HEAAAAC/happy-birthday-birthday.gif",
            "https://media.tenor.com/O0IRUsGM3ZQAAAAC/what-confused.gif",
            "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
            "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
            "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
            "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
            "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",
            "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
        ],
        teasePokes: [
            "so close... try no one last time 😏",
            "one last dare... click no 👀",
            "final chaos opportunity 😈",
            "you won't 🎂"
        ]
    }
]

// ── State ──
let currentQ = 0
let noClickCount = 0
let runawayEnabled = false
let yesTeasedCount = 0
let musicPlaying = true

// ── DOM refs ──
const mainGif    = document.getElementById('main-gif')
const yesBtn     = document.getElementById('yes-btn')
const noBtn      = document.getElementById('no-btn')
const music      = document.getElementById('bg-music')
const qText      = document.getElementById('question-text')
const qSubtitle  = document.getElementById('question-subtitle')
const progLabel  = document.getElementById('progress-label')

// ── Load question ──
function loadQuestion(index) {
    const q = questions[index]

    // Reset state
    noClickCount   = 0
    runawayEnabled = false
    yesTeasedCount = 0

    // Reset No button position
    noBtn.style.position = ''
    noBtn.style.left     = ''
    noBtn.style.top      = ''
    noBtn.style.zIndex   = ''

    // Reset button sizes
    yesBtn.style.fontSize = ''
    yesBtn.style.padding  = ''
    noBtn.style.fontSize  = ''

    // Update text
    qText.textContent     = q.text
    qSubtitle.textContent = q.subtitle
    yesBtn.textContent    = q.yesLabel
    noBtn.textContent     = q.noLabels[0]

    // Update progress
    progLabel.textContent = `Question ${index + 1} of ${questions.length}`
    document.querySelectorAll('.progress-step').forEach((el, i) => {
        el.classList.toggle('active', i <= index)
        el.classList.toggle('done', i < index)
    })

    // Swap GIF
    swapGif(q.gifStages[0])
}

// ── Yes handler ──
function handleYesClick() {
    if (!runawayEnabled) {
        const pokes = questions[currentQ].teasePokes
        const msg   = pokes[Math.min(yesTeasedCount, pokes.length - 1)]
        yesTeasedCount++
        showTeaseMessage(msg)
        return
    }

    // Advance
    if (currentQ < questions.length - 1) {
        currentQ++
        loadQuestion(currentQ)
        // Remove old runaway listeners
        noBtn.removeEventListener('mouseover', runAway)
        noBtn.removeEventListener('touchstart', runAway)
    } else {
        window.location.href = 'yes.html'
    }
}

// ── No handler ──
function handleNoClick() {
    noClickCount++
    const q        = questions[currentQ]
    const msgIndex = Math.min(noClickCount, q.noLabels.length - 1)
    noBtn.textContent = q.noLabels[msgIndex]

    // Grow Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
    yesBtn.style.fontSize = `${currentSize * 1.35}px`
    const padY = Math.min(18 + noClickCount * 5, 60)
    const padX = Math.min(45 + noClickCount * 10, 120)
    yesBtn.style.padding = `${padY}px ${padX}px`

    // Shrink No button
    if (noClickCount >= 2) {
        const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize)
        noBtn.style.fontSize = `${Math.max(noSize * 0.85, 10)}px`
    }

    // Swap GIF
    const gifIndex = Math.min(noClickCount, q.gifStages.length - 1)
    swapGif(q.gifStages[gifIndex])

    // Enable runaway at click 5
    if (noClickCount >= 5 && !runawayEnabled) {
        enableRunaway()
        runawayEnabled = true
    }
}

function swapGif(src) {
    mainGif.style.opacity = '0'
    setTimeout(() => {
        mainGif.src = src
        mainGif.style.opacity = '1'
    }, 200)
}

function showTeaseMessage(msg) {
    const toast = document.getElementById('tease-toast')
    toast.textContent = msg
    toast.classList.add('show')
    clearTimeout(toast._timer)
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2500)
}

function enableRunaway() {
    noBtn.addEventListener('mouseover', runAway)
    noBtn.addEventListener('touchstart', runAway, { passive: true })
}

function runAway() {
    const margin = 20
    const btnW   = noBtn.offsetWidth
    const btnH   = noBtn.offsetHeight
    const maxX   = window.innerWidth  - btnW - margin
    const maxY   = window.innerHeight - btnH - margin
    const randomX = Math.random() * maxX + margin / 2
    const randomY = Math.random() * maxY + margin / 2
    noBtn.style.position = 'fixed'
    noBtn.style.left     = `${randomX}px`
    noBtn.style.top      = `${randomY}px`
    noBtn.style.zIndex   = '50'
}

// ── Balloons ──
const balloonEmojis = ['🎈', '🎉', '🎊', '🎁', '⭐', '✨', '🎈', '🎈']
const balloonsBg    = document.getElementById('balloons-bg')

function spawnBalloon() {
    const el        = document.createElement('span')
    el.className    = 'balloon'
    el.textContent  = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)]
    el.style.left   = `${Math.random() * 95}%`
    const duration  = 8 + Math.random() * 8
    el.style.animationDuration = `${duration}s`
    el.style.animationDelay   = `${Math.random() * 4}s`
    el.style.fontSize          = `${1.2 + Math.random() * 1.4}rem`
    balloonsBg.appendChild(el)
    setTimeout(() => el.remove(), (duration + 4) * 1000)
}

for (let i = 0; i < 10; i++) setTimeout(spawnBalloon, i * 600)
setInterval(spawnBalloon, 1800)

// ── Music ──
music.muted  = true
music.volume = 0.3
music.play().then(() => {
    music.muted = false
}).catch(() => {
    document.addEventListener('click', () => {
        music.muted = false
        music.play().catch(() => {})
    }, { once: true })
})

function toggleMusic() {
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.muted = false
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

// ── Init ──
loadQuestion(0)

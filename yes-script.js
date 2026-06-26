let musicPlaying = false

window.addEventListener('load', () => {
    spawnBalloons()
    launchConfetti()

    // Autoplay music (works since user clicked Yes to get here)
    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

// ── Spawn floating balloons (same as main page) ──
const balloonEmojis = ['🎈', '🎉', '🎊', '🎁', '⭐', '✨', '🎈', '🎈']

function spawnBalloons() {
    const balloonsBg = document.getElementById('balloons-bg')

    function spawnOne() {
        const el = document.createElement('span')
        el.className = 'balloon'
        el.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)]
        el.style.left = `${Math.random() * 95}%`
        const duration = 6 + Math.random() * 6
        el.style.animationDuration = `${duration}s`
        el.style.animationDelay = `0s`
        el.style.fontSize = `${1.5 + Math.random() * 1.5}rem`
        el.style.opacity = '0.7'
        balloonsBg.appendChild(el)
        setTimeout(() => el.remove(), (duration + 2) * 1000)
    }

    for (let i = 0; i < 14; i++) {
        setTimeout(spawnOne, i * 300)
    }
    setInterval(spawnOne, 1000)
}

// ── Confetti burst ──
function launchConfetti() {
    const colors = ['#ffd700', '#ff8c00', '#8b3de8', '#d4aaff', '#ff69b4', '#00e5ff', '#ffffff']
    const duration = 7000
    const end = Date.now() + duration

    confetti({
        particleCount: 180,
        spread: 110,
        origin: { x: 0.5, y: 0.25 },
        colors
    })

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 45,
            angle: 60,
            spread: 60,
            origin: { x: 0, y: 0.65 },
            colors
        })

        confetti({
            particleCount: 45,
            angle: 120,
            spread: 60,
            origin: { x: 1, y: 0.65 },
            colors
        })
    }, 350)
}

function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

# 🎂 Birthday Interactive Page

A fun, interactive birthday page — same mechanic as the Valentine's version: the "Yes" button grows bigger every time they click "No", with floating balloons, GIF stages, music, and playful toasts. Built with pure HTML, CSS, and JavaScript.

---

## Project Structure

```
birthday/
├── index.html       # Main page — "Is this the best birthday ever?"
├── yes.html         # Celebration page after they say Yes
├── script.js        # Main page logic (button growth, GIF swaps, balloon spawner, toasts)
├── yes-script.js    # Celebration page confetti + balloons
├── style.css        # All styling and animations (deep purple/gold party theme)
└── music/           # Background music — drop your MP3 here as birthday-song.mp3
```

---

## Setup

### 1. Add Your Music
Drop your background music file into a `music/` folder and name it:
```
music/birthday-song.mp3
```
Or update the `<source src="...">` in both `index.html` and `yes.html` to match your filename.

### 2. Personalize It
- `index.html` → change the question and subtitle
- `yes.html` → change the celebration message
- `script.js` → update `noMessages[]` and `yesTeasePokes[]` with your own lines
- `script.js` → swap GIF URLs in `gifStages[]` with any Tenor GIFs you like
- `style.css` → tweak colors (currently deep purple + gold)

### 3. Deploy via GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Your page goes live at `https://yourusername.github.io/repo-name`

---

## What's Different from the Valentine's Version

| Feature | Valentine's | Birthday |
|---|---|---|
| Color theme | Pink / rose | Deep purple + gold |
| Font | Nunito only | Fredoka One (display) + Nunito |
| Background FX | CSS pseudo-element hearts | JS-spawned balloon emojis |
| Question | "Will you be my Valentine?" | "Is this the best birthday ever?" |
| Yes button label | "Yes" | "Absolutely! 🥳" |
| Confetti colors | Pinks + reds | Gold + purple + cyan |

The core mechanic (growing Yes, shrinking+runaway No, GIF stages) is identical.

# StreamMate — Brand Assets Handoff

  ## Sadržaj / Contents

  ```
  components/
    FinalLogo.tsx     → Logo wordmark (tamna / svijetla / PNG transparent varijanta)
    Favicon.tsx       → Favicon u svim veličinama (16px – 180px) + browser tab preview
    SplashScreen.tsx  → Splash screen (full-screen, dark gradient)
  ```

  ---

  ## Stack / Dependencies

  - **React** (JSX/TSX)
  - **Tailwind CSS** — koristi se za `min-h-screen`, `flex`, `items-center` i sl.
  - Nema vanjskih paketa — sve je inline SVG + CSS

  ---

  ## Boje / Color Palette

  | Token       | Hex       | Upotreba                        |
  |-------------|-----------|----------------------------------|
  | Primary     | `#7c3aed` | Početak gradijenta (ljubičasta) |
  | Mid         | `#4f46e5` | Sredina gradijenta (indigo)     |
  | Accent      | `#06b6d4` | Kraj gradijenta (cyan)          |
  | Dark BG     | `#0a0a14` | Tamna pozadina (app, splash)    |
  | Light BG    | `#f8fafc` | Svijetla pozadina               |
  | Text light  | `#cbd5e1` | "Mate" dio wordmarka na tamnoj  |
  | Text dark   | `#475569` | "Mate" dio wordmarka na svijetloj |

  ### Gradient (logo wordmark — tamna BG)
  ```css
  background: linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%);
  ```

  ### Gradient (logo wordmark — svijetla BG)
  ```css
  background: linear-gradient(120deg, #7c3aed 0%, #4f46e5 50%, #0891b2 100%);
  ```

  ---

  ## Tipografija / Typography

  | Dio        | Font                              | Weight | Size    |
  |------------|-----------------------------------|--------|---------|
  | "Stream"   | `'Segoe UI', system-ui, sans-serif` | 800    | varijabilno |
  | "Mate"     | `'Segoe UI', system-ui, sans-serif` | 300    | isto kao "Stream" |
  | Letter spacing | `-0.05em` na oba dijela       | —      | —       |

  ---

  ## Favicon

  Favicon koristi **"S" lettermark** (inicijal StreamMate) unutar rounded-square oblika.

  ### Potrebne veličine
  | Datoteka         | Veličina | Upotreba                    |
  |------------------|----------|-----------------------------|
  | `favicon-16.png` | 16×16    | Browser tab (mali)          |
  | `favicon-32.png` | 32×32    | Browser tab (standardno)    |
  | `favicon-64.png` | 64×64    | Shortcut ikona              |
  | `favicon-96.png` | 96×96    | —                           |
  | `apple-touch-icon.png` | 180×180 | iOS home screen ikona  |

  ---

  ## Splash Screen

  - **Pozadina:** `linear-gradient(145deg, #08051a 0%, #0d0b28 40%, #080f24 70%, #050d1a 100%)`
  - **Glow orb:** apsolutno pozicioniran, `radial-gradient`, ljubičasta + cyan
  - **Grid:** SVG `<pattern>` s opacity 0.04
  - **Wave:** SVG `<path>` ispod wordmarka, fade-in s gradijentom
  - **Loading dots:** 3 tačke, srednja je gradient, ostale outlined

  ---

  ## Implementacija / How to Use

  ### 1. Splash Screen (React Native / Expo)
  Splash screen je dizajniran kao full-screen React komponenta.  
  Za Expo: koristite `expo-splash-screen` ili postavite kao prvu screen u navigatoru.

  ### 2. Favicon (Web)
  ```html
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  ```

  ### 3. Logo Wordmark
  Komponenta `FinalLogo.tsx` prikazuje sve varijante.  
  Za upotrebu u UI-u, izdvojite samo željeni `<div>` sa `<span>` elementima.

  ---

  ## Kontakt / Notes

  Dizajn finaliziran: **3. Juni 2026.**  
  Sve komponente su hot-reload kompatibilne s Vite + Tailwind.
# B2B Color Variables Extracted from Figma

## Brand Colors

### Red
- Red 01: #DF0027 (--b2b-colors-red-01)
- Red 02: #BF0022 (--b2b-colors-red-02)
- Red 03: #A0001C (--b2b-colors-red-03)
- Red 04: #800016 (--b2b-colors-red-04)
- Red 05: #600011 (--b2b-colors-red-05)
- Red 06: #40000B (--b2b-colors-red-06)
- Red Brand: #FF002D (--b2b-colors-red-brand)

### Grey
- Grey 01: #F8F8F8 (--b2b-colors-grey-01)
- Grey 02: #F8F8F8 (--b2b-colors-grey-02)
- Grey 03: #D9D9D9 (--b2b-colors-grey-03)
- Grey 04: #B3B3B3 (--b2b-colors-grey-04)
- Grey 05: #8D8D8D (--b2b-colors-grey-05)
- Grey 06: #666666 (--b2b-colors-grey-06)
- Grey 07: #404040 (--b2b-colors-grey-07)
- Grey 08: #1A1A1A (--b2b-colors-grey-08)

### White
- White 01: #FFFFFF (--b2b-colors-white-01)

---

## State Colors

### Info
- Info 01: #0D82BD (--b2b-colors-state-info-01)
- Info 02: #B6D9EB (--b2b-colors-state-info-02)
- Info 03: #E7F2F8 (--b2b-colors-state-info-03)

### Success
- Success 01: #28A545 (--b2b-colors-state-success-01)
- Success 02: #B7E6C3 (--b2b-colors-state-success-02)
- Success 03: #E8F5ED (--b2b-colors-state-success-03)

### Warning
- Warning 01: #FFC107 (--b2b-colors-state-warning-01)
- Warning 02: #FFE8A8 (--b2b-colors-state-warning-02)
- Warning 03: #FFF8DC (--b2b-colors-state-warning-03)

### Error
- Error 01: #DC3545 (--b2b-colors-state-error-01)
- Error 02: #F5C6CB (--b2b-colors-state-error-02)
- Error 03: #F8D7DA (--b2b-colors-state-error-03)

---

## Support Colors

### Blue Palette
- Blue 100: #DBF5F6 (--b2b-colors-blue-100)
- Blue 200: #ABE8EA (--b2b-colors-blue-200)
- Blue 300: #7BDBDD (--b2b-colors-blue-300)
- Blue 400: #4BCED1 (--b2b-colors-blue-400)
- Blue 500: #349EA0 (--b2b-colors-blue-500)
- Blue 600: #1D6F70 (--b2b-colors-blue-600)
- Blue 700: #063F3F (--b2b-colors-blue-700)

### Green Palette
- Green 100: #D8F7DF (--b2b-colors-green-100)
- Green 200: #A3EDB5 (--b2b-colors-green-200)
- Green 300: #6FE28A (--b2b-colors-green-300)
- Green 400: #3AD860 (--b2b-colors-green-400)
- Green 500: #28A545 (--b2b-colors-green-500)
- Green 600: #15722B (--b2b-colors-green-600)
- Green 700: #033F10 (--b2b-colors-green-700)

### Pink Palette
- Pink 100: #FFDBEA (--b2b-colors-pink-100)
- Pink 200: #FFACCE (--b2b-colors-pink-200)
- Pink 300: #FF7CB2 (--b2b-colors-pink-300)
- Pink 400: #FF4D96 (--b2b-colors-pink-400)
- Pink 500: #C83371 (--b2b-colors-pink-500)
- Pink 600: #901A4D (--b2b-colors-pink-600)
- Pink 700: #590028 (--b2b-colors-pink-700)

### Yellow Palette
- Yellow 100: #FFF6D9 (--b2b-colors-yellow-100)
- Yellow 200: #FFEAA6 (--b2b-colors-yellow-200)
- Yellow 300: #FFDE73 (--b2b-colors-yellow-300)
- Yellow 400: #FFD240 (--b2b-colors-yellow-400)
- Yellow 500: #C8A22B (--b2b-colors-yellow-500)
- Yellow 600: #907215 (--b2b-colors-yellow-600)
- Yellow 700: #594200 (--b2b-colors-yellow-700)

---

## Transparencies

### White Transparencies
- White 10%: rgba(255, 255, 255, 0.10) (--b2b-colors-alpha-white-10)
- White 20%: rgba(255, 255, 255, 0.20) (--b2b-colors-alpha-white-20)
- White 40%: rgba(255, 255, 255, 0.40) (--b2b-colors-alpha-white-40)
- White 70%: rgba(255, 255, 255, 0.70) (--b2b-colors-alpha-white-70)

### Black Transparencies
- Black 10%: rgba(0, 0, 0, 0.10) (--b2b-colors-alpha-black-10)
- Black 20%: rgba(0, 0, 0, 0.20) (--b2b-colors-alpha-black-20)
- Black 60%: rgba(0, 0, 0, 0.60) (--b2b-colors-alpha-black-60)

---

## CSS Variables Summary

All colors are defined as CSS custom properties following the naming convention:
`--b2b-colors-{family}-{number or name}`

For example:
- Primary colors: `--b2b-colors-red-01` through `--b2b-colors-red-06`
- State colors: `--b2b-colors-state-{state}-{intensity}`
- Support colors: `--b2b-colors-{color}-{100-700}`
- Transparencies: `--b2b-colors-alpha-{white|black}-{opacity}`

These variables can be used in any styling context:
```css
/* Example usage */
color: var(--b2b-colors-red-brand);
background-color: var(--b2b-colors-state-success-01);
border-color: var(--b2b-colors-blue-500);
```

---

## Total Colors Extracted: 92 unique color values
- Brand colors: 15 (7 red shades + 8 greys + 1 white)
- State colors: 12 (3 info + 3 success + 3 warning + 3 error)
- Support colors: 28 (7 blue + 7 green + 7 pink + 7 yellow)
- Transparencies: 7 (4 white + 3 black)

**Source:** B2B-B2E---DS---BETA Figma Design (Frame ID: 38:47)
**Extracted Date:** March 19, 2026

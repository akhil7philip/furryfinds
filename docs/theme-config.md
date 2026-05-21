# Furry Finds Theme Configuration
# Niche: Pet Accessories
# Vibe: Warm, friendly, trustworthy, playful

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--ff-bg-primary` | `#fef9f3` | Page background (warm cream) |
| `--ff-bg-secondary` | `#fff5e6` | Cards, sections |
| `--ff-bg-elevated` | `#ffffff` | Modals, dropdowns |
| `--ff-accent` | `#2d6a4f` | CTAs, links, highlights (forest green) |
| `--ff-accent-hover` | `#40916c` | Button hover |
| `--ff-accent-muted` | `#2d6a4f15` | Subtle accent backgrounds |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--ff-text-primary` | `#2d3436` | Headings, body |
| `--ff-text-secondary` | `#636e72` | Meta, captions |
| `--ff-text-muted` | `#b2bec3` | Dates, tags |

### Functional Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--ff-success` | `#27ae60` | In-stock, positive |
| `--ff-warning` | `#f39c12` | Size alerts, caution |
| `--ff-danger` | `#e74c3c` | Recall notices, safety warnings |
| `--ff-info` | `#3498db` | Tips, care instructions |

### Accent Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--ff-paw` | `#e17055` | Icons, playful accents |
| `--ff-cream` | `#fdcb6e` | Highlights, badges |
| `--ff-soft-blue` | `#74b9ff` | Secondary accents |

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Nunito / system-ui | 800 | 2.5rem |
| H2 | Nunito / system-ui | 700 | 1.875rem |
| H3 | Nunito / system-ui | 600 | 1.5rem |
| Body | Inter / system-ui | 400 | 1.125rem |
| Caption | Inter / system-ui | 400 | 0.875rem |
| Quote | Nunito / system-ui | 500 | 1.25rem | Pull quotes, testimonials |

## Visual Style

- **Border radius:** 16px (cards), 12px (buttons), 8px (inputs)
- **Shadows:** Soft, warm (`0 4px 20px rgba(45,106,79,0.08)`)
- **Transitions:** 200ms ease
- **Grid:** 12-column, max-width 1200px
- **Spacing scale:** 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96)

## Components

### Primary Button
- Background: `--ff-accent`
- Text: `#ffffff`
- Padding: 14px 28px
- Border-radius: 12px
- Hover: `--ff-accent-hover`, scale(1.02)
- Optional: small paw icon before text

### Secondary Button
- Background: transparent
- Border: 2px solid `--ff-accent`
- Text: `--ff-accent`
- Hover: `--ff-accent-muted`

### Cards
- Background: `--ff-bg-secondary`
- Border: 1px solid `#ffe0b2` (warm border)
- Border-radius: 16px
- Hover: subtle lift (`translateY(-2px)`)

### Safety Badge
- Background: `--ff-danger` at 10% opacity
- Text: `--ff-danger`
- Border-radius: 20px (pill shape)
- Padding: 4px 12px
- Icon: ⚠️ or 🚫

### Breed Tag
- Background: `--ff-accent-muted`
- Text: `--ff-accent`
- Border-radius: 20px
- Padding: 4px 12px
- Size: small (0.75rem)

## Favicon
- Text-based: "FF" in `--ff-accent` on `--ff-bg-primary` background
- Format: SVG (scalable) + PNG fallback
- Sizes: 16x16, 32x32, 180x180 (apple-touch)

## Mood
> "A friendly neighborhood pet store where the staff actually owns pets and will tell you when something is overpriced garbage."
> 
> Think: Warm cream backgrounds. Rounded corners everywhere. Forest green accents that feel natural and safe. Playful but not childish. Trust through honesty and real pet stories, not clinical reviews.
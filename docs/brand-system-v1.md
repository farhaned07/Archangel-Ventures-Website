# ARCHANGEL Brand System v1.0

Status: **LOCKED — October 2026**

This is the source of truth for ARCHANGEL. The identity should make the company feel like an established technology institution: precise, quiet, capable and globally credible. It must never drift into generic AI-startup styling.

## 1. Brand idea

**ARCHANGEL**  
**AI Transformation**  
**Make AI useful at work.**

Archangel works with organisations to identify expensive work, redesign how it operates, build AI-enabled systems, and measure the resulting business impact.

The visual system should feel like the intersection of advanced engineering, architecture, private intelligence, institutional consulting and world-class product design.

## 2. Logo

Primary wordmark: **ΛRCHΛNGEL**

Rules:
- Preserve the current geometry, proportions and core character exactly.
- Never redraw, round, stretch, condense, italicise, outline or add effects.
- Never place inside a decorative badge.
- Default applications are black on warm white and warm white on black.
- Small-space monogram is **Λ** only.
- Minimum clear space around the wordmark: the cap-height of the wordmark.
- Wordmark should feel architectural and deliberate; do not crowd it.

## 3. Colour

### Core
| Token | Hex | Role |
|---|---|---|
| Black | #0A0A0A | Primary institutional field |
| Graphite | #2B2B2B | Secondary dark field |
| Stone | #6B6B6B | Muted information |
| Warm White | #EDEBE6 | Primary light field |
| Aluminium | #C9C9C9 | Technical/material accent |

### Secondary material tones
Concrete #A5A29C, Paper #DEDBD4, White #F7F5F0.

Use colour structurally, not decoratively. Most compositions should be 80–100% neutral. No neon, blue/purple AI gradients, bright green, glowing accents or chrome-futurist colour.

## 4. Typography

Primary family: **Inter**, using the repository's local font files.

- Display / H1: 400, very large, compact leading, -5% to -6.5% tracking.
- H2: 400, compact leading, -4% to -5.5% tracking.
- Body: 400, generous 1.6–1.7 line-height.
- Labels / metadata: 500, uppercase, 10–12px, 12–14% tracking.
- Semibold is reserved for critical information, never for visual noise.

Typography is the dominant graphic element. Prefer a strong sentence over icons.

## 5. Grid and spacing

- Maximum content width: 1520px.
- 12-column desktop grid, 4-column mobile grid.
- Responsive gutters: 20–64px.
- Major sections should have 96–192px vertical breathing room on desktop.
- Use thin 1px rules to organise information.
- Keep alignment strict; intentional asymmetry is allowed only inside the grid.
- Avoid rounded-card mosaics and SaaS dashboards as a page-level composition.

## 6. Material language

Approved materials:
- suede
- warm uncoated paper
- matte black stock
- brushed aluminium
- concrete / stone
- low-reflective glass

### Suede
Suede is a retained ARCHANGEL signature. It must be subtle and tactile, never fuzzy or fashion-oriented. Use a low-contrast monochrome grain over warm white or black. One dominant suede surface per viewport is usually enough.

In code use:
- `.aa-suede`
- `.aa-suede-dark`

## 7. Photography

Photography is monochrome or extremely desaturated.

Subjects:
- architecture
- concrete, glass and aluminium
- Bangkok skyline used sparingly
- serious work environments
- close material studies
- negative-space compositions

Avoid smiling stock teams, generic office handshakes, holograms, robots, brains, circuit boards and "future city" clichés.

## 8. Graphic language

Graphic elements should look like serious information design:
- thin rules
- numbered sections
- measured line charts
- restrained node maps
- simple workflow diagrams
- sparse labels
- large quiet fields
- tiny technical annotations

Never use decorative circuitry, 3D AI orbs, particle fields, excessive icons or dashboard confetti.

## 9. Interface system

Navigation:
- restrained wordmark left
- concise navigation
- one clear commercial action
- no floating glassmorphism

Buttons:
- rectangular, 2px radius
- 1px borders
- dark or transparent
- no gradients

Cards:
- use only when the information needs a discrete container
- prefer borders, spacing and typography over shadows
- shadows reserved for realistic paper/object mockups

Motion:
- short, calm and functional
- 180–420ms
- no parallax spectacle, bouncing or glowing hover states

## 10. Brand voice

ARCHANGEL speaks in short, concrete language.

Preferred:
- "Make AI useful at work."
- "Identify expensive work."
- "Redesign how it operates."
- "Build AI-enabled systems."
- "Measure business impact."

Avoid:
- "revolutionary"
- "cutting-edge"
- "disruptive"
- "unlock the power of AI"
- "next-generation"
- inflated claims without evidence

## 11. Application hierarchy

Priority order:
1. Website
2. Capability brief and proposals
3. Presentation system
4. LinkedIn/company identity
5. Executive stationery
6. Access cards and workplace applications
7. Environmental signage
8. Workstation and object branding

Every application should feel like it came from one institutional system, not a separate campaign.

## 12. Prohibited drift

Do not introduce:
- neon
- purple/blue gradients
- bright green accents
- cyberpunk
- robots / brains / circuit patterns
- crypto visual language
- playful SaaS illustrations
- rounded pill-heavy UI
- glossy luxury motifs
- excessive icons
- fake futuristic text
- distorted logo applications

## 13. Code source of truth

The implementation tokens live in:
- `src/app/brand-system.css`
- `src/components/brand/BrandMark.tsx`

Future visual work must reuse these tokens before creating new values.

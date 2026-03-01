import os

def redesign_css():
    path = os.path.join('frontend', 'src', 'styles.css')
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Core Prohed Palette Shifts
    content = content.replace('--clr-primary: #a1c4fd;', '--clr-primary: #1e5fba;')
    content = content.replace('--clr-primary-dark: #8eb1ea;', '--clr-primary-dark: #154c96;')
    content = content.replace('--clr-primary-glow: rgba(161, 196, 253, 0.5);', '--clr-primary-glow: rgba(30, 95, 186, 0.3);')
    content = content.replace('--clr-secondary: #c2e9fb;', '--clr-secondary: #8a4cdb;')
    content = content.replace('--clr-secondary-glow: rgba(194, 233, 251, 0.5);', '--clr-secondary-glow: rgba(138, 76, 219, 0.3);')
    content = content.replace('--clr-accent: #ffb6c1;', '--clr-accent: #5e17eb;')
    
    # Text shifts for sharp white corporate look
    content = content.replace('--clr-text-main: #2d3748;', '--clr-text-main: #1f2937;')
    content = content.replace('--clr-text-muted: #718096;', '--clr-text-muted: #6b7280;')

    # Prohed uses very pill shaped buttons and clean rounded cards, no glass borders
    content = content.replace('--radius-sm: 0.5rem;', '--radius-sm: 0.5rem;')
    content = content.replace('--radius-md: 1rem;', '--radius-md: 1rem;')
    content = content.replace('--radius-lg: 1.5rem;', '--radius-lg: 1rem;') # slightly sharper cards
    content = content.replace('--radius-xl: 2rem;', '--radius-xl: 1.5rem;')

    # Button tweaks - highly rounded pills
    content = content.replace('border-radius: var(--radius-sm);', 'border-radius: 50px;')
    content = content.replace('border-radius: var(--radius-md);', 'border-radius: 50px;')
    content = content.replace('.btn-primary {\n  background: var(--grad-primary);', '.btn-primary {\n  background: linear-gradient(to right, #1e5fba, #8a4cdb); /* Prohed linear gradient */\n  border-radius: 50px;')
    
    # Shadows - soft dropdowns instead of glows
    content = content.replace('box-shadow: 0 4px 15px var(--clr-primary-glow)', 'box-shadow: 0 4px 15px rgba(0,0,0,0.1)')
    content = content.replace('box-shadow: 0 8px 25px var(--clr-primary-glow)', 'box-shadow: 0 8px 25px rgba(0,0,0,0.15)')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

redesign_css()

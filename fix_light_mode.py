import os

path = os.path.join('frontend', 'src', 'styles-rest.css')
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacing direct 'white' colors that were for dark mode
    content = content.replace('color: white !important;', 'color: var(--clr-text-main) !important;')
    content = content.replace('color: white;', 'color: var(--clr-text-main);')
    content = content.replace('color: #e2e8f0;', 'color: var(--clr-text-muted);')
    content = content.replace('color: rgba(255, 255, 255, 0.4);', 'color: var(--clr-text-muted);')
    
    # Shadows for blue colors should probably use primary glow
    content = content.replace('rgba(59, 130, 246, 0.1)', 'var(--clr-primary-glow)')
    content = content.replace('rgba(59, 130, 246, 0.15)', 'var(--clr-primary-glow)')
    content = content.replace('rgba(59, 130, 246, 0.2)', 'var(--clr-primary-glow)')
    content = content.replace('rgba(59, 130, 246, 0.3)', 'var(--clr-primary-glow)')
    content = content.replace('rgba(59, 130, 246, 0.5)', 'var(--clr-primary-glow)')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

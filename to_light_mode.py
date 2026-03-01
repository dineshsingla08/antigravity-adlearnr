import os
import re

def update_css():
    for filename in ['styles.css', 'styles-rest.css']:
        path = os.path.join('frontend', 'src', filename)
        if not os.path.exists(path): continue
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update root variables
        content = content.replace('--clr-bg-dark: #121212;', '--clr-bg-dark: #ffffff;')
        content = content.replace('--clr-bg-darker: #050505;', '--clr-bg-darker: #f8f9fa;')
        content = content.replace('--clr-bg-card: rgba(20, 20, 20, 0.6);', '--clr-bg-card: rgba(255, 255, 255, 0.6);')
        content = content.replace('--clr-bg-card-hover: rgba(40, 40, 40, 0.9);', '--clr-bg-card-hover: rgba(245, 245, 245, 0.9);')
        
        content = content.replace('--clr-text-main: #ffffff;', '--clr-text-main: #000000;')
        content = content.replace('--clr-text-muted: #a0a0a0;', '--clr-text-muted: #4b5563;')
        
        # Replace borders
        content = content.replace('--border-glass: 1px solid rgba(255, 255, 255, 0.08);', '--border-glass: 1px solid rgba(0, 0, 0, 0.08);')
        content = content.replace('--border-glass-light: 1px solid rgba(255, 255, 255, 0.15);', '--border-glass-light: 1px solid rgba(0, 0, 0, 0.15);')

        # Replace hardcoded dark colors
        content = content.replace('rgba(5, 11, 20, 0.85)', 'rgba(255, 255, 255, 0.85)')
        content = content.replace('rgba(2, 6, 23, 0.98)', 'rgba(240, 240, 240, 0.98)')
        content = content.replace('rgba(15, 23, 42, 0.7)', 'rgba(250, 250, 250, 0.7)')
        content = content.replace('rgba(15, 23, 42, 0.8)', 'rgba(245, 245, 245, 0.8)')
        content = content.replace('rgba(15, 23, 42, 0.9)', 'rgba(250, 250, 250, 0.9)')
        content = content.replace('rgba(30, 41, 59, 0.8)', 'rgba(255, 255, 255, 0.8)')
        content = content.replace('rgba(30, 41, 59, 0.9)', 'rgba(255, 255, 255, 0.9)')
        content = content.replace('rgba(30, 41, 59, 0.95)', 'rgba(255, 255, 255, 0.95)')
        content = content.replace('rgba(15, 23, 42, 0.95)', 'rgba(245, 245, 245, 0.95)')
        content = content.replace('rgba(15, 23, 42, 0.98)', 'rgba(240, 240, 240, 0.98)')
        content = content.replace('rgba(2, 6, 23, 0.6)', 'rgba(255, 255, 255, 0.6)')
        content = content.replace('rgba(2, 6, 23, 0.5)', 'rgba(255, 255, 255, 0.5)')
        content = content.replace('rgba(15, 23, 42, 0.6)', 'rgba(250, 250, 250, 0.6)')
        content = content.replace('rgba(15, 23, 42, 0.4)', 'rgba(245, 245, 245, 0.4)')
        content = content.replace('rgba(255, 255, 255, 0.05)', 'rgba(0, 0, 0, 0.05)')
        content = content.replace('rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)')
        content = content.replace('rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)')
        content = content.replace('rgba(255, 255, 255, 0.3)', 'rgba(0, 0, 0, 0.3)')
        content = content.replace('rgba(255, 255, 255, 0.15)', 'rgba(0, 0, 0, 0.15)')
        content = content.replace('#020617', '#f1f5f9')
        content = content.replace('#0f172a', '#e2e8f0')

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

update_css()

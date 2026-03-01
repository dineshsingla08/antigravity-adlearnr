import os

def update_services_css():
    path = os.path.join('frontend', 'src', 'styles-rest.css')
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Changing specific icon and card styles for Prohed look
    content = content.replace('.service-icon {\n    width: 64px;\n    height: 64px;\n    border-radius: 16px;', '.service-icon {\n    width: 80px;\n    height: 80px;\n    border-radius: 20px;')
    content = content.replace('background: rgba(0, 0, 0, 0.05);\n    display: flex;', 'background: linear-gradient(135deg, rgba(30,95,186,0.1), rgba(138,76,219,0.1));\n    display: flex;')

    # Fix border lines
    content = content.replace('border: var(--border-glass-light);', '/* border: none */')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

update_services_css()

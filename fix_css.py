import os

path = os.path.join('frontend', 'src', 'styles-rest.css')
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# find the @media (max-width: 768px) block end
idx = content.find('@media (max-width: 768px)')
if idx != -1:
    end_idx = content.find('}', content.find('}', idx) + 1)
    if end_idx != -1:
        # keep everything up to this closing brace
        content = content[:end_idx + 1] + '\n\n/* Responsive forms */\n@media (max-width: 640px) {\n    .form-row {\n        grid-template-columns: 1fr !important;\n    }\n}\n'
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

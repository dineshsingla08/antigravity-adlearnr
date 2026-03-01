import urllib.request
import re

url = "https://www.youtube.com/@Adlearnr"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'<meta property="og:image" content="(.*?)">', html)
    if match:
        with open('logo.txt', 'w', encoding='utf-8') as f:
            f.write(match.group(1))
    else:
        with open('logo.txt', 'w', encoding='utf-8') as f:
            f.write("Not found")
except Exception as e:
    with open('logo.txt', 'w', encoding='utf-8') as f:
        f.write(str(e))

import re

with open('app/page.js', 'r') as f:
    content = f.read()

# We want to comment out the objects in the array from id 5 to 8.
# And rename id 3 to Adani Embrace.

# 1. Rename Adani Elysium Novus to Adani Embrace
content = content.replace("title: 'Adani Elysium Novus'", "title: 'Adani Embrace'")
content = content.replace("slug: 'adani-elysium-novus'", "slug: 'adani-embrace'")

# 2. Comment out id 5 to 8.
# We will use regex to find { id: 5 ... }, { id: 6 ... }, etc and comment them out.

def comment_out_project(match):
    return "  /*\n" + match.group(0) + "\n  */"

# The pattern looks for { id: X, ... },
pattern = r"  \{\s+id: [5678],[\s\S]*?\}(?:,|(?=\n\]))"

content = re.sub(pattern, comment_out_project, content)

with open('app/page.js', 'w') as f:
    f.write(content)

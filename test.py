import requests
from bs4 import BeautifulSoup
import json

url = "https://towardsdatascience.com/latest"
url1 = "https://medium.com/the-mansion/latest"


resp = requests.get(url1)
soup = BeautifulSoup(resp.content.decode("utf-8"), "html.parser")


# script = soup.find_all('script')[10].string.strip()[31:-7]



script = soup.find_all("script")[10].string.strip()[31:-8].replace("\n","")
script = script.replace("\\x3c50ms", '')


# with open("newfile.txt", "w", encoding="utf-8") as f:
#     f.writelines(script)

# print(script)
# .replace("-\x3e", "|")
# encode = script.encode('raw_unicode_escape')
# decode = encode.decode("utf-8")
data = json.loads(script)

followerCount = 

for i in data["references"]["Collection"][0]:
    print(i)

# print(data)
# print(script)
# print(resp.text)
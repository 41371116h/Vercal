#import request以及Beautifulsoup模組
import requests  
from bs4 import BeautifulSoup

# 建立連線
rs = requests.session()

# 開啟檔案用於寫入
file = open("cnyes_news.txt", mode="w", encoding="utf-8")

# 設定起始變數
base_url = 'https://news.cnyes.com/news/cat/headline?page='
page = 1  # 初始頁面設為1
article_count = 0  # 計算抓取的文章數 
max_articles = 300 # 設定最大抓取頁數(300頁)

while article_count < max_articles:
    print(f"抓取第 {page} 頁新聞...")#一個page有30篇文章，所以總共會抓取10頁
    res = rs.get(base_url + str(page)) #取得資料(因為page會變，所以要使用變數來記錄)
    soup = BeautifulSoup(res.text, 'html.parser')   #將抓回的HTML頁面傳入BeautifulSoup，使用html.parser解析(翻譯人員)
    
    # 找到每頁的新聞標題與連結
    div_tags = soup.find_all('p', {'class': 'list-title t2a6dmk'})#尋找class="list-title t2a6dmk"的p標籤 (一開始寫發現包在div class="c1buaxct"裡面，但後來發現<div> -> <p> -> <a>，如果使用p標籤的話會抓取比較快)
    if not div_tags:  # 如果該頁無內容，則跳出迴圈
        print("沒有更多新聞，結束抓取。")
        break
    
    for div_tag in div_tags:
        a_tag = div_tag.find('a')  #如果標題包含a標籤(沒有被刪除)，印出來
        if a_tag is not None:  #將不要的空白清除
            article_count += 1 
            title = a_tag.text.strip()
            file.write(f"文章編號: {article_count}\n")
            file.write(f"標題: {title}\n") #寫入資料，並將標題前增加"標題"
            
            
            # 抓取內文
            article_url = 'https://news.cnyes.com' + a_tag.get('href') #原本的連結加上每篇文章後面不一樣的部分
            res2 = rs.get(article_url) #取得內文資料
            soup2 = BeautifulSoup(res2.text, 'html.parser')
            
            # 解析內文
            main_content = soup2.find(id="article-container") #內文都在id="article-container"裡面
            if main_content:
                content = main_content.text.strip() #將不要的空白清除
                file.write(f"內文: {content}\n\n") #寫入資料，並將標題前增加"內文"
            else:
                file.write("內文: 無法取得文章內容。\n\n")
            
            # 達到最大數量，結束抓取
            if article_count >= max_articles:
                print("達到最大抓取文章數，結束抓取。")
                break
    page += 1  # 前往下一頁

# 關閉檔案
file.close()
print("新聞爬取完成，資料已儲存到 cnyes_news.txt")

from bs4 import BeautifulSoup
papers = BeautifulSoup(open("_site/generate_selected_papers.html").read())
pub_html = papers.body.article.find(id="pub_selected_papers").prettify()
f = open('_includes/selected_papers_cache.html', 'w')
f.write(pub_html)
f.close()

from bs4 import BeautifulSoup
papers = BeautifulSoup(open("_site/generate_all_papers.html").read())
pub_html = papers.body.article.find(id="pub_all_papers").prettify()
f = open('_includes/all_papers_cache.html', 'w')
f.write(pub_html)
f.close()


'use strict';
{
/* 
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); 
*/

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }
  
    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement (with plus):' + clickedElement);
    clickedElement.classList.add('active');
  
    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  
    /* [DONE] get 'href' attribute from the clicked link */

    const linkSelector = clickedElement.getAttribute('href');
    console.log(linkSelector)
  
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(linkSelector);
    console.log(targetArticle);
  
    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');
    console.log('clickedElement:', targetArticle);
    
  }
  



/*  generating a list of titles */


    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

    function generateTitleLinks(){

  /* remove contents of titleList */
   
  const clearTitleList = function(){
    document.querySelector('.titles').innerHTML = '';
  }
  clearTitleList();

  /* for each article */
  const articles = document.querySelectorAll('.post');

    let html = '';

    for(let article of articles){
        
    /* get the article id */

    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */

    const articleTitle = article.querySelector('.post-title').innerHTML;
    console.log(articleTitle);

    /* get the title from the title element */

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */
   
    html = html + linkHTML;

    const titlesWrapper = document.querySelector('.titles');
        titlesWrapper.insertAdjacentHTML('beforeend', linkHTML);

    }

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
  }

  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }


}
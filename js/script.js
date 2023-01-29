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
    console.log(linkSelector);
  
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(linkSelector);
    console.log(targetArticle);
  
    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
    console.log('clickedElement:', targetArticle);
    
  };
  



  /* [DONE]  generating a list of titles */


  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post .post-author';

  const generateTitleLinks = function(customSelector = ''){

    /* [DONE] remove contents of titleList */
   
    const clearTitleList = function(){
      document.querySelector(optTitleListSelector).innerHTML = '';
    };
    
    clearTitleList();

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for(let article of articles){
        
      /* [DONE]  get the article id */

      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* [DONE]  find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);

      /* [DONE] get the title from the title element */

      /* [DONE] create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* [DONE] insert link into titleList */
    
      html = html + linkHTML;

      const titlesWrapper = document.querySelector(optTitleListSelector);
      titlesWrapper.insertAdjacentHTML('beforeend', linkHTML);

      const links = document.querySelectorAll('.titles a');
      console.log(links);
      
      console.log(customSelector);
      console.log(articles);
    }

    const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
    
  };

  generateTitleLinks();


  


  const generateTags = function(){
    /* [DONE] find all articles */
    
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* [DONE] START LOOP: for every article: */

    for(let article of articles){
  
      /* [DONE] find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector).innerHTML = '';
      console.log(tagsWrapper);
  
      /* [DONE] make html variable with empty string */
      
      let html = '';

      /* [DONE] get tags from data-tags attribute */
      
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* [DONE] split tags into array */
      
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* [DONE] START LOOP: for each tag */

      for(let tag of articleTagsArray){
  
        /* [DONE] generate HTML of the link */
        
        const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        console.log(tagHTML);

        /* [DONE] add generated code to html variable */
        
        html = tagHTML + ' ';
        const tagsWrapper = article.querySelector(optArticleTagsSelector);
        tagsWrapper.insertAdjacentHTML('beforeend', html);
        console.log (tagsWrapper)

      /* [DONE] END LOOP: for each tag */
      }
      
      /* [DONE] insert HTML of all the links into the tags wrapper */
      
     
  
    /* [DONE]  END LOOP: for every article: */
    }
  };
  
  generateTags();


  const tagClickHandler = function(event){
    /* [DONE]  prevent default action for this event */

    event.preventDefault();
  
    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    
    // const href = clickedElement.querySelectorAll('href');
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  
    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* [DONE] find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);
  
    /* [DONE] START LOOP: for each active tag link */

    for(let activeTag of activeTags) {
  
      /* [DONE] remove class active */
      activeTag.classList.remove('active');

      /* [DONE] END LOOP: for each active tag link */

    }
  
    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

    const allTags = document.querySelectorAll('a[href="' + href + '"]');
    console.log(allTags);
  
    /* [DONE] START LOOP: for each found tag link */

    for( let allTag of allTags){

      /* [DONE] add class active */

      allTag.classList.add('active');
      console.log(allTag);
  
    /* [DONE] END LOOP: for each found tag link */
    }
  
    /* [DONE] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');

  };
  

  const addClickListenersToTags = function(){
    /* [DONE] find all links to tags */

    const tagLinks = document.querySelectorAll('.post-tags .list a');
    console.log(tagLinks);
  
    /* [DONE] START LOOP: for each link */

    for(let tagLink of tagLinks){

      /* [DONE] add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);
      console.log(tagLink);
  
      /* [DONE] END LOOP: for each link */

    }

  };

  addClickListenersToTags();
  
  const generateAuthors = function(){

    /* [DONE] find all articles */
  
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
  
    /* [DONE] START LOOP: for every article: */
  
    for(let article of articles) {
  
      /* [DONE] find author wrapper */
  
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      console.log(authorWrapper);
  
      /* [DONE] make html variable with empty string */
  
      let html = '';
  
      /* [DONE] get tags from data-author attribute */
  
      const articleAuthor = article.getAttribute('data-author');
      console.log(articleAuthor);
  
      /* [DONE] generate HTML of the link */
  
      const authorHTML = '<p class="post-author"><a href="#author-' + articleAuthor + '">' + articleAuthor + '</a></p>';
      console.log(authorHTML);
  
      /* [DONE] add generated code to html variable */
  
      html = html + authorHTML;
      console.log(html);
  
      /* [DONE] insert HTML of all the links into the tags wrapper */
  
      authorWrapper.innerHTML = html;
  
      /* [DONE] END LOOP: for every article: */
    }
  };

  generateAuthors();

  const authorClickHandler = function(event){

    /* prevent default action for this event */
  
    event.preventDefault();
  
    /* make new constant named "clickedElement" and give it the value of "this" */
  
    const clickedElement = this;
    console.log(clickedElement);
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
  
    const href = clickedElement.getAttribute('href');
    console.log(href);
  
    /* make a new constant "author" and extract author from the "href" constant */
  
    const author = href.replace('#author-', '');
    console.log(author);
  
    /* find all tag links with class active */
  
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(activeAuthors);
  
    /* START LOOP: for each active tag link */
  
    for(let activeAuthor of activeAuthors){
  
      /* remove class active */
  
      activeAuthor.classList.remove('active');
  
      /* END LOOP: for each active tag link */
  
    }
  
    /* find all author links with "href" attribute equal to the "href" constant */
  
    const allAuthors = document.querySelectorAll('a[href="' + href + '"]');
    console.log(allAuthors);
  
    /*  START LOOP: for each found author link */
  
    for(let singleAuthor of allAuthors){
  
      /*  add class active */
  
      singleAuthor.classList.add('active');
      console.log(singleAuthor);
  
      /*  END LOOP: for each found author link */
  
    }
  
    /* execute function "generateTitleLinks" with article selector as argument */
  
    generateTitleLinks('[data-author="' + author + '"]');
  };
  
  
  
  const addClickListenersToAuthor = function(){
  
    /* find all links to tags */
  
    const authorLinks = document.querySelectorAll('.post-author a');
    console.log(authorLinks);
  
    /* START LOOP: for each link */
  
    for(let authorLink of authorLinks){
  
      /* add tagClickHandler as event listener for that link */
  
      authorLink.addEventListener('click', authorClickHandler);
      console.log(authorLink);
  
      /* END LOOP: for each link */
  
    }
  
  };
  
  addClickListenersToAuthor();

  

}
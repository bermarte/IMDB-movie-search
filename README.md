# IMDB movie search

For this week each of us is free to carry out some small project chosen (it could be a little tutorial or redoing the previous assignment, for example), in couple or individually; a bit like we did for the Wes bos's project. At the end we will put them together in the group issue.

I decided to follow [this tutorial](https://www.youtube.com/watch?v=U0btOGPwrIY) whch is available also on GitHub: [here](https://github.com/w3cj/imdb-scraper-server) you can find the code for the backend and [here](https://github.com/w3cj/imdb-scraper-client) the frontend.


<details>
<summary>Steps</summary>
<ul><li>
<a href="/watch?v=U0btOGPwrIY&amp;t=72s">[1:12]</a> introduction</li>
</ul>

##### Set up server folder
<ul>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=222s">[3:57]</a> initilize a node app</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=237s">[4:26]</a> npm install node-fetch</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=266s">[4:26]</a> How to use node-fetch</li>
</ul>

##### Parsing HTML with cheerio
<ul>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=409s">[6:49​]</a> Overview of cheerio</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=438s">[7:18​]</a> Add cheerio to server code</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=459s">[7:39​]</a> Get movie titles and movie posters from IMDB search</li>
</ul>

### Start using express
<ul>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=713s">[11:53​]</a> Format data as JSON</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=784s">[13:04​]</a> Prepare code for modularity</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=852s">[14:12​]</a> Create a basic express app</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=939s">[15:39​]</a> Create node scripts (auto-reload with nodemon)</li>
</ul>

##### Building an API in express
<ul>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=991s">[16:31​]</a></a> Create search route</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1082s">[18:02​]</a></a> Get movie id from IMDB</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1212s">[20:12​]</a> Create movie route</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1399s">[23:19​]</a></a> Get data from IMDB movie page</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1405s">[23:25​]</a> Title</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1599s">[26:39​]</a> MPAA Rating</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1679s">[27:59​]</a> Run time</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1798s">[29:58​]</a> Genres</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1905s">[31:45​]</a> Release date</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=1970s">[32:50​]</a> IMDB rating</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=2020s">[33:40​]</a> Movie poster</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=2224s">[37:04​]</a> Summary</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=2283s">[38:03​]</a> Directors</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=2604s">[43:24​]</a> Writers</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=2812s">[46:52​]</a> Actors</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=2972s">[49:32​]</a> Story line</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3110s">[51:50​]</a> Things to keep in mind when scraping the web</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3190s">[53:10​]</a> Back to getting data from IMDB</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3190s">[53:10​]</a> Try getting budget</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3249s">[54:09​]</a> Production companies</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3466s">[57:46​]</a> Link to trailer (Part I)</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3681s">[1:01:21​]</a> Link to trailer (Part II)</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=3820s">[1:03:40​]</a> Add caching</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4036s">[1:07:16​]</a> Deployment via now</li>
</ul>

##### Create Frontend in Vanilla JS
<ul>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4185s">[1:09:45​]</a> Add CORS to server code</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4271s">[1:11:11​]</a> Create client folder</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4302s">[1:11:42​]</a> Add Bootswatch CDN</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4341s">[1:12:21​]</a> Start styling</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4550s">[1:15:50​]</a> Add search logic</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4738s">[1:18:58​]</a> Show search results on page</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=4984s">[1:23:04​]</a> Create movie page</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=6112s">[1:41:52​]</a> Format date with date-fns</li>
<li><a href="/watch?v=U0btOGPwrIY&amp;t=6364s">[1:46:04​]</a> Review of what we have built today!</li>
</ul>
</details>

---

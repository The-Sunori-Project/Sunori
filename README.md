<div align="center"><a href="https://sunori.org/" target="_blank" rel="noopener nofollow"><h1>Sunori</h1></a></div>

<p align="center">Sunori is a free, unblocked gaming site.</p>

<div align="center"><a href="https://sunori.org/" target="_blank">Main</a>     |     <a href="https://alt.sunori.org/" target="_blank">Mirror</a></div>

## Self Hosting
If the main link is not working properly, you could self-host your own mirror link by following the instructions below.

#### GitHub Pages
1. Click on the fork button at the top right corner to fork this repository.
2. Rename it to `username.github.io` where `username` is your actual GitHub username.
3. In your forked repository, open next.config.ts and change the basepath to '/'
4. Then, go to settings->pages. Change 'source' to 'GitHub Actions' and click save.
5. Your forked mirror version should now be published at the URL shown above.

Note 1: Due to resource linkage, hosting the website at non-root locations like `username.github.io/project` is **not supported** at this moment. If you already have a project hosted at the root location, consider using a custom domain or creating another GitHub account, if using a custom domain change basepath in next.config.ts to the domain.

Note 2: When hosting on github pages you must use actions to deploy our actions deploy workflow builds a static version of Sunori and deploys it.

Note 3 : Always update your mirror website whenever a new version is release.

## Data URL
The code below is a data URL of an embedded Sunori mirror, it can bypass most restrictions set by browser extensions on Chrome and Edge. However it **cannot** be used to bypass external network restriction.

```
Coming soon!
```
Data URLs work in the same way as HTTP(S) or file URLs, they can be opened directly in a new tab. (Just copy and paste the code above into a new tab's address bar and press enter)

## Credits
[Nettleweb](https://github.com/nettleweb/): Used their README from their repo 'Nettlweb' as a template.<br>
[tw31122007](https://github.com/tw31122007/): Some html games found in their template repo 'HTML-Games-V2'

## Issues
if you have an addition suggestion or a complaint make an issue

import { config } from './config.js';
import { writeFile } from 'fs';
import { head, foot } from './elem.js';

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
    ${head(true, config.blogName, config.description)}
    <body>
        <header>
            <h1>${config.blogName}</h1>
            <p>This website is written by ${config.authorName}</a>, ${config.authorDescription}.</p>
        </header>
        <main>
        ${posts
            .map(
                post => `<ul><li><a href="./${post.path}/index.html">${post.attributes.title}</a></li></ul>`
              )
            .join("")
        }
        </main>
        ${foot()}
    </body>
</html>`;

const addHomePage = posts => {
    writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
        if (e) throw e;
        console.log(`index.html was created successfully`);
    });
};

export { addHomePage };
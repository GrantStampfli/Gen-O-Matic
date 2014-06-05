Gen-O-Matic
===========

A static site generator

Gen-O-Matic requires you to install Commander. Information on this can be found here, https://www.npmjs.org/package/commander . Or, just run "npm install".

To use Gen-O-Matic, you must have the contents of the website you hope to generate in files named as you want those files to be named. For example, a file named "index.html" with the content of "I'm super awesome content for the index page!". These files must be in a directory called pages.

You must also have an empty directory that you hope to populate with the generated website.

To run Gen-O-Matic, you must give the command "gen-o-matic" followed by the file path of your content pages and then the file path of the directory you wish to generate files into.

For example,
./gen-o-matic ~/cool_stuff/my_sites_contents/ ~/even_cooler_stuff/my_new_website_with_content/

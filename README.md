To setup project on server
1. Take clone of digitalshelf
2. cd  digitalshelf
3. cd themes
4. take clone of theme
5. cd <theme>
6. /bin/bash install-theme.sh


DO NOT MANUALLY UPDATE ANY FILE IN THEMES FOLDER MANUALLY



To update a theme

1. Make changes in file in digitalshelf eg:  digitalshelf/styles/About.module.css
2. cd themes/skyline
3. /bin/bash update-theme.sh
4. git add / git commit / git push  (theme repository)

To uninstall a theme

1. cd themes/skyline
2. /bin/bash uninstall-theme.sh


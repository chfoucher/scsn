#!/bin/sh
ftp -i ftp.cluster029.hosting.ovh.net <<EOF
cd www
lcd docs
put index.html
put fete.html
put affiche_fete_3_juillet.png
lcd css
cd css
put style.css
bye
EOF

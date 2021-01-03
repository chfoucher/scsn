#!/bin/sh
ftp -i ftp.cluster029.hosting.ovh.net <<EOF
cd www
lcd docs
put index.html
lcd css
cd css
put style.css
bye
EOF

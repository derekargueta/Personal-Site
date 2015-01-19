#!/bin/bash
source ~/.bashrc
nvm use 0.10
forever start ~/webapps/my_site_2/bin/www

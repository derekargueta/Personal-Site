#!/bin/bash
source ~/.bashrc
nvm use 0.10
export ENV=prod
forever start ~/webapps/my_site_2/bin/www

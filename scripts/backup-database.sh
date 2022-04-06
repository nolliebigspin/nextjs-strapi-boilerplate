#!bin/bash

docker exec nextjs-strapi-boilerplate_devcontainer_db_1 /usr/bin/mysqldump -u root --password=nolliebigspin nolliebigspin > mysql-backup.sql
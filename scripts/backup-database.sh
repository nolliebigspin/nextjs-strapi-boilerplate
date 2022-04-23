#!bin/bash

docker exec nextjs-strapi-boilerplate_devcontainer_db_1 /usr/bin/mysqldump -u root --password=strapi strapi > mysql-backup.sql

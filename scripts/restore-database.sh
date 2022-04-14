#!bin/bash

cat mysql-backup.sql | docker exec -i nextjs-strapi-boilerplate_devcontainer_db_1 /usr/bin/mysql -u root --password=strapi strapi
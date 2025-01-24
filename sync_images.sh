#!/bin/bash

# Set variables
GIT_REPO_PATH="/var/www/Samaro"
UPLOAD_FOLDER="/var/www/uploads"
SOURCE_FOLDER="public/uploads"

# Navigate to the git repository
cd $GIT_REPO_PATH

# Pull the latest changes
git pull

# Create the destination directory if it doesn't exist
mkdir -p "$UPLOAD_FOLDER"

# Use rsync to copy files from the source folder to the upload folder
# The trailing slash on the source path is important to copy contents, not the directory itself
rsync -av "$GIT_REPO_PATH/$SOURCE_FOLDER/" "$UPLOAD_FOLDER/"

# Set correct permissions
chown -R nginx:nginx "$UPLOAD_FOLDER"
find "$UPLOAD_FOLDER" -type d -exec chmod 755 {} \;
find "$UPLOAD_FOLDER" -type f -exec chmod 644 {} \;

echo "Image sync completed."

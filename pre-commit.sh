#!/bin/sh
if [ "install" = "$1" ]; then
  mkdir -p .git/hooks 
  rm -f .git/hooks/pre-commit
  ln -s ../../pre-commit.sh .git/hooks/pre-commit
else
  grunt
  git add
fi

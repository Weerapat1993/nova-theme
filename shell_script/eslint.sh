#!/bin/bash

#The following line will print no of argument provided to script
USAGE="npm run eslint <eslint_config_name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

if [ "$#" -lt "1" ]
then
  echo "\n${red} error: missing required argument \`eslint_config_name\`\n"
  echo "${green} --- Helper ---";
  echo " usage : ${USAGE}${reset}\n";
else
  npm i -D babel-eslint eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-$1

  echo "${green}please add config in file package.json ${reset} \n"
  echo "  \"eslintConfig\": {"
  echo "    \"extends\": \"$1\""
  echo "  }\n"
fi

rm -rf ./common/dist
mkdir -p "common/dist"
yarn install --ignore-engines
yarn build-common
rm -rf ./node_modules
yarn install --ignore-engines
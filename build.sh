# Generate posts and homepage
node generate.sh

# Run development server
npm run --prefix gghb/ build

# Get build
rm -rf out &>/dev/null
mv gghb/out .
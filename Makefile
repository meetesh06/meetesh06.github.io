build: config.js posts/*/*.md pages/*.js
		git submodule update --init --recursive
		cd easyNextBlog/
		npm i
		cd ..
		node generate.js
		npm run --prefix easyNextBlog/ build

run: 
	python -m http.server --directory out 3001
clean:
	rm -rf out

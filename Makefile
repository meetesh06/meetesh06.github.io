build: config.js posts/*/*.md pages/*.js
		git submodule update --init --recursive
		cd easyNextBlog/ && npm i
		node generate.js
		npm run --prefix easyNextBlog/ build
		rm -rf out
		mv easyNextBlog/out .


run: 
	python -m http.server --directory out 3001
clean:
	rm -rf out

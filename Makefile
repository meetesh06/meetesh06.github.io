build: config.js posts/*/*.md pages/*.js
		git submodule update --init --recursive
		cd easyNextBlog/ && git stash
		cd easyNextBlog/ && git checkout main
		cd easyNextBlog/ && git stash
		cd easyNextBlog/ && npm i
		node generate.js
		npm run --prefix easyNextBlog/ build
		rm -rf out
		mv easyNextBlog/out .
		cd easyNextBlog/ && git stash

dev: config.js posts/*/*.md pages/*.js
		git submodule update --init --recursive
		cd easyNextBlog/ && git stash
		cd easyNextBlog/ && git checkout main
		cd easyNextBlog/ && git stash
		cd easyNextBlog/ && npm i
		node generate.js
		npm run --prefix easyNextBlog/ dev
		rm -rf out
		mv easyNextBlog/out .
		cd easyNextBlog/ && git stash

run: 
	python -m http.server --directory out 3001
clean:
	rm -rf out

ifdef OS
	RM = del /Q
	MV = move
else
	ifeq ($(shell uname), Linux)
		RM = rm -rf
		MV = mv
	endif
endif


build: config.js posts/*/*.md pages/*.js
		git submodule update --init --recursive
		cd easyNextBlog/ && git stash
		cd easyNextBlog/ && npm i
		node generate.js
		npm run --prefix easyNextBlog/ build
		$(RM) out
		$(MV) easyNextBlog/out .
		cd easyNextBlog/ && git stash

dev: config.js posts/*/*.md pages/*.js
		git submodule update --init --recursive
		cd easyNextBlog/ && git stash
		cd easyNextBlog/ && npm i
		node generate.js
		npm run --prefix easyNextBlog/ dev
		$(RM) out
		$(MV) easyNextBlog/out .
		cd easyNextBlog/ && git stash

run: 
	python -m http.server --directory out 3001
clean:
	${RM} out

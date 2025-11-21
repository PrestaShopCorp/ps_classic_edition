clean-deploy:
	rm -fR vue-app
	rm -f .php-cs-fixer.php
	rm -f phpstan.neon
	rm -f README.md

build-assets:
	cd vue-app && npm ci && npm run build

build-release: build-assets clean-deploy

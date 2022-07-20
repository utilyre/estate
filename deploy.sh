#!/usr/bin/env sh

# Store the most recent commit hash for commit message
commit_hash="$(git rev-parse "HEAD")"

# Stash all modifications
[ "$(git stash push --include-untracked)" != "No local changes to save" ]
stashed="$?"

# Build the app
npm run build

(
	cd "dist"

	# Initialize git repo
	git rev-parse --is-inside-work-tree > "/dev/null" && git init
	git branch --force --move "gh-pages"

	# Commit the distribution
	git add --all
	git commit --message="Deploy \`$commit_hash\`"

	# Push to https://utilyre.github.io/estate
	[ "$(git ls-remote --get-url "origin")" = "origin" ] && git remote add "origin" "git@github.com:utilyre/estate.git"
	git push --force "origin" "gh-pages"
)

# Bring back the modifications
[ "$stashed" -eq "0" ] && git stash pop

exit 0

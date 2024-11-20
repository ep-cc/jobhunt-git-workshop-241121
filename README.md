# Jobhunt git workshop | 24.11.21
## Practicing branches and pull requests

### Setup

To set a pre-commit hook that prevents directly to the main branch, add the `pre-commit` file to your `./.git/hooks` folder in the repositroy folder with the following content:

```bash
#!/bin/bash

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "main" ]; then
  echo "You can't commit directly to the main branch"
  exit 1
fi
```

On Linux and Unix machines this file needs to be executable. (`chmod +x .git/hooks/pre-commit`)

### Tasks

- Add a new section to the main `Readme.md` file while on main, and try to commit it. If the hook is added properly, git should refuse to commit to main. You can create a new branch to commit the change and merge it on GitHub in a pull request.
- Add a new endpoint (`/api/<yourname>-info`) to the server using a feature branch and a GitHub pull requests. Return some text about yourself in this endpoint.

# Jobhunt git workshop | 24.11.21
## Practicing branches and pull requests

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

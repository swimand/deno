# Example GitHub Action Workflow

This is an example of a GitHub Action workflow that sets up Deno and runs tests.

```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Deno
        uses: denoland/setup-deno@v2
        with:
          deno-version: v1.x

      - name: Run tests
        run: deno test
```

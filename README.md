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

## Upgrade to setup-deno version 2

The GitHub Action workflow has been upgraded to use `setup-deno@v2`. This upgrade ensures compatibility with the latest features and improvements in Deno.

To upgrade your existing workflow, update the `uses` field to `denoland/setup-deno@v2` and specify the desired Deno version. Here is an example:

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
          deno-version: v2.x

      - name: Run tests
        run: deno test
```

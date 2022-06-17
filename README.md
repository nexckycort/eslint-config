# eslint-config

### Packages

- [`eslint-config`](https://github.com/nexckycort/eslint-config/tree/main/packages/eslint-config): the base config
- [`eslint-config-react`](https://github.com/nexckycort/eslint-config/tree/main/packages/eslint-config-react): the react config (coming soon)

#### eslint-config

```bash
npm install -D @nexckycort/eslint-config
```

#### eslint-config-react

```bash
npm install -D @nexckycort/eslint-config @nexckycort/eslint-config-react
```

## Usage

Use `extends` in your ESLint config

```json
{
  "extends": "@nexckycort/eslint-config"
}
```

### With react

```json
{
  "extends": ["@nexckycort/eslint-config", "@nexckycort/eslint-config-react"]
}
```

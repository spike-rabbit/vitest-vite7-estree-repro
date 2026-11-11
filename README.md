# VitestTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.6.

## Reproducing the Vitest/Vite declaration error

This project intentionally combines Vitest **5.1.0** with Vite **7.3.6**, which
satisfies Vitest's declared Vite peer dependency range. Declaration checking is
enabled in `tsconfig.spec.json`. The test in `src/vitest-config.spec.ts` imports
`vitest.config.ts` so Angular also checks the `vitest/config` declarations.

```sh
npm ci
npm run typecheck:tests
```

The type check fails with:

```text
node_modules/vitest/dist/chunks/plugin.d.LRFSN46m.d.ts(1,166): error TS2305: Module '"vite"' has no exported member 'ESTree'.
```

The Angular test build reproduces the same error:

```sh
CI=true npm test
```

Vite 7 does not export the `ESTree` type imported by Vitest's declarations.
Skipping declaration checking suppresses the error:

```sh
npm run typecheck:tests -- --skipLibCheck
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

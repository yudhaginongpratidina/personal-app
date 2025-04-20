# BACKEND SERVICE

## GETTING STARTED

```bash
pnpm install
```

### SETUP ENVIRONMENT VARIABLES

```bash
cp .env.example .env
```

### COMMANDS

```bash
pnpm run make       # create a new service
pnpm run delete     # delete a service
pnpm run dev        # start development server
pnpm run test       # run tests
pnpm run start      # start production server
```

### EXAMPLE HOW TO USE MAKE COMMAND OR DELETE COMMAND

```bash
pnpm run make resource <resource-name>
pnpm run make repository <repository-name>
pnpm run make service <service-name>
pnpm run make validation <validation-name>
pnpm run make controller <controller-name>
pnpm run make test <test-name>
```

```bash
pnpm run make resource authentication
pnpm run make resource payment-gateway
```
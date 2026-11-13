# Bake My Cake

Bake My Cake is an NIIT coursework project built with Angular, TypeScript, Angular Material, and JSON Server. It includes a bakery catalog, product search and category filters, an order request form, and a client-side route guard for the demo order list.

## Run locally

Use Node.js 18 and npm for this Angular 16 project.

```sh
npm ci
```

Copy the included seed file to a local data file before starting JSON Server.

```powershell
Copy-Item bake-cake-data/cake.json bake-cake-data/local.json
```

On macOS or Linux, use `cp bake-cake-data/cake.json bake-cake-data/local.json`.

Start the local API in one terminal.

```sh
npx --yes json-server@0.17.4 --watch bake-cake-data/local.json --host 127.0.0.1 --port 3000
```

Start Angular in another terminal.

```sh
npm start
```

Open `http://localhost:4200`. Browse the catalog, submit an order with fictional contact details, then use **View demo order requests** to open the order list. The seed includes an empty order list, and JSON Server writes new orders to the ignored local data file.

This is a local demo. The order-list guard demonstrates Angular routing and provides no server-side access control.

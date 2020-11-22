<!--
titulo: AWS api traducir swapi 
descripcion: Simple api que traduce el servicio swapi con lambada node js

-->
# Deployar api con serverless

```sh
$ serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY
$ sls deploy
```

# Consumir servicio traducir swapi
Api lista  recurso  filtrado por {entidad} 

valores de {entidad} : { "people","planets", "films","species","vehicles","starships"}
```bash 
$ curl  -X GET https://your-api-id.execute-api.your-region.amazonaws.com/dev/swapi-es/{entidad}
```

Validat test unit : validara que el estado de respuesta sea exitoso
```bash 
npm run test-dev
```
# Consumir servicio traducir swapi detalle 
Api lista  recurso  filtrado por {entidad} y {id}
valores de {id} : dato entero 
```bash 
$ curl  -X GET https://your-api-id.execute-api.your-region.amazonaws.com/dev/swapi-es/{entidad}/{id}

```
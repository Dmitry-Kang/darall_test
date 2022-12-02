# Darall test task from Dmitry Kang

## Install dependencies
1.Run commands

```sh
cd .\server\
npm i 
cd ..\client\
npm i
```
2.In server folder create .env file
add 'DATABASE_URL' path:

```sh
DATABASE_URL="postgresql://FROM_DOCKER_POSTGRES_USER:FROM_DOCKER_POSTGRES_PASSWORD@localhost:5432/mydb?schema=public"
```

## Run backend
In server folder

```sh
docker-compose up -d
npm run prisma:migrate
npm run start
```

## Run frontend
In client folder

```sh
npm run serve
```

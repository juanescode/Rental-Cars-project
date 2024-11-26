1. Clonar el proyecto

1.1 dirigite a boton verde Copiar la url de https (copy url to clipboard) 

![{6437064E-0C6F-4458-A91E-3EF6554F8463}](https://github.com/user-attachments/assets/410bcaf1-a77a-44f4-9061-88bbfc49cb60)

   
1.3 dirigirte a tu terminal y colocar el comando git clone (importante!!! tener git instalado) ![{25A3ED18-0FF9-459E-9D59-7684F1C60720}](https://github.com/user-attachments/assets/ae5d1e34-e622-48cf-b641-e253d10761d0)

o descargar directamente 

![{5D6D13BF-29A7-4E51-87CB-75C541582F45}](https://github.com/user-attachments/assets/7c3199f1-bc4c-4f9c-97e1-6bce4d254b9b)


2. Una vez ya clonado en el computador colocar en la terminal del proyecto npm install, para descargar todas las dependencias que necesita el proyecto para ejecutarse

3. Borrar la carpeta prisma

4. Una vez borrada la carpeta prisma, inicializar la base de datos
4.1 colocar en la terminal el comando npx prisma init (despues de eso se creara un .env con una cadena de conexion de prueba)

   ```
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
     relationMode = "prisma"
   }
   ```

   Saldra algo asi parecido a la imagen y colocar el esquema de la base de datos abajo de la imagen:

```
model Car {
  id           String   @id @default(uuid())
  userId       String
  name         String   @db.Text
  cv           String   @db.Text
  transmission String   @db.Text
  people       String   @db.Text
  photo        String   @db.Text
  priceDay     String   @db.Text
  engine       String   @db.Text
  type         String   @db.Text
  isPublish    Boolean?

  orders Order[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Order {
  id String @id @default(uuid())

  carId        String   @db.Text
  carName      String   @db.Text
  userId       String   @db.Text
  orderDate    DateTime @default(now())
  orderEndDate DateTime @default(now())
  status       String   @db.Text
  totalAmount  String   @db.Text

  car Car @relation(fields: [carId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([carId])
  @@index([userId])
}
}
```

4.2 colocar despues en la terminal npx prisma generate (profe no coloco mi cadena de conexion por que es una variable de entorno a neon.tech)

formato de conexion a la base de datos local 

![{AE0939A7-9B90-49EE-864B-3DF5E3A63F67}](https://github.com/user-attachments/assets/669098bd-9cd9-4f1f-8b5e-1e144e57238f)

4.3 colocar despues npx prisma db push y listo 

abajo de la cadena de conexion colocar estas 2 variables de entorno en el .env y con esto ya el proyecto funciona 

```
1. Inicializar clerk(login), para las variables de entorno
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

2. Copiar
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

3. Inicializar en uploadthing(login), para subida de imagenes a la nube
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

4.Usuarios que tienen acceso a la parte de admin, sacar id de clerk, id de cada persona loguada
NEXT_PUBLIC_ADMINISTRATOR_ID=
NEXT_PUBLIC_ADMINISTRATOR_ID1=

```

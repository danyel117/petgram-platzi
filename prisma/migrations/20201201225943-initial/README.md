# Migration `20201201225943-initial`

This migration has been generated by danyel117 at 12/1/2020, 5:59:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL DEFAULT '',
    `name` VARCHAR(191),
UNIQUE INDEX `User.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Category` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `emoji` VARCHAR(191) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Post` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `categoryId` INT NOT NULL,
    `src` VARCHAR(191) NOT NULL,
    `userId` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Like` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `postId` INT NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `Post` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Post` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Like` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Like` ADD FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201201225943-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,43 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User{
+  id Int @default(autoincrement()) @id
+  email   String   @unique
+  password String  @default("")
+  name    String?
+}
+
+model Category{
+  id Int @default(autoincrement()) @id
+  nombre String
+  emoji String
+  cover String
+}
+
+model Post{
+  id Int @default(autoincrement()) @id
+  category Category @relation(fields: [categoryId], references: [id])
+  categoryId Int
+  src String
+  user User @relation(fields: [userId],references:[id])
+  userId Int
+}
+
+model Like{
+  id Int @default(autoincrement()) @id
+  user User @relation(fields: [userId],references:[id])
+  userId Int
+  post Post @relation(fields: [postId],references:[id])
+  postId Int
+  date DateTime @default(now())
+}
```


---
sidebar_position: 2
title: User Management
---
# Configure User Management 

Configure a non-root user, to limit access to the machine. This user will provide access to the minecraft related directories and files, without giving full root access to the server.

## 1. Create a group named `game-admins`.

<details>
  <summary> Expand for Help </summary>

Run the following command to create a group named `game-admins`
```
# groupadd game-admins
```
See `man groupadd` and `groupadd --help` to view additional options.

</details>

## 2. Create a user named `minecraft-admin` that belongs to the group `game-admins`.

<details>
  <summary> Expand for Help </summary>

Run the following command to create a user named `minecraft-admin`, and simultaneously add it to the group named `game-admins`.
```
# useradd -g game-admins minecraft-admin
```

See `man useradd` and `useradd --help` to view additional options.

</details>
<br></br>

:::tip

To verify that the user `minecraft-admin` belongs to the group `game-admins`, run:

```
# id minecraft-admin
```

:::

## 3. Create a password for `minecraft-admin`.

<details markdown="1"><summary>Expand for Help</summary>

```
# passwd minecraft-admin
```
</details>
<br></br>
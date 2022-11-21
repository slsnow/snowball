---
sidebar_position: 3
title: Installing Java Packages
---

# Installing Java Packages

This activity uses **Minecraft Java Edition**. To be able to run the Java based application, we will need to first install the required packages.

The Java Runtime Environment (JRE) is software that allows applications written in the Java programming language to run. For this activity, the popular open source implementation of Java, openJDK, will be used.

As of writing this guide, the latest version of minecraft is version 1.19.1.

## 1 - Use zypper to identify the latest Java openjdk Packages

<details markdown="1">
  <summary>Expand for Help</summary>

```
# zypper se java-*-openjdk
```

<!-- TODO
Link to Topic, Package Mangagement in openSUSE.
-->

:::note

As of this writing, the latest package version was the `java-17-openjdk` package.

:::

</details>

## 2 - Use zypper to install the latest Java openjdk Packages 

Install the `java-17-openjdk` package, with its dependencies.

<details>
  <summary>Expand for Help</summary>

```
# zypper in java-17-openjdk
# java --version
```
:::note

The zypper package manager, like other linux package managers, will automatically resolve package dependencies, based on the repositories that are enabled on the system. 

To see more information about the package, you can run `zypper info <package>`.

:::


<!-- TODO
Link to Topic, Package Mangagement in openSUSE.
-->

---
</details>
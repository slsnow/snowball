---
sidebar_position: 8
title: Files 
---

## Introduction to File Management in Linux

File management is an essential aspect of working with the Linux operating system. It involves creating, modifying, moving, and deleting files and directories to maintain an organized and efficient file system. The Linux file system is structured as a tree, with the root directory ("/") at the top and subdirectories branching out from there.

## Navigation Basics

### `pwd` Command

The `pwd` (Print Working Directory) command displays the current working directory in the terminal. This helps you keep track of your location within the file system.
```bash
$ pwd
```

### `ls` Command

The `ls` (List) command lists the contents of the current directory, including files and directories. This allows you to see what is present in your current working directory.

```bash
$ ls
```

### `cd` Command

The `cd` (Change Directory) command lets you navigate through the file system by changing the current working directory. This is useful for moving between directories and accessing their contents.

```bash
$ cd directory_name
```

## Absolute and Relative Paths

### Difference between Absolute and Relative Paths

-   Absolute Path: An absolute path is the full path to a specific file or directory, starting from the root directory ("/").
-   Relative Path: A relative path is a reference to a file or directory relative to the current working directory.

### Using Absolute and Relative Paths with the `cd` Command

`# Using an absolute path $ cd /home/user/documents  # Using a relative path $ cd ../pictures`

## Creating, Moving, and Deleting Files and Directories

### `mkdir` Command

The `mkdir` (Make Directory) command is used to create new directories.

```bash
$ mkdir new_directory_name
```

### `rmdir` Command

The `rmdir` (Remove Directory) command is used to delete empty directories.

```bash
$ rmdir directory_name
```

:::note

The recursive use of the `rm` command is also commonly used to delete a directory or directory contents. For example, `rm -rf /dir/to/delete/` or `rm -rf /dir/files/to/delete/*`. 

:::

:::danger

There is not a recycling bin in Linux by default. The `rm` command, especially recursively, can be very dangerous. 

:::


### `touch` Command

The `touch` command is used to create new, empty files.

```bash
$ touch test-file
```

### `mv` Command

The `mv` (Move) command is used to move and rename files and directories.

```bash
# Moving a file
$ mv source_file destination

# Renaming a file
$ mv old_file_name new_file_name
```

### `rm` Command

The `rm` (Remove) command is used to delete files.

```bash
rm file_name
```

## Activity

<details><summary><b>Exercise 1: Navigating the File System</b></summary>

#### Task: Use the `pwd`, `ls`, and `cd` commands to navigate the file system.

**Step 1**: Print your current working directory with the `pwd` command.

```bash
$ pwd
```

**Step 2**: List the contents of your current working directory using the `ls` command.

```bash
$ ls
```

**Step 3**: Change to a different directory using the `cd` command.

```bash
$ cd /tmp/
```

**Step 4**: Repeat steps 1-3 to practice navigating through different directories.

:::note

Don't forget to use TAB or double TAB Completion to assist in identifying and typing directories.

:::


</details>

<details><summary><b>Exercise 2: Absolute and Relative Paths</b></summary>

#### Task: Experiment with using absolute and relative paths with the `cd` command.

**Step 1**: Change to a directory using an absolute path.

```bash
cd /var/log
```

**Step 2**: Change to a directory using a relative path.

```bash
cd ../pictures
```

**Step 3**: Practice using absolute and relative paths with the `ls` command by listing various directories.

```bash
cd /etc
ls
ls /etc/logrotate.d/
```

</details>

<details><summary><b>Exercise 3: Creating Directories and Files</b></summary>

#### Task: Create a new directory and some files inside it using the `mkdir` and `touch` commands.

**Step 1**: Create a new directory called "test_directory".

```bash
mkdir test_directory
```


**Step 2**: Change to the new directory.

```bash
cd test_directory
```


**Step 3**: Create three new files inside the directory using the `touch` command.

```bash
touch file1.txt file2.txt file3.txt
```

**Step 4**: List the contents of the directory to verify that the new files were created.

```bash
ls
```

</details>

<details><summary><b>Exercise 4: Moving and Renaming Files</b></summary>

### Exercise 4: Moving and Renaming Files

#### Task: Move and rename some files using the `mv` command.

**Step 1**: Move `file1.txt` to the parent directory.

```bash
mv file1.txt ..
```

**Step 2**: Rename `file2.txt` to `new_file2.txt`.

```bash
mv file2.txt new_file2.txt
```

**Step 3**: List the contents of the current and parent directories to verify that the files were moved and renamed correctly.

```bash
ls 
ls
``` 

</details>

<details><summary><b>Exercise 5: Deleting Files and Directories</b></summary>

### Exercise 5: Deleting Files and Directories

#### Task: Delete a file and a directory using the `rm` and `rmdir` commands.

**Step 1**: Delete `new_file2.txt` using the `rm` command.

```bash
rm new_file2.txt
```

**Step 2**: Change to the parent directory.

```
cd ..
```

**Step 3**: Delete the "test_directory" using the `rmdir` command (ensure it is empty before deleting).

```bash
rmdir test_directory
```

**Step 4**: List the contents of the parent directory to verify that the file and directory were deleted successfully.

```
ls
```
</details>
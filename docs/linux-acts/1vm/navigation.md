---
sidebar_position: 7
title: Navigation
---

# Linux CLI System Navigation

In Progress.....


In order to use the CLI effectively, it is important to understand the basics of navigation. This includes knowing how to change directories, view the contents of a directory, and use absolute and relative paths to specify the location of files and directories. With these skills, you will be able to efficiently navigate your system and access the resources you need.

## Navigation Activity

### Relative, Absolute Path, Current Working Directory

- A relative path specifies the location of a file or directory in relation to the current working directory.
- An absolute path specifies the full, exact location of a file or directory on the computer, starting from the root directory.
- A current working directory path is simply the full path of the current working directory.


### The `pwd` command

```
pwd
```
The pwd command is used to print the current working directory. This is the directory that the user is currently in, and all relative paths will be based on this location.

### The `ls` command

```
ls
ls -la
ls -la ./
ls -la /var/log/messages
```

The ls command is used to list the contents of a directory. It is one of the most commonly used commands in Linux, and it has several options that allow you to control how the output is displayed.

ls without any options will list the files and directories in the current working directory.

```
$ ls
file1.txt  file2.pdf  file3.docx  directory1  directory2
```

The -l option will display the output in a long format, which includes additional information about each file or directory, such as its size, permissions, and timestamp.

```
$ ls -l
total 40
-rw-rw-r-- 1 user user  1234 Dec  6 12:34 file1.txt
-rw-rw-r-- 1 user user  2345 Dec  5 12:35 file2.pdf
-rw-rw-r-- 1 user user  3456 Dec  4 12:36 file3.docx
drwxrwxr-x 2 user user  4096 Dec  3 12:37 directory1
drwxrwxr-x 2 user user  4096 Dec  2 12:38 directory2
```

The -a option will include hidden files and directories in the output. Hidden files and directories are those that start with a . character, and they are usually not shown by default.

```
$ ls -a
.   ..  .hiddenfile.txt  file1.txt  file2.pdf  file3.docx  directory1  directory2
```
To combine multiple options, you can specify them together, like this: ls -la.

The ./ argument specifies the current directory, so ls -la ./ will list the contents of the current directory in long format, including hidden files and directories.

```
$ ls -la ./
total 40
drwxrwxr-x 5 user user 4096 Dec  6 12:37 .
drwxrwxr-x 4 user user 4096 Dec  6 12:30 ..
-rw-rw-r-- 1 user user   12 Dec  6 12:37 .hiddenfile.txt
-rw-rw-r-- 1 user user 1234 Dec  6 12:34 file1.txt
-rw-rw-r-- 1 user user 2345 Dec  5 12:35 file2.pdf
-rw-rw-r-- 1 user user 3456 Dec  4 12:36 file3.docx
drwxrwxr-x 2 user user 4096 Dec  3 12:37 directory1
drwxrwxr-x 2 user user 4096 Dec  2 12:38 directory2
```

Finally, ls -la /var/log/messages will list the contents of the /var/log/messages directory in long format, including hidden files and directories. This directory typically contains log files for the system.

```
$ ls -la /var/log/messages
total 40
drwxrwxr-x 5 user user 4096 Dec  6 12:37 .
drwxrwxr-x 4 user user 4096 Dec  6 12:30 ..
-rw-rw-r-- 1 user user   12 Dec  6 12:37 .hiddenfile.txt
-rw-rw-r-- 1 user user 1234 Dec  6 12:34 file1.txt
-rw-rw-r-- 1 user user 2345 Dec  5 12
```

#### current and parent directories

In Linux and other operating systems, the ./ and ../ symbols are used to specify the current directory and the parent directory, respectively. These symbols can be used in file and directory paths to make them more compact and easier to read.

For example, if the current working directory is /home/user/documents, and you want to specify the file1.txt file in that directory, you could use a relative path like ./file1.txt. The ./ at the beginning of the path indicates the current directory, so this path is equivalent to the full, absolute path /home/user/documents/file1.txt.

Similarly, if you want to specify the documents directory itself, you could use a relative path like ../documents. The ../ at the beginning of the path indicates the parent directory, so this path is equivalent to the full, absolute path /home/user/documents.

Using these symbols can be useful when you need to specify a file or directory path that is relative to the current working directory, rather than using the full, absolute path. It can also make your commands more readable and easier to understand. For example, instead of typing out the full, absolute path for a file, you can use a relative path with ./ or ../ to specify its location in relation to the current working directory.

### `cd` command

Introduce the cd command for changing directories

The cd command is used to change the current working directory in Linux and other operating systems. This command allows you to navigate the file system and access different directories.

To use the cd command, you simply type cd followed by the path of the directory you want to change to. For example, if you want to change to the /home/user/documents directory, you would use the following command:

Copy code
$ cd /home/user/documents
After running this command, the current working directory will be changed to /home/user/documents. You can verify this by running the pwd command, which will print the current working directory:

Copy code
$ pwd
/home/user/documents
In addition to absolute paths, you can also use relative paths with the cd command. For example, if the current working directory is /home/user/documents, you can use the ../ symbol to change to the parent directory like this:

Copy code
$ cd ..
$ pwd
/home/user
You can also use the cd command without any arguments to change to your home directory. For example:

Copy code
$ cd
$ pwd
/home/user
Overall, the cd command is an essential tool for navigating the file system and accessing different directories on your system. It is often used in combination with other commands, such as ls and pwd, to help you efficiently manage your files and directories.

### 

Wildcards are special characters that can be used to represent one or more characters in a file or directory name. In Linux and other operating systems, the most commonly used wildcards are *, ?, and [ ].

The * wildcard represents zero or more characters. For example, the pattern *.txt would match any file that has a .txt extension, regardless of the filename.

```
$ ls *.txt
file1.txt  file2.txt  file3.txt
```
The ? wildcard represents a single character. For example, the pattern file?.txt would match any file that has a .txt extension and is exactly four characters long, with the fourth character being any single character.


```
$ ls file?.txt
file1.txt  file2.txt  file3.txt
```

The [ ] wildcard represents a range or set of characters. For example, the pattern file[123].txt would match any file that has a .txt extension and is exactly eight characters long, with the fifth, sixth, and seventh characters being either 1, 2, or 3.

```
$ ls file[123].txt
file1.txt  file2.txt  file3.txt
```

Wildcards can be used with many commands, not just ls. For example, you could use the mv command to move multiple files that match a certain pattern, like this:

```
$ mv *.txt backup/
```

This command would move all files with a .txt extension to the backup directory.

Overall, wildcards are a powerful tool for working with files and directories in Linux. They allow you to quickly and easily match and manipulate groups of files, without having to specify each one individually.



Introduce the mkdir command for creating directories
Introduce the rmdir command for removing directories
Introduce the mv command for moving and renaming files and directories
Practice exercises
Provide a series of practice exercises for students to complete, using the commands introduced in the previous sections.
Encourage students to experiment and try out different variations of the commands to gain a better understanding of how they work.
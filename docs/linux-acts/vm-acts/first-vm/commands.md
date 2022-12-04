---
sidebar_position: 6
title: Commands
---

# Linux Commands

In Progress


In Linux, the command line is used to run programs and perform various tasks. To run a command in Linux, you type the command at the prompt and press Enter. The command will be executed, and the output will be displayed on the screen.

Commands in Linux often accept arguments, which are additional parameters that specify how the command should be run. For example, the ls command is used to list the contents of a directory, and accepts the -l argument to show the contents in a long format. To run the ls command with the -l argument, you would type ls -l at the prompt and press Enter.

Linux also includes man pages, which are detailed manuals that provide information about the various commands and their arguments. To access a man page, you can use the man command followed by the name of the command you want to learn about. For example, to access the man page for the ls command, you would type man ls at the prompt and press Enter.

In addition to man pages, many Linux commands also include a built-in help system that provides brief information about the command and its arguments. To access the help information for a command, you can use the --help or -h argument. For example, to access the help information for the ls command, you would type ls --help or ls -h at the prompt and press Enter.

Overall, the basics of running commands in Linux include typing the command at the prompt, and using arguments to specify how the command should be run. Man pages and help pages provide detailed information about the commands and their arguments, and can be accessed using the man and --help or -h arguments, respectively.


Linux is a Unix-like operating system that was first developed in the early 1990s by Linus Torvalds. Linux is based on the Unix operating system, which was developed in the 1970s at Bell Labs. Unix is known for its powerful command line interface, which allows users to run a wide range of commands to perform various tasks on the system.

The commands that are available in Linux accept arguments, which are additional parameters that specify how the command should be run. The style of arguments that is used in Linux is based on the style of arguments that was used in Unix.

In Unix, commands typically accept arguments in a long format, where each argument is preceded by a double dash (--) and is followed by an equal sign (=) and the argument value. For example, the ls command in Unix can be run with the --format=long argument to show the contents of a directory in a long format.

Over time, the style of arguments used in Linux has evolved, and a short format for arguments has been introduced. In the short format, arguments are preceded by a single dash (-) and are followed by a single letter or digit that represents the argument. For example, the ls command in Linux can be run with the -l argument to show the contents of a directory in a long format.

Overall, the history of Linux command arguments styles is closely tied to the history of Unix, and the original style of arguments used in Unix has been extended and modified in Linux. The current style of arguments in Linux includes both the long format and the short format, and allows users to specify arguments in a flexible and convenient way.


Linux is a Unix-like operating system that includes a command line interface that allows users to run a wide range of commands to perform various tasks on the system. To help users learn about the various commands and their options, Linux includes man pages, which are detailed manuals that provide information about the commands and their arguments.

To access a man page, you can use the man command followed by the name of the command you want to learn about. For example, to access the man page for the ls command, you would type man ls at the prompt and press Enter. The man page for the ls command will be displayed on the screen, and will include detailed information about the command and its arguments.

Man pages are divided into several sections, each of which provides different types of information about the command. The first section of a man page typically includes a brief description of the command and its purpose. The second section includes a detailed list of the command's arguments and options, and explains what each argument does. The third section includes examples of how the command can be used, and the fourth section includes additional information about the command and its usage.

Man pages are an important resource for learning about the commands and their arguments in Linux. They provide detailed and comprehensive information about the commands, and can be an invaluable tool for users who want to learn how to use the command line effectively.


In Linux, the PATH is an environment variable that specifies the directories in which the system should search for executable files (i.e. commands) when a command is run without specifying the full path to the command. The PATH variable is a list of directories, separated by colons (:), and is used by the system to find the commands that are run at the command line.

For example, if the PATH variable is set to /usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin, then the system will search for commands in the following directories, in order:

/usr/local/bin
/usr/bin
/usr/local/sbin
/usr/sbin
If the command that is run is not found in any of the directories in the PATH variable, then the system will display an error message indicating that the command could not be found.

To view the current value of the PATH variable, you can run the echo $PATH command at the command line. To change the value of the PATH variable, you can use the export PATH=value command, where value is the new value for the PATH variable.

Overall, the PATH variable is an important environment variable in Linux, and is used to specify the directories in which the system should search for commands. By modifying the PATH variable, you can control where the system looks for commands, and can customize the way the command line works on your system.



In Linux, the bash shell uses hash tables to store the paths of frequently-used commands, in order to improve the performance of the command line. A hash table is a data structure that is used to store and retrieve data based on a key. In the case of bash, the key is the command name, and the data is the path to the command's executable file.

When a command is run at the command line, bash will first check the hash table to see if the command's path has been stored in the table. If the path is found in the table, then bash will use the path from the table to execute the command, without having to search for the command in the directories specified in the PATH variable.

If the command's path is not found in the hash table, then bash will search for the command in the directories specified in the PATH variable, and will add the command's path to the hash table once it is found. This means that the next time the command is run, bash will be able to find the command's path in the hash table, and will not have to search for the command in the PATH directories.

The use of hash tables in bash can improve the performance of the command line, because it allows bash to find the paths of frequently-used commands quickly, without having to search for the commands in the PATH directories. However, the hash table can become outdated if the location of a command changes, or if a new command with the same name is added to the system. In these cases, the hash table can be cleared using the hash -r command, which will cause bash to rebuild the table the next time a command is run.


In Linux, the directories in which the system searches for commands are specified by the PATH environment variable. The PATH variable is a list of directories, separated by colons (:), and is used by the system to find the commands that are run at the command line.

By default, the PATH variable typically includes the following directories:

/usr/local/bin: This directory contains executables that are installed locally on the system, such as commands that are installed using the make install command.
/usr/bin: This directory contains executables that are part of the system's core utilities, such as the ls and cd commands.
/usr/local/sbin: This directory contains executables that are used for system administration, such as commands that are used to manage services and processes.
/usr/sbin: This directory contains executables that are used for system maintenance, such as commands that are used to manage the system's hardware and software.
In addition to these directories, the PATH variable can also include other directories that contain executables that are not part of the core system utilities. For example, if you have installed a custom command in the /opt/mycmds directory, you can add this directory to the PATH variable by running the export PATH=$PATH:/opt/mycmds command at the command line. This will allow the system to find and execute the custom command when it is run at the command line.

Overall, the directories in which the system searches for commands are specified by the PATH variable, and can be customized by adding or removing directories from the PATH variable. By modifying the PATH variable, you can control where the system looks for commands, and can customize the way the command line works on your system.



In a Linux system that uses the RPM package manager (such as Red Hat, CentOS, or Fedora), you can use the rpm command to identify which package a command came from. To do this, you can use the rpm -qf command followed by the path to the command's executable file.

For example, if you want to find out which package the ls command came from, you can run the following command:

Copy code
rpm -qf /usr/bin/ls
This will print the name of the package that contains the ls command, along with the package's version number. For example, the output of the command might be something like coreutils-8.4-46.el6.x86_64, which indicates that the ls command is part of the coreutils package, and that the package's version is 8.4-46.

Alternatively, you can use the which command to find the path to the command's executable file, and then use the rpm -qf command to find out which package the command came from. For example, to find out which package the ls command came from, you can run the following commands:

Copy code
which ls
rpm -qf $(which ls)
This will print the path to the ls command's executable file, followed by the name of the package that contains the ls command.

Overall, the rpm command can be used to identify which package a command came from in a Linux system that uses the RPM package manager. By using the rpm -qf command and the path to the command's executable file, you can find out which package the command is part of, and can learn more about the package and its contents.


In Linux, you can use the file command to identify the type of a command. The file command examines the contents of a file, and determines what type of file it is based on the file's contents and structure.

To use the file command to identify the type of a command, you can run the file command followed by the path to the command's executable file. For example, to find out the type of the ls command, you can run the following command:

Copy code
file /usr/bin/ls
This will print the type of the ls command, based on the contents of the file. For example, the output of the command might be something like /usr/bin/ls: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=b9e7ebc91b3d3db2c3fbb7b5cce7617db7f65a4a, stripped, which indicates that the ls command is a 64-bit ELF (Executable and Linkable Format) shared object, and is compiled for the GNU/Linux 2.6.32 kernel.

Alternatively, you can use the which command to find the path to the command's executable file, and then use the file command to determine the type of the command. For example, to find out the type of the ls command, you can run the following commands:

Copy code
which ls
file $(which ls)
This will print the path to the ls command's executable file, followed by the type of the command, as determined by the file command.

Overall, the file command can be used to identify the type of a command in Linux. By using the file command and the path to the command's executable file, you can determine the type of the command, and can learn more about the command's structure and capabilities.


Tips

Here are some tips and tricks for using the bash shell in Linux:

Use tab completion: Bash supports tab completion, which allows you to type the first few letters of a command or file name, and then press the Tab key to automatically complete the rest of the name. This can save you time and effort, and can help you avoid spelling errors.

Use history expansion: Bash maintains a history of the commands that you have run, which can be accessed using the history command. You can use history expansion to quickly run a previous command, or to modify a previous command and run it again. To do this, type an exclamation mark (!) followed by the number or pattern of the command you want to run, and press Enter.

Use command substitution: Bash allows you to use the output of one command as the input to another command, using command substitution. To do this, enclose the first command in backticks (`) or dollar sign and parentheses ($()), and use the resulting output as the input to the second command. For example, you can use the ls command to list the files in a directory, and then use the wc command to count the number of files, like this: wc -l $(ls).

Use the alias command: The alias command allows you to create short aliases for long or complex commands, which can save you time and make the commands easier to remember. For example, you could create an alias for the ls -l command, like this: alias ll="ls -l". This would allow you to use the ll command instead of the ls -l command, which would be faster to type and easier to remember.

Use the cd command with a ~: The cd command allows you to change your current working directory. If you want to quickly change to your home directory, you can use the cd command followed by a ~ (tilde), like this: cd ~. This will change your current directory to your home directory, regardless of your current location.

Overall, there are many tips and tricks that can help you use the bash shell more effectively in Linux. By using tab completion, history expansion, command substitution, the alias command, and the cd command with a ~, you can save time and effort, and can make your work at the command line more efficient and enjoyable.


In Linux, the alias command allows you to create short aliases for long or complex commands. An alias is a short name that represents a longer command, and can be used as a substitute for the longer command.

To create an alias, you can use the alias command followed by the alias name, an equal sign (=), and the command that the alias should represent. For example, to create an alias for the ls -l command, you could use the following command:

Copy code
alias ll="ls -l"
This would create an alias called ll, which represents the ls -l command. You can then use the ll alias instead of the ls -l command, like this:

Copy code
ll
This would run the ls -l command, and would display the contents of the current directory in a long format.

You can create as many aliases as you like, and can use them to represent any commands that you use frequently. Aliases can save you time and effort, and can make the commands you use easier to remember.

To view the aliases that are currently defined on your system, you can use the alias command without any arguments. This will print a list of all the defined aliases, along with the commands they represent. For example, the output of the alias command might look like this:

Copy code
alias ll="ls -l"
alias la="ls -a"
alias l="ls -CF"
To remove an alias, you can use the unalias command followed by the name of the alias you want to remove. For example, to remove the ll alias, you could use the following command:

Copy code
unalias ll
This would remove the ll alias, and would prevent it from being used in the future.

Overall, the alias command is a useful tool for creating short aliases for long or complex commands in Linux. By using aliases, you can save time

## Command Activity


...Link to common commands topic



idea for activity:

Here is a simple activity that you can use to become familiar with Linux commands:

Open a terminal window on your Linux system. This will provide you with a command-line interface (CLI) where you can enter and run Linux commands.

Use the pwd command to print your current working directory. The pwd command stands for "print working directory", and it will print the full path of the directory you are currently in. For example, you might see output like this: /home/user/documents.

Use the ls command to list the contents of your current directory. The ls command stands for "list", and it will display the names of the files and directories in your current directory. For example, you might see output like this: file1.txt file2.txt dir1 dir2.

Use the cd command to change your current directory. The cd command stands for "change directory", and it allows you to move to a different directory. To use the cd command, you can type cd followed by the path to the directory you want to move to. For example, if you want to move to the dir1 directory, you can run the cd dir1 command.

Use the mkdir command to create a new directory. The mkdir command stands for "make directory", and it allows you to create a new directory in your current location. To use the mkdir command, you can type mkdir followed by the name of the directory you want to create. For example, if you want to create a newdir directory, you can run the mkdir newdir command.

Use the touch command to create a new empty file. The touch command allows you to create a new empty file in your current directory. To use the touch command, you can type touch followed by the name of the file you want to create. For example, if you want to create a newfile.txt file, you can run the touch newfile.txt command.

Use the rm command to remove a file or directory. The rm command stands for "remove", and it allows you to delete a file or directory from your system. To use the rm command, you can type rm followed by the name of the file or directory you want to delete. For example, if you want to delete the newfile.txt file, you can run the rm newfile.txt command.

Overall, this simple activity can help you become familiar with some of the basic Linux commands, such as pwd, ls, cd, mkdir, touch, and rm. By practicing these commands, you can learn how to navigate
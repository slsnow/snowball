---
sidebar_position: 6
title: Commands
---

# Linux Commands

In Progress...

As you have seen from the previous example, on Linux, the command line is used to run programs and perform various tasks. To run a command on Linux, you type the command at the prompt and press Enter. The command will be executed, and the output will be displayed on the screen. 

## Linux Commands Activity

This all seems simple enough, but in this activity we will explore how Linux Commands work, and learn some tips along the way.

### 1 - Arguments

A command argument is an additional piece of information that is specified after the command name and specifies the details of how the command should be executed. Some arguments are prefixed with a `-` or `--` characters. The specific arguments, their order, and their usage can vary depending on the command being used.

Run the following commands to see some examples of argument usage.

#### Example A
```
cat --help
```
Here, the `--help` argument specifies that the cat command should show its help information, rather than performing its normal operation.

#### Example B

```
cat /etc/os-release
```
This command displays the contents of a file to a terminal (among other uses).

The `/etc/os-release` argument specifies the name of the file that the cat command should display. 

#### Example C

```
cat -n /etc/os-release
```

This command displays the contents of the `/etc/os-release` file to the terminal, with line numbers added to each line.

#### Example D

```
cat -n -E /etc/os-release
```
The `-n` and `-E` arguments specify that the cat command should add line numbers, and a $ character to the end of each line, respectively.

Often, these commands can be combined like this.
```
cat -nE /etc/os-release
```
### 2 - Man Pages

Man pages (short for manual pages) are a form of documentation for Linux command line tools and utilities. They provide detailed information about the usage and options for a particular command, as well as examples and descriptions of its functionality.

To access man pages, you can use the "man" command followed by the name of the command you want to learn about. For example:

```
man cat
```

The "man cat" command displays the man page for the "cat" command.

```
man -k copy | grep -i files
```
This command would search the manual pages for the keywords "copy", and additionally "files" (more on piping and grep later). This is useful for finding commands that might be relevant to a particular task.

:::tip

Google is your friend as well if you want to quickly find a man page or a command for a specific task. However, keep in mind that different distros, or command versions may have different usage and results. 

:::

### 3 - Tab Completion

Linux tab completion is a feature that allows you to type a partial command and then press the tab key to automatically complete the command. This can save time and make it easier to run commands, especially if you're not sure of the exact syntax.

To use tab completion in Linux, simply type the first few letters of a command, then press the tab key. If there is only one possible completion for the command, it will automatically be completed for you. If there are multiple possible completions, you can press the tab key again to see a list of options.

#### Tab Completion Activity
- Type the following command and press the tab key:
```
ls -l /va
```
- The terminal will automatically complete the command to `ls -l /var`

- This will show the possible arguments, in this case directories within the `/var/` directory.

- Press tab key twice

- Now type in the following, and use tab completion to complete to the file `/var/log/YaST2/y2start.log`, and hit enter.

- Use tab completion, and double tabbing, to complete the following commands:

```
ip address show eth0
```

```
cat /etc/zypp/repos.d/openSUSE-Leap-15.4-1.repo
```

```
zypper lp --with-optional --severity critical
```

:::caution

Notice that the last argument "critical" did not have an autocompletion result. In this case, you'd have to already know the argument, or search the man page.

:::


:::tip

There are several advantages to using tab completion including:

- Saving time
- Reducing the risk of errors
- Helps you learn new commands
- Makes it easier to run commands

:::

### 4 - Tricks

Use $(command) to run a command and insert its output into another command. For example, you could use echo "Today is $(date)" to display the current date and time.

Use | (the "pipe" symbol) to redirect the output of one command to another command. For example, you could use ls -l | less to display the output of the ls command in the less pager, which allows you to scroll through the output more easily.

Use echo $? to display the exit status of the last command you ran. A exit status of 0 usually indicates that the command ran successfully, while a non-zero exit status indicates an error.




Combining these tricks, you can do very powerful things, like this:
#### Long Example

```
for i in $(rpm -qa --last | head -n 10 | sort -h | awk '{print $1}'); do printf "%s" "$i "; rpm -V $i; if [ $? -eq 0 ] && [ -z "$(rpm -V $i)" ]; then printf "No Discrepencies\n"; else echo $?; fi; done
```

Here is a breakdown of the steps performed by the for loop in the given command:

- The `rpm -qa --last` command is run to list the installed packages on the system, sorted by the time they were last installed.
- The `head -n 10` command is used to limit the output to the first 10 packages in the list.
- The `sort -h` command is used to sort the packages in human-readable format (e.g. "1" comes before "10").
- The `awk '{print $1}'` command is used to extract the first column of the output, which contains the names of the packages.
- The output from the previous steps is passed to the for loop as a list of package names, and the loop is run once for each package in the list.
- For each iteration of the loop, the `printf "%s" "$i "` command is used to print the name of the package, followed by a space character.
- The `rpm -V` command is run for the current package, to verify its integrity.
- The if statement is used to check the exit status and output of the `rpm -V` command. 
- If the exit status is 0 and the output is empty, the printf "No Discrepencies\n" command is run to print "No Discrepencies" on the same line as the output from the previous steps.
- If the exit status is not 0 or the output is not empty, the echo $? command is run to print the exit status of the rpm -V command.
- The for loop continues to run for each package in the list, until all packages have been processed.

In summary, this for loop runs the `rpm -V` command for the last 10 installed packages on the system, and checks the exit status and output of the command to determine if there are any discrepancies in the packages. If there are no discrepancies, it prints "No Discrepencies" on the same line as the name of the package. If there are discrepancies, it prints any output and the exit status of the rpm -V command. This can be useful for detecting and troubleshooting problems with installed packages.

### 5 - Bash History

Use !! to run the last command you typed. For example, if you typed ls -l and then realized you forgot to include a directory name, you could use !! to run the same command again, but with the directory name included.

Use history to view a list of the commands you have typed in the current session. You can then use the ! symbol followed by a number to run a command from your history. For example, !5 would run the fifth command in your history.

Use Ctrl+R to search for a command in your history. This allows you to quickly find and run a command that you have used in the past.

Start typing, page up

### 5 - Bash Shell shortcuts

Here are some common keyboard shortcuts that can be used in the bash shell in Linux:

Ctrl+A: Move the cursor to the beginning of the line
Ctrl+E: Move the cursor to the end of the line
Ctrl+U: Clear the line from the cursor to the beginning of the line
Ctrl+K: Clear the line from the cursor to the end of the line
Ctrl+W: Clear the word before the cursor
Ctrl+R: Search through your command history
Ctrl+C: Interrupt the currently running command
Ctrl+D: Exit the shell
These keyboard shortcuts can save you time and make it easier to work with the bash shell in Linux. By using them, you can quickly move around the command line, edit and delete text, and access your command history without having to use the mouse or other input devices.

Note that these keyboard shortcuts may vary depending on the configuration of your system and the settings of your bash shell. Some of the shortcuts may not work, or may have different functions, depending on your specific setup. It's always a good idea to consult the documentation for your system and your bash shell to learn about the available keyboard shortcuts and how to use them.

### 6 - PATH and HASH

In Linux, the bash shell uses the PATH and hash variables to find and run commands.

The PATH variable is a list of directories that bash searches when you run a command. When you type a command in bash, it looks for the command in each of the directories listed in the PATH variable, in the order they are listed, until it finds the command or reaches the end of the list. This allows you to run commands without specifying the full path to the command.

For example, if the PATH variable is set to /usr/local/bin:/usr/bin:/bin, bash will search for the command in the /usr/local/bin, /usr/bin, and /bin directories, in that order, until it finds the command or reaches the end of the list.

The hash variable is used by bash to keep track of the locations of commands that have been run recently. When you run a command in bash, it stores the location of the command in the hash table. This allows bash to quickly find and run the command the next time you run it, without having to search through the directories in the PATH variable.

For example, if you run the ls command in bash, it will store the location of the ls command in the hash table. The next time you run the ls command, bash will check

In Linux, the bash shell uses the PATH and hash variables to find and run commands.

The PATH variable is a list of directories that bash searches when you run a command. When you type a command in bash, it looks for the command in each of the directories listed in the PATH variable, in the order they are listed, until it finds the command or reaches the end of the list. This allows you to run commands without specifying the full path to the command.

For example, if the PATH variable is set to /usr/local/bin:/usr/bin:/bin, bash will search for the command in the /usr/local/bin, /usr/bin, and /bin directories, in that order, until it finds the command or reaches the end of the list.

The hash variable is used by bash to keep track of the locations of commands that have been run recently. When you run a command in bash, it stores the location of the command in the hash table. This allows bash to quickly find and run the command the next time you run it, without having to search through the directories in the PATH variable.

For example, if you run the ls command in bash, it will store the location of the ls command in the hash table. The next time you run the ls command, bash will check


In Linux, the which and type commands are used to determine the location of a command. These commands can be useful when you want to find out where a particular command is located on your system, or when you want to determine if a command is built-in to the shell or provided by an external command.

The which command searches through the directories listed in the PATH variable to find the location of a command. For example, if you want to find the location of the ls command, you can use the following which command:

Copy code
which ls
This command will search the directories in the PATH variable for a file named ls, and will print the full path to the file if it is found. For example, the which command might print /usr/bin/ls to indicate that the ls command is located in the /usr/bin directory.

The type command is similar to the which command, but it also checks for built-in shell commands and shell functions. For example, if you want to find out if the cd command is a built-in shell command or a separate command, you can use the following type command:

Copy code
type cd
This command will check if the cd command is a built-in shell command, a shell function, or an external command, and will print the appropriate output. For example, the type command might print cd is a shell builtin to indicate that the cd command is built-in to the shell.

### 7 - RPM 

Here are some rpm tricks that you can use to see which package a command or file comes from in Linux:

Use the rpm -qf command to query the package that provides a specific file. For example, if you want to find out which package provides the /usr/bin/ls file, you can use the following command:

Copy code
rpm -qf /usr/bin/ls
This command will print the name of the package that provides the /usr/bin/ls file, such as coreutils-8.22-19.el7.x86_64.

Use the rpm -qf command with the -p option to query the package that provides a file from a specific package. For example, if you want to find out which package provides the /usr/bin/ls file from the coreutils package, you can use the following command:

Copy code
rpm -qf /usr/bin/ls -p coreutils-8.22-19.el7.x86_64.rpm
This command will print the name of the package that provides the /usr/bin/ls file, such as coreutils-8.22-19.el7.x86_64, and will verify that the file is provided by the `coreutils

### 8 Aliases

In Linux, an alias is a way to define a custom command that can be used to run a series of other commands. This can be useful for creating short, easy-to-remember commands that represent more complex or frequently used commands. For example, you could create an alias named ll that runs the ls -l command, which shows the contents of a directory in a long format that includes file permissions and other details. To create an alias, you can use the alias command followed by the name of the alias and the command that you want it to run. For example, to create an alias named ll that runs the ls -l command, you would use the following command:

Copy code
alias ll='ls -l'
Once you have created an alias, you can use it just like any other command. For example, to use the ll alias that you created in the previous example, you would simply type ll at the command prompt and press enter. The ls -l command that the alias represents would then be run.

Aliases are not permanent, so if you close the terminal or log out and log back in, the aliases that you created will no longer be available. To make an alias permanent, you can add it to your shell's configuration file. The location and name of this file will vary depending on the shell that you are using, but it is typically called .bashrc for the Bash shell or .zshrc for the Zsh shell. You can add your alias to this file by opening it in a text editor and adding a line that defines the alias, using the same format as the alias command. For example, to add the ll alias that you created earlier to your .bashrc file, you would add the following line:

Copy code
alias ll='ls -l'
After you save the changes to your configuration file and open a new terminal, the alias that you created will be available to use.
---
sidebar_position: 5
title: SSH
---

# SSH (Secure Shell)

SSH (Secure Shell) is a network protocol that allows secure remote access to a computer. 

SSH provides a secure channel over an unsecured network in a client-server architecture, allowing data to be exchanged between two networked devices. SSH uses encryption to protect the data transmitted over the network, making it more secure than other protocols such as Telnet. It is commonly used to log in to remote servers, execute commands, and transfer files securely. SSH is also commonly used to securely tunnel other protocols, such as FTP, HTTP, and X11.

## SSH Activity

For this activity, you will use SSH from a terminal on your computer to connect to the `vm1-snowball` system.

:::caution

It is assumed that you are using "Windows Terminal", and "Git Bash" to run SSH into the system. If using a Linux system, ignore these steps and just open your favorite terminal (such as terminator or the like).

:::

### 1 - Open Git Bash in Windows Terminal

Download the Windows Terminal: [Instructions Link](https://learn.microsoft.com/en-us/windows/terminal/install)
Download Git Bash: [Instructions Link](https://linuxhint.com/add-git-bash-windows-terminal/)

When you open Windows Terminal, open a tab for Git Bash (you can set it as your default if you'd like).

<details>
  <summary>Additional Info: Windows SSH Clients</summary>

PuTTY is a popular SSH client for Windows, but there are several other SSH clients that are available for Windows, and that offer similar or better functionality than PuTTY. Some of the best alternatives to PuTTY include:

- MobaXterm: MobaXterm is a feature-rich SSH client for Windows that includes many advanced features, such as a built-in X11 server, a built-in SFTP client, and support for multi-tabbed sessions. MobaXterm also includes a range of tools for remote administration, such as a terminal emulator, a remote desktop client, and a network scanner.

- KiTTY: KiTTY is a fork of PuTTY that adds several new features and improvements, such as session saving and reopening, automatic logon, and support for graphical applications (e.g. X11 forwarding). KiTTY is a lightweight and easy-to-use SSH client, and is a good alternative to PuTTY for users who want a more feature-rich SSH client.

- SecureCRT: SecureCRT is a commercial SSH client for Windows that offers advanced features and a user-friendly interface. SecureCRT includes support for multiple protocols (e.g. SSH, Telnet, Rlogin), support for multiple session types (e.g. VT100, VT102, VT220), and support for a wide range of authentication methods (e.g. public key, password, keyboard-interactive). SecureCRT is a powerful and reliable SSH client, and is a good alternative to PuTTY for users who need advanced features and professional-grade support.

- ZOC Terminal: ZOC Terminal is a commercial SSH client for Windows that offers a range of advanced features, such as support for multiple protocols (e.g. SSH, Telnet, Rlogin), support for multiple window types (e.g

There are many other options as well. When working from a Windows machine, I prefer to just use the Windows Terminal, combined with WSL, Git Bash, or the built-in Windows SSH Client as described here:
https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh
</details>  

<br></br>

### 2 - Test an Initial SSH Connection

:::caution

The following examples will be using the IP address `192.168.0.101`, but you will need to use the `root` for USER, and the IP address identified in the previous activity for `IP_ADDRESS`.

:::

<br></br>

Open your terminal, and use the `ssh` command to connect to the remote system, using the `root` user and the IP address. 

```
ssh USER@IP_ADDRESS
```

For example:
```
ssh root@192.168.0.101
```

When prompted, enter the `root` password (should be `linux`). This will authenticate the ssh connection and allow you to access a shell on the remote system. When the ssh connection is established, you can now run commands on the remote system as if you were logged in directly on the remote system.

<details>
  <summary>Additional Info: Benefits of SSH</summary>

There are several benefits of using SSH over other remote access methods:

- Security: SSH uses strong encryption to protect the data transmitted over the network. This makes it more secure than other remote access methods, such as Telnet, which transmit data in plain text.

- Accessibility: SSH allows users to access a remote computer from any location with an internet connection. This is useful for remote administration and support, as well as for accessing files and applications on a remote server.

- Scriptability: SSH allows users to automate tasks and execute commands on a remote computer using scripts. This can save time and reduce the risk of errors when performing repetitive tasks.

- Tunneling: SSH allows users to tunnel other protocols, such as FTP and HTTP, through an encrypted SSH connection. This can provide additional security for sensitive data and protect against network sniffing attacks.

- Compatibility: SSH is supported on a wide range of platforms, including Linux, macOS, Windows, and mobile devices. This makes it a versatile and widely-used tool for remote access.

- Copy and Pasting: One benefit of using SSH over some other methods, is the ability to paste text. Unlike a console, where pasting is not supported, SSH allows users to easily paste text from their local clipboard into the remote terminal. This can save time and improve productivity when working with long commands or complex text.

For example, imagine you are working on a remote Linux server and need to edit a configuration file with a long list of options. With a console, you would need to type out the entire list of options manually, which can be time-consuming and error-prone. With SSH, you can simply copy the list of options from your local machine and paste them into the remote terminal. This makes it much faster and easier to edit the configuration file. Additionally, pasting text with SSH is secure, as the text is encrypted during transmission.

</details>

<br></br>

### 3 - Exit SSH

When you are using the Secure Shell (SSH) protocol to connect to a remote server, you can exit the remote session by using the `exit` command. This command terminates the SSH session and closes the connection to the remote server.

```
exit
```

:::tip

Usually, if you disconnect from a remote SSH session, while a command or process is running, it will continue to run, as it is being executed on the remote system. In some cases, you may want to run commands and process in the background on the remote system in various ways, or use utilities like `screen`.

:::

<br></br>

### 4 - SSH Verbose Output

Trying an SSH login to the remote system again, but this time trying adding the verbose option `-v`. This can be useful for debugging purposes.

```
ssh -v root@192.168.0.101
```

<details>
  <summary>Additional Info: SSH with Verbosity</summary>

To enable verbose output, include the `-v` option, which will display detailed information about the ssh connection process. You can add increasing levels of verbosity, up to a maximum of three, with the option `-vvv`.

</details>

<br></br>

### 5 - SSH Configuration Files

When using SSH, there are several configuration files that control the behavior of the SSH client and server. These configuration files contain settings and options that determine how the SSH client and server operate, and can be customized to suit the needs of the user or organization. For this activity, we will be leaving them at their defaults, but you should be aware of these files.

<details>
  <summary>Additional Info: SSH Configuration</summary>

<b>Client Side Configuration Files:</b>

-  `ssh_config`
   - This file is used by the SSH client, and contains settings that apply to all SSH connections made from the client machine. This can specify the default SSH port, the default user to connect as, and other security options. For more info see `man ssh_config`.
- `known_hosts`
   - This file is used by the SSH client to store the public keys of servers that the client has previously connected to. The known_hosts file is typically located in the `~/.ssh` directory on the client machine.

<b>Server Side Configuration Files:</b>

- `sshd_config`
    - This file is used by the SSH server, and contains settings that apply to the SSH server and control how it operates and manages SSH connections. It can specify which users are allowed to connect to the server, the authentication and encryption methods to allow, the server's listening port, among other things. For more info, see `man sshd_config`.
- `authorized_keys`
    - This file is used by the SSH server to store the public keys of users who are allowed to connect to the server. The authorized_keys file is typically located in the `~/.ssh` directory of each user's home directory on the server.

</details>

<br></br>

### 6 - Copy SSH Keys

For this final step of the activity, you will manually copy an SSH key to the remote system, to secure passwordless SSH.

#### A - Generate an SSH Key Pair

Make sure you have exited out of your remote system `vm1-snowball`, and you're on your local machine in gitbash.

Run the following command:
```
ssh-keygen
```
When prompted, just hit the `enter` key several times, using the default settings, until finished (this only needs to be done once).

#### B - Copy the Key to the Remote System

Similar to Step 2 above, run the following:

```
ssh-copy-id USER@IP_ADDRESS
```

Then insert the password when prompted.

For example:
```
ssh-copy-id root@192.168.0.101
```

This will copy the key to the remote system, allowing passwordless logins.

#### C - Test another Login

Test logging in like in Step 2 above. If successful, you can now SSH into the system without the use of a password.

<details>
    <summary>Additional Info: SSH Keys</summary>

SSH keys are a type of cryptographic key that is used for authentication in the Secure Shell (SSH) protocol. SSH keys consist of a pair of files: a private key, which is kept on the client machine, and a public key, which is stored on the server. 

SSH keys offer several advantages over other authentication methods, such as passwords. SSH keys are more secure than passwords, because they use a form of encryption that is difficult to crack. SSH keys are also more convenient than passwords, because they allow the user to authenticate without having to enter a password.

</details>
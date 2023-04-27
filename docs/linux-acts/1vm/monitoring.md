---
sidebar_position: 10
title: Monitoring
---

# Linux System Monitoring Quick Guide

## Introduction to System Monitoring in Linux

Monitoring the performance and health of a Linux system is essential for maintaining optimal system performance. This guide introduces the `top` command and explains how to use it for system monitoring.

## The Top Command

### Introducing the Top Command

The `top` command is a powerful tool that displays real-time information about processes running on a Linux system. It allows you to view, sort, and manage processes based on various metrics.

### Using Top to View and Sort Processes

**View processes running on the system:**

```
top
```


**View specific processes or group of processes:**

```
top -p process_id`
```

**View processes for a specific user:**

```
top -u username
```

**Sort processes by a specific metric:**

```
top -o metric
```

## Analyzing and Interpreting Top Output

### Reading and Interpreting Top Output

The `top` output displays various metrics, including:

-   PID: Process ID
-   USER: The user who owns the process
-   PR: The process priority
-   NI: The nice value
-   VIRT: Virtual memory used by the process
-   RES: Resident memory used by the process
-   SHR: Shared memory used by the process
-   S: Process state
-   %CPU: Percentage of CPU used by the process
-   %MEM: Percentage of memory used by the process
-   TIME+: The total CPU time used by the process
-   COMMAND: The command used to start the process

### Identifying Performance Issues

Use the `top` output to identify potential performance issues and bottlenecks. Pay attention to CPU usage, memory usage, and other metrics.

## Using Top to Manage Processes

### Managing Processes with Top

-   Renice a process: Change the priority of a process by pressing `r` and entering the new nice value.
-   Kill a process: Terminate a process by pressing `k` and entering the process ID.
-   Be cautious when using these management features, as they can impact system performance and stability.

## Practice Exercises

### Exercise 1: Using Top to View and Sort Processes

1.  Use the `top` command to view and sort processes.
2.  Experiment with different options and arguments with the `top` command.

### Exercise 2: Analyzing Top Output

1.  Use the `top` command to view processes running on the system.
2.  Interpret the `top` output to identify potential performance issues or bottlenecks.
3.  Use the `ps` and `free` commands to gather additional information about processes and system resources.

### Exercise 3: Managing Processes with Top

1.  Use the `top` command to view processes running on the system.
2.  Renice, kill, or schedule processes using the `top` command and other available commands (`renice`, `kill`, `at`).
3.  Be cautious when using management features, as they can impact system performance and stability.
4.  Experiment with different options and arguments with the `top` command and other commands to gain a better understanding of how they work.
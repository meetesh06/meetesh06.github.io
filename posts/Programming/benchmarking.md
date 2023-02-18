<!-- Setting up a reliable benchmarking machine -->
<!-- Programming -->
<!-- Benchmarking -->
<!-- Reproducible benchmarking is particularly important in fields such as scientific computing, machine learning, and high-performance computing, where accurate performance measurements are crucial for making informed decisions and advancing research. -->
<!-- 09-12-2021 -->

## We want reproducible results!!!

Reproducible results are research findings that can be independently reproduced by other researchers using the same data, methods, and procedures. In other words, reproducible results are those that can be verified and validated by other researchers, thereby increasing confidence in the validity and reliability of the findings.

Reproducibility is an important aspect of scientific research, as it helps to ensure that research findings are not the result of chance or bias. Reproducible results also allow other researchers to build upon existing findings, to verify or extend them, and to generate new knowledge.

To ensure reproducibility, researchers must use transparent and rigorous methods, document their procedures and data, and make their data and code openly available to other researchers. This helps to reduce the likelihood of errors, bias, or other factors that could affect the validity and reliability of research findings.

## (Option 1) My solution

I use this script to set up core shielding on my i7 12700k for benchmarking purposes. This ensures that the variance is typically less than 0.5% with performance, which is in line with expectations (as recommended by [LLVM](https://llvm.org/docs/Benchmarking.html)).

While it's possible to turn off power-saving features and disable cores from the terminal, I prefer to do it in the BIOS for greater control. You can use this script to enable core shielding directly, but don't worry if it doesn't work – the shields are reset on reboot in case it doesn't.

Overall, this script helps to ensure more accurate and reliable benchmarking results by optimizing the CPU for testing purposes.

```bash
#!/bin/bash
​
# Ref: https://llvm.org/docs/Benchmarking.html
​
if [ "$EUID" -ne 0 ]
  then echo "Please run this script as root"
  exit
fi
​
#
# 1. Disable Address Space Randomization
#
​
echo 0 > /proc/sys/kernel/randomize_va_space
​
#
# 2. Set scaling_governor to performance, by default it is powersave
# https://docs.oracle.com/cd/E37670_01/E36387/html/ol_aslr_sec.html
#
​
function setgov ()
{
    echo "$1" | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor 
}
​
setgov performance 
​
#
# 3. Shield specific cpu cores, if this throws an error there might be existing cpu sets,
#	deleting existing cpu sets is safe and does not cause any adverse affects 
#	(NOTE, cpuset 'root' will always exist and cannot be deleted)
#	other cpusets can be deleted using 'sudo cset set -d docker', where docker is the name of the cpuset
#
​
cset shield -c 0-7 -k on
​
# Print the cpusets
echo "=== available cpusets after shielding, there should be root, system and user ==="
cset set
​
#
# 4. Disable SMT (Simultaneous Multi Threading), better to disable it in the bios
#
​
# echo 0 > /sys/devices/system/cpu/cpuX/online
​
#
# 5. Disable turbo boost, better to disable it in the bios
#
​
# echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo

```


You can now run your programs in the shielded cores using.

```
# Can also use perf to get more reliable measurements
cset shield --exec -- perf stat -r 10 <cmd>
```

## (Option 2) Rebench

ReBench is a powerful and versatile tool that can be used to automate benchmark experiments and document the results. While it is primarily used for benchmarking language implementations, it can also be used to monitor the performance of a wide range of other applications and programs.

With ReBench, you can easily define and execute benchmark experiments, analyze and visualize the results, and compare the performance of different versions of your code. This makes it a valuable tool for optimizing the performance of your applications and ensuring that they meet your performance goals.

Whether you're developing software for scientific computing, data analytics, machine learning, or any other field, ReBench can help you achieve more accurate and reliable benchmarking results, and ultimately improve the performance of your code.

### Rebench Denoise

It also features a denoise feature to reduce the system noise by using core shielding and other Linux Features.

Denoise is a powerful tool that can be used to configure a Linux system for benchmarking purposes. By adapting the parameters of CPU frequency management and task scheduling, Denoise helps to reduce some of the variability that can lead to widely different benchmark results for the same experiment.

Inspired by Krun, Denoise focuses on providing a streamlined and self-contained solution that adapts a subset of the parameters to minimize external dependencies. While Krun offers a broader range of features to carefully minimize possible interference, Denoise provides an easy-to-use alternative that can still help to achieve more reliable benchmark results.

Whether you're running benchmark experiments for scientific computing, machine learning, or any other field, Denoise can help to optimize your system for testing purposes and ensure that your results are more accurate and reproducible.

### SOURCES

__source 1__: [Rebench](https://github.com/smarr/ReBench)


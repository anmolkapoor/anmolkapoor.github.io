---
layout: post
title: Kullback-Leibler Divergence Explained
read_minutes: 3
---
This post is about comparing two probablistic distributions and the measure of loss of infromation that will happen if one is represented by other. In real world, proabibilty distributions depicts the probability of different variables that can be taken by a variable. For this example, we will consider probability distribution of decrete values of a variable. To relate to a situation lets go through an example.

Suppose in galaxy far far away, R2D2 was given a task by princess <#todo> to store th plans for the death star. These plans are the possible positions of the target quardrant, firing on which can detroy death star. Pricess gives the task to R2D2 to transmit this information to the rebels. 

The data looks like this:

The above data is about 6 mutually exculsive places and their success count (each instanc)

In its escape, R2D2 damages its superior communication ability and moved down to transmit only 2 variables of information. Luckily it these two variables are enough to transmit two other well known proabability distributions : Descrete Uniform distribution and Binomial distribution

Discrete Uniform distrubtion, which is well understood by the rebels show
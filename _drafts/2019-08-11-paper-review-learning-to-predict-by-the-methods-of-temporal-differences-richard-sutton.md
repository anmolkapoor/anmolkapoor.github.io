---
layout: post
title:  "#Paper Review : Learning to predict by the methods of temporal differences - Richard S. Sutton"
read_minutes: 3
side_bar_image: /public/images/header_1.jpg
one_liner: Research paper review and code implementation for Random walk example by Richard S. Sutton
project_github_repo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data
mathjax: true
research_paper_on_page: 1TckfsM3KlkG140dztd8OggNnJyRxPpMh
#project_live_demo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data

---

In the article, “Learning to Predict by the Methods of Temporal Differences”, Richard S.Sutton introduced Temporal Difference Learning and TD(λ) family of learning Procedures. In this research paper review, we will reproduce the results presented in the paper. We will discuss the experiments, graphs and their results. We will compare and correlate our results with the original paper.

# Single Step and Multi Step Problem
Prediction problems can be distinguish in two broad categories, single-step and multi-step. In single-step
prediction problems, all information about the event and its prediction are revealed at once. In this case, we have
data in the form of and where is the event responsible and is outcome x z x z or prediction.
In multi-step, an experience or episode is witnessed as series of events and then a combined outcome. In these
problems experience comes in the observation-outcome sequences of the form $$x_1, x_2, x_3 ...x_m, z$$ , where
each x t is a vector of observations available at time t in the sequence, and z is the outcome of the sequence.
For each of the sequences, the goal is to generate a sequence of predictions P 1 , P 2, P 3, ... P m each of
which is an estimate of z . Let's assume these predictions are based on weights vector w .

In simple view the update to the weight w can be written as:
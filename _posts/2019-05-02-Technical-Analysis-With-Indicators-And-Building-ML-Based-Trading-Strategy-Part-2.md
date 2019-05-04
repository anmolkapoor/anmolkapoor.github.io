---
layout: post
title: Technical Analysis with Indicators and building a ML based trading strategy (Part 2 of 2)
read_minutes: 4
one_liner: Part 2 of the Technical indicator series with quick introduction to technical indicators and building and comparing a strategy based on technical indicators.
project_github_repo: https://github.com/anmolkapoor/building-ml-trading-strategy-using-decision-tree-with-bagging
#project_live_demo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data
side_bar_image: /public/images/header_4.jpg
---
Part 2 of the Technical indicator series with quick recap of technical indicators, formulating trading problem as machine learning problem and comparative analysis between benchmark, manual rule based strategy and machine learning strategy

A quick recap from the last post, we established, technical indicators as heuristic based on the price, volume, or open interest of a security or contract. By analysing historical data, technical analysts use indicators to predict future price movements. Using these predictions, analysts create strategies that they would apply to trade a security in order to make profit. We looked upon three such indicators : Simple Moving average, Momentum and Bollinger Bands®. We created a rule based manual strategy strategy and checked it portfolio performance.

In this post, we will be discussing:
* Understanding Random Decision Tree and Bagging.
* How to formulate the trading problem as machine learning problem.
* Train our machine learning model and create a machine learning strategy called as StrategyLearner.
* Comparative Analysis of Benchmark, Manual Strategy and Strategy Learner.

## Decision Trees and Bagging
Decision tree is a type of supervised learning algorithm (having a pre-defined target variable) that is mostly used in classification problems. It works for both categorical and continuous input and output variables. In this technique, we split the population or sample into two or more homogeneous sets (or sub-populations) based on most significant splitter / differentiator in input variables.
Types of decision tree is based on the type of target variable we have. It can be of two types:
* Categorical Variable Decision Tree: Decision Tree which has categorical target variable then it called as categorical variable decision tree. E.g.:-  Target variable was "Is it raining today" i.e. YES or NO.
* Continuous Variable Decision Tree: Decision Tree has continuous target variable then it is called as Continuous Variable Decision Tree.
 
[![Decision Tree](https://github.com/anmolkapoor/building-ml-trading-strategy-using-decision-tree-with-bagging/raw/master/images/decision_tree.png)](https://github.com/anmolkapoor/building-ml-trading-strategy-using-decision-tree-with-bagging/raw/master/images/decision_tree.png)

#### Advantages :
* Easy to Understand
* Easy to generate rules

#### Disadvantages:
* May suffer from overfitting.
* Classifies by rectangle partitioning.
* Can be quite large, pruning is necessary.


### Bagging or Bootstrap Aggregation
Bootstrap aggregating, also called bagging, is a machine learning ensemble meta-algorithm designed to improve the stability and accuracy of machine learning algorithms used in statistical classification and regression. It also reduces variance and helps to avoid overfitting. Although it is usually applied to decision tree methods, it can be used with any type of method. Bagging is a special case of the model averaging approach.

### Random Decision Trees
Algorithms to create decision trees try to choose and split the feature which divides into 2 segments with maximum information gain. Information gain calculation can be complex compute problem which can increase the training time when using multiple decision trees in bagging. For our strategy we will be using Random Decision Trees, which at every step randomly chooses the feature to split on during training. This much faster and can give almost similar accuracy when bagged with multiple such random decision trees.
 

## Steps to frame the trading problem as machine learning problem
For a learning problem, the system should have a train and a test scenario. I have used the BagLearner (leaf_size =5, bags=20) with RTLearner for my StrategyLearner.

To frame the training procedure, following steps were taken:
1. Get Symbol data using Utility for in-sample period.
2. Get values for the Indicators for the prices.
3. Combine to form X_train data set.
4. With a chosen N value, create Y_train data set. Using price change ratio: 

 > price_change = (price[t+N] - price[t] ) / price[t]

Classify into:
* +1 or “LONG” for day = t
* -1 or “SHORT” for day = t
* 0 or “CASH” in case non of a) and b)

5. Train BagLearner using X_train and Y_train data with addEvidence procedure.

To frame the test procedure, following steps were taken:
1. Get Symbol data using Utility for out-sample period.
2. Get values for the Indicators for the prices.
3. Combine to form X_test data set.
4. Test and generate Y_test using query procedure over BagLearner.
5. Convert +1, -1 and 0 to trades with portfolio position always +1000, 0 or -1000.

Quick Recap of Indicators used:

##### 1. Simple Moving Average (SMA)
SMA is the moving average calculated by sum of adjusted closing price of a stock over the window and diving over size of the window.

> SMA[t] = price[t − N: t] . mean()

##### 2. Momentum
Momentum refers to the rate of change in the adjusted close price of the s. It can be calculated :
> Momentum[t] = (price[t] / price[t − N])-1

##### 3. Bollinger Bands®
Bollinger Bands (developed by John Bollinger) is the plot of two bands two sigma away from the simple moving average. They can be calculated as:

> upper_band = sma + standard_deviation * 2 
> lower_band = sma - standard_deviation * 2 

### Comparative analysis
For all three : StrategyLearner, ManualStrategy and Benchmark
* Sample data used is in-sample data from January 1,2008 to December 31, 2009
* Start value as 100000.
* Impact used as 0.00 and Commission used as 0.00
* Benchmark if we buy 1000 JPM shares and hold them throughout the period.

For StrategyLearner, parameters:
* BagLearner with RT Learner. Bags = 20
* RTLearner, leaf_size = 5
* Mode was used in RTLearner at leaves.
* Mode was used in BagLearner to take vote between all RTLearner in the bag



[![Results Image](https://github.com/anmolkapoor/building-ml-trading-strategy-using-decision-tree-with-bagging/raw/master/images/experiment_1_graph.png)](https://github.com/anmolkapoor/building-ml-trading-strategy-using-decision-tree-with-bagging/raw/master/images/experiment_1_graph.png)
As we can see from the plot, Manual Strategy is little better than Benchmark, but Strategy learner using machine learned strategy is able to outperform. Statistical results comparing the three:


||Benchmark| ManualStrategy| StrategyLearner|
|---|---|---|---|
| Cumulative return|0.0123|0.4641|2.4648|
|Standard Deviation|0.017004|0.012419|0.007978|
|Average Daily Return|0.000168|0.000833|0.002500|
|Final Portfolio Value|101,230.00|146,410.00|346,480.00|

This concludes our series of introduction to technical indicators, creating a manual rule base strategy using them and creating a ML based strategy to learn those rules. At every step we compared and analyse our strategies and their performance.



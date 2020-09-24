---
layout: post
title:  "#Notes: Proving Exact 4-SAT problem as NP Complete"
read_minutes: 2
side_bar_image: /public/images/header_1.jpg
one_liner: ""
#project_github_repo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data
#mathjax: true
#research_paper_on_page: 1TckfsM3KlkG140dztd8OggNnJyRxPpMh
#project_live_demo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data

---


## Problem : Exact 4-SAT

### Statement : 

In the Exact 4-SAT problem, the input is a set of clauses, each of which is a disjunction of exactly four literals, and such that each variable occurs at most once in each clause. The goal is to find a satisfying argument, if one exists. Prove that Exact 4-SAT is NP-complete. 

[Reference - DPV 8.8](http://algorithmics.lsi.upc.edu/docs/Dasgupta-Papadimitriou-Vazirani.pdf) 

### Solution:

We will try to solve the problem by proving EXACT-4-SAT problem as NP Complete in following steps:



1. **EXACT-4-SAT problem is NP Problem.**

    _Argument_ →  For a given solution _S_ of the problem, for each clause, it will take _O(1)_ time to verify if any one literal of the clause is satisfied, and we will check for all _m_ clauses. Thus in _O(m)_ time we can verify the solution _S_ which is in polynomial time.



2. **EXACT-4-SAT problem is as hard as the 3-SAT problem. We will apply reduction 3-SAT → EXACT-4-SAT.**
    1. _Input to 3-SAT can be converted into input to EXACT-4-SAT in polynomial time._

        _Argument_ → We can convert the input of 3-SAT problem by taking the following action for each clause length - 


        if  clause length is 3, we can replace it by new clauses with one more variable _x<sub>1</sub>_


        _(a∨ b∨ c) → (a∨ b∨ c∨ x<sub>1</sub>) ∧ (a∨ b∨ c∨ ~x<sub>1</sub>)          ---- (1)_


         If clause length is 2, we can use 2 new variables and replace the clause by 4 new clauses. 


        _(a∨ b) → (a∨ b∨ x<sub>1</sub>∨ x<sub>2</sub>) ∧(a∨ b∨ x<sub>1</sub>∨ ~x<sub>2</sub>) ∧(a ∨ b∨~x<sub>1</sub>∨x<sub>2</sub>)∧ (a∨ b∨ ~x<sub>1</sub>∨ ~x<sub>2</sub>)   --- (2)_


        For length 1, we can use 3 new variables and replace by 8 new clauses.


        _(a) → (a∨x<sub>1</sub>∨x<sub>2</sub>∨x<sub>3</sub>) ∧ (a∨x<sub>1</sub>∨x<sub>2</sub>∨~x<sub>3</sub>) ∧ (a∨x<sub>1</sub>∨~x<sub>2</sub>∨x<sub>3</sub>) ∧ (a∨x<sub>1</sub>∨~x<sub>2</sub>∨~x<sub>3</sub>) ∧ (a∨~x<sub>1</sub>∨x<sub>2</sub>∨x<sub>3</sub>) ∧ (a∨~x<sub>1</sub>∨x<sub>2</sub>∨~x<sub>3</sub>) ∧ (a∨~x<sub>1</sub>∨~x<sub>2</sub>∨x<sub>3</sub>) ∧ (a∨~x<sub>1</sub>∨~x<sub>2</sub>∨~x<sub>3</sub>)     ----- (3)_


        Each of clause _C_ can be converted into new clause C<sub>1</sub> in polynomial time _O(n)_ and we have _m_ such clauses. Thus we can convert into _O(nm)_, which is polynomial time.

    2. _Solution to the EXACT-4-SAT problem can be converted to solution for 3-SAT in polynomial time_.

        _Argument_ → For the solution found _S_, for EXACT-4-SAT problem, we can convert to solution of 3-SAT by simply dropping the extra new variables from each clause that we added in _step(a)._ This can be done in polynomial time as well as we have _m_ clauses, and constant time to remove the extra variables added - _O(m)_

    3. _Solution to EXACT-4-SAT exists iff solution to 3-SAT problem._

        Argument →  We can prove that if there is a solution to EXACT-4-SAT solution then there is a solution to 3-SAT problem and vice versa. 


        If we check for clause _(1)_ , if the EXACT-4-SAT is true, that is _(a∨ b∨ c∨ x<sub>1 </sub>) ∧ (a∨ b∨ c∨ ~x<sub>1 </sub>)_ is true, the reduced clause for 3-SAT _(a∨ b∨ c)_ will always be true as value for new variable _x<sub>1</sub>_ can be either True or False, which satisfies either one of the clauses. 


        We can also prove that if _(a∨ b∨ c)_ is satisfied, then by adding a new variable _x<sub>1</sub>_, the clause _(a∨ b∨ c∨ x<sub>1</sub>) ∧ (a∨ b∨ c∨ ~x<sub>1</sub>)_ will be true as well, as value of _x<sub>1</sub>_ can be either True or False, which will satisfy either of one of the clause, thus satisfying the clause.


        We can do similar exercise for --(2) and --(3) clauses.


        Thus, Solution to EXACT-4-SAT exists iff solution to 3-SAT problem.


**Thus EXACT-4-SAT is a NP Complete problem.**

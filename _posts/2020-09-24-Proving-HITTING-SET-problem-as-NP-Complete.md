---
layout: post
title:  "#Notes: Proving HITTING SET problem as NP Complete"
read_minutes: 3
side_bar_image: /public/images/header_1.jpg
one_liner: ""
#project_github_repo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data
#mathjax: true
#research_paper_on_page: 1TckfsM3KlkG140dztd8OggNnJyRxPpMh
#project_live_demo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data

---


## Problem : HITTING SET

### Statement : 

In the HITTING SET problem, we are given a family of sets _{S<sub>1</sub>, S<sub>2</sub>, . . . , S<sub>n</sub>}_ and a budget _b_, and we wish to find a set _H_ of size _≤ b_ which intersects every _S<sub>i</sub>_ , if such an _H_ exists. In other words, we want _H ∩ S<sub>i</sub> ≠ ∅_ for all i. Show that HITTING SET is NP-complete.  

[Reference - DPV 8.19](http://algorithmics.lsi.upc.edu/docs/Dasgupta-Papadimitriou-Vazirani.pdf) 

### Solution:

We will try to solve the problem by proving HITTING SET problem as NP Complete in following steps:



**1. HITTING SET problem is NP Problem.**

_Argument_ →  For a given solution _H_ of the problem, we can check if size _`|H|`≤ b_ and that _H ∩ S<sub>i</sub> ≠ ∅._ Since we can find out the intersection between sets in _O(n<sup>2</sup>)_ time by checking each element of one set in another, to compare _m_ sets it will take total _O(mn<sup>2</sup>)_ time, which is in polynomial time. 



2. HITTING SET problem is as hard as the VERTEX COVER problem. We will apply reduction VERTEX COVER → HITTING SET.
    1. _Input to VERTEX COVER can be converted into input to HITTING SET in polynomial time._

        _Argument_ → Formally VERTEX COVER problem is given a graph _G(V,E)_, we need to find a subset of vertices _V'_ such that for _`|V'|` ≤ k_ and all edges _e =u,v  ∈ E , u ∈ V' ∨ v ∈ V'_ .


        For every edge _e = (u,v)_ we can construct a Set _S<sub>e</sub> = {u,v}_ , we will have total number of set _`|S|` = `|E|` = m_ and we set budget _b = k_.


        The construction of the set will take _O(`|E|`)_ time, which is in polynomial time.


		



    2. _Solution to the HITTING SET problem can be converted to solution for VERTEX COVER in polynomial time_.

        _Argument_ → The solution of HITTING SET will give a set _H_, such that _`|H|` ≤ b._ The set _H_ can be taken as a set of vertices of graph _G(V,E)_ as _V'_, which has size _≤ k ( as b = k)_. Thus the solution of HITTING SET can be converted to solution to VERTEX COVER directly ( in _O(1)_ which is polynomial time).

    3. _Solution to  HITTING SET exists iff solution to VERTEX COVER problem._

        Argument →  We can prove that if there is a solution to VERTEX COVER solution then there is a solution to HITTING SET problem and vice versa. 


        Let _V'_ be the vertex cover for _G(V,E)_ of size _`|V|`≤ k_. Thus for every edge _e = (u,v), either u ∈ V' or v ∈ V'_. For edge _(u,v)_ we have constructed the set _S<sub>e</sub>_ = _{u,v}_ , thus _S<sub>e</sub> ∩ V'  ≠ ∅_. Thus, we have found a set _V'_ such that it intersects every set S<sub>e</sub>. Hence if we take _V' = H,_ we have found solution to the HITTING SET problem.


        Lets _H ( `|H|` ≤ b)_   be a solution to a family of sets _{S<sub>1</sub>, S<sub>2</sub> .. S<sub>m </sub>}_ for HITTING SET problem. That means that for every set _S<sub>e</sub> , S<sub>e</sub> ∩ H  ≠ ∅,_ means there _H_ has at least one element of the set _S<sub>e</sub>_. If we consider _S<sub>e</sub>_ as a set containing edge vertices _u_ and _v_, such at _e = (u,v) e ∈ E, u,v ∈ V_ for a graph _G(V,E)_, the set _H_ has vertices _h ∈  V_ such that at least one member of _S<sub>e</sub>_ is present in _H_. Thus _H_ is a solution for the VERTEX COVER problem for graph _G(V,E)_.


        Thus, Solution to VERTEX COVER exists iff solution to HITTING SET  problem.


Thus HITTING SET  is a NP Complete problem.


---
layout: post
title:  "#Notes: Proving CLIQUE-IS problems as NP Complete"
read_minutes: 2
side_bar_image: /public/images/header_1.jpg
one_liner: ""
#project_github_repo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data
#mathjax: true
#research_paper_on_page: 1TckfsM3KlkG140dztd8OggNnJyRxPpMh
#project_live_demo: https://github.com/anmolkapoor/project-technical-analysis-using-indicators-on-stock-data

---


## Problem : CLIQUE-IS

### Statement : 

Given an undirected graph G = (V, E) and an integer k, return a clique of size k as well as an independent set of size k, provided both exist.  

[Reference - DPV 8.14](http://algorithmics.lsi.upc.edu/docs/Dasgupta-Papadimitriou-Vazirani.pdf) 

### Solution:


We will try to solve the problem by proving CLIQUE-IS problem as NP Complete in following steps:



1. _CLIQUE-IS problem is NP Problem._

    _Argument_ →  Lets assume for graph _G(V,E)_ and _k_, we have given solution as _C_ clique and _S_ as the independent set. We can verify in _O(1)_ that _`|C|` = `|S|` = k_, _O(n<sup>2</sup>)_ to check each pairs of vertices of _C_ are connected to each other ie edge _e = (u,v) and e ∈ E_, and _O(n<sup>2</sup>)_ to check no pair of vertices are connected in given set _S_ ie _e' = (u,v) ∉ E ._



2. CLIQUE-IS problem is as hard as CLIQUE problem. We will apply reduction CLIQUE → CLIQUE-IS.
    1. _Input to CLIQUE can be converted into input to CLIQUE-IS in polynomial time._

        _Argument →_ CLIQUE takes input graph graph _G(V,E)_ and parameter _k_. To convert input of CLIQUE into CLIQUE-IS, we will create a graph _G'(V',E)_ which is a copy of the given graph _G(V,E)_. We also will add a set of _S_ vertices, such that _`|S|` = k_ to this graph. No new edges are added. 


        Thus we will have a graph with all vertices and edges of _G(V,E)_ , and a independent set of vertices _S (`|S|`=k)_ .


        The new graph _G'_ can be created in _`O(|V|+|E|)`_ time and new vertices can be added in _O(`|S|`)_ time, thus input can be converted in polynomial time.

    2. _Solution to CLIQUE-IS problem can be converted to solution for CLIQUE in polynomial time._

        _Argument_ → The solution of the CLIQUE-IS will result in a clique _C_ of size _k_ and set of independent vertices _S_ of size _k_. This solution can be directly mapped to the solution of CLIQUE problem, which is to find a clique of _size_ _≥ k_ , as a solution with the clique of _size = k_ is a solution to CLIQUE problem. 


        This can be done by dropping the independent vertices of _S_ from the graph _G'(V',E)_ , thus the result is applicable to the given graph G(V,E). This can be done in _O(`|S|`)_ time, which is polynomial.

    3. _Solution to CLIQUE-IS exists iff solution to CLIQUE problem._

        _Argument_ →  From the given graph _G(V,E_) , we have created graph _G'(V',E)_ with no new edges. We added only independent set of vertices _S_ to the graph.


        Thus, if there exists a clique _C_ in graph _G'(V',E),_ it will exist in the given graph _G(V,E)_ as the new added vertices are not connected to any edge, hence are not part of the clique set _C_. Solution of _CLIQUE-IS → CLIQUE_


        Also, if there does not exists a clique in graph _G'(V',E)_, there cannot exist a clique in the given graph _G(V,E)_ as the edges in both graphs are the same and no new vertices are connected. Thus _!CLIQUE-IS → !CLIQUE._


        Thus, Solution to CLIQUE-IS exists iff solution to CLIQUE problem.


Thus CLIQUE-IS is a NP Complete problem.


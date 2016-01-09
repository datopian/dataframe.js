A Javascript-only data library providing functionality like DataFrame in Pandas or R.

Context: we built something like this in Recline with the Dataset object. There's also the work in Miso -- who, Rufus personally thinks did the Dataset object a bit better. But IMO neither Recline or Miso got it quite right. It's time to look at this again for a Recline v2.

Context: Tabular Data Packages. There is also a connection with Tabular Data Packages and JSON Table Schema. In particular, the provision of a Tabular Data Package and JSON Table Schema javascript library. In particular, the tabular data in a Tabular Data Package Resource need to be held in some kind of rich javascript object and this library would be a good vehicle.

## Research

* Pandas - Pandas is probably the best starting point because it is the most recent and best implementation. In particular, it synthesized the existing work in R, MatLab and made it a bit better and did it in python which has a very nice default coder interface.
  * Pandas Data Structures: http://pandas.pydata.org/pandas-docs/stable/dsintro.html
  * Comparison with R: http://pandas.pydata.org/pandas-docs/stable/comparison_with_r.html
  * Some early thoughts on design from 2011: http://wesmckinney.com/blog/a-roadmap-for-rich-scientific-data-structures-in-python/
* I've looked for people already doing this in JS and can't find a lot
  * https://github.com/real-serious-games/data-forge-js
* https://www.quora.com/Is-there-a-data-handling-library-like-Python-Panda-for-JavaScript
  * http://learnjsdata.com/ - mainly uses d3 data manipulation capabilities
  * https://github.com/agershun/alasql

## A Full Stack Data 

Propose a 3-part stack:

* DataFrame object for holding "rows" of data
  * Might add a Dataset (or DataPackage) object as a way to represent an overall Dataset with metadata and possibly multiple DataFrames (plus 
* DataViews - data presentation (grids, graphs etc). Largely handled by third party libraries.
* DataQuery - querying data efficiently, storing and reifying queries.  <-- not sure about this one as needed separately from e.g. DataFrame
* DataConnector - data import / export 


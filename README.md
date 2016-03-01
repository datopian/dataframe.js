A Javascript-only data library providing functionality like DataFrame in Pandas or R.

Context: we built something like this in Recline with the Dataset object. There's also the work in Miso -- who I personally thinks did the Dataset object a bit better. But IMO neither Recline or Miso got it quite right. It's time to look at this again for a Recline v2.

There's also a connection with [Tabular Data Packages and JSON Table Schema][tdp] and associated tooling such as the various Data Package javascript libraries. The tabular data in a Tabular Data Package Resource, when manipulated in javascript will need to be stored in some kind of structured javascript object and this DataFrame could be a good vehicle.

[tdp]: http://data.okfn.org/standards

## Research

* Pandas - Pandas is probably the best starting point because it is the most recent and best implementation. In particular, it synthesized the existing work in R, MatLab and made it a bit better and did it in python which has a very nice default coder interface.
  * Pandas Data Structures: http://pandas.pydata.org/pandas-docs/stable/dsintro.html
  * Comparison with R: http://pandas.pydata.org/pandas-docs/stable/comparison_with_r.html
  * Some early thoughts on design from 2011: http://wesmckinney.com/blog/a-roadmap-for-rich-scientific-data-structures-in-python/
* R and its lists and data frames: https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Data-frames
* I've looked for people already doing this in JS and can't find a lot e.g.
  * https://github.com/real-serious-games/data-forge-js
* https://www.quora.com/Is-there-a-data-handling-library-like-Python-Panda-for-JavaScript
  * http://learnjsdata.com/ - mainly uses d3 data manipulation capabilities
  * https://github.com/agershun/alasql - nice but more an SQL query interface

*Suggestions welcome: please open pull requests or issues*

## What is the Full Stack for Data 

DataFrame only covers a part of the "data stack":

* DataFrame object for holding "rows" of data
  * Might add a Dataset (or DataPackage) object as a way to represent an overall Dataset with metadata and possibly multiple DataFrames (plus other info)
* DataQuery - querying data efficiently, storing and reifying queries.  &laquo; not sure about this one as needed separately from e.g. DataFrame
* Connectors - data import / export from other sources ranging from CSV to RDBMS and more. Again probably not part of DataFrame but separate libraries. This is a particular area where the connection with Tabular Data Package and JSON Table Schema is strong

There is of course lots of other stuff in the "data stack" such as the following:

* Views / Visualization - data presentation (grids, graphs etc). Largely handled by third party libraries.
* Validation
* Analytics
* ETL
* etc

These might use DataFrame but they are not specifically in DataFrame.


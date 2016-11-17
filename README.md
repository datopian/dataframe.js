Javascript-only data library providing functionality like DataFrame in Pandas or R.

**This project is at discussion stage - please leave comments and suggestions.**

## Key Features

See also https://github.com/rgrp/dataframe.js/issues/3

* Access rows and fields within rows quickly and easily using a convenient syntax e.g. `dataset[rowid]`, `dataset[rowid][fieldid]` -- preferably both dictionary and index style access
* Query data and "freeze" it to a new DataFrame
* Import data into a DataFrame from common sources and especially Tabular Data Packages ... (if possible do this without re-inventing the wheel by leveraging work elsewhere)
* Be able to cope with large amounts of data e.g. 100k or 1m row CSV (see [issue #6][iss-6] for discussion)

```
var d = DataFrame(data-source or raw data)
// first row of data
d[0]
// data fields / columns
d.fields

d.query(querySpec)
```

[iss-6]: https://github.com/rgrp/dataframe.js/issues/6

## Context

Context: I built something like this before with [Recline][] and its [Dataset object][recline-dataset]. There's also the work in [Miso][] who did a very nice job on the Dataset object. However, neither Recline or Miso got it quite right. It's time to look at this again.

There's also a connection with [Tabular Data Packages and JSON Table Schema][tdp] and associated tooling such as the various Data Package javascript libraries. Manipulating the tabular data from a Tabular Data Package in javascript will need some kind of library and object and a DataFrame library could provide this.

[Recline]: http://okfnlabs.org/recline/
[recline-dataset]: http://okfnlabs.org/recline/docs/models.html
[Miso]: http://misoproject.com/dataset/
[tdp]: http://data.okfn.org/standards

## Research

* [Pandas][] - Pandas is probably the best starting point because it is the most recent and best implementation. In particular, it synthesized the existing work in R, MatLab and made it a bit better and did it in python which has a very nice default coder interface.
  * Pandas Data Structures: http://pandas.pydata.org/pandas-docs/stable/dsintro.html
  * Comparison with R: http://pandas.pydata.org/pandas-docs/stable/comparison_with_r.html
  * Some early thoughts on design from 2011: http://wesmckinney.com/blog/a-roadmap-for-rich-scientific-data-structures-in-python/
* R and its lists and data frames: https://cran.r-project.org/doc/manuals/r-release/R-intro.html#Data-frames
* I've looked for people already doing this in JS and can't find a lot e.g.
  * https://github.com/real-serious-games/data-forge-js
* https://www.quora.com/Is-there-a-data-handling-library-like-Python-Panda-for-JavaScript
  * http://learnjsdata.com/ - mainly uses d3 data manipulation capabilities
  * https://github.com/agershun/alasql - nice but more an SQL query interface
* Other javascript libraries (there are quite a few) ...
  * http://vega.github.io/datalib/ - data library abstracted out of vega. Quite a variety of features ranging from group-by and stats to general JS utilities

*Suggestions welcome: please open pull requests or issues*

[Pandas]: http://pandas.pydata.org/

### Existing Libraries in Javascript

See this issue: https://github.com/rgrp/dataframe.js/issues/5

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

## Contributing

We use mocha for testing, install it as follows:
    
    npm install -g expect.js
    npm install -g mocha

Then to run tests:
    
    mocha

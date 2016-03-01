dataframe = {
    'version': '0.0.1',
    'Series': function(data, index){
        this._data = data;
        this.index = index || Object.keys(data);
        return this; 
    },
}

module.exports = dataframe;
class Sort{

    constructor(sortForm,sortOuput,sortValue){
        this.sortForm = sortForm || '';
        this.sortOuput = sortOuput;
        this.sortValue = sortValue || '';
    }
    getData(){
        var outputData,sortQuery;
        if (this.sortValue != null && this.sortValue != ''){
            sortQuery = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${this.sortValue}`
            console.log(sortQuery);
            return sortQuery;
        }
        else{
            return console.log(false);
        }
    }
}


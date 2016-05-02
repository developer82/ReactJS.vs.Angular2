import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl : './app/templates/app.component.html'
})
export class AppComponent {
    
    private _size : Number = 50;
    private _refreshRate : Number = 50;
    MyArr = this.populateArray(this._size);
    
    constructor() {
        var that = this;
        setInterval(function() {
            that.refreshArray();
        }, this._refreshRate);
    }
    
    private refreshArray() {
        this.MyArr = this.populateArray(this._size);
    }
    
    private populateArray(size: Number) {
        var arr = new Array();
        for (var i = 0; i < size; i++) {
            var subArr = new Array();
            for (var j = 0; j < size; j++) {
                var num = this.getRandomInt(1, 100);
                subArr.push(num)
            }
            
            arr.push(subArr);
        }
        return arr;
    }
    
    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }   
}
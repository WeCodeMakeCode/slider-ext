/**
* A slider with track and thumb
*/
//% weight=100 color=#008080
//% groups='["Create", "Actions", "Properties"]'
namespace slider {
    //% blockId=sliderCreate block="slider with value %value minimum %minimum maximum %maximum || width %width height %height"
    //% value.defl=50
    //% min.defl=0
    //% max.defl=100
    //% width.min=30 width.max = 160 width.defl=100
    //% height.min=2 height.max = 10 height.defl=6
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=mySlider
    //% weight=100
    //% group="Create"
    export function create(value: number = 50,
        min: number = 0, max: number = 100, width:number = 160, height:number = 10): Slider {
        return new Slider(value, min, max, width, height);
    }
}

//% blockNamespace=slider color="#008080" blockGap=8
class Slider {
    private track: Sprite;
    private track_img: Image;
    private thumb: Sprite;
    private thumb_img: Image
    private _value: number;
    private _min: number;
    private _max: number;
    private _width: number;
    private _height: number;
    private _left: number;
    private _top: number;
    private _x:number;
    private _y:number;
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="value"
    get value(): number {
        return this._value;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="value"
    set value(value: number) {
        this._value = Math.min(Math.max(value, this._min), this._max);
        this.calc_value();
    }
    private calc_value(){
        this._value = Math.min(Math.max(this._value, this._min), this._max);
        this.thumb.left = this._left + this._width * this._value / (this._max - this._min);
        this.thumb.say(this._value.toString());
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="min"
    get min(): number {
        return this._min;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="min"
    set min(value: number) {
        this._min = value;
        this.calc_value();
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="max"
    get max(): number {
        return this._max;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="max"
    set max(value: number) {
        this._max = value;
        this.calc_value();
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="width"
    get width(): number {
        return this._width;
    }

    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="height"
    get height(): number {
        return this._height;
    }

    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="left"
    get left(): number {
        return this._left;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="left"
    set left(value: number) {
        this._left = value;
        this.make_slider();
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="top"
    get top(): number {
        return this._top;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="top"
    set top(value: number) {
        this._top = value;
        this.make_slider();
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="x"
    get x(): number {
        return this._x;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="x"
    set x(value: number) {
        this._x = value;
        this.make_slider();
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="y"
    get y(): number {
        return this._y;
    }
    //% group="Properties" blockSetVariable="mySlider"
    //% blockCombine block="y"
    set y(value: number) {
        this._y = value;
        this.make_slider();
    }


    //% block="set $color"
    //% color.shadow="colorNumberPicker"
    public track_color: number;
    //% block="set $thumb_color"
    //% color.shadow="colorNumberPicker"
    public thumb_color: number;

    constructor(value: number, min: number, max: number, width:number, height:number) {
        this._value = value;
        this._min = min;
        this._max = max;
        this._width = width;
        this._height = height;
        this._left = 30;
        this._top = 112;
        this.track_color = 5;
        this.thumb_color = 2;
        this.track_img = image.create(this._width, this._height);
        this.track = sprites.create(this.track_img);
        this.thumb_img = image.create(3, this._height);
        this.thumb = sprites.create(this.thumb_img);
        this.make_slider();
    }
    
    private make_slider() {
        this.track_img.fill(this.track_color);
        this.track.top = this._top;
        this.thumb_img.fill(this.thumb_color);
        this.thumb.top = this.track.top;
    }   
}
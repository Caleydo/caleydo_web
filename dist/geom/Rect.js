/**
 * Created by Samuel Gratzl on 27.12.2016.
 */
import { Vector2D } from '../2D/Vector2D';
import { AShape } from './AShape';
/**
 * a simple bounding rect
 */
export class Rect extends AShape {
    constructor(x = 0, y = 0, w = 0, h = 0) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    eq(that) {
        return this.x === that.x && this.y === that.y && this.w === that.w && this.h === that.h;
    }
    toString() {
        return `Rect(x=${this.x},y=${this.y},w=${this.w},h=${this.h})`;
    }
    get xy() {
        return new Vector2D(this.x, this.y);
    }
    get x2y2() {
        return new Vector2D(this.x2, this.y2);
    }
    get size() {
        return new Vector2D(this.w, this.h);
    }
    get cx() {
        return this.x + this.w / 2;
    }
    get cy() {
        return this.y + this.h / 2;
    }
    set cx(val) {
        this.x = val - this.w / 2;
    }
    set cy(val) {
        this.y = val - this.y / 2;
    }
    get x2() {
        return this.x + this.w;
    }
    get y2() {
        return this.y + this.h;
    }
    set x2(val) {
        this.w = val - this.x;
    }
    set y2(val) {
        this.h = val - this.y;
    }
    shiftImpl(x, y) {
        this.x += x;
        this.y += y;
    }
    aabb() {
        return this;
    }
    get center() {
        return new Vector2D(this.cx, this.cy);
    }
    transform(scale, rotate) {
        //TODO rotate
        return new Rect(this.x * scale[0], this.y * scale[1], this.w * scale[0], this.h * scale[1]);
    }
    asIntersectionParams() {
        return {
            name: 'Rectangle',
            params: [this.xy, this.x2y2]
        };
    }
    static rect(x, y, w, h) {
        return new Rect(x, y, w, h);
    }
}
//# sourceMappingURL=Rect.js.map
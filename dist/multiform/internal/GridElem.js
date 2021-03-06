/**
 * Created by sam on 26.12.2016.
 */
import { BaseUtils } from '../../base/BaseUtils';
import { DataUtils } from '../../data';
import { VisUtils } from '../../vis';
import { FormUtils } from './FormUtils';
/**
 * @internal
 */
export class GridElem {
    constructor(range, pos, data) {
        this.range = range;
        this.pos = pos;
        this.data = data;
    }
    setContent(c) {
        this.content = c;
        DataUtils.assignData(this.content, this.data);
    }
    subrange(r) {
        const ri = this.range.intersect(r);
        return this.range.indexOf(ri);
    }
    get hasOne() {
        return this.actVis != null;
    }
    destroy() {
        if (this.actVis && typeof (this.actVis.destroy) === 'function') {
            this.actVis.destroy();
        }
    }
    get size() {
        return this.actVis ? this.actVis.size : [100, 100];
    }
    get rawSize() {
        return this.actVis ? this.actVis.rawSize : [100, 100];
    }
    persist() {
        return {
            range: this.range.toString(),
            content: this.actVis && typeof (this.actVis.persist) === 'function' ? this.actVis.persist() : null
        };
    }
    restore(persisted) {
        //FIXME
        /*if (persisted.id) {
         var selected = search(this.visses, (e) => e.id === persisted.id);
         if (selected) {
         this.switchTo(selected).then((vis) => {
         if (vis && persisted.content && isFunction(restore)) {
         restore(persisted.content);
         }
         });
         }
         }*/
        return null;
    }
    switchDestroy() {
        //remove content dom side
        FormUtils.clearNode(this.content);
        if (this.actVis && typeof (this.actVis.destroy) === 'function') {
            this.actVis.destroy();
        }
        this.actVis = null;
    }
    build(plugin, options) {
        this.actVis = plugin.factory(this.data, this.content, options);
        VisUtils.assignVis(this.content, this.actVis);
        return this.actVis;
    }
    get location() {
        const o = BaseUtils.offset(this.content);
        return {
            x: o.left,
            y: o.top
        };
    }
    transform(scale, rotate) {
        if (this.actVis) {
            if (arguments.length > 0) {
                return this.actVis.transform(scale, rotate);
            }
            else {
                return this.actVis.transform();
            }
        }
        return {
            scale: [1, 1],
            rotate: 0
        };
    }
}
//# sourceMappingURL=GridElem.js.map
/**
 * Created by sam on 26.12.2016.
 */
import { IVisMetaData } from '../../vis/IVisMetaData';
/**
 * @internal
 */
export declare class ProxyMetaData implements IVisMetaData {
    private proxy;
    constructor(proxy: () => IVisMetaData);
    get scaling(): string;
    get rotation(): number;
    get sizeDependsOnDataDimension(): boolean[];
}

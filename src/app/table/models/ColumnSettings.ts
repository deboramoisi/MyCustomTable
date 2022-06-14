export default interface ColumnSetting {
    primaryKey: string;
    header?: string;
    format?: PipeFormat;
}
  
export enum PipeFormat {
    DEFAULT, 
    CURRENCY, 
    DATE, 
    PERCENTAGE, 
}
import {TableColumn} from "./index";

export const checkColKeys = (columns: Array<TableColumn>) => {
  let keys = new Set();
  columns.forEach(col => {
    if (!keys.has(col.key)) {
      keys.add(col.key);
    } else {
      throw new Error('Keys of table columns are not unique');
    }
  })
}
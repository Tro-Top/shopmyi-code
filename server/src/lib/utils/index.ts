import { database } from "firebase-admin";

export const snapshotToArray = (snapshot: any): any[] => {
  const ret: any = [];
  ret.push(snapshot);

  return ret;
};

import dataFile from "../data.json";
import fs from "node:fs/promises";
import { randomUUID } from "node:crypto";

export class Database {
  #data = {};
  constructor() {
    fs.readFile(dataFile, "utf-8").then((data) => {
      this.#tasks = JSON.parse(data);
    });
  }

  #return_response(isSuccess, returnValue) {
    return {
      isSuccess: isSuccess,
      returnValue: returnValue,
    };
  }

  #persist() {}

  select_all(table) {
    if (this.#data[table]) {
      return this.#return_response(true, this.#data[table]);
    }
    return this.#return_response(false, "Invalid table name");
  }

  insert(table, data) {
    if (this.#data[table]) {
      this.#data[table].push(data);
      this.#return_response(true, data);
    } else {
      return this.#return_response(false, "Invalid table name");
    }
  }
}

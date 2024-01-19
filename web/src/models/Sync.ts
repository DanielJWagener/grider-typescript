import axios, { AxiosPromise } from "axios";

interface IdModel {
  id?: string;
}

export class Sync<T extends IdModel> {
  constructor(public rootUrl: string) {}

  fetch(id: string): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}

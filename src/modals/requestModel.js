export class RequestModel {
  constructor({ data = {}, params = {}, headers = {} } = {}) {
    this.data = data;
    this.params = params;
    this.headers = headers;
  }
}

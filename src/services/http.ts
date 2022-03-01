import { sleep } from "../helpers/utils";

class HttpController {
  
  protocol: string = 'https';
  urlBase: string;
  authToken: string;

  async setAuthToken(authToken: string) {
    this.authToken = `Bearer ${authToken}`;
  }

  async setProtocol(protocol: string) {
    this.protocol = protocol;
  }

  async setUrlBase(url: string) {
    this.urlBase = `${this.protocol}://${url}`;
  }

  async getHttpHeaders() {

    let result = {};
    result['Content-Type'] = 'application/json';
    result['Authorization'] = this.authToken;
    
    return result;
  }

  async fetchWithRetry(uri: string, options: RequestInit, retries: number = 5, 
                       backoffMs: number = 500, customRetryCodes: number[] = [],
                       suppressEvents: boolean = false): Promise<Response> {

    let retryCodes = [500, 502, 503, 504, 522, 524];
    if (customRetryCodes) {
      retryCodes.push(...customRetryCodes);
    }

    let response = await fetch(uri, options);

    if (response.ok) {

      return response;
    }

    if (retries > 0 && retryCodes.includes(response.status)) {

      await sleep(backoffMs);

      return await this.fetchWithRetry(uri, options, retries - 1, backoffMs * 2);
    }
    else {

      if (!suppressEvents && response.status === 401) {
        let bodyElem = document.querySelector('body');
        // Publish unauthorized event
        bodyElem.dispatchEvent(new CustomEvent('userUnauthorized', { bubbles: true }));
      }

      return response;
    }
  }

  async get(resourceUri: string, customRetryCodes: number[] = [], suppressEvents: boolean = false) {

    return this.fetchWithRetry(`${this.urlBase}/${resourceUri}`, { 
      method: 'GET',
      headers: await this.getHttpHeaders()
    }, undefined, undefined, customRetryCodes, suppressEvents);
  }

  async post(resourceUri: string, body: any) {

    return this.fetchWithRetry(`${this.urlBase}/${resourceUri}`, {
      method: 'POST',
      headers: await this.getHttpHeaders(),
      body: JSON.stringify(body)
    });
  }

  async patch(resourceUri: string, body: any) {

    return this.fetchWithRetry(`${this.urlBase}/${resourceUri}`, {
      method: 'PATCH',
      headers: await this.getHttpHeaders(),
      body: JSON.stringify(body)
    });
  }

  async put(resourceUri: string, body: any) {

    return this.fetchWithRetry(`${this.urlBase}/${resourceUri}`, {
      method: 'PUT',
      headers: await this.getHttpHeaders(),
      body: JSON.stringify(body)
    });
  }

  async delete(resourceUri: string) {

    return this.fetchWithRetry(`${this.urlBase}/${resourceUri}`, {
      method: 'DELETE',
      headers: await this.getHttpHeaders()
    });
  }

}

export const HttpService = new HttpController();
import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async getAllResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailResto(restoId) {
    const response = await fetch(API_ENDPOINT.DETAIL(restoId));
    return response.json();
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestoDbSource;

import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoDbSource {
  static async getAllResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailResto(restoId) {
    const response = await fetch(API_ENDPOINT.DETAIL(restoId));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async insertReview(data = {}) {
    const response = await fetch(API_ENDPOINT.INSERT_REVIEW, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    if (!responseJson.error) {
      return responseJson.customerReviews;
    }

    return false;
  }
}

export default RestoDbSource;

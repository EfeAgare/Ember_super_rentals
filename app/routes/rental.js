import Route from "@ember/routing/route";

export default class RentalRoute extends Route {
  async model(params) {
    const COMMUNITY_CATEGORIES = ["Condo", "Townhouse", "Apartment"];

    let response = await fetch(`/api/rentals/${params.rental_id}.json`);

    let { data } = await response.json();
    let { id, attributes } = data;
    let type;

    if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
      type = "Community";
    } else {
      type = "Standalone";
    }

    return { id, type, ...attributes };
  }
}
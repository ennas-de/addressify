// Import the required data
import countriesData from "./countries";

// Define the Addressify class
class Addressify {
  constructor() {
    this.countries = countriesData;
  }

  // Get all countries
  getAllCountries() {
    return this.countries;
  }

  // Get states/regions for a country
  getStates(countryName) {
    const country = this.countries.find((c) => c.countryName === countryName);
    return country ? country.states : [];
  }

  // Get local governments for a state
  getLocalGovernments(countryName, stateName) {
    const country = this.countries.find((c) => c.countryName === countryName);
    if (country) {
      const state = country.states.find((s) => s.stateName === stateName);
      return state ? state.localGovernments : [];
    }
    return [];
  }

  // Get areas for a local government
  getAreas(countryName, stateName, localGovernmentName) {
    const country = this.countries.find((c) => c.countryName === countryName);
    if (country) {
      const state = country.states.find((s) => s.stateName === stateName);
      if (state) {
        const localGovernment = state.localGovernments.find(
          (lg) => lg.localGovernmentName === localGovernmentName
        );
        return localGovernment ? localGovernment.areas : [];
      }
    }
    return [];
  }

  // Get streets for an area
  getStreets(countryName, stateName, localGovernmentName, areaName) {
    const country = this.countries.find((c) => c.countryName === countryName);
    if (country) {
      const state = country.states.find((s) => s.stateName === stateName);
      if (state) {
        const localGovernment = state.localGovernments.find(
          (lg) => lg.localGovernmentName === localGovernmentName
        );
        if (localGovernment) {
          const area = localGovernment.areas.find(
            (a) => a.areaName === areaName
          );
          return area ? area.streets : [];
        }
      }
    }
    return [];
  }

  // Generate full address based on area name
  generateAddress(countryName, stateName, localGovernmentName, areaName) {
    const country = this.countries.find((c) => c.countryName === countryName);
    if (country) {
      const state = country.states.find((s) => s.stateName === stateName);
      if (state) {
        const localGovernment = state.localGovernments.find(
          (lg) => lg.localGovernmentName === localGovernmentName
        );
        if (localGovernment) {
          const area = localGovernment.areas.find(
            (a) => a.areaName === areaName
          );
          if (area) {
            return {
              country: country.countryName,
              state: state.stateName,
              localGovernment: localGovernment.localGovernmentName,
              area: area.areaName,
              streets: area.streets,
            };
          }
        }
      }
    }
    return null;
  }
}

// Export an instance of the Addressify class
export default new Addressify();

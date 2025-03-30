import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectPage = (state) => state.campers.page;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectItemsPerPage = (state) => state.campers.itemsPerPage;
export const selectFilters = (state) => state.filters;
export const selectCamperDetails = (state) => state.campers.currentCamper;

export const selectCamperFilter = createSelector(
  [selectCampers, selectNameFilter],
  (campers, filter) => {
    if (!campers || !filter) return campers;
    return campers.filter((camper) =>
      camper.name?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation =
        filters.location && camper.location
          ? camper.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())
          : true;
      const matchesForm =
        filters.form && camper.form
          ? camper.form.toLowerCase().includes(filters.form.toLowerCase())
          : true;
      const matchesEquipment =
        filters.equipment.length && camper.equipment
          ? filters.equipment.every((equipment) =>
              camper.equipment.includes(equipment)
            )
          : true;

      return matchesLocation && matchesForm && matchesEquipment;
    });
  }
);

export const selectCamperById = (state, id) =>
  state.campers.items.find(
    (camper) => camper.id === id || camper.id === Number(id)
  ) || null;

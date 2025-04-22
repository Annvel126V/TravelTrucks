const buildQueryParams = (filters, page = 1) => {
  const params = {
    page,
    limit: 4,
  };

  if (filters.location) {
    params.location = filters.location;
  }

  if (filters.form) {
    params.form = filters.form;
  }

  if (filters.transmission) {
    params.transmission = filters.transmission;
  }

  filters.equipment.forEach((eq) => {
    params[eq] = true;
  });
  return params;
};

export default buildQueryParams;

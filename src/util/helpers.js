const getTextForTitle = (datum) => {
  if (!datum.person || !datum.person.totalReports) {
    return "";
  }

  const { totalReports } = datum.person;
  const pluralEnding = totalReports > 1 ? "s" : "";

  return `${totalReports} report${pluralEnding}`;
};

const departmentAbbrMap = {
  Marketing: "mktg",
  Operations: "ops",
  Growth: "gwth",
  Branding: "brand",
  Assurance: "fin",
  Data: "data",
  Design: "design",
  Communications: "comms",
  Product: "prod",
  People: "people",
  Sales: "sales",
};

const getTextForDepartment = (datum) => {
  if (!datum.person || !datum.person.department) {
    return "";
  }

  const { department } = datum.person;

  if (departmentAbbrMap[department]) {
    return departmentAbbrMap[department].toUpperCase();
  }

  return department.substring(0, 3).toUpperCase();
};

const getCursorForNode = (datum) => {
  return datum.children || datum._children || datum.hasChild
    ? "pointer"
    : "default";
};

export { getTextForTitle, getTextForDepartment, getCursorForNode };

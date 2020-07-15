export interface PageInformation {
  count: number; // count of records returned
  offset: number; // starting position
  limit: number; // total records to return
  total: number; // count of total records
}

export interface PaginationProperties {
  pageInformation: PageInformation;
}

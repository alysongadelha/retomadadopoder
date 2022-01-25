import { SafeResourceUrl } from '@angular/platform-browser';
// IM NOT SURE ABOUT THE SafeResourceUrl IN THIS CALLS
export interface ResponsePageable {
  pageNumber: number;
  pageSize: number;
  firstPage: SafeResourceUrl | string;
  lastPage: SafeResourceUrl | string;
  totalPages: number;
  totalRecords: number;
  nexPage?: SafeResourceUrl | string;
  previousPage?: SafeResourceUrl | string;
  data: any[];
}

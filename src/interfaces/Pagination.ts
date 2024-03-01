export interface Pagination {
    page: number,
    size: number,
    totalhits: number,
    totalpages: number,
    nextpage?: string,
    previouspage?: string,
}
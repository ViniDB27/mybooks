import { googleBookApi } from "./googleBookApi.service";

export type ListBookItem = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
  };
};

export type ListBookResponse = {
  kind: string;
  totalItems: number;
  items: ListBookItem[];
};

export const getListBooks = (name: string) =>
  googleBookApi.get<ListBookResponse>(`/books/v1/volumes?q=${name}`);

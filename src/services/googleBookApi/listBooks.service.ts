import { googleBookApi } from "./googleBookApi.service";
import { stringify } from 'querystring'

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

export const getListBooks = (name: string, startIndex: number = 0) => {

  const params = stringify({
    q: name,
    startIndex,
    key: "AIzaSyBQVEWc916-FORdmraUG40iOl4BiFxbWAk",
  })


  return googleBookApi.get<ListBookResponse>(`/books/v1/volumes?${params}`);
}

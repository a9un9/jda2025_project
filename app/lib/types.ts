export type PageProps = {
  searchParams?: {
    query?: string;
    page?: string;
    [key: string]: string | undefined;
  };
};
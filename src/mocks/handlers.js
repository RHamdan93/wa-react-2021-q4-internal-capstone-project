import { rest } from "msw";
import productCategories from "../mocks/en-us/product-categories.json";
import products from "../mocks/en-us/products.json";

export const handlers = [
  rest.get(
    "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search",
    (req, res, ctx) => {
      const query = req.url.searchParams.getAll("q");

      let data = null;

      if (/document\.type,.+category/i.test(query)) {
        data = productCategories;
      } else if (/fulltext.+"(.*)"/i.test(query)) {
        let [, searchTerm] = query[1].match(/fulltext.+"(.*)"/);
        data = {
          ...products,
          results: products.results.filter((prod) =>
            new RegExp(searchTerm, "i").test(prod.data.name)
          ),
        };
      } else if (/at\(document\.id.+"(.*)"/i.test(query)) {
        let [, searchTerm] = query[0].match(/at\(document\.id.+"(.*)"/i);
        data = {
          ...products,
          results: products.results.filter((prod) => prod.id === searchTerm),
        };
      } else if (/document\.id/i.test(query)) {
        data = { ...products, results: [products.results[0]] };
      }

      return res(ctx.status(200), ctx.json(data));
    }
  ),
];

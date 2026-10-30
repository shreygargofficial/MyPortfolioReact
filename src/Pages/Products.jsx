import { useEffect, useState } from "react";
import { css } from "aphrodite";
import { Helmet } from "react-helmet";
import { ProductStyle } from "../Components/Personal/Products.style";
import Loader from "../Components/Shared/loader/Loader";
import { affiliateEndpoint } from "../Utils/links";

function Products() {
  const [loading, setLoading] = useState(false);
  const [affiliateData, setAfffiliateData] = useState([]);
  const [error, setError] = useState("");
  const fetchAffiliates = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${affiliateEndpoint}/api/getAffiliates`);
      const data = await res.json();
      setAfffiliateData(data);
    } catch (e) {
      if (e.response) {
        setError(e.response.data.message);
      } else setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAffiliates();
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta
          name="description"
          content="Browse and click on any of the products."
        />
      </Helmet>
      <section className={css(ProductStyle.row)}>
        {affiliateData.length &&
          affiliateData.map((ele) => {
            return (
              <article key={ele.affiliateId} className={css(ProductStyle.card)}>
                <div>
                  <img
                    src={`${affiliateEndpoint}/public/images/${ele.image}`}
                    className={css(ProductStyle.image)}
                  />
                </div>
                <div>
                  <h4>{ele.title}</h4>
                  <div className={css(ProductStyle.desc)}>
                    {ele.description}
                  </div>
                  <div>
                    <a href={ele.link}>Buy</a>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
}

export default Products;
